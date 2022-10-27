import { useMediaQuery } from "react-responsive";

function useResponsive() {
  // react-responsive breakpoints reference
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Bootstrap breakpoints reference for more detailed breakpoints
  const isLgScreen = useMediaQuery({ minWidth: 992, maxWidth: 1199 });
  const isXLScreen = useMediaQuery({ minWidth: 1200, maxWidth: 1399 });
  const isXXLScreen = useMediaQuery({ minWidth: 1400 });
  return { isDesktop, isTablet, isMobile, isLgScreen, isXLScreen, isXXLScreen };
}

export default useResponsive;
