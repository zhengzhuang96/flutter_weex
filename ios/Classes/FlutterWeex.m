//
//  FlutterWeex.m
//  flutter_weex
//
//  Created by 江朋朋 on 2020/10/14.
//

#import "FlutterWeex.h"
#import "FlutterWeexController.h"
#import "NXPRootViewController.h"
#import "NXPBaseViewController.h"

@implementation FlutterWeex
{
    CGRect _frame;
    NSString* _viewId;
    id _args;
    UILabel *_subLabel;
    FlutterMethodChannel* _channel;
//    FlutterWeexController *_weex;
    NXPBaseViewController *_weex;
    NXPRootViewController *nav;
    
    BOOL _islight;
    BOOL _ismirror;
    float _beauty;
    float _whiten;
    float _ruddiness;
}

- (id)initWithFrame:(CGRect)frame viewId:(NSString *)viewId args:(id)args binaryMessager:(NSObject<FlutterBinaryMessenger> *)messager
{
    if (self = [super init])
    {
        _frame = frame;
        _viewId = viewId;
        _args = args;
        _islight = NO;
        _beauty = 0;
        _whiten = 0;
        _ruddiness = 0;
    }

    FlutterMethodChannel* _channel = [FlutterMethodChannel methodChannelWithName:[NSString stringWithFormat:@"rtmptencentvideolive_%@",viewId] binaryMessenger:messager];
    
    __weak typeof (self)WealSelf = self;
    [_channel setMethodCallHandler:^(FlutterMethodCall * _Nonnull call, FlutterResult  _Nonnull result) {
        [WealSelf onMethodCall:call result:result];
    }];
//    _weex = [[FlutterWeexController alloc]initWithDic:(NSDictionary *)args];
    _weex = [[NXPBaseViewController alloc]initWithSourceURL:[NSURL URLWithString:((NSDictionary *)args)[@"weexURL"]]];
    nav = [[NXPRootViewController alloc] initWithRootViewController: _weex];
    
    return self;
}

-(void)onMethodCall:(FlutterMethodCall*)call result:(FlutterResult)result{
    
}

- (UIView *)view
{
    return nav.view;
}

@end
