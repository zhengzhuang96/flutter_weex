package com.rain.flutter_weex;

import android.app.Application;

import androidx.annotation.NonNull;

import com.alibaba.weex.common.FrescoImageAdapter;
import com.alibaba.weex.common.FrescoImageComponent;
//import com.alibaba.weex.common.InterceptWXHttpAdapter;
//import com.alibaba.weex.common.InterceptWXHttpAdapter;
import com.alibaba.weex.common.WeexFlutter;
import com.facebook.drawee.backends.pipeline.Fresco;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;

import java.util.Map;

import io.flutter.embedding.engine.plugins.FlutterPlugin;
import io.flutter.plugin.common.BinaryMessenger;
import io.flutter.plugin.common.EventChannel;
import io.flutter.plugin.common.MethodCall;
import io.flutter.plugin.common.MethodChannel;
import io.flutter.plugin.common.PluginRegistry.Registrar;
import io.flutter.plugin.platform.PlatformViewRegistry;

/** FlutterWeexPlugin */
public class FlutterWeexPlugin implements FlutterPlugin{
  /// The MethodChannel that will the communication between Flutter and native Android
  ///
  /// This local reference serves to register the plugin with the Flutter Engine and unregister it
  /// when the Flutter Engine is detached from the Activity
  private BinaryMessenger messenger;
  private PlatformViewRegistry platformViewRegistry;
  private  MethodChannel c;

  @Override
  public void onAttachedToEngine(@NonNull FlutterPluginBinding flutterPluginBinding) {

    Application app = (Application) flutterPluginBinding.getApplicationContext();
    messenger = flutterPluginBinding.getBinaryMessenger();
    platformViewRegistry = flutterPluginBinding.getPlatformViewRegistry();
    platformViewRegistry.registerViewFactory("weex_view", new WeexViewFactory(messenger));

    FlutterWeexChannel channel = FlutterWeexChannel.getInstance();
    //methodChannel
    channel.methodChannel = new MethodChannel(messenger, "flutter_weex_method_channel");
    channel.methodChannel.setMethodCallHandler(new FlutterWeexMethodChannel(app));

    //EventChannel
//    channel.eventChannel = new EventChannel(messenger, "flutter_weex_event_channel");
//    channel.eventChannel.setStreamHandler(new FlutterWeexEventHandler(app));


    // 初始化Weex
    InitConfig config = new InitConfig.Builder()
            .setImgAdapter(new FrescoImageAdapter())
//            //网络库接口
//            .setHttpAdapter(new InterceptWXHttpAdapter())
            .build();
    try {
      WXSDKEngine.registerModule("weex_flutter", WeexFlutter.class);
      WXSDKEngine.registerComponent("image", FrescoImageComponent.class);

    } catch (WXException e) {
      e.printStackTrace();
    }
    WXSDKEngine.initialize(app,config);
    Fresco.initialize(flutterPluginBinding.getApplicationContext());


  }

  public static void registerWith(Registrar registrar) {
  }


  @Override
  public void onDetachedFromEngine(@NonNull FlutterPluginBinding binding) {
  }

}
