// components/FloatingWhatsAppButton.tsx
import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Linking,
  Platform,
  Image,
  View,
  Text,
} from "react-native";

const whatsappNumber = "+918800047117";

export default function FloatingWhatsAppButton() {
  const openWhatsApp = async () => {
    const url =
      Platform.OS === "android"
        ? `whatsapp://send?phone=${whatsappNumber}`
        : `https://wa.me/${whatsappNumber}`;

    const supported = await Linking.canOpenURL(url);

    if (supported) {
      Linking.openURL(url);
    } else {
      alert("WhatsApp is not installed or the link cannot be opened.");
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
      <Text style={styles.caption}>WhatsApp</Text>
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
  caption: {
    fontSize: 10,
    color: "#551802",
    fontWeight: "600",
    textAlign: "center",
    borderBottomWidth: 1,
  },
});
