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

export default function SpecialistScreen() {
  const { result } = useLocalSearchParams();

  const handleHome = () => router.replace("/");

  if (!result || typeof result !== "string") {
    return (
      <SafeAreaView style={styles.centered}>
        <Text style={styles.heading}>Invalid result parameter.</Text>
        <TouchableOpacity style={styles.secondaryButton} onPress={handleHome}>
          <Text style={styles.buttonText}>🏠 Home</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const info = getFinalResult(result);

  if (!info) {
    return (
      <SafeAreaView style={styles.centered}>
        <Text style={styles.heading}>No matching specialist found.</Text>
        <TouchableOpacity style={styles.secondaryButton} onPress={handleHome}>
          <Text style={styles.buttonText}>🏠 Home</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const handleSearch = async () => {
    try {
      const query = encodeURIComponent(`${info.doctor} near me`);
      const url = `https://www.google.com/search?q=${query}`;
      const supported = await Linking.canOpenURL(url);
      if (supported) await Linking.openURL(url);
      else alert("Cannot open search URL");
    } catch (err) {
      console.error(err);
      alert("Something went wrong while opening the search.");
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
            title: "Specialist Guide",
            headerStyle: { backgroundColor: "#2b4cca" },
            headerTintColor: "#ffffff",
          }}
        />

        {/* Doctor Card */}
        <LinearGradient
          colors={["#2b4cca", "#4abbdaff", "#00c6ff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.doctorContainer}
        >
          <Text
            accessibilityRole="header"
            accessibilityLabel={`Specialist recommended: ${info.doctor}`}
            style={styles.doctor}
          >
            Consult {info.doctor}
          </Text>
        </LinearGradient>

        {/* Red Flags Card */}
        <View style={styles.card}>
          <Text style={styles.label}>Red flags to watch for:</Text>
          <View accessibilityRole="list">
            {info.redFlags.map((flag, idx) => (
              <Text key={idx} style={styles.flag}>
                🚩 {flag}
              </Text>
            ))}
          </View>
        </View>

        {/* Search Nearby Button */}
        <TouchableOpacity style={styles.fullWidthButton} onPress={handleSearch}>
          <LinearGradient
            colors={["#00c6ff", "#4abbdaff", "#2b4cca"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.searchButton}
          >
            <Text style={styles.searchButtonText}>
              🔎 Find {info.doctor}s nearby
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Home Button */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.secondaryButton} onPress={handleHome}>
            <Text style={styles.buttonText}>🏠 Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#eef5fc" },
  scroll: { flex: 1 },
  container: {
    padding: moderateScale(24),
    paddingBottom: verticalScale(80),
    backgroundColor: "#eef5fc",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(24),
    backgroundColor: "#eef5fc",
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
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
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
  flag: {
    fontSize: moderateScale(22),
    fontWeight: "500",
    color: "#d32f2f",
    marginLeft: moderateScale(8),
    marginVertical: verticalScale(6),
    lineHeight: moderateScale(26),
    fontStyle: "italic",
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
    backgroundColor: "#eef5fc",
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
});
