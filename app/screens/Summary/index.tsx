import Header from "components/Header";
import ListItem from "components/ListItem";
import {
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import groupedNotes from "./data";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

const WorkAndStudyIcon = require("../../../assets/images/summary-workandstudy.png");
const HomeLifeIcon = require("../../../assets/images/summary-homelife.png");
const HealthIcon = require("../../../assets/images/summary-health.png");

export default function Summary() {
  const renderCategory = (category: string, icon: any) => {
    const count = groupedNotes[category].length;
    return (
      <>
        <View style={styles.categoryContainer}>
          <Image source={icon} style={{ flex: 2 }} />
          <Text style={styles.categoryText}>{category || ""}</Text>
          <TouchableOpacity style={{ flex: 3 }}>
            <LinearGradient
              colors={["#F13A76", "#F94695"]}
              style={styles.buttonContainer}
            >
              <Text style={styles.buttonText}>Detail</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <ListItem
            text={`This topic has a total of ${count} records.`}
            disablePress={true}
          />
        </View>
      </>
    );
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/bg.png")}
      resizeMode="cover"
      style={{ flex: 1, zIndex: -1 }}
    >
      <StatusBar />
      <Header leftTitle="Summary" />
      <View style={styles.bodyContainer}>
        {renderCategory("Work and study", WorkAndStudyIcon)}
        {renderCategory("Home life", HomeLifeIcon)}
        {renderCategory("Health and wellness", HealthIcon)}
      </View>
    </ImageBackground>
  );
}
