import { Platform, StyleSheet, Text } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";
import i18n from "@/i18n";
import { useTranslation } from "@/hooks/useTranslation";

export default function CustomHeader() {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.headerContainer}>
      <Text
        style={styles.title}
        accessibilityRole="header"
        numberOfLines={1}
        accessibilityLabel={t("customHeader.title")}
        adjustsFontSizeToFit
      >
        {t("customHeader.title")}
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
    backgroundColor: "#04d9ff",
  },
  title: {
    fontSize: moderateScale(32),
    fontWeight: "bold",
    color: "#ffffff",
  },
});
