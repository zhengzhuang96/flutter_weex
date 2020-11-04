/*
 * @Author: your name
 * @Date: 2020-10-13 17:06:05
 * @LastEditTime: 2020-11-04 14:08:57
 * @LastEditors: zhengzhuang
 * @Description: In User Settings Edit
 * @FilePath: /flutter_weex/lib/weex_view.dart
 */
import 'dart:io';

import 'package:flutter/cupertino.dart';
import 'package:flutter/services.dart';
import 'dart:ui';

class WeexView extends StatefulWidget {
  @override
  _WeexViewState createState() => _WeexViewState();
}

class _WeexViewState extends State<WeexView> {
  static const MethodChannel _channel =
      const MethodChannel('flutter_weex_method_channel');
  void initState() {
    super.initState();
    _channel.setMethodCallHandler(_handleMethod);
  }

  Future _handleMethod(MethodCall call) async {
    switch (call.method) {
      case "suibian":
        print('ios-to-flutter01 ${call.arguments.toString()}');
        return '456';
      default:
        return 'unfind method';
    }
  }
  // static Future<String> get platformVersion async {
  //   final String version = await _channel.invokeMethod('getPlatformVersion');

  //   return version;
  // }

  @override
  Widget build(BuildContext context) {
    if (Platform.isIOS) {
      return Container(
        child: UiKitView(
          viewType: 'weex_view',
          creationParams: <String, dynamic>{"weexURL": 'http://192.168.60.103:8080/dist/App.js'},
          creationParamsCodec: const StandardMessageCodec(),
        ),
      );
    } else if (Platform.isAndroid) {
      return AndroidView(
        viewType: "weex_view",
        creationParamsCodec: const StandardMessageCodec(),
      );
    }
  }
}
