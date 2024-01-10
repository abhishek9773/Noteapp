import {
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icon from 'react-native-vector-icons/AntDesign';

export default function ProfileScreen() {
  const [username, setUsername] = useState('userName');
  const [isEditeUsername, setIsEditUsername] = useState(false);
  const selectImageFromLibrary = () => {};
  return (
    <ScrollView>
      <View>
        <View style={{alignItem: 'center', marginTop: 20}}>
          <TouchableOpacity onPress={selectImageFromLibrary}>
            <Image
              style={{width: 150, height: 150}}
              soruce={{
                url: 'https://shutterstock.7eer.net/c/2052558/560528/1305?u=https%3A%2F%2Fwww.shutterstock.com%2Fimage-photo%2Fman-icon-vector-1040084344',
              }}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              {isEditeUsername ? (
                <TextInput
                  placeholder="Enter you username"
                  value="username"
                  onChangeText={text => setUsername(text)}
                />
              ) : (
                <view style={[{flexDirection: 'row'}]}>
                  <Text>{username}</Text>
                  <TouchableOpacity onPress={() => setIsEditUsername(true)}>
                    <Icon name="edit" size={24} color="#120E4d" />
                  </TouchableOpacity>
                </view>
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <View>40</View>
          <Text>Complited</Text>
        </View>
        <View>
          <Text>10</Text>
          <Text>Inprogress</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
