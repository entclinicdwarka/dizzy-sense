// i18n.ts
import { I18n } from 'i18n-js';
import en from './en.json';
import hi from './hi.json';
import es from "./es.json"
import fr from "./fr.json"
import de from "./de.json"
import bn from "./bn.json"
import te from "./te.json"
import mr from "./mr.json"
import ta from "./ta.json"
import pa from "./pa.json"
import gu from "./gu.json"
import ru from "./ru.json"
import pt from "./pt.json"
import ja from "./ja.json"
import ko from "./ko.json"
import zh from "./zh.json"
import ml from "./ml.json"
import kn from "./kn.json"
import or from "./or.json"
import as from "./as.json"


// Create an instance of I18n with your translations
const i18n = new I18n({
  hi,
  en,
  de,
  es,
  fr,
  ja,
  ko,
  zh,
  pt,
  ru, as,
  bn,
  gu,
  kn,
  or,
  ml,
  mr,
  pa,
  ta,
  te,
});

i18n.fallbacks = true;

export default i18n;
