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
import { LinearGradient } from "expo-linear-gradient";
import LanguageSelector from "./components/LanguageSelector";
import { useTranslation } from "@/hooks/useTranslation";

const spin: Animatable.CustomAnimation = {
  0: { transform: [{ rotateY: "0deg" }, { translateX: 0 }] },
  0.25: { transform: [{ rotateY: "90deg" }, { translateX: -10 }] },
  0.5: { transform: [{ rotateY: "180deg" }, { translateX: 10 }] },
  0.75: { transform: [{ rotateY: "270deg" }, { translateX: -10 }] },
  1: { transform: [{ rotateY: "360deg" }, { translateX: 0 }] },
};

export default function HomeScreen() {
  const { t } = useTranslation();
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <Stack.Screen
          options={{
            headerTitle: () => <CustomHeader />,
            headerStyle: {
              backgroundColor: "#04d9ff",
            },
            headerBackVisible: false,
          }}
        />

        <View style={styles.langSelect}>
          <LinearGradient
            colors={["#04d9ff", "#70a1ff"]}
            style={styles.langButton}
          >
            <LanguageSelector />
          </LinearGradient>
        </View>

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
              accessibilityLabel={t("home.feelingHeading")}
              style={styles.headingText}
            >
              {t("home.feelingHeading")}
            </Text>
          </View>

          <Text style={styles.subtitle}>{t("home.subtitle1")}</Text>

          <Text style={styles.subtitle}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: moderateScale(26),
                color: "#04d9ff",
              }}
            >
              {t("appName")}
            </Text>{" "}
            {t("home.subtitle2", { appName: t("appName") })}
          </Text>

          <View style={styles.bulletWrapper}>
            <Text style={styles.bulletPoint}>{t("home.bullet1")}</Text>
            <Text style={styles.bulletPoint}>{t("home.bullet2")}</Text>
            <Text style={styles.bulletPoint}>{t("home.bullet3")}</Text>
          </View>

          <LinearGradient
            colors={["#04d9ff", "#70a1ff"]}
            style={styles.gradientButton}
          >
            <Link href="/quiz" asChild>
              <TouchableOpacity
                accessible
                accessibilityRole="button"
                accessibilityLabel={t("home.startQuiz")}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>{t("home.startQuiz")}</Text>
              </TouchableOpacity>
            </Link>
          </LinearGradient>
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
  langSelect: {
    position: "absolute",
    top: -moderateScale(24),
    right: moderateScale(26),
    zIndex: 1000,
  },
  card: {
    backgroundColor: "#eaf5fa",
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
    lineHeight: moderateScale(26),
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
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: moderateScale(18),
    fontWeight: "700",
  },
  headingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: moderateScale(12),
    flexWrap: "wrap",
  },
  headingText: {
    fontSize: moderateScale(28),
    fontWeight: "bold",
    color: "#2b4cca",
    textAlign: "center",
  },
  image: {
    width: moderateScale(96),
    height: moderateScale(96),
    borderRadius: moderateScale(12),
  },
  gradientButton: {
    padding: moderateScale(15),
    borderRadius: moderateScale(12),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: moderateScale(10),
  },
  langButton: {
    borderTopRightRadius: moderateScale(10),
    borderTopLeftRadius: moderateScale(10),
  },
});
