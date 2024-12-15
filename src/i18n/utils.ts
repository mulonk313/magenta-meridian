import { ui, defaultLang, showDefaultLang, routes } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

type NestedKeys<T> = T extends object
  ? { [K in keyof T]: `${K & string}` | `${K & string}.${NestedKeys<T[K]>}` }[keyof T]
  : never;

  export function useTranslations(lang: keyof typeof ui) {
    return function t(key: NestedKeys<typeof ui[typeof defaultLang]>) {
      const keys = key.split(".");
      let result: any = ui[lang];
  
      for (const k of keys) {
        result = result?.[k];
        if (result === undefined) break;
      }
  
      return result || key; 
    };
  }

export function useTranslatedPath(lang: keyof typeof ui) {
    return function translatePath(path: string, l: string = lang) {
      const pathName = path.replaceAll('/', '')
      const hasTranslation = defaultLang !== l && routes[l] !== undefined && routes[l][pathName] !== undefined
      const translatedPath = hasTranslation ? '/' + routes[l][pathName] : path
  
      return !showDefaultLang && l === defaultLang ? translatedPath : `/${l}${translatedPath}`
    }
  }

  export function getRouteFromUrl(url: URL): string | undefined {
    const pathname = new URL(url).pathname;
    const parts = pathname?.split('/');
    const path = parts.pop() || parts.pop();
  
    if (path === undefined) {
      return undefined;
    }
  
    const currentLang = getLangFromUrl(url);
  
    if (defaultLang === currentLang) {
      const route = Object.values(routes)[0];
      return route[path] !== undefined ? route[path] : undefined;
    }
  
    const getKeyByValue = (obj: Record<string, string>, value: string): string | undefined  => {
        return Object.keys(obj).find((key) => obj[key] === value);
    }
  
    const reversedKey = getKeyByValue(routes[currentLang], path);
  
    if (reversedKey !== undefined) {
      return reversedKey;
    }
  
    return undefined;
  }