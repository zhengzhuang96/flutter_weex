/*
 * @Author: your name
 * @Date: 2020-10-13 17:06:06
 * @LastEditTime: 2020-10-26 16:36:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /flutter_weex/example/lib/main.dart
 */
import 'package:flutter/material.dart';
import 'dart:async';
import 'package:flutter_weex/weex_view.dart';

import 'package:flutter/services.dart';
import 'package:flutter_weex/flutter_weex.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  String _platformVersion = 'Unknown';

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Container(
          child: WeexView()
        ),
      ),
    );
  }
}
