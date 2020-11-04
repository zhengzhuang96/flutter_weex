//
//  WeexSDKManager.m
//  WeexDemo
//
//  Created by yangshengtao on 16/11/14.
//  Copyright © 2016年 taobao. All rights reserved.
//

#import "WeexSDKManager.h"
#import <WeexSDK/WeexSDK.h>
#import "WXViewController.h"
#import "WXImgLoaderDefaultImpl.h"
#import "NXPNavigationDefaultImpl.h"
#import "NXPRootViewController.h"


@implementation WeexSDKManager

+ (void)setup;
{
    [self initWeexSDK]; //初始化WeexSDK
}
+ (void)didReceiveRemoteNot{
    
}
+ (void)initWeexSDK
{
    [WXAppConfiguration setAppGroup:@"Melenet"];
    [WXAppConfiguration setAppName:@"FlutterWeex"];
    [WXAppConfiguration setAppVersion:@"1.0.0"];
    [WXAppConfiguration setExternalUserAgent:@"ExternalUA"];
    
    [WXSDKEngine initSDKEnvironment];
    
    [WXSDKEngine registerHandler:[WXImgLoaderDefaultImpl new] withProtocol:@protocol(WXImgLoaderProtocol)];
    [WXSDKEngine registerHandler:[NXPNavigationDefaultImpl new] withProtocol:@protocol(WXNavigationProtocol)];
    
#ifdef DEBUG
    [WXLog setLogLevel:WXLogLevelLog];
#endif
}

+ (void)loadCustomContainWithScannerWithUrl:(NSURL *)url
{
    UIViewController *main = [[WXViewController alloc] init];
    ((WXViewController *)main).url = url;
    //    通过[UIApplication sharedApplication]可以获得这个单例对象
    //    一个iOS程序启动后创建的第一个对象就是UIApplication对象，且只有一个
    [[UIApplication sharedApplication] delegate].window.rootViewController = [[NXPRootViewController alloc] initWithRootViewController: main];
    
}

@end
