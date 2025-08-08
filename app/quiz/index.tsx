// app/quiz/question.tsx

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { router, Stack } from "expo-router";
import QuestionEngine from "../components/QuestionEngine";
import questions from "./data/questions";
import { RFValue } from "react-native-responsive-fontsize";

export default function QuizScreen() {
  const [finalId, setFinalId] = useState<string | null>(null);

  return (
    <View style={{ flex: 1, backgroundColor: "#fdf2e9" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Stack.Screen
          options={{
            title: finalId ? "Result" : "Questions",
            headerStyle: { backgroundColor: "#551802" },
            headerTintColor: "#fff",
            headerBackVisible: true,
          }}
        />

        {finalId ? (
          <View style={styles.container}>
            <Text style={styles.label}>Quiz Complete</Text>
            <Text style={styles.description}>
              Based on your responses, we've identified a likely cause.
            </Text>
            <Text style={styles.redFlags}>
              Tap below to see which doctor is most suitable.
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                router.push(`/specialist?result=${finalId}`);
              }}
            >
              <Text style={styles.buttonText}>👨‍⚕️ View My Results</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <QuestionEngine
            questions={questions}
            onEnd={(id, summary) => {
              router.push({
                pathname: "/quiz/result",
                params: {
                  result: id,
                  summary: encodeURIComponent(JSON.stringify(summary)),
                },
              });
            }}
          />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fdf2e9",
  },

  label: {
    fontSize: RFValue(28),
    fontWeight: "bold",
    color: "#551802",
    textAlign: "center",
    marginBottom: 16,
  },
  description: {
    fontSize: RFValue(16),
    color: "#333",
    textAlign: "center",
    marginBottom: 12,
  },
  redFlags: {
    fontSize: RFValue(14),
    color: "#a30000",
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#551802",
    padding: 12,
    borderRadius: 8,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: RFValue(16),
  },
});
