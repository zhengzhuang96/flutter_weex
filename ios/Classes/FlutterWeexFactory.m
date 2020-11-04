//
//  FlutterWeexFactory.m
//  flutter_weex
//
//  Created by 江朋朋 on 2020/10/14.
//

#import "FlutterWeexFactory.h"
#import "FlutterWeex.h"
@implementation FlutterWeexFactory{
    NSObject<FlutterBinaryMessenger>*_messager;
}
- (instancetype)initWithMessager:(NSObject<FlutterBinaryMessenger>*)messager
{
    self = [super init];
    if (self) {
        _messager = messager;
    }
    return self;
}
- (NSObject <FlutterPlatformView> *)createWithFrame:(CGRect)frame viewIdentifier:(int64_t)viewId arguments:(id _Nullable)args
{
    FlutterWeex *FW = [[FlutterWeex alloc] initWithFrame:frame viewId:[NSString stringWithFormat:@"%lld",viewId] args:args binaryMessager:_messager];
    return FW;
}
- (NSObject<FlutterMessageCodec>*)createArgsCodec{
    return [FlutterStandardMessageCodec sharedInstance];
}
@end
