import React, { Component } from 'react';
import { StyleSheet,Vibration, Text, Alert, Platform, Button, View, Image, Dimensions} from 'react-native';
import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab , SocialIcon, Avatar, Header} from 'react-native-elements';
import call from 'react-native-phone-call';
import { TabNavigator, navigation } from "react-navigation";


export default class SideHamBurgerMenu extends React.Component {


constructor(props) {
    super(props);
    this.state = {
        navTab: 'Home',
    };
}


  callRSVP = (args) => {
    call(args).catch(console.error);
  }

  navigateTab = (args) => {
    Alert.alert(args);
    //this.props.SIDE_NAV.navigation.navigate(args);
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
                  onPress={() => this.navigateTab('Map')}
                  activeOpacity={0.7}
              />
              <Text style={styles.headerLeftText} onPress={() => this.navigateTab('Map')}>Get Direction</Text>
            </View>
            <View style={styles.headerLeftIcon}>
              <Icon
                  name='vcard-o'
                  size={20}
                  color='white'
                  avatarStyle={{ backgroundColor: '#98CBFE'}}
                  onPress={() => this.navigateTab('ICard')}
                  activeOpacity={0.7}
              />
              <Text style={styles.headerLeftText} onPress={() => this.navigateTab('ICard')}>
                Your Digital I-Card
              </Text>
            </View>
          
          <View style={styles.headerLeftIcon}>
              <Icon
                    name='calendar'
                    size={20}
                    color='white'
                    avatarStyle={{ backgroundColor: '#98CBFE'}}
                    onPress={() => this.navigateTab('Calendar')}
                    activeOpacity={0.7}
                />
                <Text style={styles.headerLeftText} onPress={() => this.navigateTab('Calendar')}>Block your Calendar</Text>
            </View>             
            <View style={styles.headerLeftIcon}>
              <Icon
                  name='car'
                  size={20}
                  color='white'
                  avatarStyle={{ backgroundColor: '#98CBFE'}}
                  onPress={() => this.navigateTab('Park')}
                  activeOpacity={0.7}
              />
              <Text style={styles.headerLeftText} onPress={() => this.navigateTab('Park')}>Parking Area</Text>
            </View>
            <View style={styles.headerLeftIcon}>
              <Icon
                  name='male'
                  size={20}
                  color='white'
                  avatarStyle={{ backgroundColor: '#98CBFE'}}
                  onPress={() => this.navigateTab('Dress')}
                  activeOpacity={0.7}
              />
              <Text style={styles.headerLeftText} onPress={() => this.navigateTab('Dress')}>Dress Code</Text>
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
        marginTop: 5,
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