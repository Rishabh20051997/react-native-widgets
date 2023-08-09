type ViewStyle = import('react-native').ViewStyle;
type LayoutChangeEvent = import('react-native').LayoutChangeEvent;
type useRef = import('react').useRef;
type DimensionValue = import('react-native').DimensionValue

interface IProgressBarProps {
    width?: DimensionValue;
    height?: DimensionValue;
    progressValue: number;
    progressBarColor?: string;
    progressBackgroundColor?: string;
    containerStyle?: ViewStyle;
  }
  
  interface IProgressBarControllerProps {
    updateProgressWidthValue: (event: LayoutChangeEvent) => void;
    progressWidth: number;
    animationRef: useRef;
  }