package com.rain.flutter_weex;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;
import java.util.Map;
import io.flutter.plugin.common.BinaryMessenger;
import io.flutter.plugin.platform.PlatformView;

public class WeexView implements PlatformView, IWXRenderListener{

    private WXSDKInstance mWXSDKInstance;
    private ViewGroup mContainer;
    WeexView(Context context, BinaryMessenger messenger, int id, Map<String, Object> params) {
        mContainer = (ViewGroup) LayoutInflater.from(context).inflate(R.layout.view_layout,null);
        mWXSDKInstance = new WXSDKInstance(context);
        mWXSDKInstance.registerRenderListener(this);

        String pageName = "WXSample";
//          String bundleUrl = "http://editor.weex.io/compiled/e5b1a64a766fc53de33a14e3034b75e8/bundle.weex.js";
        String bundleUrl = "http://192.168.60.103:8080/dist/App.js";
        mWXSDKInstance.renderByUrl(pageName, bundleUrl, null, null, WXRenderStrategy.APPEND_ASYNC);
    }

    @Override
    public View getView() {
        return mContainer;
    }

    @Override
    public void dispose() {
        mContainer.removeAllViews();
    }

    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {
        mContainer.removeAllViews();
        mContainer.addView(view);
    }

    @Override
    public void onRenderSuccess(WXSDKInstance instance, int width, int height) {

    }

    @Override
    public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {

    }

    @Override
    public void onException(WXSDKInstance instance, String errCode, String msg) {

    }


}
