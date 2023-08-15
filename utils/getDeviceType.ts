const getDeviceType = () => {
  if (typeof window === 'undefined') return null;

  const width = window.innerWidth;

  if (width < 600) {
    return 'mobile';
  } else if (width < 1080) {
    return 'tablet';
  } else {
    return 'desktop';
  }
};

export default getDeviceType;
