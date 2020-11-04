#import "AppDelegate.h"
#import "GeneratedPluginRegistrant.h"
#import "WeexViewController.h"
#import "WeexSDKManager.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application
didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [GeneratedPluginRegistrant registerWithRegistry:self];
    // Override point for customization after application launch.
    
//    [WeexSDKManager setup];
//    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
//    [self.window makeKeyAndVisible];
//    UINavigationController *nav = [[UINavigationController alloc]initWithRootViewController:[WeexViewController new]];
//    self.window.rootViewController = nav;
    
    return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

@end
