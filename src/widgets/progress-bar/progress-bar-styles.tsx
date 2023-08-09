import { StyleSheet } from 'react-native'

export const styles = (props: IProgressBarProps) => StyleSheet.create({
    containerStyle: {
        overflow: 'hidden',
        width:  props.width,
        height: props.height,
        backgroundColor: props.progressBarColor
    },
    innerContainer: {
        height: props.height,
        backgroundColor: props.progressBackgroundColor
    }
})