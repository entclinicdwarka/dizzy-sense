import { StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { useTranslation } from "@/hooks/useTranslation";

export default function CustomHeader() {
  const { t } = useTranslation();
  return (
    <View style={styles.headerContainer}>
      <Text
        style={styles.title}
        accessibilityRole="header"
        numberOfLines={1}
        accessibilityLabel={t("customHeader.title")}
        adjustsFontSizeToFit
      >
        {t("customHeader.title")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#04d9ff",
  },
  title: {
    fontSize: moderateScale(36),
    fontWeight: "bold",
    color: "#ffffff",
  },
});
