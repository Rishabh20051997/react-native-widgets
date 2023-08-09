import React from 'react'
import { Text, View } from 'react-native'
import Svg, { G, Circle } from 'react-native-svg'


import { styles } from './pie-chart-styles'


/**
 * Pie Chart View
 * 
 * @returns the pie chart view
 * @param {IPieChartItemData[]} params.chartListData is the main data set to show the pie chart
 * @param {number} params.radius defines the radius of circle
 * @param {number} params.circleCircumference -> circumference value -> 2 𝛑 r
 * @param {number} params.size provide the size of SVG container
 * @param {number} params.viewBox provide the size of view box container
 * @param {number} params.halfCircle provide the half circle width -> container radius and stroke value
 * @param {number} params.finalStrokeWidth provide the stroke width after calculation of doughnut
 * @param {number} params.scaleValue scale the pie chart to fit into container -> reduce padding due to stroke width
 * @param {boolean} params.isDoughnut defines whether to show doughnut or not
 * @param {ITextProps} params.doughnutText show the text at center of pie if {isDoughnut} is true
 *  @param {ITextStyleProps} params.doughnutTextStyle uses to style the doughnut text
 */
interface IPieChartView extends Omit<IPieChartProps, 'dataArray' | 'strokeWidth'>, IPieChartControllerProps {
}

const PieChartView: React.FunctionComponent<IPieChartView> = (props: IPieChartView) => {

    const {
        size,
        radius,
        circleCircumference,
        chartListData,
        finalStrokeWidth,
        scaleValue,
        halfCircle,
        viewBox,
        doughnutTextProps,
        textWidth,
        isDoughnut,
        doughnutTextStyle
    } = props

    const renderCirclePieChart = () => {

        return <>
            {chartListData.map((item, _index) => {
                const { colors, strokeDashOffset, rotation , value} = item
                return (
                    <Circle
                        key={colors + value}
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke={colors}
                        fill={'transparent'}
                        strokeWidth={finalStrokeWidth}
                        strokeDasharray={circleCircumference}
                        strokeDashoffset={strokeDashOffset}
                        rotation={rotation}
                        originX={halfCircle}
                        originY={halfCircle}
                        scale={scaleValue}
                    />

                )
            })}
        </>
    }

    const renderLabelText = () => {
        return <Text
        style={[styles.label,doughnutTextStyle, { maxWidth: textWidth} ]}

        {...doughnutTextProps} />
    }

    return (
        <View style={[styles.graphWrapper, { width: size, height: size}]}>
            <Svg height={size} width={size} viewBox={`0 0 ${viewBox} ${viewBox}`}>
                <G rotation={-90} originX={halfCircle} originY={halfCircle}>
                    {renderCirclePieChart()}
                </G>
            </Svg>
            {isDoughnut ? renderLabelText() : null}
        </View>
    )

}

export default PieChartView