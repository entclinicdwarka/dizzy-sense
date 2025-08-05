import { router, Stack } from "expo-router";
import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PrivacyPolicyScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fdf2e9" }}>
      <ScrollView style={styles.container}>
        <Stack.Screen
          options={{
            title: "Privacy Policy",
            headerStyle: { backgroundColor: "#551802" },
            headerTintColor: "#fff",
          }}
        />
        <Text
          accessibilityRole="header"
          accessibilityLabel="Privacy Policy for DizzySense"
          style={styles.title}
        >
          🛡️ Privacy Policy for DizzySense
        </Text>

        <Text style={styles.section}>Effective Date: August 2, 2025</Text>
        <Text style={styles.section}>Last Updated: August 2, 2025</Text>

        <Text style={styles.paragraph}>
          🌀 DizzySense ("the App", "we", "our") is a mobile application
          designed to help users understand possible causes of dizziness and
          guide them toward appropriate medical specialists. We value your
          privacy and do not collect any personally identifiable information.
        </Text>

        <Text style={styles.heading}>🔍 Information We Collect</Text>
        <Text style={styles.paragraph}>
          We do not collect, store, or transmit any of the following:
          {"\n\n"}• Your name, email address, phone number, or personal identity
          {"\n"}• Location or device identifiers
          {"\n"}• Health records or medical history
          {"\n\n"}The app runs entirely on your device and does not transmit any
          quiz responses or data to our servers or any third parties.
        </Text>

        <Text style={styles.heading}>📱 Device Permissions</Text>
        <Text style={styles.paragraph}>
          DizzySense does not request access to your camera, contacts, location,
          or microphone. It only uses basic device functions necessary to run
          the app smoothly.
        </Text>

        <Text style={styles.heading}>💼 Third-Party Services</Text>
        <Text style={styles.paragraph}>
          We do not use any third-party analytics, advertising, or tracking
          tools (such as Google Analytics, Facebook SDK, etc.).
        </Text>

        <Text style={styles.heading}>⚠️ Medical Disclaimer</Text>
        <Text style={styles.paragraph}>
          DizzySense is not a substitute for professional medical advice or
          diagnosis. It is intended for informational purposes only. Always
          consult a qualified healthcare provider regarding any symptoms or
          health concerns.
        </Text>

        <Text style={styles.heading}>🔐 Data Security</Text>
        <Text style={styles.paragraph}>
          Since the app does not collect data, there is no personal data to
          secure or transmit. All symptom selections and quiz logic occur
          entirely on your device.
        </Text>

        <Text style={styles.heading}>👶 Children's Privacy</Text>
        <Text style={styles.paragraph}>
          DizzySense is not directed at children under 13. We do not knowingly
          collect data from anyone, including minors.
        </Text>

        <Text style={styles.heading}>📬 Contact Us</Text>
        <Text style={styles.paragraph}>
          If you have any questions about this privacy policy or the app:
          {"\n"}
          <Text style={styles.bold}>Email</Text>: entclinicdwarka@gmail.com
          {"\n"}
          <Text style={styles.bold}>Developer</Text>: Dr. Rahul Kapahi, ENT
          Consultant
          {"\n"}
          <Text style={styles.bold}>Location</Text>: India
        </Text>

        <Text style={styles.heading}>✅ Summary</Text>
        <Text style={styles.paragraph}>
          Your privacy is important to us. DizzySense was built with the goal of
          providing safe, offline-first medical guidance without any tracking,
          advertising, or data collection.
        </Text>

        <Text
          style={{
            textAlign: "center",
            fontSize: 13,
            color: "#888",
            marginTop: 30,
          }}
        >
          Version 1.0 • August 2025
        </Text>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Go back to the home screen"
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
    flex: 1,
    padding: 20,
    backgroundColor: "#fdf2e9",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#551802",
  },
  section: {
    fontSize: 14,
    marginBottom: 6,
    textAlign: "center",
    color: "#551802",
    borderBottomWidth: 1,
    borderBottomColor: "#551802",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 8,
    color: "#551802",
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 24,
    color: "#551802",
  },
  secondaryButton: {
    backgroundColor: "#fdf2e9",
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#551802",
    marginHorizontal: 10,
    minWidth: 130,
    marginTop: 20,
    marginBottom: 60,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  bold: {
    fontWeight: "700",
  },
});
