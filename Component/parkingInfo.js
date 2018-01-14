import React, { Component } from 'react';
import { ScrollView, Vibration, AppRegistry,StyleSheet,Text, Alert, AsyncStorage, Platform, Button, View, Image, TouchableHighlight, FlatList, Dimensions, Menu} from 'react-native';

import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab , SocialIcon, Avatar, Header} from 'react-native-elements';


export default class ParkingInfoScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Park',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
          <Icon
              name='car'
              size={30}
              color='white'
              avatarStyle={{ backgroundColor: '#98CBFE'}}
              activeOpacity={0.7}
          />
    ),
  };

  render() {
    return (
      <ScrollView style={styles.parkContainer}>
        <Image
            source={require('../Assets/Images/fort-william.png')} 
            style={styles.parkImage}
          />
      </ScrollView>
    );
  }
}

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  parkContainer: {
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
  },
  parkImage: {
    width: WINDOW_WIDTH - 20,
    height: WINDOW_HEIGHT - 20,
  }
});