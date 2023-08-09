import React, { memo } from 'react'

import ProgressBarView from './progress-bar-view'
import useProgressBarViewController from './progress-bar-view-controller'
import { DEFAULT_PROGRESS_BAR_BACKGROUND_COLOR, DEFAULT_PROGRESS_BAR_COLOR, DEFAULT_PROGRESS_BAR_WIDTH } from './progress-bar-constant'

/**
 * Progress Bar
 * 
 * @returns the progress bar
 * @param {number | string} params.width provide the width of container
 * @param {number | string} params.height provide the height of container
 * @param {number} params.progressValue represent the current progress -> range 0 to 100
 * @param {string} params.progressBarColor shows progress bar color
 * @param {string} params.progressBackgroundColor shows background color of progress bar
 * @param {ViewStyle} params.containerStyle provide style to main container
 * 
 */
const ProgressBar: React.FunctionComponent<IProgressBarProps> = (props: IProgressBarProps) => {

    const {
        width = '100%',
        height = DEFAULT_PROGRESS_BAR_WIDTH,
        progressValue = 0,
        progressBarColor = DEFAULT_PROGRESS_BAR_COLOR,
        progressBackgroundColor = DEFAULT_PROGRESS_BAR_BACKGROUND_COLOR,
        containerStyle
    } = props

    const {
        animationRef,
        progressWidth,
        updateProgressWidthValue,
    } = useProgressBarViewController(props)

    return <ProgressBarView
        width={width}
        height={height}
        progressValue={progressValue}
        progressBarColor={progressBarColor}
        progressBackgroundColor={progressBackgroundColor}
        progressWidth={progressWidth}
        animationRef={animationRef}
        containerStyle={containerStyle}
        updateProgressWidthValue={updateProgressWidthValue}
    />

}

export default memo(ProgressBar)