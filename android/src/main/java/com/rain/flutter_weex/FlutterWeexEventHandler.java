package com.rain.flutter_weex;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;

import io.flutter.plugin.common.EventChannel;

public class FlutterWeexEventHandler implements EventChannel.StreamHandler {

    private Context mContext;
    private BroadcastReceiver receiver;
    FlutterWeexEventHandler(Context context){
        mContext = context;
    }
    @Override
    public void onListen(Object arguments, EventChannel.EventSink events) {
        receiver = createChargingStateChangeReceiver(events);
        mContext.registerReceiver(receiver, new IntentFilter("nxp.WEEX_CALL_FLUTTER"));
    }

    @Override
    public void onCancel(Object arguments) {
        mContext.unregisterReceiver(receiver);
        receiver = null;
    }

    private BroadcastReceiver createChargingStateChangeReceiver(final EventChannel.EventSink events) {
        return new BroadcastReceiver() {
            public void onReceive(Context context, Intent intent) {
                String msg = intent.getStringExtra("weex_channel_message");
                if (msg != null){
                    events.success(msg);
                }
            }
        };
    }
}

