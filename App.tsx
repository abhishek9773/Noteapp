import {SafeAreaView, StyleSheet, View} from 'react-native';
// import {HomeScreen} from './src/screen/HomeScreen';
import {ComplitedTask} from './src/screen/ComplitedTask';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.component}>
        {/* <HomeScreen /> */}
        <ComplitedTask />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  component: {
    backgroundColor: 'black',
  },
});

export default App;
