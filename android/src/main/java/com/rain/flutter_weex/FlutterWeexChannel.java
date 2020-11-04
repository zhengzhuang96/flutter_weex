package com.rain.flutter_weex;


import io.flutter.plugin.common.EventChannel;
import io.flutter.plugin.common.MethodChannel;

public class FlutterWeexChannel {

    public MethodChannel methodChannel;
    public EventChannel eventChannel;
    private static volatile FlutterWeexChannel instance = null;

    private FlutterWeexChannel(){
        instance = this;
    }

    public static FlutterWeexChannel getInstance (){
        if (instance == null) {
            synchronized (FlutterWeexChannel.class){
                if(instance ==null){
                    instance = new FlutterWeexChannel();
                }
            }
        }
        return instance;
    }


}
