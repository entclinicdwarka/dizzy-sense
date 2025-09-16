// app/home.tsx
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Link, Stack } from "expo-router";
import CustomHeader from "./components/CustomHeader";
import * as Animatable from "react-native-animatable";
import { moderateScale } from "react-native-size-matters";

const spin: Animatable.CustomAnimation = {
  0: { transform: [{ rotateY: "0deg" }, { translateX: 0 }] },
  0.25: { transform: [{ rotateY: "90deg" }, { translateX: -10 }] },
  0.5: { transform: [{ rotateY: "180deg" }, { translateX: 10 }] },
  0.75: { transform: [{ rotateY: "270deg" }, { translateX: -10 }] },
  1: { transform: [{ rotateY: "360deg" }, { translateX: 0 }] },
};

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <Stack.Screen
          options={{
            headerTitle: () => <CustomHeader />,
            headerStyle: {
              backgroundColor: "#2b4cca",
            },
            headerBackVisible: false,
          }}
        />

        <View style={styles.card}>
          <View style={styles.headingRow}>
            <Animatable.Image
              animation={spin as any}
              iterationCount="infinite"
              duration={6000}
              easing="linear"
              source={require("../assets/images/dizzy_face1.png")}
              style={[styles.image, { perspective: 1000 } as any]}
            />
            <Text
              accessibilityRole="header"
              accessibilityLabel="Feeling unsteady or lightheaded?"
              style={styles.headingText}
            >
              Feeling unsteady or lightheaded?
            </Text>
          </View>

          <Text style={styles.subtitle}>
            Unsure whether it&apos;s Vertigo, Dizziness, Giddiness, or a
            Blackout?
          </Text>

          <Text style={styles.subtitle}>
            <Text style={{ fontWeight: "bold", fontSize: moderateScale(22) }}>
              DizzySense
            </Text>{" "}
            walks you through a short quiz to help you:
          </Text>

          <View style={styles.bulletWrapper}>
            <Text style={styles.bulletPoint}>
              👉 Understand what you&apos;re experiencing.
            </Text>
            <Text style={styles.bulletPoint}>
              👉 Learn common causes and warning signs.
            </Text>
            <Text style={styles.bulletPoint}>
              👉 Get clear guidance on which specialist to consult.
            </Text>
          </View>

          <Link href="/quiz" asChild>
            <TouchableOpacity
              accessible
              accessibilityRole="button"
              accessibilityLabel="Start quiz to assess dizziness symptoms"
              style={styles.buttonPrimary}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Start Symptom Quiz</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingVertical: moderateScale(40),
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: moderateScale(24),
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: "#eef5fc",
    borderRadius: moderateScale(12),
    padding: moderateScale(20),
    width: "98%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(6),
    elevation: 6,
  },
  subtitle: {
    fontSize: moderateScale(20),
    textAlign: "center",
    color: "#2b4cca",
    marginBottom: moderateScale(12),
    lineHeight: moderateScale(22),
  },
  bulletWrapper: {
    marginBottom: moderateScale(20),
  },
  bulletPoint: {
    fontSize: moderateScale(18),
    color: "#2b4cca",
    marginLeft: moderateScale(10),
    marginBottom: moderateScale(6),
  },
  buttonPrimary: {
    backgroundColor: "#2b4cca",
    padding: moderateScale(15),
    borderRadius: moderateScale(12),
    marginBottom: moderateScale(10),
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: moderateScale(18),
    fontWeight: "600",
  },
  headingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: moderateScale(12),
    flexWrap: "wrap",
  },
  headingText: {
    fontSize: moderateScale(26),
    fontWeight: "bold",
    color: "#2b4cca",
    textAlign: "center",
  },
  image: {
    width: moderateScale(96),
    height: moderateScale(96),
    borderRadius: moderateScale(12),
  },
});
