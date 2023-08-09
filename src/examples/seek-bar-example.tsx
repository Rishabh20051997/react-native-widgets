import { useCallback, useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import SeekBar from "../widgets/seek-bar"



const SeekBarExamples = () => {

    const [seekBarValue, updateSeekBarValue] = useState(0)

    useEffect(() => {
        setInterval(() => {
            updateSeekBarValue(previousValue => previousValue + 1)
        }, 1000)
    }, [])

    const updateProgress = useCallback((value: number) => {
        updateSeekBarValue(value)
    }, [])

    return <View style={{ flex: 1 }}>
        <View style={styles.card}>
            <Text style={styles.headerText}>Seek Bar</Text>
            <SeekBar currentValue={seekBarValue} totalValue={100} onValueChange={updateProgress}/>
            <Text style={styles.counterText}>Value: {seekBarValue}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    card: {
        margin: 20,
    },
    progressBarStyle: {
        borderRadius: 10,
    },
    headerText: {
        color: 'black'
    },
    counterText: {
        color: 'black',
        textAlign:'center'
    }
})

export default SeekBarExamples