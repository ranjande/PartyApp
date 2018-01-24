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

  constructor(props){
    super(props);
      this.state = {
        user: props.screenProps,
      };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.dressContainer}>
            <Image
                source={require('../Assets/Images/dresscode.png')} 
                style={styles.dress}
              />
              <Text style={styles.dresscodeTextHdr}>CRACKING THE DRESS CODE</Text>
              <Text style={styles.dresscodeText}>There is a dress code inside Fort William. </Text>
              <Icon
                  name='male'
                  size={25}
                  color='black'
                  avatarStyle={{ backgroundColor: '#98CBFE'}}
                  activeOpacity={0.7}
              />
              <Text style={styles.dresscodeText}>For Men, it’s formal Western Attire. No casual shoes, no strap shoes not even sneakers. </Text>
              <Icon
                  name='female'
                  size={25}
                  color='black'
                  avatarStyle={{ backgroundColor: '#98CBFE'}}
                  activeOpacity={0.7}
              />
              
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
    height: WINDOW_HEIGHT - 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
  dress: {
    width: 300,
    height: 200
  },
  dresscodeTextHdr: {
    fontSize: 20,
    fontColor: '#000000',
    fontWeight: '700',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
  },
  dresscodeText: {
    fontSize: 15,
    fontColor: '#000000',
    fontWeight: '700',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 15,
  }
});