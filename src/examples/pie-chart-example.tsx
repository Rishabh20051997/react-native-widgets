import { StyleSheet, View } from "react-native"
import PieChart from "../widgets/pie-chart"

// data sample
const chartArrayData = [{
    value: 10,
    color: 'red'
},
{
    value: 30,
    color: 'green'
},
{
    value: 15,
    color: 'blue'
}]

const PieChartExamples = () => {
    return <View>
        <View style={styles.card}>
            <PieChart
                dataArray={chartArrayData}
            />
        </View>

        <View style={styles.card}>
            <PieChart
                size={100}
                dataArray={chartArrayData}
            />
        </View>

        <View style={styles.card}>
            <PieChart
                dataArray={chartArrayData}
                isDoughnut={true}
            />
        </View>

        <View style={styles.card}>
            <PieChart
                dataArray={chartArrayData}
                isDoughnut={true}
                strokeWidth={40}
            />
        </View>

        <View style={styles.card}>
            <PieChart
                dataArray={chartArrayData}
                isDoughnut={true}
                strokeWidth={40}
                doughnutTextProps={{
                    children: 'Hello'
                }}
                doughnutTextStyle={{ color: 'black' }}
            />
        </View>

    </View>
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default PieChartExamples