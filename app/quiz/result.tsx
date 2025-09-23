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
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "@/hooks/useTranslation";

export default function ResultScreen() {
  const { t } = useTranslation();
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
    label: t("quiz/result.unknown.label"),
    description: t("quiz/result.unknown.description"),
    redFlags: [],
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e3faff" }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Stack.Screen
            options={{
              title: t("quiz/result.header"),
              headerStyle: { backgroundColor: "#04d9ff" },
              headerTintColor: "#ffffff",
            }}
          />

          <Text style={styles.title}>🩺 {t(info.label)}</Text>

          {parsedSummary.length > 0 && (
            <>
              <Text style={styles.sectionLabel}>
                {t("quiz/result.answersTitle")}
              </Text>
              {parsedSummary.map(
                (item: { question: string; answer: string }, index: number) => (
                  <View key={index} style={styles.summaryItem}>
                    <Text style={styles.summaryQuestion}>
                      {t("quiz/result.qPrefix")} {item.question}
                    </Text>
                    <Text style={styles.summaryAnswer}>
                      {t("quiz/result.aPrefix")} {item.answer}
                    </Text>
                  </View>
                )
              )}
            </>
          )}

          <View style={styles.card}>
            <Text style={styles.sectionLabel}>
              {t("quiz/result.meaningTitle")}
            </Text>
            <Text style={styles.bodyText}>{t(info.description)}</Text>

            <TouchableOpacity
              accessibilityLabel={t("quiz.result.accessibility.findDoctor")}
              onPress={() => router.push(`/specialist?result=${normalized}`)}
            >
              <LinearGradient
                colors={["#00c6ff", "#04d9ff", "#2b4cca"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradientButton}
              >
                <Text style={styles.buttonText}>
                  {t("quiz/result.findDoctorButton")}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => router.replace("/")}
            >
              <Text style={[styles.buttonText, { color: "#2b4cca" }]}>
                {t("quiz/result.homeButton")}
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
    backgroundColor: "#e3faff",
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
    backgroundColor: "#ffffff",
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
    backgroundColor: "#e3faff",
    padding: verticalScale(12),
    borderRadius: moderateScale(12),
    borderWidth: 2,
    borderColor: "#2b4cca",
    marginHorizontal: moderateScale(10),
    minWidth: moderateScale(130),
  },
  summaryItem: {
    backgroundColor: "#d0f8ff",
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
  gradientButton: {
    marginTop: moderateScale(20),
    paddingVertical: verticalScale(12),
    paddingHorizontal: moderateScale(24),
    borderRadius: moderateScale(12),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
});
