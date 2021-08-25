import { useEffect, useState } from 'react';

export interface IWindowSize {
  width: number;
  height: number;
}

const useWindowSize = () => {
  const [windowSize, setSize] = useState<IWindowSize | null>(null);

  useEffect(() => {
    const updateWindowSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', updateWindowSize);

    return () => window.removeEventListener('resize', updateWindowSize);
  });

  useEffect(() => {
    const updateWindowSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('load', updateWindowSize);

    return () => window.removeEventListener('load', updateWindowSize);
  });

  return windowSize;
};

export default useWindowSize;