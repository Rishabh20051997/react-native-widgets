import { useEffect, useRef, useState } from 'react'
import { Animated } from 'react-native'

/**
 * Return Shimmer controller
 * @param {number} params.componentWidth  defines width of shimmer component
 * @param {number} params.componentHeight defines height of shimmer component
 * @returns
 */

const useShimmerComponentViewController = ({
    componentWidth,
    shimmerColor
}: IShimmerProperties): IShimmerControlProps => {

    const fadeAnim = useRef(new Animated.Value(0)).current
    const [linearGradientArray, setArrayItem] = useState([] as string[])
    const [itemWidth, setItemWidth] = useState(0)

    // did mount -> initialize and calculate linear gradient item width and count
    useEffect(() => {
        const shimmerPlaceholderWidth = ((componentWidth || 0) / 2)
        const itemArray = getLinearGradientItemArray(shimmerPlaceholderWidth)

        const singleItemWidth = itemArray.length
        setItemWidth(shimmerPlaceholderWidth / singleItemWidth)
        setArrayItem(itemArray)
    }, [])

    // Start Animation flows
    useEffect(() => {
        Animated.loop(Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: getAnimationDuration(),
                useNativeDriver: true
            }
        )).start()

    }, [fadeAnim])

     // return array just to parse as linear gradient
    const getLinearGradientItemArray = (totalModulePieces: number) => {
        const itemArray = []
        for (let index = 0; index < totalModulePieces; index++) {
            itemArray.push('')
        }
        return itemArray
    }

    //  returns animation duration
    const getAnimationDuration = () => {
        return 700
    }

    // helper function to convert decimal to Hex
    const decimalToHexString = (number: number) => {
        if (number < 0) {
            number = 0xFFFFFFFF + number + 1;
        }
        return number.toString(16).toUpperCase();
    }

    // returns color for shimmer each item
    const getShimmerGradientColor = (index: number) => {
        const value = Math.round((index / linearGradientArray.length) * 255)
        return shimmerColor + decimalToHexString(value)
    }


  return {
    getShimmerGradientColor,
    linearGradientArray,
    itemWidth,
    fadeAnim
  }

}

export default useShimmerComponentViewController