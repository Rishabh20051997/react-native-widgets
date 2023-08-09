import React from 'react'

import useShimmerComponentViewController from './shimmer-component-controller'
import ShimmerComponentView from './shimmer-component-view'
import { DEFAULT_SHIMMER_WIDTH, DEFAULT_SHIMMER_HEIGHT, DEFAULT_SHIMMER_BACKGROUND_COLOR, DEFAULT_SHIMMER_COLOR } from './shimmer-component-constant';

/**
 * Return Shimmer Component
 * @param {number} params.componentWidth  defines width of shimmer component
 * @param {number} params.componentHeight defines height of shimmer component
 * @param {string} params.backgroundColor defines background of shimmer component
 * @param {string} params.shimmerColor defines the color of shimmer layer
 * @param {ViewStyle} params.containerStyle provides the style to shimmer
 * @returns
 */
const ShimmerComponent: React.FunctionComponent<IShimmerProperties> = ({
    componentWidth = DEFAULT_SHIMMER_WIDTH,
    componentHeight = DEFAULT_SHIMMER_HEIGHT,
    backgroundColor = DEFAULT_SHIMMER_BACKGROUND_COLOR,
    shimmerColor = DEFAULT_SHIMMER_COLOR,
    containerStyle
}) => {
    
    const {
    getShimmerGradientColor,
    linearGradientArray,
    itemWidth,
    fadeAnim
    } = useShimmerComponentViewController({ componentWidth, shimmerColor  })

    return <ShimmerComponentView
    componentWidth={componentWidth}
    componentHeight={componentHeight}
    backgroundColor={backgroundColor}
    getShimmerGradientColor={getShimmerGradientColor}
    linearGradientArray={linearGradientArray}
    itemWidth={itemWidth}
    fadeAnim={fadeAnim}
    containerStyle={containerStyle}
    />
};

export default ShimmerComponent
