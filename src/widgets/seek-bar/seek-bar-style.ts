import { StyleSheet } from "react-native";

export const styles = ({
    pointerSize,
    progressBarHeight,
    progressBarWidth,
    containerPadding,
    progressBarColor,
    progressBarBorderColor,
    pointerColor
}: ISeekBarStyleProps) => StyleSheet.create({
    container: {
        flex: 1,
        padding: containerPadding
    },
    progressBarContainer: {
        width: progressBarWidth,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: progressBarBorderColor,
        borderRadius: 5,
        height: progressBarHeight
    },
    activeProgressBarContainer: {
        backgroundColor: progressBarColor,
        borderWidth: 0.5,
        borderColor: progressBarColor,
        borderRadius: 6,
        height: progressBarHeight + 2,
        marginTop: -1
    },
    box: {
        position: 'absolute',
        top: -(pointerSize - (progressBarHeight + (2 * containerPadding))) / 2,
        left: containerPadding,
        height: pointerSize,
        width: pointerSize,
        backgroundColor: pointerColor,
        borderRadius: pointerSize / 2,
        zIndex: 1
    },
});