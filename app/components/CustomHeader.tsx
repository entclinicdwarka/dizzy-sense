import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default function CustomHeader() {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("../../assets/images/logo-512px.png")}
        style={styles.logo}
        resizeMode="contain"
        accessible
        accessibilityLabel="Clinic logo"
      />
      <Text
        style={styles.title}
        accessibilityRole="header"
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        Dr. Rahul Kapahi
      </Text>
      <Image
        source={require("../../assets/images/mypic.jpg")}
        style={styles.profile}
        resizeMode="cover"
        accessible
        accessibilityLabel="Doctor's profile photo"
        accessibilityRole="image"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    paddingTop: Platform.OS === "android" ? 20 : 40,
    paddingBottom: 20,
    width: "100%",
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  title: {
    fontSize: RFValue(24),
    fontWeight: "bold",
    color: "#fff",
  },
  profile: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#fff",
  },
});
