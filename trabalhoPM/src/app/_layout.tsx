import { Stack } from "expo-router";
import { ScreenStack } from "react-native-screens";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: 'Home'}} />
      <Stack.Screen name="detalhes" options={{title: 'Detalhes'}} />
    </Stack>
  );
}
