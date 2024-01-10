import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TodaysTask from '../../components/TodaysTask/TodaysTask';
import {ProfileScreen} from '../ProfileScreen';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.introText}>
          Hello, $user Here is Your Today Task.
        </Text>
        <ScrollView>
          {/* <TodaysTask /> */}
          <ProfileScreen />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  introText: {
    Color: 'white',
    backgroundColor: '#1FAA59',
    padding: 20,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
});
