import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import { useRouter, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import i18n from "@/i18n";
import { useTranslation } from "@/hooks/useTranslation";

export default function AboutScreen() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e3faff" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Stack.Screen
          options={{
            title: t("about.screenTitle"),
            headerStyle: { backgroundColor: "#04d9ff" },
            headerTintColor: "#fff",
          }}
        />

        <Text
          accessibilityRole="header"
          accessibilityLabel={t("about.header")}
          style={styles.title}
        >
          {t("about.header")}
        </Text>

        <Text style={styles.paragraph}>{t("about.paragraph1")}</Text>
        <Text style={styles.paragraph}>{t("about.paragraph2")}</Text>
        <Text style={styles.paragraph}>{t("about.paragraph3")}</Text>

        <View style={styles.section}>
          <Text style={styles.subheading}>{t("about.developerInfo")}</Text>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>{t("about.developerName")}</Text>
            <Text style={styles.infoSubtitle}>{t("about.developerRole")}</Text>
            <Text style={styles.infoText}>{t("about.developerCountry")}</Text>

            <TouchableOpacity
              style={styles.infoButton}
              accessible
              accessibilityRole="link"
              accessibilityLabel="Send email to Dr. Rahul Kapahi ENT clinic"
              onPress={() =>
                Linking.openURL("mailto:entclinicdwarka@gmail.com")
              }
            >
              <Ionicons
                name="mail-outline"
                size={moderateScale(20)}
                color="#04d9ff"
              />
              <Text style={styles.infoButtonText}>{t("about.emailLabel")}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.infoButton}
              accessible
              accessibilityRole="link"
              accessibilityLabel="Visit clinic website"
              onPress={() =>
                Linking.openURL("https://drkapahisentclinic.wordpress.com/")
              }
            >
              <Ionicons
                name="globe-outline"
                size={moderateScale(20)}
                color="#04d9ff"
              />
              <Text style={styles.infoButtonText}>
                {t("about.websiteLabel")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.infoButton}
              accessible
              accessibilityRole="link"
              accessibilityLabel="Open Google Maps for directions"
              onPress={() =>
                Linking.openURL(
                  "https://www.google.com/maps/dir/?api=1&destination=Dr.+Rahul+Kapahi+ENT+Clinic+India"
                )
              }
            >
              <Ionicons
                name="location-outline"
                size={moderateScale(20)}
                color="#04d9ff"
              />
              <Text style={styles.infoButtonText}>
                {t("about.directionsLabel")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.infoButton}
              accessible
              accessibilityRole="button"
              accessibilityLabel="Call the clinic"
              onPress={() => Linking.openURL("tel:+918800047117")}
            >
              <Ionicons
                name="call-outline"
                size={moderateScale(20)}
                color="#04d9ff"
              />
              <Text style={styles.infoButtonText}>{t("about.phoneLabel")}</Text>
            </TouchableOpacity>

            <View>
              <FloatingWhatsAppButton />
            </View>
          </View>
        </View>

        <View>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Go to privacy policy"
            onPress={() => router.push("/privacy")}
          >
            <Text style={styles.linkButton}>{t("about.privacyPolicy")}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Go to terms and conditions of use"
            onPress={() => router.push("/terms")}
          >
            <Text style={styles.linkButton}>{t("about.terms")}</Text>
          </TouchableOpacity>

          <Text
            style={[
              styles.linkButton,
              {
                fontStyle: "italic",
                fontSize: moderateScale(12),
                textDecorationLine: "none",
              },
            ]}
          >
            {t("about.clickHint")}
          </Text>
        </View>

        <Text style={styles.footerVersion}>{t("about.version")}</Text>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Go to home"
          style={styles.secondaryButton}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.buttonText}>{t("about.home")}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(24),
    backgroundColor: "#e3faff",
    flexGrow: 1,
  },
  title: {
    fontSize: moderateScale(28),
    fontWeight: "bold",
    marginBottom: moderateScale(16),
    textAlign: "center",
    color: "#2b4cca",
  },
  paragraph: {
    fontSize: moderateScale(18),
    lineHeight: moderateScale(24),
    color: "#2b4cca",
    marginBottom: moderateScale(12),
  },
  section: {
    marginVertical: moderateScale(12),
  },
  subheading: {
    fontSize: moderateScale(24),
    fontWeight: "bold",
    marginBottom: moderateScale(6),
    color: "#2b4cca",
  },
  linkButton: {
    fontSize: moderateScale(18),
    color: "#2b4cca",
    fontWeight: "bold",
    paddingTop: moderateScale(10),
    textDecorationColor: "#2b4cca",
    textDecorationLine: "underline",
  },
  footerVersion: {
    textAlign: "center",
    fontSize: moderateScale(14),
    color: "#000",
    marginTop: moderateScale(32),
    marginBottom: moderateScale(10),
  },
  secondaryButton: {
    backgroundColor: "#e3faff",
    padding: moderateScale(12),
    borderRadius: moderateScale(12),
    borderWidth: 2,
    borderColor: "#2b4cca",
    marginHorizontal: moderateScale(10),
    minWidth: moderateScale(130),
    marginTop: moderateScale(10),
    marginBottom: moderateScale(32),
  },
  buttonText: {
    color: "#2b4cca",
    fontSize: moderateScale(18),
    fontWeight: "600",
    textAlign: "center",
  },
  infoCard: {
    backgroundColor: "#ffffff",
    borderRadius: moderateScale(12),
    padding: moderateScale(20),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(8),
    elevation: 3,
    marginTop: moderateScale(10),
  },
  infoTitle: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: "#2b4cca",
    marginBottom: moderateScale(4),
  },
  infoSubtitle: {
    fontSize: moderateScale(16),
    color: "#333",
    marginBottom: moderateScale(8),
  },
  infoText: {
    fontSize: moderateScale(16),
    color: "#000",
    marginBottom: moderateScale(12),
  },
  infoButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(16),
    borderTopWidth: 1,
    borderTopColor: "#e3faff",
  },
  infoButtonText: {
    fontSize: moderateScale(14),
    color: "#2b4cca",
    marginLeft: moderateScale(12),
  },
});
