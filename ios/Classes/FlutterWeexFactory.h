//
//  FlutterWeexFactory.h
//  flutter_weex
//
//  Created by 江朋朋 on 2020/10/14.
//

#import <Foundation/Foundation.h>
#import <Flutter/Flutter.h>

NS_ASSUME_NONNULL_BEGIN

@interface FlutterWeexFactory : NSObject<FlutterPlatformViewFactory>
- (instancetype)initWithMessager:(NSObject<FlutterBinaryMessenger>*)messager;
@end

NS_ASSUME_NONNULL_END
