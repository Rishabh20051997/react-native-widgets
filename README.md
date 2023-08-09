This is a react native project for widget reference
* Pie Chart
* Progress Bar
* Pie Chart 

# Pie Chart

>**Note**: Has dependency of library:  **react-native-svg**
## Example 1 - Basic Pie Chart
<img width="284" alt="Screenshot 2023-08-09 at 5 23 10 PM" src="https://github.com/Rishabh20051997/react-native-widgets/assets/50832570/1cef2acf-c463-40ef-80b8-787076b1a21b">


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
<img width="284" alt="Screenshot 2023-08-09 at 5 23 20 PM" src="https://github.com/Rishabh20051997/react-native-widgets/assets/50832570/ff12abda-78aa-4490-9fac-dc6c99eed426">


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
<img width="500" alt="Screenshot 2023-08-09 at 5 27 35 PM" src="https://github.com/Rishabh20051997/react-native-widgets/assets/50832570/6c0a6ae4-bb19-47a5-a398-e69d97264d43">


```bash

<ProgressBar
   progressValue={10}
   containerStyle={{
        borderRadius: 10,
   }}
/>
```

## Example 2 - Animating Progress Bar


https://github.com/Rishabh20051997/react-native-widgets/assets/50832570/e9c6e58b-561c-43fb-a86d-dd2a3f004989



```bash
const [progressBarValue, updateProgressBarValue] = useState(0)

useEffect(() => {
   setInterval(() => {
      updateProgressBarValue(previousValue => previousValue + 5)
   }, 1000)
}, [])

<ProgressBar
   progressValue={progressBarValue}
   containerStyle={{
        borderRadius: 10
   }}
/>
```

# Seek Bar

>**Note**: Has dependency which is required by almost all project **react-native-gesture-handler**,**react-native-reanimated**
## Example 1 - Basic Seek Bar


https://github.com/Rishabh20051997/react-native-widgets/assets/50832570/f453ef4a-c55f-4f25-a318-41d459ceeca9


```bash
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
```


# Shimmer

## Example 1 - List Shimmer



https://github.com/Rishabh20051997/react-native-widgets/assets/50832570/ae9718ee-7d68-4931-88c2-c90fc6d08da0


```bash
 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>List Shimmer</Text>
    <ShimmerComponent containerStyle={{ marginVertical: 5 }} />
    <ShimmerComponent containerStyle={{ marginVertical: 5 }} />
    <ShimmerComponent containerStyle={{ marginVertical: 5 }} />
    <ShimmerComponent containerStyle={{ marginVertical: 5 }} />
 </View>
```

## Example 2 - Card Shimmer


https://github.com/Rishabh20051997/react-native-widgets/assets/50832570/e0ddb9b0-cc90-473a-9534-74fac292fbf4



```bash
<View style={{ flex: 1}}>
    <Text>Card Shimmer</Text>
    <View style={{ flex: 1, flexDirection: 'row', alignContent: 'space-between', padding: 10}}>
        <ShimmerComponent
            componentHeight={80}
            componentWidth={80}
            containerStyle={{ borderRadius: 40 }}
        />
        <View>
            <ShimmerComponent componentHeight={10} componentWidth={220} containerStyle={{ marginVertical: 5marginLeft: 10 }} />
            <ShimmerComponent componentHeight={10} componentWidth={220} containerStyle={{ marginVertical: 5marginLeft: 10 }} />
            <ShimmerComponent componentHeight={10} componentWidth={180} containerStyle={{ marginVertical: 5marginLeft: 10 }} />
            <ShimmerComponent componentHeight={10} componentWidth={160} containerStyle={{ marginVertical: 5marginLeft: 10 }} />
        </View>
    </View>
</View>
```



