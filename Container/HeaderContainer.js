import React, { Component } from 'react';

import {StyleSheet,Text, Button, View, Platform, Modal} from 'react-native';
import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab , SocialIcon, Avatar, Header} from 'react-native-elements';


import MyCalendar from '../Component/calendarEvents'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
      'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });

const agent = 'Ranjan';
  

export default class HeaderC extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home',
            modalVisible: false,
            active: true,
        };
      }
  
    setModalVisible(visible, selIcon) {
      this.setState({modalVisible: visible, selectedTab: selIcon});
    }
  render(){
    return (
      <View>
        <MyCalendar />
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', borderBottomWidth: 1, borderBottomColor: '#fff', height: 50}}>
            <View style={styles.headerIcon}>
              <Text style={styles.welcome}>
                  Welcome {agent.toLocaleUpperCase()}
              </Text>
            </View>
            <View style={styles.headerIcon}>
              <Icon
                  name='bell'
                  size={20}
                  color='#455A64'
                  iconStyle={{backgroundColor: '#98CBFE'}}
                  onPress={() => this.setModalVisible(true, 'add-calendar')}
                  activeOpacity={0.7}
              />
            </View> 
            <View style={styles.headerIcon}>
              <Icon
                  name='bars'
                  size={30}
                  color='white'
                  avatarStyle={{ backgroundColor: '#98CBFE'}}
                  onPress={() => this.setModalVisible(true, 'hamburger-menu')} 
                  activeOpacity={0.7}
              />
            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F50057', height: 55, width: '100%'}}>
            <View style={styles.headerIcon}>
              <Icon
                  name='home'
                  size={35}
                  color='white'
                  avatarStyle={{ backgroundColor: '#98CBFE'}}
                  onPress={() => this.setModalVisible(true, 'home')} 
                  activeOpacity={0.7}
              />
            </View>
            <View style={styles.headerIcon}>
              <Icon
                  name='map'
                  size={30}
                  color='white'
                  avatarStyle={{ backgroundColor: '#98CBFE'}}
                  onPress={() => this.setModalVisible(true, 'google-map')} 
                  activeOpacity={0.7}
              />
            </View>
            <View style={styles.headerIcon}>
              <Icon
                  name='vcard-o'
                  size={30}
                  color='white'
                  avatarStyle={{ backgroundColor: '#98CBFE'}}
                  onPress={() => this.setModalVisible(true, 'invitation-card')} 
                  activeOpacity={0.7}
              />
            </View>
          
          <View style={styles.headerIcon}>
              <Icon
                  name='calendar'
                  size={35}
                  color='white'
                  iconStyle={{backgroundColor: '#98CBFE'}}
                  onPress={() => this.setModalVisible(true, 'add-calendar')}
                  activeOpacity={0.7}
              />
            </View>             
            <View style={styles.headerIcon}>
              <Icon
                  name='car'
                  size={30}
                  color='white'
                  avatarStyle={{ backgroundColor: '#98CBFE'}}
                  onPress={() => this.setModalVisible(true, 'parking-info')} 
                  activeOpacity={0.7}
              />
            </View>
          </View>



          <Modal presentationStyle="overFullScreen"
                  animationType="none"
                  
                  transparent={false}
                  
                  visible={this.state.modalVisible}
                  onRequestClose={() => {alert("Modal has been closed.")}}
                  onShow={() => {alert('Everything showed.')}}
              >
                <View style={{backgroundColor: '#000', width: 300, height: 300, borderWidth: 10, borderColor : '#333'}}>
                    <Text>Modal Window</Text>
                </View>
        </Modal>


      </View>
    );
  }
}

            {/*
            <Text style={styles.instructions}>
                To get started, edit App.js
            </Text>
            <Text style={styles.instructions}>
                {instructions}
            </Text> 
            */}


const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'left',
        color: '#ffffff',
        fontWeight: '700',
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      headerIcon: {
        paddingTop: 5,
        paddingRight: 15,
        paddingLeft: 15,
        justifyContent: 'center', 
        alignItems: 'center',
      }
});