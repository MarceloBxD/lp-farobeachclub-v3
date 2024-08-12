function useResponsiveImage({ imageName = '', screenWidth = 1920 }) {
  function getResponsiveImage(screenWidth:number) {
    const breakpoints = [
      { size: 1, maxWidth: 768 },   // 1x
      { size: 2, maxWidth: 1024 },   // 2x
      { size: 3, maxWidth: 1440 },  // 3x
      { size: 4, maxWidth: 1920 },  // 4x
    ];

    for (const breakpoint of breakpoints) {
      if (screenWidth <= breakpoint.maxWidth) {
        if(breakpoint.size === 1) return `${imageName}.jpg`;
        return `${imageName}@${breakpoint.size}x.jpg`;
      }
    }

    return `${imageName}@4x.jpg`;
  }

  const responsiveImage = getResponsiveImage(screenWidth);
  
  return responsiveImage;
}

export default useResponsiveImage;
