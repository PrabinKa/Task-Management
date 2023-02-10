import { View, Text } from 'react-native'
import React from 'react';
import { SubScreenHeader } from '../../components';
import User from '../../components/User';

const UserDetails = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: "#fff"}}>
      <View>
        <SubScreenHeader onPress={()=> navigation.goBack()}/>
      </View>
      <View>
        <User/>
      </View>
    </View>
  )
}

export default UserDetails