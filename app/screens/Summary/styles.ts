import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  box: { flex: 1, zIndex: -1 },
  listContainer: {
    marginHorizontal: 20,
    marginBottom: 10,
    gap: 10,
  },
  bodyContainer: {
    marginTop: 50,
    backgroundColor: "#FFFFFF0D",
    paddingBottom: 500,
  },
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
    gap: 5,
  },
  buttonContainer: {
    borderRadius: 24,
    width: 71,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyText: {
    color: "#FFFFFFB2",
    fontSize: 16,
  },
  categoryText: {
    color: "#FFFFFF",
    fontSize: 16,
    flex: 9,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
});
