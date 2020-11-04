//
//  FlutterWeex.h
//  flutter_weex
//
//  Created by 江朋朋 on 2020/10/14.
//

#import <Foundation/Foundation.h>
#import <Flutter/Flutter.h>
NS_ASSUME_NONNULL_BEGIN

@interface FlutterWeex : NSObject <FlutterPlatformView>
- (id)initWithFrame:(CGRect)frame viewId:(NSString *)viewId args:(id)args binaryMessager:(NSObject<FlutterBinaryMessenger>*)messager;
@end

NS_ASSUME_NONNULL_END
