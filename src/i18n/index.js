import { createI18n } from "vue-i18n";
import messages from "./languages";

export default {
  init(locale) {
    return createI18n({
      locale,
      fallbackLocale: locale,
      globalInjection: true,
      messages,
    });
  }
}