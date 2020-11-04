#import "FlutterWeexPlugin.h"
#import "FlutterWeexFactory.h"
#import "WeexSDKManager.h"
#import <WeexSDK/WeexSDK.h>
#import "VueToIOSModule.h"
#import "FlutterChannel.h"

@implementation FlutterWeexPlugin
+ (void)registerWithRegistrar:(NSObject<FlutterPluginRegistrar>*)registrar {
    FlutterMethodChannel* channel = [FlutterMethodChannel
                                     methodChannelWithName:@"flutter_weex_method_channel"
                                     binaryMessenger:[registrar messenger]];
    FlutterWeexPlugin* instance = [[FlutterWeexPlugin alloc] init];
    
    //创建Flutter/IOS通信单例
    [[FlutterChannel sharedManager] selfChannel:channel];
    
    [registrar addMethodCallDelegate:instance channel:channel];
    
    //初始化weex SDK环境
    [WeexSDKManager setup];
    
    [registrar registerViewFactory:[[FlutterWeexFactory alloc] initWithMessager:registrar.messenger]withId:@"weex_view"];
    
    [WXSDKEngine registerModule:@"weex_flutter" withClass:[VueToIOSModule class]];
    
    
}

- (void)handleMethodCall:(FlutterMethodCall*)call result:(FlutterResult)result {
    if ([@"getPlatformVersion" isEqualToString:call.method]) {
        result([@"iOS " stringByAppendingString:[[UIDevice currentDevice] systemVersion]]);
    } else {
        result(FlutterMethodNotImplemented);
    }
}

@end
