import React from "react";
import { NativeBaseProvider } from "native-base";
import MainScreen from "./src/MainScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <MainScreen />
    </NativeBaseProvider>
  );
}
