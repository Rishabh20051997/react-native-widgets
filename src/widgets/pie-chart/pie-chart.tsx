import React, { memo } from 'react'

import PieChartView from './pie-chart-view'
import usePieChartViewController from './pie-chart-view-controller'
import { DEFAULT_PIE_CHART_SIZE, DEFAULT_STROKE_WIDTH, DEFAULT_IS_DOUGHNUT } from './pie-chart-constant'

/**
 * Pie chart
 * 
 * @returns the pie chart ui
 * @param {IPieChartDataItem[]} params.dataArray contains data series and color object
 * @param {number} params.size defines the size of container -> diameter
 * @param {boolean} params.isDoughnut defines whether to show doughnut or not
 * @param {number} params.strokeWidth defines the width of stroke -> only if @param isDoughnut is true
 * @param {ITextProps} params.doughnutText show the text at center of pie if @param isDoughnut is true
 * @param {ITextStyleProps} params.doughnutTextStyle uses to style the doughnut text
 */
const PieChart: React.FunctionComponent<IPieChartProps> = (props: IPieChartProps) => {

    const {
        dataArray = [],
        size = DEFAULT_PIE_CHART_SIZE,
        strokeWidth = DEFAULT_STROKE_WIDTH,
        isDoughnut = DEFAULT_IS_DOUGHNUT,
        doughnutTextProps,
        doughnutTextStyle
    } = props

    const {
        chartListData,
        circleCircumference,
        radius,
        scaleValue,
        halfCircle,
        viewBox,
        finalStrokeWidth,
        textWidth
    } = usePieChartViewController({
        dataArray,
        size,
        strokeWidth,
        isDoughnut
    })

    return <PieChartView
        chartListData={chartListData}
        size={size}
        radius={radius}
        scaleValue={scaleValue}
        circleCircumference={circleCircumference}
        halfCircle={halfCircle}
        viewBox={viewBox}
        isDoughnut={isDoughnut}
        finalStrokeWidth={finalStrokeWidth}
        textWidth={textWidth}
        doughnutTextProps={doughnutTextProps}
        doughnutTextStyle={doughnutTextStyle}
    />

}

export default memo(PieChart)