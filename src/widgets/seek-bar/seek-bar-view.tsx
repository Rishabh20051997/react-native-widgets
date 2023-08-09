import React, { memo, useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import Animated, { runOnJS, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import {
    DEFAULT_CURRENT_VALUE,
    DEFAULT_TOTAL_VALUE,
    DEFAULT_POINTER_SIZE,
    DEFAULT_PROGRESS_BAR_HEIGHT,
    DEFAULT_PROGRESS_BAR_WIDTH,
    DEFAULT_PADDING,
    DEFAULT_POINTER_COLOR,
    DEFAULT_PROGRESS_BAR_BACKGROUND_COLOR,
    DEFAULT_PROGRESS_BAR_COLOR
} from "./seek-bar-constant";
import { styles } from "./seek-bar-style";

/**
 * 
 * @param {number}  param.currentValue current value of progress
 * @param {number}  param.totalValue max value of progress SeekBar
 * @param {number}  param.pointerSize pointer or bubble size (which can be scroll)
 * @param {number}  param.progressBarHeight progress bar height {default is 6}
 * @param {number}  param.progressWidth progress bar width if not passed it will take 100% width
 * @param {string}  param.progressBarColor color of progress
 * @param {string}  param.pointerColor color of pointer
 * @param {string}  param.progressBarBorderColor color of unfilled color border
 * @param {() => void}  param.onScrollStart callback when pointer starts to move
 * @param {(data: number) => void}  param.onValueChange callback when pointer ends and return the last value
 * @param {(width: number) => void}  param.onWidthCalculated callback when seek bar final width is calculated
 * 
 * @returns SeekBar View
 */
const SeekBarView = ({
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

    // progress bar actual width
    const [progressBarWidth, setProgressBarWidth] = useState(progressWidth || 0)

    // container padding
    const containerPadding = DEFAULT_PADDING

    // LHS restrict point for pointer -> half pointer can go past the scrollbar
    const minDistance = -(pointerSize / 2)

    // RHS restrict point for pointer -> half pointer can go past the scrollbar
    // Note: (pointerSize / 2) is subtracted from progressBarWidth because otherwise pointer was going completely outside
    const maxDistance = progressBarWidth - (pointerSize / 2)

    // current position of pointer
    const currentPosition = totalValue ? (currentValue / totalValue) * progressBarWidth : 0
    const position = useSharedValue(minDistance + currentPosition);

    // last position where cursor was dropped
    const lastPosition = useSharedValue(0);

    // flag to determine if pan responder is processing any touch
    const isScrollingPointer = useSharedValue(false);


    // memoised function of style
    const style = useMemo(() => styles({
        pointerSize,
        progressBarHeight,
        progressBarWidth,
        containerPadding,
        progressBarColor,
        pointerColor,
        progressBarBorderColor
    }), [pointerSize, progressBarHeight, progressBarWidth, containerPadding,
        progressBarColor, pointerColor, progressBarBorderColor])


    // gesture handler
    const panGesture = Gesture.Pan()
        .hitSlop({
            vertical: 10,
            horizontal: 10
        }) // increase the size of pointer touch
        .onBegin(() => {
            runOnJS(onScrollStart)?.() // gives callback to parent the scroll or gesture has started
        })
        .onUpdate((e) => {
            // new value -> previous + new translation
            const updatedValue = (lastPosition?.value + e?.translationX) || lastPosition?.value || 0

            // update value only if its in restricted area
            if (updatedValue <= maxDistance && updatedValue >= minDistance) {
                position.value = updatedValue
            }
            isScrollingPointer.value = true
        })
        .onEnd((e) => {

            // update the last value point
            lastPosition.value = position?.value

            // gives the updated value to parent
            const actualLastPosition = lastPosition.value + (pointerSize / 2) // pointerSize is added because it was subtracted initially
            const updatedPercentage = progressBarWidth ? Math.round((actualLastPosition / progressBarWidth) * totalValue) : 0
            runOnJS(onValueChange)?.(updatedPercentage)

            isScrollingPointer.value = false
        });


    // reanimated style object for pointer gesture   
    const pointerAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: position?.value || 0 }],
    }));

    // reanimated style object for progress bar to show fill state  
    const progressBarAnimatedStyle = useAnimatedStyle(() => ({
        width: (position?.value + pointerSize) || 0
    }));


    // update the progress bar if currentValue props changed from parent
    useEffect(() => {
        const newProgressValue = totalValue ? (currentValue / totalValue) * progressBarWidth : 0

        // update the value if it is in restricted area & gesture is not in process
        if (!isScrollingPointer.value && currentValue >= 0 && currentValue <= totalValue) {
            position.value = newProgressValue + minDistance

            // update the last value for next animation step
            lastPosition.value = position.value
        }
    }, [currentValue, progressBarWidth, totalValue, isScrollingPointer])


    // calculates & updates the actual width of container
    const updateProgressWidthValue = ({ nativeEvent }: LayoutChangeEvent) => {
        const { width } = nativeEvent?.layout

        const hasWidthChanged = Math.abs(width - progressBarWidth) > 1
        if (width && hasWidthChanged) {
            // left and right side padding is reduced from total container size
            setProgressBarWidth(width - (2 * containerPadding))
            runOnJS(onWidthCalculated)(width - (2 * containerPadding))
        }
    }


    return (
        <View collapsable={false} onLayout={updateProgressWidthValue} style={style.container}>
            <View style={style.progressBarContainer}>
                <Animated.View style={[style.activeProgressBarContainer, progressBarAnimatedStyle]} />
            </View>
            <GestureDetector gesture={panGesture}>
                <Animated.View style={[style.box, pointerAnimatedStyle]} />
            </GestureDetector>
        </View>

    );
}

export default memo(SeekBarView)