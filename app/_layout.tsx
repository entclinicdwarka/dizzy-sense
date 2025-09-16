// app/_layout.tsx
import { Link, Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { moderateScale } from "react-native-size-matters";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" translucent={false} />
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
              <View>
                <Link href="/about" asChild accessibilityRole="link">
                  <TouchableOpacity
                    accessibilityLabel="Open About screen with Terms and Privacy Policy"
                    style={styles.settingsIcon}
                  >
                    <Ionicons
                      name="settings-outline"
                      size={moderateScale(20)}
                      color="#ffffff"
                    />
                    <Text style={styles.settingsText}>
                      About / Terms / Privacy
                    </Text>
                  </TouchableOpacity>
                </Link>
              </View>

              <Text style={styles.footerNote}>
                © {new Date().getFullYear()} Dr. Rahul Kapahi · For Awareness,
                Not Diagnosis
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    position: "relative",
  },
  footer: {
    backgroundColor: "#eef5fc",
    paddingVertical: moderateScale(4),
    paddingHorizontal: moderateScale(20),
    alignItems: "center",
  },
  footerNote: {
    fontSize: moderateScale(11),
    color: "#2b4cca",
    marginTop: moderateScale(4),
    textAlign: "center",
    borderTopWidth: 1,
    paddingVertical: moderateScale(4),
  },
  settingsIcon: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2b4cca",
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(8),
    borderRadius: moderateScale(9),
  },
  settingsText: {
    color: "#ffffff",
    fontSize: moderateScale(12),
    fontWeight: "600",
    textAlign: "center",
  },
  disclaimerBox: {
    backgroundColor: "#fcf8ec",
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScale(2),
    borderWidth: 1,
    borderColor: "#2b4cca",
  },
  disclaimerText: {
    fontSize: moderateScale(13),
    textAlign: "center",
    color: "#2b4cca",
    fontWeight: "500",
    lineHeight: moderateScale(18),
  },
  disclaimerBold: {
    fontWeight: "900",
    color: "#a94442",
  },
});
