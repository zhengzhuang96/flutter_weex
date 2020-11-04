//package com.alibaba.weex.common;
//import androidx.annotation.NonNull;
//import androidx.annotation.Nullable;
//
//import com.taobao.weex.adapter.DefaultWXHttpAdapter;
//import java.io.IOException;
//import java.io.InputStream;
//import java.net.HttpURLConnection;
//
///**
// * Created by moxun on 16/12/29.
// */
//
//public class InterceptWXHttpAdapter extends DefaultWXHttpAdapter {
//
//    @NonNull
//    @Override
//    public IEventReporterDelegate getEventReporterDelegate() {
//        return new IEventReporterDelegate() {
//
//            WeexURLConnectionManager manager = new WeexURLConnectionManager(null);
//
//            @Override
//            public void preConnect(HttpURLConnection connection, @Nullable String body) {
//                SimpleRequestEntity requestEntity = null;
//                if (body != null) {
//                    requestEntity = new ByteArrayRequestEntity(body.getBytes());
//                }
//
//                try {
//                    manager.preConnect(connection, requestEntity);
//                } catch (Throwable throwable) {
//                    manager.httpExchangeFailed(new IOException("Exception on preConnect", throwable));
//                }
//            }
//
//            @Override
//            public void postConnect() {
//                try {
//                    manager.postConnect();
//                } catch (IOException e) {
//                    e.printStackTrace();
//                }
//            }
//
//            @Override
//            public InputStream interpretResponseStream(@Nullable InputStream inputStream) {
//                return manager.interpretResponseStream(inputStream);
//            }
//
//            @Override
//            public void httpExchangeFailed(IOException e) {
//                manager.httpExchangeFailed(e);
//            }
//        };
//    }
//}
