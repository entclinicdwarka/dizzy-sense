import React from "react";
import { StyleSheet } from "react-native";
import { router, Stack } from "expo-router";
import QuestionEngine from "../components/QuestionEngine";
import questions from "./data/questions";
import { SafeAreaView } from "react-native-safe-area-context";
import i18n from "@/i18n";
import { useTranslation } from "@/hooks/useTranslation";

export default function QuizScreen() {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: t("quiz/index.index.title"),
          headerStyle: { backgroundColor: "#04d9ff" },
          headerTintColor: "#ffffff",
          headerBackVisible: true,
        }}
      />

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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3faff",
  },
});
