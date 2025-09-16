// app/quiz/result.tsx
import { router, Stack, useLocalSearchParams } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getFinalResult } from "./data/questions";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

export default function ResultScreen() {
  const { result, summary } = useLocalSearchParams();
  const normalized = typeof result === "string" ? result : "";
  let parsedSummary: { question: string; answer: string }[] = [];
  try {
    parsedSummary =
      typeof summary === "string"
        ? JSON.parse(decodeURIComponent(summary))
        : [];
  } catch {
    parsedSummary = [];
  }

  const info = getFinalResult(normalized) ?? {
    label: "Result Not Recognized",
    description: "We couldn't determine a specific outcome. Please retry.",
    redFlags: [],
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eef5fc" }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Stack.Screen
            options={{
              title: "Your Result",
              headerStyle: { backgroundColor: "#2b4cca" },
              headerTintColor: "#ffffff",
            }}
          />

          <Text style={styles.title}>🩺 {info.label}</Text>

          {parsedSummary.length > 0 && (
            <>
              <Text style={styles.sectionLabel}>🧾 Your Answers:</Text>
              {parsedSummary.map(
                (item: { question: string; answer: string }, index: number) => (
                  <View key={index} style={styles.summaryItem}>
                    <Text style={styles.summaryQuestion}>
                      Q. {item.question}
                    </Text>
                    <Text style={styles.summaryAnswer}>A. {item.answer}</Text>
                  </View>
                )
              )}
            </>
          )}

          <View style={styles.card}>
            <Text style={styles.sectionLabel}>💬 What it might mean:</Text>
            <Text style={styles.bodyText}>{info.description}</Text>

            <TouchableOpacity
              style={styles.button}
              accessibilityLabel="Tap to find the right doctor"
              onPress={() => router.push(`/specialist?result=${normalized}`)}
            >
              <Text style={styles.buttonText}>
                👉 Which doctor should I consult?
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => router.replace("/")}
            >
              <Text style={[styles.buttonText, { color: "#2b4cca" }]}>
                🏠 Home
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eef5fc",
    flex: 1,
    padding: moderateScale(24),
    justifyContent: "center",
  },
  title: {
    fontSize: moderateScale(28),
    fontWeight: "bold",
    color: "#2b4cca",
    textAlign: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginVertical: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  sectionLabel: {
    fontSize: moderateScale(24),
    fontWeight: "600",
    marginTop: verticalScale(16),
    marginBottom: verticalScale(6),
    color: "#2b4cca",
  },
  bodyText: {
    fontSize: moderateScale(18),
    lineHeight: verticalScale(22),
    color: "#2b4cca",
  },
  button: {
    marginTop: verticalScale(30),
    backgroundColor: "#2b4cca",
    paddingVertical: verticalScale(12),
    paddingHorizontal: moderateScale(24),
    borderRadius: moderateScale(12),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: moderateScale(20),
    fontWeight: "600",
    textAlign: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: verticalScale(10),
  },
  secondaryButton: {
    backgroundColor: "#eef5fc",
    padding: verticalScale(12),
    borderRadius: moderateScale(12),
    borderWidth: 2,
    borderColor: "#2b4cca",
    marginHorizontal: moderateScale(10),
    minWidth: moderateScale(130),
  },
  summaryItem: {
    backgroundColor: "#cbe4fc",
    padding: moderateScale(12),
    borderRadius: moderateScale(8),
    marginBottom: verticalScale(12),
    borderWidth: 1,
    borderColor: "#2b4cca",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  summaryQuestion: {
    fontSize: moderateScale(14),
    fontWeight: "600",
    color: "#2b4cca",
    marginBottom: verticalScale(4),
  },
  summaryAnswer: {
    fontSize: moderateScale(16),
    color: "#2b4cca",
    fontStyle: "italic",
    fontWeight: "600",
  },
});
