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
import i18n from "@/i18n";
import { useTranslation } from "@/hooks/useTranslation";

const whatsappNumber = "+918800047117";

export default function FloatingWhatsAppButton() {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  const openWhatsApp = async () => {
    const message = t("whatsapp.message");
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
      Alert.alert(t("whatsapp.alertTitle"), t("whatsapp.alertMessage"));
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
        accessibilityHint={t("whatsapp.accessibilityHint")}
        accessibilityRole="button"
        accessibilityLabel={t("whatsapp.accessibilityLabel")}
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
    backgroundColor: "#e3faff",
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
