import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { WebView } from 'react-native-webview';

export default class WebTest extends Component {
  render() {
    return (
      <WebView
        source={{ uri: "http://192.168.56.1:8080/guia9/example.html" }}
      />
    );
  }
}

AppRegistry.registerComponent('WebTest', () => WebTest);