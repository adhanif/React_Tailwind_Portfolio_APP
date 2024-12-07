import { useEffect, useRef } from 'react';

export const useClickOutside = (handler, mouseEvent = 'mousedown') => {
  const ref = useRef(null);

  useEffect(() => {
    const listener = (event) => {
      const target = event.target;
      const el = ref?.current;

      if (!el || el.contains(target)) {
        return;
      }

      handler();
    };

    document.addEventListener(mouseEvent, listener);

    return () => {
      document.removeEventListener(mouseEvent, listener);
    };
  }, [handler, mouseEvent]);

  return ref;
};
