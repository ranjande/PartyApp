import React, { Component } from 'react';
import { ScrollView, Vibration, AppRegistry,StyleSheet,Text, Alert, AsyncStorage, Platform, TextInput, Button, View, Image, TouchableHighlight, FlatList, Dimensions, Menu} from 'react-native';
import QRCode from 'react-native-qrcode';
import DeviceInfo from 'react-native-device-info';
import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab , SocialIcon, Avatar, Header} from 'react-native-elements';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default class DigitalCardScreen extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'I-Card',
    
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

    const venue = 'Victory Lounge, \nArmy Officers Institute\nFort William, Kolkata';
    const date = '11th February, 2018\n';
    const time = '12:00 noon to 4:00 pm';
    const mobile = DeviceInfo.getPhoneNumber();

    const qrvalue = this.props.screenProps.name+'|'+this.props.screenProps.email+'|'+this.props.screenProps.id+'|'+mobile;

    return (
      <ScrollView>
        <View style={styles.icardContainer}>
            <View style={styles.welcomeMeassageBox}>
              <View style={styles.blocksRow}>
                  <View style={styles.blocksCol}>
                    <Image
                      style={{width: 120, height: 120}}
                      source={{uri: this.props.screenProps.photo}}
                    />
                  </View>
                  <View style={styles.blocksCol}>
                    <QRCode
                        value={qrvalue}
                        size={120}
                        bgColor='black'
                        fgColor='white'/>
                  </View>
              </View>
              <View style={styles.blocksRow}>
                <View style={styles.blocksCol}>
                    <Text style={styles.welcomeHeader}>{this.props.screenProps.name}</Text>
                    <Text style={styles.welcomeText}>Email: {this.props.screenProps.email}</Text>
                    <Text style={styles.welcomeText}>Mobile: {mobile}</Text>
                    <Text style={styles.welcomeText}>Time: {time}</Text>
                    <Text style={styles.welcomeText}>Date: {date}</Text>
                    <Text style={styles.welcomeText}>Venue: {venue}</Text>
                </View>
              </View>
              <View style={styles.blocksRow}>
                <View style={styles.blocksCol}>
                    <Text style={styles.Note}>{this.props.screenProps.id}</Text>
                </View>
              </View>
          </View>
        <Image
          source={require('../Assets/Images/11022018.png')}
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
    marginLeft: 5,
    marginRight: 5,
},

  welcomeMeassageBox: { 
    width: WINDOW_WIDTH - 60, 
    marginBottom: 5,
    position: 'absolute',
    zIndex: 30,
    top: 15,
    justifyContent: 'center', 
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#FF4081',
  },
  welcomeText : {
    fontSize: 15,
    color: '#691a99',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  welcomeHeader: {
    fontSize: 25,
    color: '#691a99',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  Note: {
    paddingTop: 5,
    fontSize: 8,
    textAlign: 'center',
    color: 'black'      
  }
});