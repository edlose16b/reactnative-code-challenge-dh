import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';
import en from './en';
import es from './es';
import {setDefaultOptions} from 'date-fns';
import {es as dateEs} from 'date-fns/locale';

const languageCode = getLocales()[0].languageCode;
i18n.use(initReactI18next).init({
  lng: languageCode,
  fallbackLng: 'en',
  resources: {
    en,
    es,
  },
});

const localeLanguageCode = languageCode;
switch (localeLanguageCode) {
  case 'es':
    setDefaultOptions({locale: dateEs});
    break;
}

export default i18n;
