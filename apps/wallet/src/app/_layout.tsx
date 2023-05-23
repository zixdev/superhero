import { SharedProviders } from "@superhero/features";
import { Stack } from "expo-router";
import React from "react";


function WalletApp() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}

export default function RootLayout() {
  return (
    <SharedProviders>
      <WalletApp />
    </SharedProviders>
  )
}
