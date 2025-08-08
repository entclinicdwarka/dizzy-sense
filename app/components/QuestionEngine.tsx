// app/components/QuestionEngine.tsx

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export type QuestionOption = {
  label: string;
  next: string;
};

export type Question = {
  id: string;
  text: string;
  options: QuestionOption[];
};

export type QuestionSet = Record<string, Question>;

type Props = {
  questions: QuestionSet;
  startId?: string;
  onEnd?: (
    finalId: string,
    summary: { question: string; answer: string }[]
  ) => void;
};

export default function QuestionEngine({
  questions,
  startId = "start",
  onEnd,
}: Props) {
  const [currentId, setCurrentId] = useState(startId);
  const [loading, setLoading] = useState(false);
  const [answerSummary, setAnswerSummary] = useState<
    { question: string; answer: string }[]
  >([]);
  const [showInfo, setShowInfo] = useState(false);

  const current = questions[currentId];

  const handlePress = (nextId: string, selectedLabel: string) => {
    const current = questions[currentId];

    setAnswerSummary((prev) => [
      ...prev,
      { question: current.text, answer: selectedLabel },
    ]);

    const next = questions[nextId];

    if (next?.options.length === 0 && onEnd) {
      setLoading(true);
      setTimeout(() => {
        onEnd(nextId, [
          ...answerSummary,
          { question: current.text, answer: selectedLabel },
        ]);
      }, 800);
    } else {
      setCurrentId(nextId);
    }
  };

  if (loading) {
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color="#551802" />
        <Text style={styles.spinnerText}>Preparing your result...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.questionRow}>
        <Text style={styles.question}>
          {current.text}{" "}
          {current.id === "start" && (
            <Text
              onPress={() => setShowInfo(true)}
              style={styles.infoIcon}
              accessibilityLabel="Info about dizziness types"
            >
              ℹ️
            </Text>
          )}
        </Text>
      </View>

      {current.options.map((opt) => (
        <TouchableOpacity
          key={opt.label}
          style={styles.button}
          onPress={() => handlePress(opt.next, opt.label)}
        >
          <Text style={styles.buttonText}>{opt.label}</Text>
        </TouchableOpacity>
      ))}

      {showInfo && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalCardContainer}>
            <ScrollView contentContainerStyle={styles.modalCard}>
              <Text style={styles.modalTitle}>Types of Dizziness</Text>

              <Text style={styles.modalText}>
                🌀 <Text style={styles.bold}>Spinning:</Text> A feeling that the
                room or you are moving or rotating.
              </Text>
              <Text style={styles.modalText}>
                🌑 <Text style={styles.bold}>Blackout / Fainting:</Text> A
                feeling of near-fainting or complete loss of consciousness.
              </Text>
              <Text style={styles.modalText}>
                😵 <Text style={styles.bold}>Lightheaded:</Text> A floating,
                woozy sensation — not quite spinning, but disorienting.
              </Text>
              <Text style={styles.modalText}>
                🚶‍♂️ <Text style={styles.bold}>Unsteady:</Text> A feeling of
                imbalance or swaying while walking or standing. Trouble
                maintaining balance or walking straight.
              </Text>

              <TouchableOpacity
                accessibilityRole="button"
                accessible={true}
                accessibilityLabel="Close types of dizziness modal"
                style={styles.closeButton}
                onPress={() => setShowInfo(false)}
              >
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#fdf2e9",
  },
  question: {
    fontSize: RFValue(16),
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#551802",
    padding: 12,
    borderRadius: 10,
    marginVertical: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: RFValue(14),
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdf2e9",
  },
  spinnerText: {
    marginTop: 10,
    fontSize: RFValue(16),
    color: "#551802",
  },
  questionRow: {
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  infoIcon: {
    fontSize: RFValue(14),
    marginLeft: 4,
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fdf2e9",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalCardContainer: {
    maxHeight: "100%",
    width: "100%",
    maxWidth: 320,
  },
  modalCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  modalTitle: {
    fontSize: RFValue(24),
    fontWeight: "bold",
    color: "#551802",
    marginBottom: 10,
    textAlign: "center",
  },
  modalText: {
    fontSize: RFValue(13),
    color: "#551802",
    marginBottom: 10,
  },
  bold: {
    fontWeight: "900",
  },
  closeButton: {
    marginTop: 16,
    alignSelf: "center",
    backgroundColor: "#fdf2e9",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#551802",
  },
  closeText: {
    color: "#551802",
    fontWeight: "700",
  },
});
