import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, Vibration, AppRegistry, TextInput, NativeEventEmitter, BackAndroid, StyleSheet,Text, Alert, AsyncStorage, Platform, Button, View, Image, TouchableHighlight, Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { TabNavigator } from "react-navigation";
import Crashes from "mobile-center-crashes";
import Push from 'appcenter-push';
import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab , SocialIcon, Avatar, Header} from 'react-native-elements';
//import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

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
            guser: {},
            uname: null,
            alarmCall : {
              alarm : false,
              alarmColor : '#ffffff',
              alarmName : 'bell-o',
            },
            GuestData: [],
            guestkey: null,
            uemail: null,
            umobile: null,
            calendarBlocked : false,
            isjoining: false,
            accessToken: null,
            errorText: '',
        };
    }

    componentDidMount(){ 

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
          }
        }).done();
      }

      _cancelWelcome = () =>{
        this.setState({
          wvisible: false,
        });  
      }

      getUserDetails = (user) => {
        let gstDB = null;
        const guest = Guestlist().map((usrDB) => {
            return (usrDB.email === user.email || usrDB.altemail === user.email) ? usrDB : null
          });
          for(i=0;  i< guest.length; i++){
            if(guest[i] != null){
              gstDB = JSON.stringify(guest[i]);
              break;
            }
          }
        return gstDB;
      }

     // this._setupGoogleSignin();
          setTimeout(function(){
              Vibration.vibrate(1000);
              _cancelWelcome();
              _checkCalBlock();
      }, 4000);
    } 

       /* NON GOOGLE LOGIN FUNCTIONS - START */

       getUserName = (usermobile) => {
        let gstDB = null;
        //console.log('Mobile Number: '+usermobile);
        const guest = Guestlist().map((usrDB) => {
            return (usrDB.mobile === parseInt(usermobile)) ? usrDB : null
          });
          console.log(guest);
          for(i=0;  i< guest.length; i++){
            if(guest[i] != null){
              if(guest[i].mobile == parseInt(usermobile) || guest[i].altmobile == parseInt(usermobile)){
                gstDB = guest[i];
                  //console.log(guest[i].name);
                  this.setState({uname: guest[i].name, isLogin: true, GuestData : guest[i]});
                  storeSyncData('GuestData', this.state.GuestData); 
                  storeSyncData('caseLogin', true); 
                  break;
                }
            }
          }
        return gstDB;
      }



      checkGuestName = (event) => {
        //console.log('Mobile Number Start: '+event.nativeEvent.text);
        let mobileno = event.nativeEvent.text;
          if((mobileno != null || mobileno != '') && mobileno.length === 10){
            this.setState({guser: this.getUserName(mobileno)});         
          }else{
            this.setState({errorText: 'Bad User / Mobile number wrongly entered. \n Please enter correct mobile only.'})
          }

      }
      getSetStatusStore = (store, state1) => {
        AsyncStorage.getItem(store).then((value) => {
          this.setState({state1: value});
        }).done();      
      }

      /* NON GOOGLE LOGIN FUNCTIONS - END */



    componentWillMount(){

        storeSyncData = (db, value) => {
          AsyncStorage.setItem(db,value); // changed to object 
        }

        this.getSetStatusStore('caseLogin', 'isLogin');  /* ADDED FOR NON GOOGLE LOGIN FUNCTIONS */
 
        deleteDataonLogout = () => {
          AsyncStorage.getItem("calendarBlocked").then((value) => {
            if(value !== 'true'){
              AsyncStorage.getAllKeys((err, keys) => {
                AsyncStorage.multiRemove(keys, (err) => {
                  console.log('Data removed'+ keys);
                });
              });
            }
          }).done();
        }

        getFromStore = (db) => {
          AsyncStorage.getItem(db).then((value) => {
            this.setState({GuestData: value});
          }).done();
        }

        setBirthdayAlarm = () => {
          this.setAlarmNotification;
        }
      const pushEnabled = Push.isEnabled();
    }

    componentWillUnmount(){
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
              {/*<View>
                  <GoogleSigninButton 
                      style={{width: 230, height: 72}} 
                      color={GoogleSigninButton.Color.Light} 
                      size={GoogleSigninButton.Size.Wide} 
                      onPress={() => { this._signIn()}}
                  />
              </View>*/}
              <View>
                <Text style={styles.welcome}>Please Enter Your Mobile Number to Login</Text>
                <TextInput
                  keyboardType='numeric'
                  placeholder = "Enter Your Mobile Number"
                  style={{height: 50, width: 280, color: '#ffffff', fontSize: 15, backgroundColor: 'black', marginTop: 40, }}
                  onSubmitEditing={(e) => this.checkGuestName(e)}
                />
                <Text>{this.state.errorText}</Text>
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
                          Welcome {this.state.uname} {/*this.state.GuestData */}
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
              <MyNavigation screenProps={this.state.guser}/>
            </View>
          )} 
          <View style={styles.footerContainer}>
              <Footer accessToken={ this.state.accessToken } />
          </View>
        </View>      
      );
    }
/*
    async _setupGoogleSignin() {
      try {
        await GoogleSignin.hasPlayServices({ autoResolve: true });
        await GoogleSignin.configure({
          webClientId: '395434046648-bmeogorvbs42a51e3850ladamqkckb2d.apps.googleusercontent.com',
          //offlineAccess: true,
          shouldFetchBasicProfile: true,
        });

        const userName = await GoogleSignin.currentUserAsync();
        console.log(userName);
        this.setState({guser: userName, uname: userName.name, uemail: userName.email});
        getFromStore('GuestData');
      }
      catch(err) {
        console.log("Play services error", err.code, err.message);
      }
    }

    _signIn() {
      GoogleSignin.signIn()
      .then((user) => {
        console.log(user);
        this.setState({guser: user, isLogin: true, accessToken: user.accessToken, uname: user.name, uemail: user.email, wvisible: false, GuestData : getUserDetails(user)});
        storeSyncData('GuestData', this.state.GuestData);
      })
      .catch((err) => {
        console.warn('WRONG SIGNIN', err);
      })
      .done();
    }

    _signOut() {
      GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
        this.setState({guser: null, isLogin: false, accessToken: null, uname: null, uemail: null, wvisible: true, GuestData : null});
        //deleteDataonLogout();
        //Alert.alert("You have successfully Logged out.", "You can close the application now by clicking close button.")
      })
      .done();
    }

    stopAlarm =() => {
      let nowDate = new Date();
      let startDate = '2018-01-26T18:33:00.000Z';
      let endDate = '2018-02-11T10:30:00.000Z';
      if(this.state.alarmCall.alarm == true &&  nowDate > startDate){
        this.setState({
          calendarBlocked: false,
          alarmCall: {alarmName: 'bell-slash', alrtm: false},
        });  
        if(nowDate >= endDate)
          AsyncStorage.setItem('calendarBlocked', 'false');
      }
    }
    */

    _signOut() {
        this.setState({guser: null, isLogin: false, accessToken: null, uname: null, uemail: null, wvisible: true, GuestData : null});
        storeSyncData('caseLogin', false); 
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
