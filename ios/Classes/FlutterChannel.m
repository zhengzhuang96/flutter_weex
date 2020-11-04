//
//  FlutterChannel.m
//  flutter_weex
//
//  Created by 江朋朋 on 2020/10/17.
//

#import "FlutterChannel.h"

@implementation FlutterChannel
@synthesize channel;

+(instancetype)sharedManager
{
    static FlutterChannel* manager=nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        if (manager == nil) {
             manager=[[FlutterChannel alloc]init];
        }
    });
    return manager;
}
- (void)selfChannel:(FlutterMethodChannel *)channel{
    self.channel = channel;
}
@end
