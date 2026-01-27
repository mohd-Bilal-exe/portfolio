import { useEffect, useState } from 'react';

const STORAGE_KEY = 'theme-preference'; // "dark" | "light" | null

export default function useDarkMode() {
  const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  const getInitialTheme = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark') return true;
    if (stored === 'light') return false;
    return getSystemTheme(); // system default
  };

  const [isDark, setIsDark] = useState<boolean>(getInitialTheme);

  // System theme listener (only if user has NOT set preference)
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const handler = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === null) {
        setIsDark(e.matches);
      }
    };

    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  // Toggle (locks user preference)
  const toggleDark = () => {
    setIsDark(prev => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light');
      return next;
    });
  };

  return { isDark, toggleDark };
}
