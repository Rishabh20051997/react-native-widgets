/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PieChart from './widgets/pie-chart';
import PieChartExamples from './examples/pie-chart-example';
import ProgressBarExamples from './examples/progress-bar-example';
import SeekBarExamples from './examples/seek-bar-example';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



function App(): JSX.Element {

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <GestureHandlerRootView>
        {/* <PieChartExamples/> */}
        {/* <ProgressBarExamples/> */}
        <SeekBarExamples />
      </GestureHandlerRootView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
  }
});

export default App;
