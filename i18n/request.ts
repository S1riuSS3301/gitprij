import { getRequestConfig } from 'next-intl/server';
import ru from '../messages/ru.json';
import en from '../messages/en.json';

export default getRequestConfig(({ locale }) => ({
  locale: locale || 'ru',
  messages: locale === 'ru' ? ru : en
}));
