// types/i18n.d.ts
import "i18n-js";

declare module "i18n-js" {
  interface I18n {
    translations: Record<string, Record<string, any>>;
    fallbacks: boolean;
    locale: string;
    t(key: string, config?: Record<string, any>): string;
  }
}
