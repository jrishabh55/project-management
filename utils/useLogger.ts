import { useEffect } from 'react';

export const useLogger = (data: unknown, type: keyof Console = 'log'): void => {
  useEffect(() => {
    console[type](data);
  }, [data]);
};
