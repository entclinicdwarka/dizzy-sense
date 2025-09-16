import { Platform, StyleSheet, Text } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CustomHeader() {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <Text
        style={styles.title}
        accessibilityRole="header"
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        🌀 DizzySense
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
    paddingTop: Platform.OS === "android" ? 0 : 8,
    width: "100%",
    backgroundColor: "#2b4cca",
  },
  title: {
    fontSize: moderateScale(32),
    fontWeight: "bold",
    color: "#ffffff",
  },
});
