import BottomAction from "components/BottomAction";
import Header from "components/Header";
import ListItem from "components/ListItem";
import { useNavigation } from "expo-router";
import {
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

const ChevronLeft = require("../../../assets/images/chevronleft.png");
const ChevronRight = require("../../../assets/images/chevronright.png");
const OnlineCustomerIcon = require("../../../assets/images/onlinecustomer.png");
const UserAgreementIcon = require("../../../assets/images/useragreement.png");
const PrivacyPolicyIcon = require("../../../assets/images/privacy.png");
const AboutUsIcon = require("../../../assets/images/aboutus.png");

export default function Settings() {
  const navigation = useNavigation();

  const settings = [
    {
      text: "Online Customer",
      leftIcon: OnlineCustomerIcon,
      rightIcon: ChevronRight,
    },
    {
      text: "User Agreement",
      leftIcon: UserAgreementIcon,
      rightIcon: ChevronRight,
    },
    {
      text: "Privacy Policy",
      leftIcon: PrivacyPolicyIcon,
      rightIcon: ChevronRight,
    },
    {
      text: "About Us",
      leftIcon: AboutUsIcon,
      rightIcon: ChevronRight,
    },
  ];

  return (
    <ImageBackground
      source={require("../../../assets/images/bg.png")}
      resizeMode="cover"
      style={{ flex: 1, zIndex: -1 }}
    >
      <StatusBar></StatusBar>
      <Header
        leftTitle="Settings"
        leftIcon={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={ChevronLeft} />
          </TouchableOpacity>
        }
      />
      <View style={styles.listContainer}>
        {settings.map((setting, index) => {
          return (
            <ListItem
              key={index}
              leftIcon={<Image source={setting.leftIcon} />}
              text={setting.text}
              rightIcon={<Image source={setting.rightIcon} />}
            />
          );
        })}
      </View>
      <BottomAction
        buttonText="Delete All Notes"
        handlePress={() => console.log("Delete All Notes")}
      />
    </ImageBackground>
  );
}
