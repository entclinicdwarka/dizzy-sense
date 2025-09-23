import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import { useTranslation } from "@/hooks/useTranslation";

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
  const { t } = useTranslation();

  const dizzinessInfo = [
    {
      icon: "🌀",
      title: t("dizziness.spinning.title"),
      desc: t("dizziness.spinning.desc"),
    },
    {
      icon: "🌑",
      title: t("dizziness.blackout.title"),
      desc: t("dizziness.blackout.desc"),
    },
    {
      icon: "😵",
      title: t("dizziness.lightheaded.title"),
      desc: t("dizziness.lightheaded.desc"),
    },
    {
      icon: "🚶‍♂️",
      title: t("dizziness.unsteady.title"),
      desc: t("dizziness.unsteady.desc"),
    },
    {
      icon: "💆",
      title: t("dizziness.neck.title"),
      desc: t("dizziness.neck.desc"),
    },
  ];

  const [currentId, setCurrentId] = useState(startId);
  const [loading, setLoading] = useState(false);
  const [answerSummary, setAnswerSummary] = useState<
    { question: string; answer: string }[]
  >([]);
  const [showInfo, setShowInfo] = useState(false);

  const scrollRef = useRef<ScrollView>(null);

  const step = answerSummary.length + 1;

  const current = questions[currentId];

  useEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }, [currentId]);

  const handlePress = (nextId: string, selectedLabel: string) => {
    const current = questions[currentId];
    const next = questions[nextId];

    const updatedSummary = [
      ...answerSummary,
      { question: t(current.text), answer: t(selectedLabel) },
    ];
    setAnswerSummary(updatedSummary);

    if (next?.options.length === 0 && onEnd) {
      setLoading(true);
      setTimeout(() => onEnd(nextId, updatedSummary), 800);
    } else {
      setCurrentId(nextId);
    }
  };

  if (loading) {
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color="#04d9ff" />
        <Text style={styles.spinnerText}>{t("questions.loading")}</Text>
      </View>
    );
  }

  return (
    <ScrollView
      ref={scrollRef}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        {/* Step Counter */}
        <Text style={styles.stepCounter}>{t("questions.step", { step })}</Text>
        <View style={styles.stepDotsContainer}>
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
            {t(current.text)}{" "}
            {current.id === "start" && (
              <Text
                onPress={() => setShowInfo(true)}
                style={styles.infoIcon}
                accessibilityLabel={t("questions.infoAccessibilityLabel")}
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
            onPress={() => handlePress(opt.next, opt.label)}
            accessibilityRole="button"
            accessibilityLabel={t("questions.selectOption", {
              option: t(opt.label),
            })}
            style={styles.optionButtonWrapper}
          >
            <LinearGradient
              colors={["#04d9ff", "#70a1ff"]}
              style={styles.gradientButton}
            >
              <Text style={styles.buttonText}>{t(opt.label)}</Text>
            </LinearGradient>
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
                  bounces={false}
                >
                  <Text style={styles.modalTitle}>
                    {t("dizziness.modalTitle")}
                  </Text>
                  {dizzinessInfo.map((item) => (
                    <Text key={item.title} style={styles.modalText}>
                      {item.icon} <Text style={styles.bold}>{item.title}:</Text>{" "}
                      {item.desc}
                    </Text>
                  ))}
                </ScrollView>

                {/* Close button */}
                <TouchableOpacity
                  style={styles.floatingCloseButton}
                  onPress={() => setShowInfo(false)}
                >
                  <Text style={styles.closeText}>{t("dizziness.close")}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    width: "80%",
    justifyContent: "flex-start",
    alignSelf: "center",
    flexGrow: 1,
  },
  container: {
    paddingBottom: moderateScale(40),
    backgroundColor: "#e3faff",
    flex: 1,
  },
  stepCounter: {
    textAlign: "center",
    marginBottom: moderateScale(8),
    color: "#2b4cca",
    fontSize: moderateScale(16),
  },
  stepDotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: moderateScale(16),
  },
  question: {
    fontSize: moderateScale(24),
    textAlign: "center",
    fontWeight: "bold",
    color: "#2b4cca",
  },
  optionButtonWrapper: {
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
    backgroundColor: "#e3faff",
  },
  spinnerText: {
    marginTop: moderateScale(10),
    fontSize: moderateScale(16),
    color: "#2b4cca",
  },
  questionRow: {
    marginBottom: moderateScale(40),
    paddingHorizontal: moderateScale(8),
  },
  infoIcon: {
    fontSize: moderateScale(16),
    marginLeft: moderateScale(4),
  },
  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(227, 239, 252, 0.95)",
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(20),
  },
  modalContainer: {
    width: "100%",
    maxWidth: moderateScale(340),
    maxHeight: "65%",
    backgroundColor: "#fff",
    borderRadius: moderateScale(15),
    overflow: "hidden",
    padding: moderateScale(14),
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  floatingCloseButton: {
    alignSelf: "center",
    backgroundColor: "#e3faff",
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
  gradientButton: {
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(6),
    borderRadius: moderateScale(12),
    justifyContent: "center",
    alignItems: "center",
  },
});
