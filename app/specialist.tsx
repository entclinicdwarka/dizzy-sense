// app/quiz/specialist.tsx
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useLocalSearchParams, Stack, router } from "expo-router";
import { getFinalResult } from "@/app/quiz/data/questions";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "@/hooks/useTranslation";

export default function SpecialistScreen() {
  const { t } = useTranslation();
  const { result } = useLocalSearchParams();

  const handleHome = () => router.replace("/");

  if (!result || typeof result !== "string") {
    return (
      <SafeAreaView style={styles.centered}>
        <Text style={styles.heading}>{t("specialist.invalidResult")}</Text>
        <TouchableOpacity style={styles.secondaryButton} onPress={handleHome}>
          <Text style={styles.buttonText}>{t("specialist.home")}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const info = getFinalResult(result);

  if (!info) {
    return (
      <SafeAreaView style={styles.centered}>
        <Text style={styles.heading}>{t("specialist.noSpecialist")}</Text>
        <TouchableOpacity style={styles.secondaryButton} onPress={handleHome}>
          <Text style={styles.buttonText}>{t("specialist.home")}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const doctorName = t(info.doctor);
  const redFlags: string[] = (() => {
    const rf = t(info.redFlags, { returnObjects: true });
    return Array.isArray(rf) ? rf : [];
  })();

  const handleSearch = async () => {
    try {
      const query = encodeURIComponent(`${doctorName} near me`);
      const url = `https://www.google.com/search?q=${query}`;
      const supported = await Linking.canOpenURL(url);
      if (supported) await Linking.openURL(url);
      else alert(t("specialist.cannotOpen"));
    } catch (err) {
      console.error(err);
      alert(t("specialist.errorSearch"));
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator
      >
        <Stack.Screen
          options={{
            title: t("specialist.title"),
            headerStyle: { backgroundColor: "#04d9ff" },
            headerTintColor: "#ffffff",
          }}
        />

        {/* Doctor Card */}
        <LinearGradient
          colors={["#2b4cca", "#04d9ff", "#00c6ff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.doctorContainer}
        >
          <Text
            accessibilityRole="header"
            accessibilityLabel={`Specialist recommended: ${doctorName}`}
            style={styles.doctor}
          >
            {t("specialist.consultDoctor", { doctor: doctorName })}
          </Text>
        </LinearGradient>

        {/* Red Flags */}
        {redFlags.length > 0 && (
          <View style={styles.card}>
            <Text style={styles.label}>{t("specialist.redFlags")}</Text>
            <View>
              {redFlags.map((flag: string, idx: number) => (
                <View key={idx} style={styles.flagRow}>
                  <View style={styles.flagPill}>
                    <Text style={styles.flagEmoji}>🚩</Text>
                  </View>
                  <Text style={styles.flagText}>{flag}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Search Nearby Button */}
        <TouchableOpacity style={styles.fullWidthButton} onPress={handleSearch}>
          <LinearGradient
            colors={["#00c6ff", "#04d9ff", "#2b4cca"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.searchButton}
          >
            <Text style={styles.searchButtonText}>
              {t("specialist.findNearby", { doctor: doctorName })}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Home Button */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.secondaryButton} onPress={handleHome}>
            <Text style={styles.buttonText}>{t("specialist.home")}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#e3faff" },
  scroll: { flex: 1 },
  container: {
    padding: moderateScale(24),
    paddingBottom: verticalScale(80),
    backgroundColor: "#e3faff",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(24),
    backgroundColor: "#e3faff",
  },
  heading: {
    fontSize: moderateScale(24),
    fontWeight: "bold",
    color: "#2b4cca",
    marginBottom: verticalScale(20),
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: moderateScale(16),
    borderRadius: moderateScale(12),
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: verticalScale(20),
  },
  doctorContainer: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: moderateScale(16),
    marginBottom: verticalScale(20),
    alignItems: "center",
    borderTopRightRadius: moderateScale(0),
    borderBottomLeftRadius: moderateScale(0),
    borderTopLeftRadius: moderateScale(40),
    borderBottomRightRadius: moderateScale(40),
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 8,
  },
  doctor: {
    fontSize: moderateScale(28),
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  label: {
    fontSize: moderateScale(20),
    fontWeight: "700",
    color: "#2b4cca",
    marginBottom: verticalScale(10),
    lineHeight: moderateScale(24),
  },
  fullWidthButton: { alignSelf: "stretch" },
  searchButton: {
    paddingVertical: verticalScale(20),
    borderRadius: moderateScale(12),
    marginBottom: verticalScale(20),
  },
  searchButtonText: {
    color: "#fff",
    fontSize: moderateScale(18),
    fontWeight: "700",
    textAlign: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: verticalScale(20),
  },
  secondaryButton: {
    backgroundColor: "#e3faff",
    padding: moderateScale(12),
    borderRadius: moderateScale(10),
    borderWidth: 2,
    borderColor: "#2b4cca",
    marginHorizontal: moderateScale(10),
    minWidth: moderateScale(130),
  },
  buttonText: {
    color: "#2b4cca",
    fontSize: moderateScale(18),
    fontWeight: "600",
    textAlign: "center",
  },
  flagRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: verticalScale(8),
    flexWrap: "wrap",
  },
  flagPill: {
    backgroundColor: "#e3faff",
    borderRadius: moderateScale(24),
    paddingVertical: verticalScale(3),
    paddingHorizontal: moderateScale(4),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d32f2f",
    shadowColor: "#d32f2f",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  flagEmoji: {
    fontSize: moderateScale(22),
  },
  flagText: {
    flex: 1,
    marginLeft: moderateScale(8),
    fontSize: moderateScale(22),
    fontWeight: "500",
    color: "#d32f2f",
    lineHeight: moderateScale(30),
    fontStyle: "italic",
  },
});
