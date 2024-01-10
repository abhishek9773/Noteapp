import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TaskCard from '../../components/TaskCard/TaskCard';

export default function ComplitedTask() {
  return (
    <View>
      <Text>ComplitedTask</Text>
      <ScrollView>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1].map(item => (
          <TaskCard isCompleted={false} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
