import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, Stack, router } from "expo-router";
import { getFinalResult } from "@/app/quiz/data/questions";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";

export default function SpecialistScreen() {
  const { result } = useLocalSearchParams();

  if (!result || typeof result !== "string") {
    return (
      <View style={[styles.container, { justifyContent: "center", flex: 1 }]}>
        <Text style={styles.heading}>Invalid result parameter.</Text>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.buttonText}>🏠 Home</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const info = getFinalResult(result);

  if (!info) {
    return (
      <View style={[styles.container, { justifyContent: "center", flex: 1 }]}>
        <Text accessibilityRole="header" style={styles.heading}>
          No matching specialist found.
        </Text>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.buttonText}>🏠 Home</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fdf2e9" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Stack.Screen
          options={{
            title: "Specialist Guide",
            headerStyle: { backgroundColor: "#551802" },
            headerTintColor: "#fff",
          }}
        />
        <Text
          accessibilityRole="header"
          accessibilityLabel={`Specialist recommended: ${info.doctor}`}
          style={styles.doctor}
        >
          Consult {info.doctor}
        </Text>

        <View style={styles.card}>
          <Text style={styles.title}>{info.label}</Text>

          <Text style={styles.label}>🩺 Description:</Text>
          <Text style={styles.point}>{info.description}</Text>

          <Text style={styles.label}>⚠️ Red flags to watch for:</Text>
          <View accessibilityRole="list">
            {info.redFlags.map((flag, idx) => (
              <Text key={idx} style={styles.flag}>
                ❗ {flag}.
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Go to home screen"
            accessibilityHint="Navigates back to the home screen"
            style={styles.secondaryButton}
            onPress={() => router.replace("/")}
          >
            <Text style={styles.buttonText}>🏠 Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingBottom: 60,
    backgroundColor: "#fdf2e9",
  },
  heading: {
    fontSize: RFValue(22),
    fontWeight: "bold",
    color: "#551802",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: RFValue(22),
    fontWeight: "bold",
    color: "#551802",
    marginBottom: 8,
    textTransform: "capitalize",
    textDecorationLine: "underline",
  },
  doctor: {
    fontSize: RFValue(24),
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
    textAlign: "center",
    backgroundColor: "#551802",
    borderRadius: 11,
    paddingVertical: 4,
    paddingHorizontal: 10,
    lineHeight: RFValue(32),
  },
  label: {
    fontSize: RFValue(18),
    fontWeight: "700",
    color: "#551802",
    marginTop: 10,
    lineHeight: 24,
  },
  point: {
    fontSize: RFValue(16),
    fontWeight: "400",
    color: "#551802",
    marginLeft: 8,
    marginVertical: 2,
    lineHeight: 24,
  },
  flag: {
    fontSize: RFValue(16),
    fontWeight: "500",
    color: "#551802",
    marginLeft: 8,
    marginVertical: 6,
    lineHeight: 22,
  },
  buttonText: {
    color: "#551802",
    fontSize: RFValue(16),
    fontWeight: "600",
    textAlign: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  secondaryButton: {
    backgroundColor: "#fdf2e9",
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#551802",
    marginHorizontal: 10,
    minWidth: 130,
  },
});
