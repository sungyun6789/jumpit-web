import { useEffect, useState } from 'react';

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>('desktop');

  const onResize = () => {
    if (typeof window === 'undefined') return null;

    const width = window.innerWidth;

    if (width <= 600) {
      return setDeviceType('mobile');
    } else if (width <= 1080) {
      return setDeviceType('tablet');
    } else {
      return setDeviceType('desktop');
    }
  };

  useEffect(() => {
    onResize();

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return deviceType;
};

export default useDeviceType;
