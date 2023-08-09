interface IShimmerProperties {
    componentWidth?: number
    componentHeight?: number
    backgroundColor?: string
    shimmerColor?: string
    containerStyle?: ViewStyle
}

interface IShimmerControlProps {
    getShimmerGradientColor: (index: number) => string
    linearGradientArray: string[]
    itemWidth: number
    fadeAnim: useRef
}