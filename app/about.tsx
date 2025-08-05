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

export default function AboutScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fdf2e9" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Stack.Screen
          options={{
            title: "About The App",
            headerStyle: { backgroundColor: "#551802" },
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
          <Text style={styles.subheading}>Developer Info</Text>
          <Text style={styles.text}>Dr. Rahul Kapahi, ENT Consultant </Text>
          <Text style={styles.text}>India</Text>
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL("mailto:entclinicdwarka@gmail.com")}
          >
            📧 entclinicdwarka@gmail.com
          </Text>
        </View>

        <View style={styles.links}>
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
        </View>

        <Text style={styles.footer}>📱 Version 1.0 • August 2025</Text>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Go to home"
          style={styles.secondaryButton}
          onPress={() => router.replace("/")}
        >
          <Text style={[styles.buttonText, { color: "#551802" }]}>🏠 Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#fdf2e9",
    flexGrow: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#551802",
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: "#551802",
    marginBottom: 12,
  },
  section: {
    marginVertical: 16,
  },
  subheading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#551802",
  },
  text: {
    fontSize: 15,
    color: "#551802",
  },
  linkText: {
    fontSize: 15,
    color: "#551802",
    marginTop: 4,
    textDecorationLine: "underline",
  },
  links: {
    marginTop: 24,
  },
  linkButton: {
    fontSize: 16,
    color: "#551802",
    paddingVertical: 10,
  },
  footer: {
    textAlign: "center",
    fontSize: 13,
    color: "#888",
    marginTop: 32,
    marginBottom: 10,
  },
  secondaryButton: {
    backgroundColor: "#fdf2e9",
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#551802",
    marginHorizontal: 10,
    minWidth: 130,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
