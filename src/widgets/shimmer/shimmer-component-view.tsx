import React from 'react'
import { Animated, View } from 'react-native'
import { styles } from './shimmer-components-styles'

/**
 * Return Shimmer Component
 * @param {number} params.componentWidth  defines width of shimmer component
 * @param {number} params.componentHeight defines height of shimmer component
 * @param {string} params.backgroundColor defines background of shimmer component
 * @param {string[]} params.linearGradientArray provides linear gradient total item
 * @param {number} params.itemWidth defines width of single linear gradient item
 * @param {(index: number) => string} params.getShimmerGradientColor provides the linear gradient item color depending on index
 * @param {ViewStyle} params.containerStyle provide the style
 * @param {useRef} params.fadeAnim defines background of shimmer component
 * @returns
 */

interface IShimmerView extends IShimmerControlProps, IShimmerProperties { }

const ShimmerComponentView: React.FunctionComponent<IShimmerView> = (props) => {

    const {
        componentWidth = 0,
        componentHeight,
        backgroundColor,
        linearGradientArray,
        itemWidth,
        fadeAnim,
        getShimmerGradientColor,
        containerStyle
    } = props

    const linearGradientContainer = () => {
        return linearGradientArray.map((item: string, index: number) => {
            return <View
                key={index}
                style={[styles.itemContainer, {
                    width: itemWidth,
                    height: componentHeight,
                    backgroundColor: getShimmerGradientColor(index || 0)
                }]} >
            </View>
        })
    }


    return <View style={[
        styles.mainContainer,
        containerStyle,
        {
            width: componentWidth,
            height: componentHeight,
            backgroundColor
        }]}>
        <Animated.View style={[styles.itemContainer, {
            width: linearGradientArray.length * itemWidth,
            height: componentHeight,
            transform: [{
                translateX: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-componentWidth / 2, componentWidth]
                })
            }]
        }]}>
            {linearGradientContainer()}
        </Animated.View>
    </View>
};

export default ShimmerComponentView
