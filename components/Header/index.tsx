import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Header(props: any) {
  const { leftTitle, rightTitle, leftIcon, rightIcon } = props;
  return (
    <LinearGradient colors={["#280947", "#280841"]} style={styles.container}>
      <View style={styles.section}>
        {leftIcon}
        <Text style={styles.text}>{leftTitle}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>{rightTitle}</Text>
        {rightIcon}
      </View>
    </LinearGradient>
  );
}
