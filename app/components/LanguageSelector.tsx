import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

const languages = [
  { code: "hi", label: "हिंदी (Hindi)" },
  { code: "en", label: "English" },
  { code: "zh", label: "中国人 (Chinese Simplified)" },
  { code: "fr", label: "Français (French)" },
  { code: "de", label: "Deutsch (German)" },
  { code: "ja", label: "日本語 (Japanese)" },
  { code: "ko", label: "한국인 (Korean)" },
  { code: "pt", label: "Português (Portuguese)" },
  { code: "ru", label: "Русский (Russian)" },
  { code: "es", label: "Español (Spanish)" },
  { code: "as", label: "অসমীয়া (Assamese)" },
  { code: "bn", label: "বাংলা (Bangla)" },
  { code: "gu", label: "ગુજરાતી (Gujarati)" },
  { code: "kn", label: "ಕನ್ನಡ (Kannada)" },
  { code: "ml", label: "മലയാളം (Malayalam)" },
  { code: "mr", label: "मराठी (Marathi)" },
  { code: "or", label: "ଓଡିଆ (Odia)" },
  { code: "pa", label: "ਪੰਜਾਬੀ (Punjabi)" },
  { code: "ta", label: "தமிழ் (Tamil)" },
  { code: "te", label: "తెలుగు (Telugu)" },
  // Add more here
];

// Urdu, Arabic

export default function LanguageSelector() {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.selectorButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.selectorText}>{t("language")}</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FlatList
              data={languages}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.languageOption}
                  onPress={() => {
                    setLanguage(item.code as any);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.languageText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={[styles.languageOption, styles.cancelButton]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={[styles.languageText, { color: "#555" }]}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  selectorButton: {
    padding: moderateScale(6),
    alignItems: "center",
  },
  selectorText: {
    fontSize: moderateScale(16),
    color: "#ffffff",
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.65)",
    justifyContent: "center",
    paddingHorizontal: moderateScale(20),
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: moderateScale(12),
    padding: moderateScale(16),
    height: "80%",
  },
  languageOption: {
    paddingVertical: verticalScale(12),
  },
  languageText: {
    fontSize: moderateScale(16),
    color: "#2b4cca",
  },
  cancelButton: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
    marginTop: verticalScale(8),
  },
});
