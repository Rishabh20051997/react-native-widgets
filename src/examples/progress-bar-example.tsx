import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"

import ProgressBar from "../widgets/progress-bar"


const ProgressBarExamples = () => {

    const [progressBarValue, updateProgressBarValue] = useState(0)

    useEffect(() => {
        setInterval(() => {
            updateProgressBarValue(previousValue => previousValue + 5)
        }, 1000)

    }, [])
    return <View style={{ flex: 1 }}>
        <View style={styles.card}>
            <Text style={styles.headerText}>Normal Progress Bar</Text>
            <ProgressBar
                progressValue={10}
                containerStyle={styles.progressBarStyle}
            />
        </View>

        <View style={styles.card}>
        <Text style={styles.headerText}>Animating Progress Bar</Text>
            <ProgressBar
                progressValue={progressBarValue}
                containerStyle={styles.progressBarStyle}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    card: {
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    progressBarStyle: {
        borderRadius: 10,
    },
    headerText: {
        color: 'black'
    }
})

export default ProgressBarExamples