import React, { Component } from 'react';
import { ScrollView, Vibration, AppRegistry,StyleSheet,Text, Alert, AsyncStorage, Platform, TextInput, Button, View, Image, TouchableHighlight, FlatList, Dimensions, Menu} from 'react-native';
import QRCode from 'react-native-qrcode';

import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab , SocialIcon, Avatar, Header} from 'react-native-elements';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default class DigitalCardScreen extends React.Component {

  state = {
    guest: 'Ranjan De',
    mobile: '9874428418',
    altmobile: '9830028418',
    venue:'Fort William, Kolkata',
    date: '11th February, 2018',
    time: '12:00 noon to 4:00 pm'
  };

  static navigationOptions = {
    tabBarLabel: 'I-Card',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
          <Icon
              name='vcard-o'
              size={30}
              color='white'
              avatarStyle={{ backgroundColor: '#98CBFE'}}
              activeOpacity={0.7}
          />
    ),
  };

  render() {

    const qrvalue = this.state.guest+'|'+this.state.mobile+'|'+this.state.altmobile+'|'+'11022018';

    return (
      <ScrollView>
        <View style={styles.icardContainer}>
            <View style={styles.welcomeMeassageBox}>
              <View style={styles.blocksRow}>
                  <View style={styles.blocksCol}>
                    <Text style={styles.welcomeHeader}>{this.state.guest}</Text>
                    <Text style={styles.welcomeText}>{this.state.mobile}</Text>
                    <Text style={styles.welcomeText}>{this.state.altmobile}</Text>
                  </View>
                  <View style={styles.blocksCol} style={{width: 100, textAlign:'center'}}>
                    <QRCode
                        value={qrvalue}
                        size={100}
                        bgColor='black'
                        fgColor='white'/>
                  </View>
              </View>
              <View style={styles.blocksRow}>
                <View style={styles.blocksCol}>
                    <Text style={styles.welcomeText}>Time: {this.state.time}</Text>
                    <Text style={styles.welcomeText}>Date: {this.state.date}</Text>
                    <Text style={styles.welcomeText}>Venue: {this.state.venue}</Text>
                </View>
              </View>
          </View>
        <Image
          source={require('../Assets/Images/18170.jpg')}
          style={styles.idcardBackground}
        /> 
      </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  icardContainer : {
    width: WINDOW_WIDTH, 
    height: WINDOW_HEIGHT, 
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  idcardBackground: {
    position: 'absolute',
    width: WINDOW_WIDTH, 
    height: WINDOW_HEIGHT - 150, 
    top: - 20, 
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    zIndex: -30,
  },
  blocksRow: {
      flex: 1,
      flexDirection : 'row',
      marginBottom: 5,
  },
  blocksCol: {
    flex: 1,
    flexDirection : 'column',
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
},

  welcomeMeassageBox: { 
    width: WINDOW_WIDTH - 90, 
    marginBottom: 5,
    position: 'absolute',
    zIndex: 30,
    top: 155,
    justifyContent: 'center', 
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 7,
    borderColor: '#FF4081',
  },
  welcomeText : {
    fontSize: 20,
    color: '#691a99',
    fontWeight: '700',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  welcomeHeader: {
    fontSize: 30,
    color: '#691a99',
    alignItems: 'center',
    justifyContent: 'center', 
  },

input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
}
});