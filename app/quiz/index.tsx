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
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

export default function QuizScreen() {
  const [finalId] = useState<string | null>(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eef5fc" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Stack.Screen
          options={{
            title: finalId ? "Result" : "Questions",
            headerStyle: { backgroundColor: "#2b4cca" },
            headerTintColor: "#ffffff",
            headerBackVisible: true,
          }}
        />

        {finalId ? (
          <View style={styles.container}>
            <Text style={styles.label}>Quiz Complete</Text>
            <Text style={styles.description}>
              Based on your responses, we&apos;ve identified a likely cause.
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(24),
    justifyContent: "center",
    backgroundColor: "#eef5fc",
  },

  label: {
    fontSize: moderateScale(28),
    fontWeight: "bold",
    color: "#2b4cca",
    textAlign: "center",
    marginBottom: verticalScale(16),
  },
  description: {
    fontSize: moderateScale(16),
    color: "#333",
    textAlign: "center",
    marginBottom: verticalScale(12),
  },
  redFlags: {
    fontSize: moderateScale(14),
    color: "#d32f2f",
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: verticalScale(24),
  },
  button: {
    backgroundColor: "#2b4cca",
    paddingVertical: verticalScale(16),
    paddingHorizontal: moderateScale(24),
    borderRadius: moderateScale(8),
    alignSelf: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: moderateScale(16),
  },
});
