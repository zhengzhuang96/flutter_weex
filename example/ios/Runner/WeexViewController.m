//
//  WeexViewController.m
//  Runner
//
//  Created by 江朋朋 on 2020/10/26.
//

#import "WeexViewController.h"
#import "WeexSDK.h"
#import <sys/utsname.h>
@interface WeexViewController (){
    UILabel *lab;
    WXSDKInstance *_instance;
    NSDictionary *_dic;
}
@property (nonatomic, assign) CGFloat weexHeight;

@end

@implementation WeexViewController

- (instancetype)initWithDic:(NSDictionary *)dic
{
    self = [super init];
    if (self) {
        _dic = dic;
    }
    return self;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];
    _instance = [[WXSDKInstance alloc] init];
    _instance.viewController = self;
    _weexHeight = self.view.frame.size.height;

    CGFloat safeHeight = 20;
    CGFloat safebottom = 0;
    struct utsname systemInfo;
    uname(&systemInfo);
    NSString*platform = [NSString stringWithCString: systemInfo.machine encoding:NSASCIIStringEncoding];
    if([platform isEqualToString:@"iPhone10,3"]||[platform isEqualToString:@"iPhone10,6"]||[platform isEqualToString:@"iPhone11,2"]||[platform isEqualToString:@"iPhone11,4"]||[platform isEqualToString:@"iPhone11,6"]||[platform isEqualToString:@"iPhone11,8"]) {
        safeHeight = 44;
        safebottom = 24;
    }
    
    
    CGFloat width = self.view.frame.size.width;
    [_instance destroyInstance];
    _instance = [[WXSDKInstance alloc] init];
    _instance.viewController = self;
    _instance.frame = CGRectMake(self.view.frame.size.width-width, safeHeight, width, _weexHeight-safeHeight-safebottom);
    
    _instance.frame = self.view.frame;
    __weak typeof(self) weakSelf = self;
    _instance.onCreate = ^(UIView *view) {
        [weakSelf.weexView removeFromSuperview];
        weakSelf.weexView = view;
        [weakSelf.view addSubview:view];
    };
    _instance.onFailed = ^(NSError *error) {
        //process failure, you could open an h5 web page instead or just show the error.
    };
    _instance.renderFinish = ^ (UIView *view) {
        //process renderFinish
    };
    NSURL *url = [NSURL URLWithString:@"http://192.168.60.199:8080/App.js"];
    [_instance renderWithURL:url options:nil data:nil];
    
    //    NSString *path = [[NSBundle mainBundle] pathForResource:@"user" ofType:@"js"];
    //    path = [NSString stringWithFormat:@"file://%@",path];
    //    NSURL *url = [NSURL URLWithString:path];
    //    [_instance renderWithURL:url options:nil data:nil];
}

-(void)dealloc{
    [_instance destroyInstance];
}
- (void)viewDidLayoutSubviews
{
    _weexHeight = self.view.frame.size.height;
}
@end
