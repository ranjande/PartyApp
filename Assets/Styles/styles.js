import React, { Component } from 'react';
import { AppRegistry, Dimensions, StyleSheet} from 'react-native';
import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab , SocialIcon, Avatar, Header} from 'react-native-elements';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  headerContainer:{
    backgroundColor: '#FF4081',
    height: 100, 
    width: WINDOW_WIDTH,
  },
  movieContainer:{
    backgroundColor: '#FFFFFF',
    width: WINDOW_WIDTH , 
    height: WINDOW_HEIGHT - 170,
  },
  footerContainer: {
    backgroundColor:'#263238',
    width: WINDOW_WIDTH, 
    height: 50,
  },
  SideMenuContainer: {
    backgroundColor: '#F50057', 
    top: 49, zIndex: 25, 
    height: WINDOW_HEIGHT - 119, 
    width: 240, 
    position: 'absolute', 
    borderRightWidth: 10, 
    borderRightColor:'#fff',
    display: 'flex',
  },
  WelcomeContainer: {
    width: WINDOW_WIDTH, 
    height: WINDOW_HEIGHT, 
    flex: 1,
    flexDirection: 'row',
    zIndex: 10,
    top: 2,
    position: 'absolute',
    display: 'flex',
  },
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
  },
  footerText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 5,
  }
});
