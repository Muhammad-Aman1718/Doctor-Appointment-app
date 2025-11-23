import { useEffect, useState } from 'react';

const useSplash = () => {
  const [open, setOpen] = useState<Boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return {
    open,
  };
};

export default useSplash;
