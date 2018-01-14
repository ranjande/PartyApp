import React, { Component } from 'react';
import { Vibration, AppRegistry,StyleSheet,Text, Alert, AsyncStorage, Platform, Button, View, Image, TouchableHighlight, FlatList, Dimensions, Menu} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {ReactVideoPackage, Video} from 'react-native-video';

import HeaderC from './Container/HeaderContainer.js';
import MovieC from './Container/MovieContainer.js';
import Footer from './Container/FooterContainer.js';

import WelcomeMessage from './Component/WelcomeMessage.js';
import SideHamBurgerMenu from './Component/SideHamMenu.js';
import renderIf from './Component/renderIf';

//import styles from './Assets/Styles/styles';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;


export default class PartyApp extends Component {

    constructor(props) {
      super(props);
      this.state = {
          wvisible: true,
          sidemenu: false,
          whicmovie: 'home',
          menuselect: 'home',
      };
  }


componentDidMount(){ 

    animateSideMenu = () => {
      this.setState({
        sidemenu: true,
      });      
    }

    cancelWelcome = () =>{
        this.setState({
          wvisible: false,
        });  
    }

    setTimeout(function(){
        Vibration.vibrate();
        cancelWelcome();
      }, 1000);
} 

  render() {
    return (
      <View style={styles.mainContainer}>
        {renderIf(this.state.wvisible, 
            <View style={styles.WelcomeContainer}>
              <WelcomeMessage />
          </View>
        )}
        <View style={styles.headerContainer}>
          <HeaderC navmenu = {this.state.menuselect} />
        </View>

        {renderIf(this.state.sidemenu, 
          <View style={styles.SideMenuContainer}>
            <SideHamBurgerMenu />
          </View>
        )}
        {renderIf(this.state.whicmovie, 
          <View style={styles.movieContainer}>
              <MovieC />
          </View>
        )}
        <View style={styles.footerContainer}>
            <Footer />
        </View>
      </View>
    );
  }
}




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
  }
});
