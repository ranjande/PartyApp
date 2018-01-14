import React, { Component } from 'react';
import { ScrollView, Vibration, AppRegistry,StyleSheet,Text, Alert, AsyncStorage, Platform, Button, View, Image, TouchableHighlight, Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {ReactVideoPackage, Video} from 'react-native-video';
import { TabNavigator } from "react-navigation";
import Crashes from "mobile-center-crashes";

import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab , SocialIcon, Avatar, Header} from 'react-native-elements';

import HeaderC from './Container/HeaderContainer.js';
import Footer from './Container/FooterContainer.js';


import MyHomeScreen from './Component/homeScreen.js';
import MapDirectionScreen from './Component/directionMap.js';
import DigitalCardScreen from './Component/iCard.js';
import MyCalendar from './Component/calendarEvents.js';
import ParkingInfoScreen from './Component/parkingInfo.js';
import DressCodeScreen from './Component/dressCode.js';


import WelcomeMessage from './Component/WelcomeMessage.js';

import renderIf from './Component/renderIf';

//import styles from './Assets/Styles/styles';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;



class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      <Image
       /* source={require('./notif-icon.png')} */
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}



export default class PartyApp extends Component {

    constructor(props) {
      super(props);
      this.state = {
          wvisible: true,
          navTab: 'Home',
      };
  }




  componentDidMount(){ 
    cancelWelcome = () =>{
        this.setState({
          wvisible: false,
        });  
    }
    setTimeout(function(){
        Vibration.vibrate(500);
        cancelWelcome();
    }, 10000);
} 

  render() {

    const MyNavigation = TabNavigator({
      Home: { screen: MyHomeScreen, },
      Map: {screen: MapDirectionScreen,},
      ICard: {screen: DigitalCardScreen,},
      Calendar: {screen: MyCalendar,},
      Park: {screen: ParkingInfoScreen,},
      Dress: {screen: DressCodeScreen},
    }, 
    {
      tabBarPosition: 'top',
      animationEnabled: true,
      tabBarOptions: {
        showIcon: true,
        activeTintColor: '#ffffff',
        style: {
          width: WINDOW_WIDTH,
          backgroundColor: '#F50057',
          alignItems: 'stretch' 
        }, 
        iconStyle: styles.icon,
        labelStyle: {
          fontSize: 7,
          fontWeight: 'bold',
        },
      },
      
    swipeEnabled: false,
    });
    
    return (
      <View style={styles.mainContainer}>
        {renderIf(this.state.wvisible, 
            <View style={styles.WelcomeContainer}>
              <WelcomeMessage />
          </View>
        )}
        <View style={styles.navContainer}>
          <HeaderC NAV={this.props.navigation}/>
          <MyNavigation />
        </View>
{/*}
        <View style={styles.headerLeftWelcome}>
            <Avatar
                  large
                  rounded
                  title='Madhulika'
                  source={require("./Assets/Images/madhulika/IMG_20170618.jpg")}
                  avatarStyle={{backgroundColor: '#F50057'}}
                  //onPress={() => this.setModalVisible(true, 'Time Table')}
                  activeOpacity={0.7}
              />
            </View>
      <Text>22.5542° N, 88.3359° E</Text>*/}
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
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  },
  navContainer:{
    backgroundColor: '#ffffff',
    width: WINDOW_WIDTH , 
    height: WINDOW_HEIGHT - 70,
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
  icon: {
    width: 85,
    height: 45,
  },


  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  mainBlocks : {
    flex: 1,
    flexDirection : 'column',
    height: 800,
    marginTop: 10,
  },
  movieblocksRow: {
      backgroundColor: '#FFFFFF',
      flex: 1,
      flexDirection : 'row',
      height: 150,
      marginBottom: 10,
  },
  movieblocksCol: {
    borderWidth: 2,
    borderColor: '#FF80AB',
    flex: 1,
    flexDirection : 'column',
    height: 180,
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
},
});
