import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "hooks/useColorScheme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import NewNote from "./screens/NewNote";
import Summary from "./screens/Summary";
import { Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BottomTabs from "components/BottomTabs";
import Settings from "./screens/Settings";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const SettingsIcon = require("assets/images/settings.png");

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    // SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    PingFang: require("../assets/fonts/pingfang-sc-regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        initialRouteName="BottomTab"
        screenOptions={{
          headerStyle: { backgroundColor: "transparent" },
          headerTitleStyle: {
            fontSize: 28,
            fontWeight: "bold",
            color: "white",
          },
          headerBackground: () => (
            <LinearGradient
              colors={["#280947", "#280841"]}
              style={{ flex: 1 }}
            />
          ),
          headerRight: () => <Image source={SettingsIcon} />,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="BottomTab"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="New Note" component={NewNote} />
        <Stack.Screen name="Summary" component={Summary} />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </ThemeProvider>
  );
}
