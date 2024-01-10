import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function TaskCard(item, type, isCompleted) {
  const handleDelete = () => {
    console.log('delete task');
  };
  return (
    <View style={[styles.container, styles[`container_${type}`]]}>
      <View style={styles.inputView}>
        <Text style={styles.title}>task title</Text>
        <Text style={styles.discription}>
          Write some description for this task
        </Text>
      </View>
      <View>
        {!isCompleted ? (
          <BouncyCheckbox
            size={25}
            fillColor="red"
            unfillColor="green"
            innerIconStyle={{borderWidth: 2}}
            onPress={() => {}}
          />
        ) : (
          <TouchableOpacity onPress={handleDelete}>
            <Text>delete</Text>
            <Icon name="closecircle" size={24} color="red" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({});
