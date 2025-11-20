import useWindowDimensions from "./useWindowDimensions";

const useScreenDetector = () => {
  const { width } = useWindowDimensions();

  const isMobile = width && width <= 768;
  const isTablet = width && width <= 1024;
  const isDesktop = width && width > 1024;

  return { isMobile, isTablet, isDesktop };
};

export default useScreenDetector;
