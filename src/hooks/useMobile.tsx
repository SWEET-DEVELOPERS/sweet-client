import { useEffect } from 'react';

export function useMobile() {
  function setScreenSize() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const maxWidth = Math.min(375, windowWidth);
    document.documentElement.style.setProperty('max-width', `${maxWidth}px`);
  }

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);
}
