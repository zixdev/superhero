import "@expo/metro-runtime";
import { ExpoRoot } from "expo-router";

import React from "react";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs();//Ignore all log notifications
const originalWarn = console.warn;
console.warn = function (...args) {
  if (typeof args[0] === 'string' && args[0].startsWith('When server rendering')) return;
  originalWarn.apply(console, args);
};

const ctx = (require).context("./src/app");

// Must be exported or Fast Refresh won't update the context
export default function App() {
  return (
    <ExpoRoot context={ctx} />
  );
}
