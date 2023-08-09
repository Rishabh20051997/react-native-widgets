import React from 'react'
import { Animated, View } from 'react-native'
import { styles } from './progress-bar-styles'


/**
 * Progress Bar View
 * 
 * @returns the progress bar view
 * @param {number | string} params.width provide the width of container
 * @param {number | string} params.height provide the height of container
 * @param {number} params.progressValue represent the current progress -> range 0 to 100
 * @param {string} params.progressBarColor shows progress bar color
 * @param {string} params.progressBackgroundColor shows background color of progress bar
 * @param {ViewStyle} params.containerStyle provide style to main container
 * @param {(event: LayoutChangeEvent) => void} params.updateProgressWidthValue updates the container value in {number}
 * @param {number} params.progressWidth represents the progress bar max width
 * @param {useRef} params.animationRef used to show animation 
 * 
 */

interface IProgressBarView extends IProgressBarControllerProps, IProgressBarProps {

}

const ProgressBarView: React.FunctionComponent<IProgressBarView> = (props: IProgressBarView) => {

    const {
        animationRef,
        progressWidth,
        containerStyle,
        updateProgressWidthValue
    } = props

    const componentStyle = styles(props)

    const renderInnerContainer = () => {
        return <Animated.View style={[componentStyle.innerContainer, {
            transform: [{
                translateX: animationRef.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, progressWidth]
                })
            }]
        }]} />
    }

    return <View
        onLayout={updateProgressWidthValue}
        style={[componentStyle.containerStyle, containerStyle]}>
        {renderInnerContainer()}
    </View>

}

export default ProgressBarView