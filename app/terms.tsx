import { router, Stack } from "expo-router";
import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default function TermsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{
          title: "Terms & Conditions",
          headerStyle: { backgroundColor: "#551802" },
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

      <Text style={styles.section}>Last Updated: August 2, 2025</Text>

      <Text style={styles.paragraph}>
        By using 🌀DizzySense ("the App", "we", "our"), you agree to the
        following terms and conditions. Please read them carefully before using
        the app.
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
        The app does not collect or store any personal data. All symptom inputs
        and interactions stay on your device. We do not track, store, or share
        your data with anyone.
      </Text>

      <Text style={styles.heading}>4. Intellectual Property</Text>
      <Text style={styles.paragraph}>
        All content within the app, including text, layout, and visuals, is the
        intellectual property of Dr. Rahul Kapahi. You may not reproduce or
        redistribute any part of this app without permission.
      </Text>

      <Text style={styles.heading}>5. Limitation of Liability</Text>
      <Text style={styles.paragraph}>
        We are not liable for any harm or damage that may arise from the use or
        misuse of the app, including reliance on the guidance provided. Use of
        the app is at your own risk.
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
        <Text style={styles.bold}>Email</Text>: entclinicdwarka@gmail.com
        {"\n"}
        <Text style={styles.bold}>Developer</Text>: Dr. Rahul Kapahi, ENT
        Consultant
        {"\n"}
        <Text style={styles.bold}>Location</Text>: India
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: RFValue(13),
          color: "#888",
          marginTop: 30,
        }}
      >
        Version 1.0 • August 2025
      </Text>
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel="Go back to home screen"
        style={styles.secondaryButton}
        onPress={() => router.replace("/")}
      >
        <Text style={[styles.buttonText, { color: "#551802" }]}>🏠 Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fdf2e9",
  },
  title: {
    fontSize: RFValue(22),
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#551802",
  },
  section: {
    fontSize: RFValue(14),
    marginBottom: 6,
    textAlign: "center",
    color: "#551802",
    borderBottomWidth: 1,
    borderBottomColor: "#551802",
  },
  heading: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 8,
    color: "#551802",
  },
  paragraph: {
    fontSize: RFValue(15),
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
    fontSize: RFValue(16),
    fontWeight: "600",
    textAlign: "center",
  },
  bold: {
    fontWeight: "700",
  },
});
