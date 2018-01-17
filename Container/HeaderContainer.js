import React, { Component } from 'react';

import {StyleSheet,Text, Button, View, Platform, Modal, Dimensions, Alert} from 'react-native';
import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab , SocialIcon, Avatar, Header} from 'react-native-elements';

import SideHamBurgerMenu from '../Component/SideHamMenu.js';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const agent = 'Ranjan';
  

export default class HeaderC extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home',
            modalVisible: false,
        };
      }
  
    setModalVisible(visible, selIcon) {
      this.setState({modalVisible: visible, selectedTab: selIcon});
    }
  render(){
    return (
      <View style={styles.headerContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', borderBottomWidth: 1, borderBottomColor: '#fff', height: 50}}>
            <View style={styles.headerIconLeft}>
              <Text style={styles.welcome}>
                  Welcome {agent.toLocaleUpperCase()}
              </Text>
            </View>
            <View style={styles.headerIconRight}>
              <Icon
                  name='bell'
                  size={25}
                  color='#ffffff'
                  iconStyle={{backgroundColor: '#ffffff'}}
                  activeOpacity={0.7}
              />
            </View> 
            {/*<View style={styles.headerIcon}>
              <Icon
                  name='bars'
                  size={35}
                  color='white'
                  avatarStyle={{ backgroundColor: '#98CBFE'}}
                  onPress={() => this.setModalVisible(!this.state.modalVisible, 'hamburger-menu')} 
                  activeOpacity={0.7}
              />
              </View> */}
        </View>
          {/*<Modal presentationStyle="overFullScreen"
                  animationType="slide"
                  transparent={true}
                  visible={this.state.modalVisible}
                  onRequestClose={() => this.setModalVisible(false, 'hamburger-menu')} 
                  //onShow={() => {alert('Everything showed.')}}
              >
                <View style={{backgroundColor: '#F50057', width: 220, height: WINDOW_HEIGHT - 120, top: 50, borderRightWidth: 1, borderRightColor: '#fff' }}>
                  <SideHamBurgerMenu SIDE_NAV={this.props.NAV}/>
                </View>
            </Modal> */}
      </View>
    );
  }
}

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
      headerIconLeft: {
        paddingTop: 5,
        paddingLeft: 15,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: 200,
      },
      headerIconRight: {
        paddingTop: 5,
        padingRight: 15,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      headerContainer:{
        backgroundColor: '#FF4081',
        height: 50, 
        width: WINDOW_WIDTH,
      },
});