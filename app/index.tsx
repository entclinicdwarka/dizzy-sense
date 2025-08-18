import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Link, Stack } from "expo-router";
import CustomHeader from "./components/CustomHeader";
import { RFValue } from "react-native-responsive-fontsize";
import * as Animatable from "react-native-animatable";

const spin: Animatable.CustomAnimation = {
  from: { transform: [{ rotate: "0deg" }] },
  to: { transform: [{ rotate: "360deg" }] },
};

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <Stack.Screen
          options={{
            headerTitle: () => <CustomHeader />,
            headerStyle: { backgroundColor: "#551802" },
            headerTintColor: "#fff",
            headerTitleAlign: "left",
            headerBackVisible: false,
            headerTitleStyle: { fontWeight: "bold", fontSize: RFValue(18) },
          }}
        />

        <Text
          accessibilityRole="header"
          accessibilityLabel="DizzySense App"
          style={styles.title}
        >
          🌀 DizzySense
        </Text>
        <Text style={styles.tagline}>
          Your guide to understanding unexplained dizziness.
        </Text>

        <View style={styles.card}>
          <View style={styles.headingRow}>
            <Animatable.Image
              animation={spin as any}
              iterationCount="infinite"
              duration={6000}
              easing="linear"
              source={require("../assets/images/dizzy_face.png")}
              style={styles.image}
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
            Unsure whether it's Vertigo, Dizziness, Giddiness, or a Blackout?
          </Text>

          <Text style={styles.subtitle}>
            <Text style={{ fontWeight: "bold", fontSize: RFValue(20) }}>
              DizzySense
            </Text>{" "}
            walks you through a short quiz to help you:
          </Text>

          <View style={styles.bulletWrapper}>
            <Text style={styles.bulletPoint}>
              • Understand what you're experiencing
            </Text>
            <Text style={styles.bulletPoint}>
              • Learn common causes and warning signs
            </Text>
            <Text style={styles.bulletPoint}>
              • Get clear guidance on which specialist to consult
            </Text>
          </View>

          <Link href="/quiz" asChild>
            <TouchableOpacity
              accessible={true}
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
    paddingVertical: 40,
    backgroundColor: "#fdf2e9",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fdf2e9",
  },

  title: {
    fontSize: RFValue(28),
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#551802",
    borderRadius: 9,
    paddingHorizontal: 20,
    paddingVertical: 8,
    textAlign: "center",
    marginBottom: 4,
    shadowColor: "#ffd700",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 20,
  },
  tagline: {
    fontSize: RFValue(14),
    color: "#6e2c00",
    marginBottom: 16,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "500",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },

  subtitle: {
    fontSize: RFValue(16),
    textAlign: "center",
    color: "#551802",
    marginBottom: 12,
    lineHeight: 22,
  },
  bulletWrapper: {
    marginBottom: 20,
  },
  bulletPoint: {
    fontSize: RFValue(15),
    color: "#551802",
    marginLeft: 10,
    marginBottom: 6,
  },
  buttonPrimary: {
    backgroundColor: "#551802",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: RFValue(16),
    fontWeight: "600",
  },
  headingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    flexWrap: "wrap",
  },
  headingText: {
    fontSize: RFValue(22),
    fontWeight: "bold",
    color: "#551802",
    textAlign: "center",
  },
  image: {
    width: 96,
    height: 96,
    marginRight: 8,
  },
});
