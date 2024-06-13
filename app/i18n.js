import { getRequestConfig } from "next-intl/server";
import { match } from '@formatjs/intl-localematcher'
import { headers } from 'next/headers'
import Negotiator from 'negotiator';
const locales = ['en', 'es']
const getCurrentLocale = (acceptLanguage) => {
  const defaultLocale = 'en'
  const headers = { 'accept-language': acceptLanguage };  // Correctly structure the headers
  const languages = new Negotiator({headers}).languages()
  return match(languages, locales, defaultLocale) // -> 'en-US'
}


export default getRequestConfig(async () => {
  const headerStore = headers();
  const headerLanguage = headerStore.get('accept-language');
  const locale = getCurrentLocale(headerLanguage);
  const selected_locale = locales.includes(locale) ? locale : "en";
  return {
    locale,
    messages: (await import(`../messages/${selected_locale}.json`)).default
  }
});