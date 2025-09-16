// app/about.tsx
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

export default function AboutScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eef5fc" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Stack.Screen
          options={{
            title: "About The App",
            headerStyle: { backgroundColor: "#2b4cca" },
            headerTintColor: "#fff",
          }}
        />

        <Text
          accessibilityRole="header"
          accessibilityLabel="About DizzySense"
          style={styles.title}
        >
          🌀 About DizzySense
        </Text>

        <Text style={styles.paragraph}>
          DizzySense is a free offline-first app that helps users understand
          possible causes of dizziness and provides guidance on which medical
          specialist to consult.
        </Text>

        <Text style={styles.paragraph}>
          No personal data is collected. All processing happens on your device.
        </Text>

        <Text style={styles.paragraph}>
          DizzySense works fully without internet!
        </Text>

        <View style={styles.section}>
          <Text style={styles.subheading}>👨‍⚕️ Developer Info</Text>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Dr. Rahul Kapahi</Text>
            <Text style={styles.infoSubtitle}>ENT Consultant</Text>
            <Text style={styles.infoText}>🇮🇳 India</Text>

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
                color="#2b4cca"
              />
              <Text style={styles.infoButtonText}>
                entclinicdwarka@gmail.com
              </Text>
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
                color="#2b4cca"
              />
              <Text style={styles.infoButtonText}>Clinic Website</Text>
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
                color="#2b4cca"
              />
              <Text style={styles.infoButtonText}>Directions</Text>
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
                color="#2b4cca"
              />
              <Text style={styles.infoButtonText}>+91 88000 47117</Text>
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
            <Text style={styles.linkButton}>🛡️ Privacy Policy</Text>
          </TouchableOpacity>

          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Go to terms and conditions of use"
            onPress={() => router.push("/terms")}
          >
            <Text style={styles.linkButton}>📄 Terms & Conditions</Text>
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
            (Click on the above links to read more)
          </Text>
        </View>

        <Text style={styles.footerVersion}>
          📱 Version 1.1 • September 2025
        </Text>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Go to home"
          style={styles.secondaryButton}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.buttonText}>🏠 Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(24),
    backgroundColor: "#eef5fc",
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
    backgroundColor: "#eef5fc",
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
    borderTopColor: "#eef5fc",
  },
  infoButtonText: {
    fontSize: moderateScale(14),
    color: "#2b4cca",
    marginLeft: moderateScale(12),
  },
});
