import Home from "@app/screens/Home";
import NewNote from "@app/screens/NewNote";
import Summary from "@app/screens/Summary";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";

const HomeIcon = require("assets/images/home.png");
const NewNoteIcon = require("assets/images/newnote.png");
const SummaryIcon = require("assets/images/summary.png");

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarBackground: () => (
          <LinearGradient
            colors={["#280947", "#280841"]}
            style={{
              flex: 1,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        ),
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "transparent",
          borderColor: "transparent",
          height: 100,
          marginTop: -20,
        },
        tabBarIconStyle: {
          marginTop: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Image source={HomeIcon} style={{ width: 40, height: 40 }} />
          ),
          tabBarLabelStyle: {
            marginTop: 10,
          },
        }}
      />
      <Tab.Screen
        name="New Note"
        component={NewNote}
        options={{
          tabBarIcon: () => <Image source={NewNoteIcon} />,
          tabBarLabel: "",
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Summary"
        component={Summary}
        options={{
          tabBarIcon: () => <Image source={SummaryIcon} />,
          tabBarLabelStyle: { marginTop: 10 },
        }}
      />
    </Tab.Navigator>
  );
}
