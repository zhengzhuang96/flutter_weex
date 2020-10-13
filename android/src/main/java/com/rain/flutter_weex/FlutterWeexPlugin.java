package com.rain.flutter_weex;

import android.app.Application;

import androidx.annotation.NonNull;

import com.alibaba.weex.common.FrescoImageAdapter;
import com.alibaba.weex.common.FrescoImageComponent;
import com.facebook.drawee.backends.pipeline.Fresco;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;

import io.flutter.embedding.engine.plugins.FlutterPlugin;
import io.flutter.plugin.common.BinaryMessenger;
import io.flutter.plugin.common.MethodCall;
import io.flutter.plugin.common.MethodChannel.MethodCallHandler;
import io.flutter.plugin.common.MethodChannel.Result;
import io.flutter.plugin.common.PluginRegistry.Registrar;
import io.flutter.plugin.platform.PlatformViewRegistry;

/** FlutterWeexPlugin */
public class FlutterWeexPlugin implements FlutterPlugin, MethodCallHandler {
  /// The MethodChannel that will the communication between Flutter and native Android
  ///
  /// This local reference serves to register the plugin with the Flutter Engine and unregister it
  /// when the Flutter Engine is detached from the Activity
  private BinaryMessenger messenger;
  private PlatformViewRegistry platformViewRegistry;

  @Override
  public void onAttachedToEngine(@NonNull FlutterPluginBinding flutterPluginBinding) {

    Application app = (Application) flutterPluginBinding.getApplicationContext();
    InitConfig config = new InitConfig.Builder()
            .setImgAdapter(new FrescoImageAdapter())
//            //网络库接口
//            .setHttpAdapter(new InterceptWXHttpAdapter())
            .build();
    try {

      WXSDKEngine.registerComponent("image", FrescoImageComponent.class);

    } catch (WXException e) {
      e.printStackTrace();
    }
    WXSDKEngine.initialize(app,config);

    Fresco.initialize(flutterPluginBinding.getApplicationContext());
    this.messenger = flutterPluginBinding.getBinaryMessenger();
    this.platformViewRegistry = flutterPluginBinding.getPlatformViewRegistry();
    platformViewRegistry.registerViewFactory("weex_view", new WeexViewFactory(messenger));
  }

  // This static function is optional and equivalent to onAttachedToEngine. It supports the old
  // pre-Flutter-1.12 Android projects. You are encouraged to continue supporting
  // plugin registration via this function while apps migrate to use the new Android APIs
  // post-flutter-1.12 via https://flutter.dev/go/android-project-migration.
  //
  // It is encouraged to share logic between onAttachedToEngine and registerWith to keep
  // them functionally equivalent. Only one of onAttachedToEngine or registerWith will be called
  // depending on the user's project. onAttachedToEngine or registerWith must both be defined
  // in the same class.
  public static void registerWith(Registrar registrar) {
  }

  @Override
  public void onMethodCall(@NonNull MethodCall call, @NonNull Result result) {

  }

  @Override
  public void onDetachedFromEngine(@NonNull FlutterPluginBinding binding) {
  }
}
