import React from "react";
import { Stack } from "expo-router";

import * as Linking from "expo-linking";
import { LogBox } from "react-native";

const RootLayout = () => {
  LogBox.ignoreAllLogs(true);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(welcome)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(eventPage)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(activitySelection)"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="(fixedActivity)" options={{ headerShown: false }} />
      <Stack.Screen name="(casualAxivity)" options={{ headerShown: false }} />
    </Stack>
  );
};

export const linking = {
  prefixes: [Linking.createURL("/"), "codestructorfrontend://"],
};
export default RootLayout;
