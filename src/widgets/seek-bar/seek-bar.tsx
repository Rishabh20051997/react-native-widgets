import { memo } from "react";
import SeekBarView from "./seek-bar-view";
import {
    DEFAULT_CURRENT_VALUE,
    DEFAULT_TOTAL_VALUE,
    DEFAULT_POINTER_SIZE,
    DEFAULT_PROGRESS_BAR_HEIGHT,
    DEFAULT_PROGRESS_BAR_WIDTH,
    DEFAULT_PROGRESS_BAR_COLOR,
    DEFAULT_PROGRESS_BAR_BACKGROUND_COLOR,
    DEFAULT_POINTER_COLOR
} from "./seek-bar-constant";

/**
 * 
 * @param {number}  param.currentValue current value of progress
 * @param {number}  param.totalValue max value of progress seek bar
 * @param {number}  param.pointerSize pointer or bubble size (which can be scroll)
 * @param {number}  param.progressBarHeight progress bar height {default is 6}
 * @param {number}  param.progressWidth progress bar width if not passed it will take 100% width
 * @param {string}  param.progressBarColor color of progress
 * @param {string}  param.pointerColor color of pointer
 * @param {string}  param.progressBarBorderColor color of unfilled color border
 * @param {() => void}  param.onScrollStart callback when pointer starts to move
 * @param {(data: number) => void}  param.onValueChange callback when pointer ends and return the last value
 * @param {(width: number) => void}  param.onWidthCalculated callback when width of container is calculated -> used to maintain width
 * @returns SeekBar
 */
const SeekBar = ({
    currentValue = DEFAULT_CURRENT_VALUE,
    totalValue = DEFAULT_TOTAL_VALUE,
    pointerSize = DEFAULT_POINTER_SIZE,
    progressBarHeight = DEFAULT_PROGRESS_BAR_HEIGHT,
    progressWidth = DEFAULT_PROGRESS_BAR_WIDTH,
    progressBarColor = DEFAULT_PROGRESS_BAR_COLOR,
    pointerColor = DEFAULT_POINTER_COLOR,
    progressBarBorderColor = DEFAULT_PROGRESS_BAR_BACKGROUND_COLOR,
    onValueChange = () => { },
    onScrollStart = () => { },
    onWidthCalculated = () => { }
}: ISeekBarProps) => {

    return <SeekBarView
        currentValue={currentValue}
        totalValue={totalValue}
        pointerSize={pointerSize}
        progressBarHeight={progressBarHeight}
        progressWidth={progressWidth}
        progressBarColor={progressBarColor}
        pointerColor={pointerColor}
        progressBarBorderColor={progressBarBorderColor}
        onValueChange={onValueChange}
        onScrollStart={onScrollStart}
        onWidthCalculated={onWidthCalculated}
    />
}

export default memo(SeekBar)