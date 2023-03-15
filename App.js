import React from "react";
import { WebView } from "react-native-webview";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: "" }}
          style={{ flex: 1 }}
          onMessage={(event) => {
            console.log(event.nativeEvent.data);
          }}
        />
      </View>
    </SafeAreaView>
  );
}
