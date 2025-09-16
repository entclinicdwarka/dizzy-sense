import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Linking,
  Image,
  View,
  Alert,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";

const whatsappNumber = "+918800047117";

export default function FloatingWhatsAppButton() {
  const insets = useSafeAreaInsets();

  const openWhatsApp = async () => {
    const message =
      "Hello, I want to book an appointment with Dr. Rahul Kapahi.";
    const appUrl = `whatsapp://send?phone=${whatsappNumber}&text=${encodeURIComponent(
      message
    )}`;
    const webUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    try {
      const supported = await Linking.canOpenURL(appUrl);

      if (supported) {
        await Linking.openURL(appUrl);
      } else {
        await Linking.openURL(webUrl);
      }
    } catch {
      Alert.alert(
        "Unable to open WhatsApp",
        "It looks like WhatsApp is not installed or accessible on your device."
      );
    }
  };

  return (
    <View
      style={{
        position: "absolute",
        bottom: insets.bottom + moderateScale(20),
        right: moderateScale(20),
        zIndex: 10,
      }}
    >
      <TouchableOpacity
        accessibilityHint="Opens WhatsApp chat with Dr. Rahul Kapahi's clinic"
        accessibilityRole="button"
        accessibilityLabel="Contact us on WhatsApp"
        style={styles.fab}
        onPress={openWhatsApp}
      >
        <Image
          source={require("../../assets/images/whatsapp.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    backgroundColor: "#eef5fc",
    width: moderateScale(64),
    height: moderateScale(64),
    borderRadius: moderateScale(40),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "#25D366",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
    padding: moderateScale(2),
  },
  icon: {
    width: moderateScale(48),
    height: moderateScale(48),
    resizeMode: "contain",
    justifyContent: "center",
  },
});
