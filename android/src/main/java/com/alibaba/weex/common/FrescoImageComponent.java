package com.alibaba.weex.common;

import android.content.Context;
import android.widget.ImageView;

import androidx.annotation.NonNull;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.ui.action.BasicComponentData;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXImage;
import com.taobao.weex.ui.component.WXVContainer;

public class FrescoImageComponent extends WXImage {

    public FrescoImageComponent(WXSDKInstance instance, WXVContainer parent, BasicComponentData basicComponentData) {
        super(instance, parent,basicComponentData);
    }


    @Override
    protected ImageView initComponentHostView(@NonNull Context context) {
        FrescoImageView view = new FrescoImageView(context);
        view.setScaleType(ImageView.ScaleType.FIT_XY);

        return view;
    }
}