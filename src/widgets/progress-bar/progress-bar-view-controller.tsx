import { useEffect, useRef, useState } from 'react'
import { Animated, LayoutChangeEvent } from 'react-native'


const useProgressBarViewController = (props: IProgressBarProps): IProgressBarControllerProps => {

    const { progressValue = 0 } = props

    const fadeAnim = useRef(new Animated.Value(0)).current
    const [containerWidth, setContainerWidth] = useState(0)

    // animation function -> moves from range 0 to 100
    const startAnimation = (value: number) => {
        Animated.timing(
            fadeAnim,
            {
                toValue: value,
                duration: 1000,
                useNativeDriver: true
            }
        ).start()
    }

    // start and update the animation corresponding to {progressValue}
    useEffect(() => {
        if (containerWidth) {
            startAnimation(progressValue)
        }
    }, [progressValue, containerWidth])


    // updates the actual width of container
    const updateProgressWidthValue = ({ nativeEvent }: LayoutChangeEvent) => {
        const { width } = nativeEvent.layout
        setContainerWidth(width)
    }

    return {
        updateProgressWidthValue,
        progressWidth: containerWidth,
        animationRef: fadeAnim
    }
}

export default useProgressBarViewController
