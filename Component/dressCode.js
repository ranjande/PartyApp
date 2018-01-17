import React, { Component } from 'react';
import { ScrollView, Vibration, AppRegistry,StyleSheet,Text, Alert, AsyncStorage, Platform, Button, View, Image, TouchableHighlight, FlatList, Dimensions, Menu} from 'react-native';

import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab , SocialIcon, Avatar, Header} from 'react-native-elements';


export default class DressCodeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Dress',
    tabBarIcon: ({ tintColor }) => (
          <Icon
              name='male'
              size={30}
              color='white'
              avatarStyle={{ backgroundColor: '#98CBFE'}}
              activeOpacity={0.7}
          />
    ),
    
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.dressContainer}>
            <Image
                source={require('../Assets/Images/dresscode.png')} 
                style={styles.dress}
                width={'100%'}
                height={'100%'}
              />
              <Text style={styles.dresscodeTextHdr}>CRACKING THE DRESS CODE</Text>
              <Text style={styles.dresscodeText}>There is a dress code inside Fort William, so please adhere to it. </Text>
              <Text style={styles.dresscodeText}>For Men, it’s formal Western Attire. No casual shoes, no strap shoes not even sneakers. </Text>
              <Text style={styles.dresscodeText}>For Women, There is no specific dress code for women. :)</Text>
        </View>
      </ScrollView>
    );
  }
}

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  dressContainer: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    backgroundColor: '#EFEFEF',
  },
  dress: {
    borderWidth: 1,
    width: 300,
    height: 200,
    alignItems: 'center'
  },
  dresscodeTextHdr: {
    fontSize: 30,
    fontColor: '#000000',
    fontWeight: 'bold',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
  },
  dresscodeText: {
    fontSize: 20,
    fontColor: '#000000',
    fontWeight: 'bold',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 5,
  }
});