//
//  FlutterWeexController.h
//  flutter_weex
//
//  Created by 江朋朋 on 2020/10/14.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface FlutterWeexController : UIViewController
@property (nonatomic, strong) UIView *weexView;
- (instancetype)initWithDic:(NSDictionary *)dic;
@end

NS_ASSUME_NONNULL_END
