//
//  NXPNavigationDefaultImpl.m
//  Garen_ios
//
//  Created by 江朋朋 on 2017/12/28.
//  Copyright © 2017年 meile. All rights reserved.
//

#import "NXPNavigationDefaultImpl.h"
#import "NXPBaseViewController.h"
#import "WXSDKManager.h"
#import "WXComponent.h"
#import "WXImgLoaderProtocol.h"
#import "WXHandlerFactory.h"
#import "WXConvert.h"
#import "NXPRootViewController.h"
#import "WXViewController.h"


@implementation NXPNavigationDefaultImpl
- (void)pushViewControllerWithParam:(NSDictionary *)param completion:(WXNavigationResultBlock)block
                      withContainer:(UIViewController *)container
{
    if (0 == [param count] || !param[@"url"] || !container) {
        [self callback:block code:MSG_PARAM_ERR data:nil];
        return;
    }
    
    BOOL animated = YES;
    NSString *obj = [[param objectForKey:@"animated"] lowercaseString];
    if (obj && [obj isEqualToString:@"false"]) {
        animated = NO;
    }
    //[param[@"url"] containsString:@"modules/user/login.js"]||
    NSString *url = param[@"url"];
    if ([url containsString:@"/App.js"]) {
        NXPBaseViewController *vc = [[NXPBaseViewController alloc]initWithSourceURL:[NSURL URLWithString:url]];
        [[UIApplication sharedApplication] delegate].window.rootViewController = [[NXPRootViewController alloc] initWithRootViewController: vc];
    }else{
        NXPBaseViewController *vc = [[NXPBaseViewController alloc]initWithSourceURL:[NSURL URLWithString:url]];
        vc.hidesBottomBarWhenPushed = YES;
        [container.navigationController pushViewController:vc animated:animated];
    }
    
    [self callback:block code:MSG_SUCCESS data:nil];
}

- (void)popViewControllerWithParam:(NSDictionary *)param completion:(WXNavigationResultBlock)block
                     withContainer:(UIViewController *)container
{
    BOOL animated = YES;
    id obj = [param objectForKey:@"animated"];
    if (obj) {
        animated = [WXConvert BOOL:obj];
    }
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        WXSDKInstance *Instance = ((NXPBaseViewController *)container).instance;
        for (int i = 0; i<Instance.instanceId.intValue; i++) {
            WXSDKInstance *newInstance = [WXSDKManager instanceForID:[NSString stringWithFormat:@"%d",i]];
            if (newInstance) {
                [newInstance fireGlobalEvent:@"onRestart" params:@{@"key":@"value"}];
            }
        }
    });
    NSString *popUrl = param[@"url"];
    if (popUrl&&popUrl.length>0) {
        NSArray *conArr = [container.navigationController viewControllers];
        for (UIViewController *con in conArr) {
            if ([con isKindOfClass:[NXPBaseViewController class]]) {
                if ([((NXPBaseViewController *)con).sourceURL.absoluteString isEqualToString:param[@"url"]]) {
                    [container.navigationController popToViewController:con animated:YES];
                }
            }else if ([con isKindOfClass:[WXViewController class]]){
                if ([((WXViewController *)con).url.absoluteString isEqualToString:param[@"url"]]) {
                    [container.navigationController popToViewController:con animated:YES];
                }
            }
        }
        return;
    }
    
    NSLog(@"%@",[[WXSDKManager bridgeMgr] getInstanceIdStack]);
    [container.navigationController popViewControllerAnimated:animated];
    [self callback:block code:MSG_SUCCESS data:nil];
}

- (void)callback:(WXNavigationResultBlock)block code:(NSString *)code data:(NSDictionary *)reposonData
{
    if (block) {
        block(code, reposonData);
    }
}

@end

