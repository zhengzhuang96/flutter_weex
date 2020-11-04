package com.rain.flutter_weex;

import android.content.Context;

import androidx.annotation.NonNull;

import io.flutter.plugin.common.MethodCall;
import io.flutter.plugin.common.MethodChannel;

public class FlutterWeexMethodChannel implements MethodChannel.MethodCallHandler {

    private Context mContext;

    FlutterWeexMethodChannel(Context context){
        mContext = context;
    }

    @Override
    public void onMethodCall(@NonNull MethodCall call, @NonNull MethodChannel.Result result) {

    }
}
