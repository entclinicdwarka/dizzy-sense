// components/FloatingWhatsAppButton.tsx
import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Linking,
  Image,
  View,
  Alert,
} from "react-native";

const whatsappNumber = "+918800047117";

export default function FloatingWhatsAppButton() {
  const openWhatsApp = async () => {
    const message = "Hello, I’d like to know more about DizzySense.";
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
        // fallback: open WhatsApp web or redirect to Play Store/App Store
        await Linking.openURL(webUrl);
      }
    } catch (error) {
      Alert.alert(
        "Unable to open WhatsApp",
        "It looks like WhatsApp is not installed or accessible on your device."
      );
    }
  };

  return (
    <View>
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
    backgroundColor: "#fdf2e9",
    width: 42,
    height: 42,
    borderRadius: 21,
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
    padding: 2,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    justifyContent: "center",
  },
});
