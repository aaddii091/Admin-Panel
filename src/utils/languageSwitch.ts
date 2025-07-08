import { i18n } from '@/i18n'

export function changeLanguage(locale: string): void {
  i18n.global.locale.value = locale as any
}
