// hooks/useTranslation.ts
import { useLanguage } from "@/contexts/LanguageContext";
import i18n from "@/i18n";

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: string, params?: Record<string, any>) => {
    i18n.locale = language; // ensure i18n uses the current language
    return i18n.t(key, params);
  };

  return { t, language };
};
