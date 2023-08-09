type ITextProps = import('react-native').TextProps
type ITextStyleProps = import('react-native').TextStyle

interface IPieChartDataItem {
    value: number
    color: string
}

interface IPieChartProps {
    dataArray: IPieChartDataItem[]
    size?: number
    strokeWidth?: number
    isDoughnut?: boolean
    doughnutTextProps?: ITextProps
    doughnutTextStyle?: ITextStyleProps
}

interface IPieChartItemData {
    value: number
    strokeDashOffset: number // to be define
    rotation: number // to be define
    colors: string
}

interface IPieChartControllerProps {
    chartListData: IPieChartItemData[]
    circleCircumference: number
    radius: number
    scaleValue: number
    finalStrokeWidth: number
    halfCircle: number
    viewBox: number
    textWidth: number
}