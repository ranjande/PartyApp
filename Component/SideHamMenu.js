import React, { Component } from 'react';
import { StyleSheet,Vibration, Text, Alert, Platform, Button, View, Image, Dimensions} from 'react-native';
import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab , SocialIcon, Avatar, Header} from 'react-native-elements';
import call from 'react-native-phone-call';

//import RSVP from '../Controller/MainControllers'

export default class SideHamBurgerMenu extends React.Component {

  callRSVP = (args) => {
    call(args).catch(console.error);
  }
    render() {
      const args = {
        number: '9874428418', // String value with the number to call
        prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
      }
      return (
        <View style={styles.LeftMenuContainer}>
            <View style={styles.headerLeftWelcome}>
            <Avatar
                  large
                  rounded
                  title='Madhulika'
                  source={require("../Assets/Images/madhulika/IMG_20170618.jpg")}
                  avatarStyle={{backgroundColor: '#F50057'}}
                  //onPress={() => this.setModalVisible(true, 'Time Table')}
                  activeOpacity={0.7}
              />
            </View>
            <View style={styles.headerLeftIcon}>
              <Icon
                  name='home'
                  size={25}
                  color='white'
                  avatarStyle={{ backgroundColor: '#98CBFE'}}
                  onPress={() => this.setModalVisible(true, 'home')} 
                  activeOpacity={0.7}
              />
              <Text style={styles.headerLeftText}>HOME</Text>
            </View>
            <View style={styles.headerLeftIcon}>
              <Icon
                  name='map'
                  size={20}
                  color='white'
                  avatarStyle={{ backgroundColor: '#98CBFE'}}
                  onPress={() => this.setModalVisible(true, 'google-map')} 
                  activeOpacity={0.7}
              />
              <Text style={styles.headerLeftText}>Get Direction</Text>
            </View>
            <View style={styles.headerLeftIcon}>
              <Icon
                  name='vcard-o'
                  size={20}
                  color='white'
                  avatarStyle={{ backgroundColor: '#98CBFE'}}
                  onPress={() => this.setModalVisible(true, 'invitation-card')} 
                  activeOpacity={0.7}
              />
              <Text style={styles.headerLeftText}>Your Digital I-Card</Text>
            </View>
          
          <View style={styles.headerLeftIcon}>
              <Icon
                  name='calendar'
                  size={25}
                  color='white'
                  iconStyle={{backgroundColor: '#98CBFE'}}
                  onPress={() => this.setModalVisible(true, 'add-calendar')}
                  activeOpacity={0.7}
              />
              <Text style={styles.headerLeftText}>Block your Calendar</Text>
            </View>             
            <View style={styles.headerLeftIcon}>
              <Icon
                  name='car'
                  size={20}
                  color='white'
                  avatarStyle={{ backgroundColor: '#98CBFE'}}
                  onPress={() => this.setModalVisible(true, 'parking-info')} 
                  activeOpacity={0.7}
              />
              <Text style={styles.headerLeftText}>Parking Information</Text>
            </View>
            <View style={styles.headerLeftIcon}>
              <Icon
                  name='male'
                  size={20}
                  color='white'
                  avatarStyle={{ backgroundColor: '#98CBFE'}}
                  onPress={() => this.setModalVisible(true, 'parking-info')} 
                  activeOpacity={0.7}
              />
              <Text style={styles.headerLeftText}>Dress Codes</Text>
            </View>
            <View style={styles.headerLeftIcon}>
              <Icon
                  name='retweet'
                  size={20}
                  color='white'
                  avatarStyle={{ backgroundColor: '#98CBFE'}}
                  onPress={() => {
                    this.callRSVP(args);
                  }}
                  activeOpacity={0.7}
              />
              <Text style={styles.headerLeftText}
              onPress={() => {
                this.callRSVP(args);
              }}
              >RSVP</Text>
            </View>
          </View>      
      );
    }
  }


const styles = StyleSheet.create({
    LeftMenuContainer: {
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        height: '70%',  
        width: '100%',
        marginTop: 10,
        marginLeft: 10,
        flex:1,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      headerLeftWelcome: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingLeft: 0,
        marginLeft: -10,
        justifyContent: 'center'
      },
      headerLeftIcon: {
        flexDirection: 'row',
        flex:1, 
        paddingTop: 5,
        paddingLeft: 15,
        width: '100%',
      },
      headerLeftText: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 15,
        marginLeft: 15,
      }
});