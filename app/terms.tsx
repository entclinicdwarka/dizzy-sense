// app/terms.tsx
import { router, Stack } from "expo-router";
import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";
import i18n from "@/i18n";
import { useTranslation } from "@/hooks/useTranslation";

export default function TermsScreen() {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Stack.Screen
          options={{
            title: t("terms.title"),
            headerStyle: { backgroundColor: "#04d9ff" },
            headerTintColor: "#fff",
          }}
        />

        <Text
          accessibilityRole="header"
          accessibilityLabel={t("terms.headerAccessibility")}
          style={styles.title}
        >
          {t("terms.title")}
        </Text>

        <Text style={styles.section}>{t("terms.effectiveDate")}</Text>
        <Text style={styles.section}>{t("terms.lastUpdated")}</Text>

        <Text style={styles.paragraph}>{t("terms.intro")}</Text>

        <Text style={styles.heading}>{t("terms.useOfApp.heading")}</Text>
        <Text style={styles.paragraph}>{t("terms.useOfApp.paragraph")}</Text>

        <Text style={styles.heading}>
          {t("terms.medicalDisclaimer.heading")}
        </Text>
        <Text style={styles.paragraph}>
          {t("terms.medicalDisclaimer.paragraph")}
        </Text>

        <Text style={styles.heading}>
          {t("terms.noDataCollection.heading")}
        </Text>
        <Text style={styles.paragraph}>
          {t("terms.noDataCollection.paragraph1")}
        </Text>
        <Text style={styles.paragraph}>
          {t("terms.noDataCollection.paragraph2")}
        </Text>

        <Text style={styles.heading}>
          {t("terms.intellectualProperty.heading")}
        </Text>
        <Text style={styles.paragraph}>
          {t("terms.intellectualProperty.paragraph")}
        </Text>

        <Text style={styles.heading}>{t("terms.limitation.heading")}</Text>
        <Text style={styles.paragraph}>{t("terms.limitation.paragraph")}</Text>

        <Text style={styles.heading}>{t("terms.changes.heading")}</Text>
        <Text style={styles.paragraph}>{t("terms.changes.paragraph")}</Text>

        <Text style={styles.heading}>{t("terms.contact.heading")}</Text>
        <Text style={styles.paragraph}>
          {t("terms.contact.paragraph")}
          {"\n"}
          <Text style={styles.bold}>{t("terms.contact.emailLabel")}</Text>{" "}
          entclinicdwarka@gmail.com
          {"\n"}
          <Text style={styles.bold}>
            {t("terms.contact.developerLabel")}
          </Text>{" "}
          Dr. Rahul Kapahi, ENT Consultant
          {"\n"}
          <Text style={styles.bold}>
            {t("terms.contact.locationLabel")}
          </Text>{" "}
          India
        </Text>

        <Text style={styles.version}>{t("terms.version")}</Text>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={t("terms.homeButtonAccessibility")}
          style={styles.secondaryButton}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.buttonText}>{t("terms.homeButton")}</Text>
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
    fontSize: moderateScale(14),
    color: "#333",
    marginTop: moderateScale(30),
  },
});
