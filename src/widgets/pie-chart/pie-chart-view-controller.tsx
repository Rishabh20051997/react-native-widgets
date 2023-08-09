import { useCallback, useMemo } from "react"
import { DEFAULT_IS_DOUGHNUT, DEFAULT_PIE_CHART_SIZE, DEFAULT_STROKE_WIDTH } from "./pie-chart-constant"

const usePieChartViewController = (props: IPieChartProps): IPieChartControllerProps => {

    const {
        size = DEFAULT_PIE_CHART_SIZE,
        dataArray, isDoughnut = DEFAULT_IS_DOUGHNUT,
        strokeWidth = DEFAULT_STROKE_WIDTH
    } = props

    const radius = size / 2 // radius is half of diameter

    const circleCircumference = 2 * Math.PI * radius // circumference value -> 2 𝛑 r

    const totalValue = useMemo(() => dataArray?.reduce((acc, item) => item.value + acc, 0), [dataArray])// calculate  and add all series data 

    // stroke value is equal to diameter if doughnut is false
    const finalStrokeWidth = isDoughnut ? strokeWidth : size

    const halfCircle = (radius + finalStrokeWidth)
    const viewBox = halfCircle * 2
    const textWidth = radius - (finalStrokeWidth / 2) 

    // initialize with default value -> since first sector of pie is at 0 degree angle
    let finalAngle = [0]
    let previousAngleValue = 0

    // calculate and return new data series with all required data set
    const chartListData = useMemo(() => dataArray?.map((item, index) => {
            const { value, color } = item
            const itemPercentage = (value / totalValue) * 100
            const strokeDashOffset = circleCircumference - (circleCircumference * itemPercentage) / 100
    
            let totalAngle = 0
            // since at 0th index angle is always zero -> so no calc required
            if (index) {
                const item1 = finalAngle?.[index - 1] || 0
                const item2 = previousAngleValue
    
                // add up previous angle and current element angle -> basically creates fibonacci series
                totalAngle = item1 + item2
                finalAngle.push(totalAngle)
            }
            previousAngleValue = (value / totalValue) * 360
    
            return {
                value,
                strokeDashOffset,
                rotation: totalAngle,
                colors: color
            }
        })
    , [dataArray, circleCircumference, finalAngle, previousAngleValue]) 

    // scales the pie chart to fit perfectly -> as stroke width introduce padding to container
    const getScaleValue = useCallback(() => {
        return 1 + (finalStrokeWidth / ((radius * 2) + finalStrokeWidth))
    }, [finalStrokeWidth, radius])

    return {
        chartListData,
        circleCircumference,
        radius,
        finalStrokeWidth,
        scaleValue: getScaleValue(),
        halfCircle,
        viewBox,
        textWidth

    }
}

export default usePieChartViewController
