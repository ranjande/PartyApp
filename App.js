import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, Vibration, AppRegistry, BackAndroid, StyleSheet,Text, Alert, AsyncStorage, Platform, Button, View, Image, TouchableHighlight, Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { TabNavigator } from "react-navigation";
import Crashes from "mobile-center-crashes";

import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab , SocialIcon, Avatar, Header} from 'react-native-elements';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';


import Footer from './Container/FooterContainer.js';
import MyHomeScreen from './Component/homeScreen.js';
import MapDirectionScreen from './Component/directionMap.js';
import DigitalCardScreen from './Component/iCard.js';
import MyCalendar from './Component/calendarEvents.js';
import ParkingInfoScreen from './Component/parkingInfo.js';
import DressCodeScreen from './Component/dressCode.js';
import WelcomeMessage from './Component/WelcomeMessage.js';
import renderIf from './Component/renderIf';
import renderElseIf from './Component/renderElseIf';
import Guestlist from './Assets/Realm/guestlist';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default class PartyApp extends Component {

  constructor(props) {
      super(props);
      this.state = {
          wvisible: true,
          isLogin : false,
          user: {},
          uname: null,
          alarmCall : {
            alarm : false,
            alarmColor : '#ffffff',
            alarmName : 'bell-o',
          },
          GuestData: null,
          guestkey: null,
          uemail: null,
          umobile: null,
          calendarBlocked : false,
          isjoining: false,
          accessToken: null,
      };
  }

  

    componentDidMount(){ 

      _cancelWelcome = () =>{
        this.setState({
          wvisible: false,
        });  
      }

      _checkCalBlock = () =>{
        AsyncStorage.getItem("calendarBlocked").then((value) => {
          if(value == 'true'){
            this.setState({
              calendarBlocked: true,
               alarmCall : {
                alarm : true,
                alarmColor : '#ffffff',
                alarmName : 'bell',
              },
            });  
            clearInterval(calc);           
          }
        }).done();
      }
/*
      loginSuccess = (user) => {
        this.setState({user: user, isLogin: true, accessToken: user.accessToken, uname: user.name, uemail: user.email, wvisible: false, GuestData : getUserDetails(user)});
      }
*/
      getUserDetails = (user) => {
        const guest = Guestlist().map((usrDB) => {
          Alert.alert(usrDB.email+'######'+user.email)
           return (usrDB.email == user.email || usrDB.altemail == user.email) ? usr : null}
          );
          Alert.alert(JSON.stringify(guest));
          return JSON.stringify(guest);
      }

      this._setupGoogleSignin();
      setTimeout(function(){
          Vibration.vibrate(1100);
          _cancelWelcome();
      }, 4000);

      let calc = setInterval(function(){
          _checkCalBlock();
      }, 1500)
    } 

    componentWillMount(){
      //AsyncStorage.multiSet([['GuestData', JSON.stringify(this.state.GuestData)], ['k2', 'val2']]);

       
      deleteDataonLogout = () => {
        AsyncStorage.getItem("calendarBlocked").then((value) => {
          if(value !== 'true'){
            AsyncStorage.getAllKeys((err, keys) => {
              AsyncStorage.multiRemove(keys, (err) => {
                // keys k1 & k2 removed, if they existed
                // do most stuff after removal (if you want)
                Alert.alert(keys);
              });
            });
          }
        }).done();
      }
         


          AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(keys, (err, stores) => {
              stores.map((result, i, store) => {
                // get at each store's key/value so you can work with it
                let key = store[i][0];
                let val = store[i][1];
                Alert.alert(key, key+'****'+val);
              });
            });
          });
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
    const info = this.state.mykey;
    return (
      <View style={styles.mainContainer}>
        {renderIf(this.state.wvisible, 
            <View style={styles.WelcomeContainer}>
              <WelcomeMessage />
          </View>
        )}
        {renderElseIf((this.state.isLogin == false && this.state.uname == null), 
          <View style={styles.LoginMenuContainer}>
            <View>
              <GoogleSigninButton 
                  style={{width: 230, height: 72}} 
                  color={GoogleSigninButton.Color.Light} 
                  size={GoogleSigninButton.Size.Wide} 
                  onPress={() => { this._signIn()}}
              />
              </View>
              <View>
                <Text>Guest User / Non Google user</Text>
              </View>
              <View>
                <Text>
                 &copy; Ranjan De
                </Text>
              </View>
          </View>
        ,
          <View style={styles.navContainer}>

            {/* Header Top */}
            <View style={styles.headerContainer}>
              <View style={{flexDirection: 'row', flex:1, justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#fff', height: 50}}>
                  <View style={styles.headerIconLeft}>
                      <Text style={styles.welcome}>
                        Welcome {this.state.uname} {this.state.GuestData}
                    </Text>
                  </View>
                  <View style={styles.headerIconRight}>
                    <Icon
                        name={this.state.alarmCall.alarmName}
                        size={28}
                        color={this.state.alarmCall.alarmColor}
                        activeOpacity={0.7}
                        onPress={() => this.stopAlarm()}
                    />
                  </View> 
                  <View style={styles.headerIconRight}>
                    <Icon
                        name='sign-out'
                        size={28}
                        color='white'
                        activeOpacity={0.7}
                        onPress={() => this._signOut()}
                    />
                  </View> 
              </View>
            </View>
            {/* Header Top */}
            
            <MyNavigation screenProps={this.state.user} />
          </View>
        )}
        <View style={styles.footerContainer}>
            <Footer accessToken={ '&copy; Ranjan De'} />
        </View>
      </View>      
    );
  }


  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        webClientId: '460904176105-mq2j6d0p8u529mjs2iidmqmqe528nt6n.apps.googleusercontent.com',
        offlineAccess: true,
        shouldFetchBasicProfile: true,
      });

      const userName = await GoogleSignin.currentUserAsync();
      console.log(userName);
      this.setState({user: userName, uname: userName.name, uemail: userName.email});
    }
    catch(err) {
      console.log("Play services error", err.code, err.message);
    }
  }

  _signIn() {
    GoogleSignin.signIn()
    .then((user) => {
      console.log(user);
      this.setState({user: user, isLogin: true, accessToken: user.accessToken, uname: user.name, uemail: user.email, wvisible: false,});
      Alert.alert('User:'+uname+'Email: '+uemail);
    })
    .catch((err) => {
      console.warn('WRONG SIGNIN', err);
    })
    .done();
  }

  _signOut() {
    GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
      this.setState({user: null, isLogin: false, accessToken: null, uname: null, uemail: null, wvisible: true, GuestData : null});
      //deleteDataonLogout();
      Alert.alert("You have successfully Logged out.", "You can close the application now by clicking close button.")
    })
    .done();
  }

  stopAlarm =() => {
    let nowDate = new Date();
    let startDate = '2018-01-26T18:33:00.000Z';
    let endDate = '2018-02-11T10:30:00.000Z';
    Alert.alert(nowDate);
    if(this.state.alarmCall.alarm == true &&  nowDate > startDate){
      this.setState({
        calendarBlocked: false,
        alarmCall: {alarmName: 'bell-slash', alrtm: false},
      });  
      if(nowDate >= endDate)
      AsyncStorage.setItem('calendarBlocked', 'false');
    }
  }
}



const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    alignItems: 'center'
  },
  navContainer:{
    backgroundColor: '#FFFFFF',
    width: WINDOW_WIDTH , 
    height: WINDOW_HEIGHT - 70,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  footerContainer: {
    backgroundColor:'#263238',
    width: WINDOW_WIDTH, 
    height: 50,
  },
  LoginMenuContainer: {
    backgroundColor: '#F50057', 
    width: WINDOW_WIDTH , 
    height: WINDOW_HEIGHT - 70,
    alignItems: 'center',
    justifyContent: 'space-around',
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

  welcome: {
    fontSize: 15,
    textAlign: 'left',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  headerIconLeft: {
    paddingTop: 0,
    paddingLeft: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
  },
  headerIconRight: {
    justifyContent: 'space-around',
    flex: 1, 
    textAlign: 'center',
    width: '20%',
    paddingRight: 10,
  },
  headerContainer:{
    backgroundColor: '#FF4081',
    height: 50, 
    width: WINDOW_WIDTH,
  },
});
