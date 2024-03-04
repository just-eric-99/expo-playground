import { Stack } from "expo-router";
import { config } from "@gluestack-ui/config"

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default RootLayout;
