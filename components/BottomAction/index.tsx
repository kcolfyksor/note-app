import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import { BottomActionProps } from "./props";
import { styles } from "./styles";

export default function BottomAction(props: BottomActionProps) {
  const { buttonText, handlePress } = props;
  return (
    <LinearGradient colors={["#280947", "#280841"]} style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <LinearGradient
          colors={["#F13A76", "#F94695"]}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>{buttonText || ""}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
}
