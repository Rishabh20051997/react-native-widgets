interface ISeekBarProps {
    currentValue: number
    totalValue: number
    pointerSize?: number
    progressBarHeight?: number
    progressWidth?: number
    progressBarColor?: string
    pointerColor?: string
    progressBarBorderColor?: string
    onValueChange?: (data: number) => void
    onScrollStart?: () => void
    onWidthCalculated?: (width: number) => void
}

interface ISeekBarStyleProps {
    pointerSize: number
    progressBarHeight: number
    progressBarWidth: number
    containerPadding: number
    progressBarColor?: string
    progressBarBorderColor?: string
    pointerColor?: string
}
