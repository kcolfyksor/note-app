import Header from "components/Header";
import { useNavigation } from "expo-router";
import {
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ListItem from "components/ListItem";
import { styles } from "./styles";
import groupedNotes from "./data";

const SettingsIcon = require("../../../assets/images/settings.png");
const ChevronRight = require("../../../assets/images/chevronright.png");
const RecentIcon = require("../../../assets/images/recent.png");
const WorkAndStudyIcon = require("../../../assets/images/workandstudy.png");
const HomeLifeIcon = require("../../../assets/images/homelife.png");
const HealthIcon = require("../../../assets/images/health.png");

export default function Home() {
  const navigation = useNavigation();

  const renderRecent = (category: string, icon: any) => {
    return (
      <View>
        <View style={styles.categoryContainer}>
          <Image source={icon} />
          <Text style={styles.categoryText}>{category}</Text>
        </View>
        <View style={styles.listContainer}>
          {groupedNotes[category].map((note) => {
            return (
              <ListItem
                text={note.note}
                rightIcon={<Image source={ChevronRight} />}
                numberOfLines={2}
              />
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/bg.png")}
      resizeMode="cover"
      style={{ flex: 1, zIndex: -1 }}
    >
      <StatusBar />
      <Header
        leftTitle="Home"
        rightIcon={
          <TouchableOpacity
            onPress={() => navigation.navigate("Settings" as never)}
          >
            <Image source={SettingsIcon} />
          </TouchableOpacity>
        }
      />
      <View style={styles.bodyContainer}>
        <Image source={RecentIcon} />
        <Text style={styles.bodyText}>Recent created notes</Text>
      </View>
      {renderRecent("Work and study", WorkAndStudyIcon)}
      {renderRecent("Home life", HomeLifeIcon)}
      {renderRecent("Health and wellness", HealthIcon)}
    </ImageBackground>
  );
}
