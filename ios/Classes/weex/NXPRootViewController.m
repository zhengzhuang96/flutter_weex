//
//  NXPRootViewController.m
//  Garen_ios
//
//  Created by 江朋朋 on 2017/12/29.
//  Copyright © 2017年 meile. All rights reserved.
//

#import "NXPRootViewController.h"
#import "NXPBaseViewController.h"

@interface NXPRootViewController ()

@end

@implementation NXPRootViewController

#pragma mark- UIGestureRecognizerDelegate

- (BOOL)gestureRecognizerShouldBegin:(UIGestureRecognizer *)gestureRecognizer
{
    UIViewController *con = self.visibleViewController;
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        WXSDKInstance *Instance = ((NXPBaseViewController *)con).instance;
        for (int i = 0; i<Instance.instanceId.intValue; i++) {
            WXSDKInstance *newInstance = [WXSDKManager instanceForID:[NSString stringWithFormat:@"%d",i]];
            if (newInstance) {
                [newInstance fireGlobalEvent:@"onRestart" params:@{@"key":@"value"}];
            }
        }
    });
    if ([self.viewControllers count] == 1) {
        return NO;
    }
    return YES;
}

@end
