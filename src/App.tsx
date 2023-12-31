/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ScrollView,
  StyleSheet
} from 'react-native';
import PieChartExamples from './examples/pie-chart-example';
import ProgressBarExamples from './examples/progress-bar-example';
import SeekBarExamples from './examples/seek-bar-example';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ShimmerExample from './examples/shimmer-example';



function App(): JSX.Element {

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <GestureHandlerRootView>
        <PieChartExamples/>
        <ProgressBarExamples/>
        <SeekBarExamples />
        <ShimmerExample/>
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
