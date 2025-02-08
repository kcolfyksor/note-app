import BottomAction from "components/BottomAction";
import Header from "components/Header";
import { useNavigation } from "expo-router";
import {
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from "react-native";

const ChevronLeft = require("../../../assets/images/chevronleft.png");

export default function NewNote() {
  const navigation = useNavigation();

  const handleSave = () => {
    console.log("Saved");
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/bg.png")}
      resizeMode="cover"
      style={{ flex: 1, zIndex: -1 }}
    >
      <StatusBar />
      <Header
        leftTitle="New note"
        leftIcon={
          <TouchableOpacity
            onPress={() => navigation.navigate("Home" as never)}
          >
            <Image source={ChevronLeft} />
          </TouchableOpacity>
        }
      />
      <BottomAction handlePress={handleSave} buttonText="Save" />
    </ImageBackground>
  );
}
