//
//  VueToIOSModule.m
//  flutter_weex
//
//  Created by 江朋朋 on 2020/10/16.
//

#import "VueToIOSModule.h"
#import "FlutterChannel.h"
@implementation VueToIOSModule
@synthesize weexInstance;
@synthesize callback;
WX_EXPORT_METHOD(@selector(invoke:callBack:))

- (void)invoke:(NSDictionary *)params callBack:(WXModuleCallback)callBack {
    NSLog(@"weex-to-ios01 %@",params);
    [[FlutterChannel sharedManager].channel invokeMethod:params[@"method"] arguments:params[@"arg"] result:^(id  _Nullable result) {
        NSLog(@"flutter-to-ios%@",result);
        callBack(@{@"code": @"0000", @"data": result, @"msg": @"OK"});
    }];
    
}


@end
