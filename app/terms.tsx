// app/terms.tsx
import { router, Stack } from "expo-router";
import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";

export default function TermsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Stack.Screen
          options={{
            title: "Terms & Conditions",
            headerStyle: { backgroundColor: "#2b4cca" },
            headerTintColor: "#fff",
          }}
        />

        <Text
          accessibilityRole="header"
          accessibilityLabel="Terms and Conditions for DizzySense"
          style={styles.title}
        >
          📄 Terms & Conditions
        </Text>

        <Text style={styles.section}>Effective Date: August 2, 2025</Text>
        <Text style={styles.section}>Last Updated: September 24, 2025</Text>

        <Text style={styles.paragraph}>
          By using 🌀DizzySense (&quot;the App&quot;, &quot;we&quot;,
          &quot;our&quot;), you agree to the following terms and conditions.
          Please read them carefully before using the app.
        </Text>

        <Text style={styles.heading}>1. Use of the App</Text>
        <Text style={styles.paragraph}>
          DizzySense is intended to provide general information and guidance
          related to dizziness. It is not a substitute for professional medical
          evaluation, diagnosis, or treatment.
        </Text>

        <Text style={styles.heading}>2. Medical Disclaimer</Text>
        <Text style={styles.paragraph}>
          This app does not provide medical advice. Always consult a qualified
          healthcare provider if you experience symptoms or have health-related
          questions. Do not delay seeking professional care based on information
          from this app.
        </Text>

        <Text style={styles.heading}>3. No Data Collection</Text>
        <Text style={styles.paragraph}>
          The app does not collect or store any personal data. All symptom
          inputs and interactions stay on your device. We do not track, store,
          or share your data with anyone.
        </Text>
        <Text style={styles.paragraph}>
          The app may open external websites (e.g. Google Search) for
          convenience. These are handled by your device&apos;s browser, and
          DizzySense does not transmit any personal information.
        </Text>

        <Text style={styles.heading}>4. Intellectual Property</Text>
        <Text style={styles.paragraph}>
          All content within the app, including text, layout, and visuals, is
          the intellectual property of Dr. Rahul Kapahi. You may not reproduce
          or redistribute any part of this app without permission.
        </Text>

        <Text style={styles.heading}>5. Limitation of Liability</Text>
        <Text style={styles.paragraph}>
          We are not liable for any harm or damage that may arise from the use
          or misuse of the app, including reliance on the guidance provided. Use
          of the app is at your own risk.
        </Text>

        <Text style={styles.heading}>6. Changes to Terms</Text>
        <Text style={styles.paragraph}>
          We may update these terms occasionally. The latest version will always
          be available within the app. Continued use of the app implies your
          acceptance of any changes.
        </Text>

        <Text style={styles.heading}>7. Contact</Text>
        <Text style={styles.paragraph}>
          For questions or concerns about these terms:
          {"\n"}
          <Text style={styles.bold}>Email:</Text> entclinicdwarka@gmail.com
          {"\n"}
          <Text style={styles.bold}>Developer:</Text> Dr. Rahul Kapahi, ENT
          Consultant
          {"\n"}
          <Text style={styles.bold}>Location:</Text> India
        </Text>

        <Text style={styles.version}>Version 1.1 • September 2025</Text>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Go back to home screen"
          style={styles.secondaryButton}
          onPress={() => router.replace("/")}
        >
          <Text style={[styles.buttonText, { color: "#2b4cca" }]}>🏠 Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#eef5fc" },
  container: {
    padding: moderateScale(20),
    backgroundColor: "#eef5fc",
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
    backgroundColor: "#eef5fc",
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
    color: "#fff",
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
