package com.alibaba.weex.common;

import android.content.Intent;
import android.text.TextUtils;
import android.util.Log;

import androidx.annotation.Nullable;

import com.alibaba.fastjson.JSONObject;
import com.rain.flutter_weex.FlutterWeexChannel;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;

import io.flutter.plugin.common.MethodChannel;

public class WeexFlutter extends WXModule {

    @JSMethod(uiThread = true)
    public void invoke(JSONObject options, JSCallback success, JSCallback failure) {
        final JSONObject result = new JSONObject();
        final JSCallback callback = success;
        if (options != null) {
            String method = options.getString("method");
            String arg = options.getString("arg");
            if (!TextUtils.isEmpty(method)){
                FlutterWeexChannel.getInstance().methodChannel.invokeMethod(method, arg, new MethodChannel.Result() {
                    @Override
                    public void success(@Nullable Object ret) {
                        result.put("code", "0000");
                        if(ret != null){
                            result.put("data",ret.toString());
                        }
                        result.put("msg", "ok");
                        callback.invoke(result);
                    }

                    @Override
                    public void error(String errorCode, @Nullable String errorMessage, @Nullable Object errorDetails) {
                        result.put("code", "9999");
                        result.put("data",errorDetails.toString());
                        result.put("msg", errorMessage);
                        callback.invoke(result);
                    }

                    @Override
                    public void notImplemented() {
                        Log.d("TAG", "!!!!!!!!!!!: ");
                    }
                });
            }

        }
    }
    @JSMethod(uiThread = true)
    public void call(JSONObject options,JSCallback success, JSCallback failure)  {
        JSONObject result = new JSONObject();
        JSCallback callback = success;

        if (options != null) {
            Intent intent = new Intent();
            intent.setAction("nxp.WEEX_CALL_FLUTTER");
            intent.putExtra("weex_channel_message",options.toJSONString());
            mWXSDKInstance.getContext().sendBroadcast(intent);
            result.put("code", "0000");
            result.put("msg", "ok");
        }else{
            callback = failure;
            result.put("code", "9999");
            result.put("msg", "The  parameter is empty.");
        }
        if(callback != null){
            callback.invoke(result);
        }
    }
}
