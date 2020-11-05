//
//  NXPBaseViewControllerViewController.h
//  Garen_ios
//
//  Created by 江朋朋 on 2017/12/28.
//  Copyright © 2017年 meile. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <WeexSDK/WeexSDK.h>
#import "WXSDKInstance.h"

@interface NXPBaseViewController : UIViewController<UIGestureRecognizerDelegate>
@property (nonatomic, strong) WXSDKInstance *instance;
@property (nonatomic, strong) UIView *weexView;
@property (nonatomic, strong) NSURL *sourceURL;

- (instancetype)initWithSourceURL:(NSURL *)sourceURL;
- (void)refreshWeex;
@end
