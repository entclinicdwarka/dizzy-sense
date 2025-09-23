import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import i18n from "@/i18n";

type Language =
  | "en"
  | "hi"
  | "de"
  | "es"
  | "fr"
  | "ja"
  | "ko"
  | "zh"
  | "pt"
  | "ru"
  | "as"
  | "bn"
  | "gu"
  | "kn"
  | "ml"
  | "mr"
  | "or"
  | "pa"
  | "ta"
  | "te";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en"); // default English

  // Update i18n locale whenever language changes
  useEffect(() => {
    i18n.locale = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
