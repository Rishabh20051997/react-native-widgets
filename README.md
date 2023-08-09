This is a react native project for widget reference
* Pie Chart
* Progress Bar
* Pie Chart 

# Pie Chart

>**Note**: Has dependency of library:  **react-native-svg**
## Example 1 - Basic Pie Chart


```bash

# data sample
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
<PieChart
   size={100}
   dataArray={chartArrayData}
/>
```

## Example 2 - Doughnut Pie Chart


```bash

# data sample
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
<PieChart
   dataArray={chartArrayData}
   isDoughnut={true}
   strokeWidth={40}
   doughnutTextProps={{
      children: 'Hello'
   }}
   doughnutTextStyle={{ color: 'black' }}
/>
```



# Progress Bar Chart

## Example 1 - Basic Progress Bar


```bash

<ProgressBar
   progressValue={10}
   containerStyle={styles.progressBarStyle}
/>
```

## Example 2 - Animating Progress Bar


```bash
const [progressBarValue, updateProgressBarValue] = useState(0)

useEffect(() => {
   setInterval(() => {
      updateProgressBarValue(previousValue => previousValue + 5)
   }, 1000)
}, [])

<ProgressBar
   progressValue={progressBarValue}
   containerStyle={styles.progressBarStyle}
/>
```

# Seek Bar

>**Note**: Has dependency which is required by almost all project **react-native-gesture-handler**,**react-native-reanimated**
## Example 1 - Basic Seek Bar


```bash
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
```