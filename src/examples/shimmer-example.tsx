import { StyleSheet, Text, View } from "react-native"
import ShimmerComponent from "../widgets/shimmer"

const ShimmerExample = () => {
    return <View>
        <View style={[styles.mainContainer, styles.centerAlign]}>
            <Text style={styles.headerText}>List Shimmer</Text>
            <ShimmerComponent containerStyle={{ marginVertical: 5 }} />
            <ShimmerComponent containerStyle={{ marginVertical: 5 }} />
            <ShimmerComponent containerStyle={{ marginVertical: 5 }} />
            <ShimmerComponent containerStyle={{ marginVertical: 5 }} />
        </View>

        <View style={styles.mainContainer}>
            <Text style={styles.headerText}>Card Shimmer</Text>
            <View style={styles.rowShimmer}>
                <ShimmerComponent
                    componentHeight={80}
                    componentWidth={80}
                    containerStyle={{ borderRadius: 40 }}
                />
                <View>
                    <ShimmerComponent componentHeight={10} componentWidth={220} containerStyle={{ marginVertical: 5, marginLeft: 10 }} />
                    <ShimmerComponent componentHeight={10} componentWidth={220} containerStyle={{ marginVertical: 5, marginLeft: 10 }} />
                    <ShimmerComponent componentHeight={10} componentWidth={180} containerStyle={{ marginVertical: 5, marginLeft: 10 }} />
                    <ShimmerComponent componentHeight={10} componentWidth={160} containerStyle={{ marginVertical: 5, marginLeft: 10 }} />
                </View>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    centerAlign: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowShimmer: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'space-between',
        padding: 10
    },
    headerText: {
        color: 'black'
    }
})

export default ShimmerExample