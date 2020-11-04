//
//  VueToIOSModule.h
//  flutter_weex
//
//  Created by 江朋朋 on 2020/10/16.
//

#import <Foundation/Foundation.h>
#import <WeexSDK/WeexSDK.h>

NS_ASSUME_NONNULL_BEGIN

@protocol VueToIOSProtocol <WXModuleProtocol>
@property(nonatomic,assign)WXModuleCallback callback;
-(void)invoke:(NSDictionary *)params callBack:(WXModuleCallback)callBack;
@end

@interface VueToIOSModule : NSObject<VueToIOSProtocol>

@end

NS_ASSUME_NONNULL_END
