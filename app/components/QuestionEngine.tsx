import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";
import { Modal } from "react-native";

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

const dizzinessInfo = [
  {
    icon: "🌀",
    title: "Spinning",
    desc: "A feeling that the room or you are moving or rotating.",
  },
  {
    icon: "🌑",
    title: "Blackout / Fainting",
    desc: "A feeling of near-fainting or complete loss of consciousness.",
  },
  {
    icon: "😵",
    title: "Lightheaded",
    desc: "A floating, woozy sensation — not quite spinning, but disorienting.",
  },
  {
    icon: "🚶‍♂️",
    title: "Unsteady",
    desc: "A feeling of imbalance or swaying while walking or standing.",
  },
  {
    icon: "💆",
    title: "Neck / Posture related",
    desc: "Feeling dizzy when moving or holding your neck in certain positions.",
  },
];

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
  const step = answerSummary.length + 1;

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
        <ActivityIndicator size="large" color="#2b4cca" />
        <Text style={styles.spinnerText}>Preparing your result...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eef5fc" }}>
      <View style={styles.container}>
        {/* Step Counter */}
        <Text
          style={{
            textAlign: "center",
            marginBottom: moderateScale(8),
            color: "#2b4cca",
            fontSize: moderateScale(16),
          }}
        >
          Step {step}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: moderateScale(16),
          }}
        >
          {[...answerSummary, {}].map((_, index) => (
            <View
              key={index}
              style={{
                width: moderateScale(12),
                height: moderateScale(12),
                borderRadius: moderateScale(8),
                backgroundColor:
                  index < answerSummary.length ? "#2b4cca" : "transparent",
                borderWidth: index < answerSummary.length ? 0 : 1,
                borderColor: "#2b4cca",
                marginHorizontal: moderateScale(4),
              }}
            />
          ))}
        </View>

        {/* Question */}
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
        {/* Options */}
        {current.options.map((opt) => (
          <TouchableOpacity
            key={opt.label}
            style={styles.button}
            onPress={() => handlePress(opt.next, opt.label)}
            accessibilityRole="button"
            accessibilityLabel={`Select ${opt.label}`}
          >
            <Text style={[styles.buttonText, { flexShrink: 1 }]}>
              {opt.label}
            </Text>
          </TouchableOpacity>
        ))}
        {/* Info Modal */}
        {showInfo && (
          <Modal
            visible={showInfo}
            animationType="slide"
            transparent
            onRequestClose={() => setShowInfo(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContainer}>
                <ScrollView
                  contentContainerStyle={styles.modalContent}
                  showsVerticalScrollIndicator
                  keyboardShouldPersistTaps="handled"
                >
                  <Text style={styles.modalTitle}>Types of Dizziness</Text>
                  {dizzinessInfo.map((item) => (
                    <Text key={item.title} style={styles.modalText}>
                      {item.icon} <Text style={styles.bold}>{item.title}:</Text>{" "}
                      {item.desc}
                    </Text>
                  ))}
                </ScrollView>

                {/* Close button outside ScrollView */}
                <TouchableOpacity
                  style={styles.floatingCloseButton}
                  onPress={() => setShowInfo(false)}
                >
                  <Text style={styles.closeText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(20),
    paddingBottom: moderateScale(20),
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#eef5fc",
  },
  question: {
    fontSize: moderateScale(20),
    marginBottom: moderateScale(2),
    textAlign: "center",
    fontWeight: "bold",
    color: "#2b4cca",
  },
  button: {
    backgroundColor: "#2b4cca",
    paddingVertical: moderateScale(16),
    paddingHorizontal: moderateScale(12),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(16),
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: moderateScale(18),
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eef5fc",
  },
  spinnerText: {
    marginTop: moderateScale(10),
    fontSize: moderateScale(16),
    color: "#2b4cca",
  },
  questionRow: {
    marginBottom: moderateScale(20),
    paddingHorizontal: moderateScale(8),
  },
  infoIcon: {
    fontSize: moderateScale(16),
    marginLeft: moderateScale(4),
  },
  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(238,245,252,0.95)",
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(20),
  },
  modalContainer: {
    width: "100%",
    maxWidth: moderateScale(340),
    maxHeight: "80%",
    backgroundColor: "#fff",
    borderRadius: moderateScale(15),
    overflow: "hidden",
    padding: moderateScale(10),
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  floatingCloseButton: {
    alignSelf: "center",
    backgroundColor: "#eef5fc",
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(1),
    borderColor: "#2b4cca",
    marginVertical: moderateScale(12),
  },
  modalContent: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(12),
  },
  modalTitle: {
    fontSize: moderateScale(24),
    fontWeight: "bold",
    color: "#2b4cca",
    marginBottom: moderateScale(12),
    textAlign: "center",
  },
  modalText: {
    fontSize: moderateScale(16),
    color: "#2b4cca",
    marginBottom: moderateScale(10),
  },
  bold: {
    fontWeight: "bold",
  },
  closeText: {
    color: "#2b4cca",
    fontWeight: "bold",
    fontSize: moderateScale(16),
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    padding: 20,
  },
});
