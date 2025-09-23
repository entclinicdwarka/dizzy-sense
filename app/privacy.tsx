import { router, Stack } from "expo-router";
import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";
import i18n from "@/i18n";
import { useTranslation } from "@/hooks/useTranslation";

export default function PrivacyPolicyScreen() {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Stack.Screen
          options={{
            title: t("privacy.title"),
            headerStyle: { backgroundColor: "#04d9ff" },
            headerTintColor: "#fff",
          }}
        />

        <Text
          accessibilityRole="header"
          accessibilityLabel={t("privacy.accessibilityTitle")}
          style={styles.title}
        >
          {t("privacy.header")}
        </Text>

        <Text style={styles.section}>{t("privacy.effectiveDate")}</Text>
        <Text style={styles.section}>{t("privacy.lastUpdated")}</Text>

        <Text style={styles.paragraph}>{t("privacy.intro")}</Text>

        <Text style={styles.heading}>{t("privacy.infoCollectHeading")}</Text>
        <Text style={styles.paragraph}>{t("privacy.infoCollectText")}</Text>

        <Text style={styles.heading}>{t("privacy.permissionsHeading")}</Text>
        <Text style={styles.paragraph}>{t("privacy.permissionsText")}</Text>

        <Text style={styles.heading}>{t("privacy.thirdPartyHeading")}</Text>
        <Text style={styles.paragraph}>{t("privacy.thirdPartyText1")}</Text>
        <Text style={styles.paragraph}>{t("privacy.thirdPartyText2")}</Text>

        <Text style={styles.heading}>{t("privacy.disclaimerHeading")}</Text>
        <Text style={styles.paragraph}>{t("privacy.disclaimerText")}</Text>

        <Text style={styles.heading}>{t("privacy.securityHeading")}</Text>
        <Text style={styles.paragraph}>{t("privacy.securityText")}</Text>

        <Text style={styles.heading}>{t("privacy.childrenHeading")}</Text>
        <Text style={styles.paragraph}>{t("privacy.childrenText")}</Text>

        <Text style={styles.heading}>{t("privacy.contactHeading")}</Text>
        <Text style={styles.paragraph}>{t("privacy.contactText")}</Text>

        <Text style={styles.heading}>{t("privacy.summaryHeading")}</Text>
        <Text style={styles.paragraph}>{t("privacy.summaryText")}</Text>

        <Text style={styles.version}>{t("privacy.version")}</Text>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={t("privacy.homeButtonLabel")}
          style={styles.secondaryButton}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.buttonText}>{t("privacy.homeButton")}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#e3faff" },
  container: {
    padding: moderateScale(20),
    backgroundColor: "#e3faff",
  },
  title: {
    fontSize: moderateScale(22),
    fontWeight: "bold",
    marginBottom: moderateScale(16),
    textAlign: "center",
    color: "#2b4cca",
  },
  section: {
    fontSize: moderateScale(14),
    marginBottom: moderateScale(6),
    textAlign: "center",
    color: "#2b4cca",
    borderBottomWidth: 1,
    borderBottomColor: "#2b4cca",
    paddingBottom: moderateScale(4),
  },
  heading: {
    fontSize: moderateScale(18),
    fontWeight: "bold",
    marginTop: moderateScale(20),
    marginBottom: moderateScale(8),
    color: "#2b4cca",
  },
  paragraph: {
    fontSize: moderateScale(15),
    lineHeight: moderateScale(24),
    color: "#2b4cca",
  },
  secondaryButton: {
    backgroundColor: "#e3faff",
    padding: moderateScale(12),
    borderRadius: moderateScale(10),
    borderWidth: 2,
    borderColor: "#2b4cca",
    marginHorizontal: moderateScale(10),
    minWidth: moderateScale(130),
    marginTop: moderateScale(20),
    marginBottom: moderateScale(60),
  },
  buttonText: {
    color: "#2b4cca",
    fontSize: moderateScale(16),
    fontWeight: "600",
    textAlign: "center",
  },
  bold: {
    fontWeight: "700",
  },
  version: {
    textAlign: "center",
    fontSize: moderateScale(13),
    color: "#333",
    marginTop: moderateScale(30),
  },
});
