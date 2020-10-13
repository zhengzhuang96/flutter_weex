import 'package:flutter/cupertino.dart';
import 'package:flutter/services.dart';

class WeexView extends StatefulWidget {
  @override
  _WeexViewState createState() => _WeexViewState();
}

class _WeexViewState extends State<WeexView> {
  @override
  Widget build(BuildContext context) {
    return AndroidView(
      viewType: "weex_view",
      creationParamsCodec: const StandardMessageCodec(),
    );
  }
}
