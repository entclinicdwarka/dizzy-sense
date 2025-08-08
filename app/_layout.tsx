import { Link, Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Stack />
          </View>

          <View style={styles.disclaimerBox}>
            <Text style={styles.disclaimerText}>
              🛑🚫 This app provides general information only and is{" "}
              <Text style={styles.disclaimerBold}>NOT A SUBSTITUTE</Text> for
              professional medical advice, diagnosis, or treatment. Always
              consult a{" "}
              <Text style={styles.disclaimerBold}>
                Qualified Healthcare Provider
              </Text>
              .
            </Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.footerRow}>
              {/* Left Column with Links */}
              <View style={styles.footerLinks}>
                <TouchableOpacity
                  accessible
                  accessibilityRole="link"
                  accessibilityLabel="Visit Dr. Rahul Kapahi ENT clinic website"
                  accessibilityHint="Opens the clinic website in a browser"
                  activeOpacity={0.6}
                  onPress={() =>
                    Linking.openURL("https://drkapahisentclinic.wordpress.com/")
                  }
                >
                  <Text style={styles.footerText}>
                    🌐 Dr. Rahul Kapahi E.N.T. Clinic
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  accessible
                  accessibilityRole="link"
                  accessibilityLabel="Get directions to Dr. Rahul Kapahi ENT clinic on Google Maps"
                  accessibilityHint="Opens Google Maps for directions"
                  activeOpacity={0.6}
                  onPress={() =>
                    Linking.openURL(
                      "https://www.google.com/maps/dir//Dr.+Rahul+Kapahi,+ENT+Specialist,+..."
                    )
                  }
                >
                  <Text style={styles.footerText}>📍 Google Map</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  accessible
                  accessibilityRole="button"
                  accessibilityLabel="Call Dr. Rahul Kapahi's ENT clinic at +91 88000 47117"
                  accessibilityHint="Opens phone app to call clinic"
                  activeOpacity={0.6}
                  onPress={() => Linking.openURL("tel:+918800047117")}
                >
                  <Text style={styles.footerText}>📞 +91 88000 47117</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.whatsappColumn}>
                <FloatingWhatsAppButton />
                <Link href="/about" asChild>
                  <TouchableOpacity
                    accessibilityLabel="Open About screen with Terms and Privacy Policy"
                    style={styles.settingsIcon}
                  >
                    <Ionicons
                      name="settings-outline"
                      size={20}
                      color="#ffffff"
                    />
                    <Text style={styles.settingsText}>Terms / Privacy</Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>

            <Text style={styles.footerNote}>
              © {new Date().getFullYear()} Dr. Rahul Kapahi · For Awareness, Not
              Diagnosis
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#551802",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fdf2e9",
  },
  content: {
    flex: 1,
    position: "relative",
  },
  footer: {
    backgroundColor: "#fae5d3",
    paddingVertical: 6,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: RFValue(12),
    fontWeight: "900",
    color: "#551802",
    marginVertical: 6,
  },
  footerNote: {
    fontSize: RFValue(10),
    color: "#222222",
    marginTop: 2,
    textAlign: "center",
    borderTopWidth: 1,
    paddingVertical: 4,
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 2,
  },

  footerLinks: {
    flex: 1,
  },

  whatsappColumn: {
    width: 72,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  settingsIcon: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#551802",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 9,
  },
  settingsText: {
    color: "#ffffff",
    fontSize: RFValue(6),
    fontWeight: "600",
    marginTop: 0,
    textAlign: "center",
  },

  disclaimerBox: {
    backgroundColor: "#fff3cd",
    marginHorizontal: "auto",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#551802",
  },

  disclaimerText: {
    fontSize: RFValue(12),
    textAlign: "center",
    color: "#856404",
    fontWeight: "500",
    lineHeight: 18,
  },

  disclaimerBold: {
    fontWeight: "900",
    color: "#a94442",
  },
});
