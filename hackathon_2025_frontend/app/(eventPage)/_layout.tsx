import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"EventScreen"} options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
