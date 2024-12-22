export const getDeviceType = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (/mobi|android|iphone|ipad|ipod/.test(userAgent)) {
      if (/tablet|ipad/.test(userAgent)) {
        return 'Tablet';
      } else {
        return 'Smartphone';
      }
    }
    return 'Desktop';
  }