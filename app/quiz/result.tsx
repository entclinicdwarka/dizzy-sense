// app/quiz/result.tsx

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, router, Stack } from "expo-router";
import { getFinalResult } from "./data/questions";

export default function ResultScreen() {
  const { result, summary } = useLocalSearchParams();
  const normalized = typeof result === "string" ? result : "";
  let parsedSummary: { question: string; answer: string }[] = [];
  try {
    parsedSummary =
      typeof summary === "string"
        ? JSON.parse(decodeURIComponent(summary))
        : [];
  } catch (e) {
    parsedSummary = [];
  }

  const info = getFinalResult(normalized) ?? {
    title: "Result Not Recognized",
    description: "We couldn't determine a specific outcome. Please retry.",
    redFlags: [],
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Stack.Screen
          options={{
            title: "Your Result",
            headerStyle: { backgroundColor: "#551802" },
            headerTintColor: "#fff",
          }}
        />

        <Text style={styles.title}>🩺 {info.label}</Text>

        {parsedSummary.length > 0 && (
          <>
            <Text style={styles.sectionLabel}>🧾 Your Answers:</Text>
            {parsedSummary.map(
              (item: { question: string; answer: string }, index: number) => (
                <View key={index} style={styles.summaryItem}>
                  <Text style={styles.summaryQuestion}>{item.question}</Text>
                  <Text style={styles.summaryAnswer}>{item.answer}</Text>
                </View>
              )
            )}
          </>
        )}

        <Text style={styles.sectionLabel}>💬 What it might mean:</Text>
        <Text style={styles.bodyText}>{info.description}</Text>

        <Text style={styles.sectionLabel}>⚠️ Red Flags:</Text>
        <Text style={[styles.bodyText, styles.redFlags]}>
          {info.redFlags.join(", ")}
        </Text>

        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Tap to find the right doctor"
          onPress={() => router.push(`/specialist?result=${normalized}`)}
        >
          <Text style={styles.buttonText}>
            👉 Which doctor should I consult?
          </Text>
        </TouchableOpacity>

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => router.replace("/")}
          >
            <Text style={[styles.buttonText, { color: "#551802" }]}>
              🏠 Home
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fdf2e9",
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#551802",
    textAlign: "center",
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 6,
    color: "#551802",
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 22,
    color: "#551802",
  },
  redFlags: {
    color: "#b91c1c",
    fontWeight: "600",
  },
  button: {
    marginTop: 30,
    backgroundColor: "#551802",
    padding: 14,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
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
  summaryItem: {
    backgroundColor: "#fff9f2",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e6d1bc",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  summaryQuestion: {
    fontSize: 15,
    fontWeight: "600",
    color: "#551802",
    marginBottom: 4,
  },
  summaryAnswer: {
    fontSize: 15,
    color: "#333",
    fontStyle: "italic",
    fontWeight: "600",
  },
});
