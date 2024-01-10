import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import TaskCard from '../TaskCard/TaskCard';

export default function TodaysTask() {
  const [selectedPriority, setSelectePrority] = useState();

  const hendleSelectPrority = priority => {
    setSelectePrority(priority);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Todays Tesk</Text>
        <View style={styles.priorityContainer}>
          <TouchableOpacity
            onPress={() => hendleSelectPrority('all')}
            style={[
              styles.button,
              {
                backgroundColor:
                  selectedPriority === 'all' ? '#120E43' : 'white',
                borderColor: '#120E4d',
              },
            ]}>
            <Text
              style={[
                styles.prorityText,
                {color: selectedPriority === 'all' ? 'white' : '#120E43'},
              ]}></Text>
          </TouchableOpacity>
        </View>
        <View>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1].map(item => (
            <TaskCard isCompleted={false} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  heading: {},
  priorityContainer: {},
});
