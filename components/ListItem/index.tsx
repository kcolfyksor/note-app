import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function ListItem(props: any) {
  const { leftIcon, text, rightIcon, numberOfLines, disablePress } = props;

  return (
    <TouchableOpacity disabled={disablePress || false}>
      <View style={styles.container}>
        {leftIcon}
        <Text style={styles.text} numberOfLines={numberOfLines || 1}>
          {text}
        </Text>
        {rightIcon}
      </View>
    </TouchableOpacity>
  );
}
