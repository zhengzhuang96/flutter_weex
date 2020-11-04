//
//  FlutterChannel.h
//  flutter_weex
//
//  Created by 江朋朋 on 2020/10/17.
//

#import <Foundation/Foundation.h>
#import <Flutter/Flutter.h>
NS_ASSUME_NONNULL_BEGIN

@interface FlutterChannel : NSObject
@property(nonatomic,strong)FlutterMethodChannel *channel;
+(FlutterChannel *)sharedManager;
-(void)selfChannel:(FlutterMethodChannel * _Nonnull)channel;
@end

NS_ASSUME_NONNULL_END
