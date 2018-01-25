import React, { Component } from 'react';
import { StyleSheet,Vibration, Alert, Text, TextInput, Platform, Button, View, Image, Dimensions} from 'react-native';
import * as AddCalendarEvent from 'react-native-add-calendar-event';

import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab , SocialIcon, Avatar, Header} from 'react-native-elements';

import renderIf from '../Component/renderIf';
import renderElseIf from '../Component/renderElseIf';

export default class MyCalendar extends React.Component {
/*
    setAlarmNotification = () => {
        const alarmNotifData = {
            id: "12345",                                                    // Required
            title: 'Madhulika\'s 10th Birthday Celebration',               // Required
            message: "Army Officers Institute, Fort WIlliam, Kolkata",                             // Required
            ticker: "Madhulika\'s 10th Birthday Celebration",                   
            auto_cancel: true,                                              // default: true
            vibrate: true,                                      
            vibration: 100,                                             // default: 100, no vibration if vibrate: false
            small_icon: "ic_launcher",                                  // Required
            large_icon: "ic_launcher",                          
            play_sound: true,                                    
            sound_name: null,                                            // Plays custom notification ringtone if sound_name: null
            color: "red",                                       
            schedule_once: true,                                    // Works with ReactNativeAN.scheduleAlarm so alarm fires once
            tag: 'some_tag',                                    
            fire_date: "01-24-2018 01:00:00"                            // Date for firing alarm, Required for ReactNativeAN.scheduleAlarm. Format: dd-MM-yyyy HH:mm:ss
        };

        ReactNativeAN.scheduleAlarm(alarmNotifData);
    }
    */

    componentWillMount(){
        
    }

    getCalAuth = () => {
        const eventConfig = {
            title :'Madhulika\'s 10th Birthday Celebration',
            location: 'Army Officers Institute, Fort WIlliam, Kolkata',
            notes: 'Please call before you reach to destination.',
            startDate: '2018-02-11T6:30:00.000Z',
            endDate: '2018-02-11T10:30:00.000Z',
          };
           
          AddCalendarEvent.presentNewCalendarEventDialog(eventConfig)
            .then(eventId => {
              //handle success (receives event id) or dismissing the modal (receives false)
              if (eventId) {
                Alert.alert('Thank you!','Event saved to your calendar.\n\nEvent ID: '+eventId);
                this.setState({blocked: true});
                this.props.navigation.setParams({alarmCall: {alram: true, alarmName : 'bell'}});
              } else {
                Alert.alert('Sorry! ','You have not save this event to your calendar.');
              }
            })
            .catch((error) => {
              // handle error such as when user rejected permissions
              Alert.alert('', 'You have rejected permission to add to your calendar.');
            });
          };

    static navigationOptions = {
        tabBarLabel: 'Event',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
                <Icon
                    name='calendar'
                    size={30}
                    color='white'
                    avatarStyle={{ backgroundColor: '#98CBFE'}}
                    activeOpacity={0.7}
                />
        ),
    };

        constructor(props) {
            super(props);
            this.state = {
                blocked : false,
            };
        }

    render(){

        return(
                <View style={styles.calendarContent}>
                    <View style={styles.CalendarInfo}>
                        <Text style={styles.textBoldHdr}>Madhulika's 10th Birthday Celebration</Text>
                        <Text style={styles.textBold}>Venue: Victory Lounge, Army Officers Institute, Fort WIlliam, Kolkata</Text>
                        <Text style={styles.textBold}>Date: 11th February, 2018</Text>
                        <Text style={styles.textBold}>Time: 12 NOON to 4:00 PM</Text>
                        <Text style={styles.textBold}>Entry: East Gate (Gate 1) &amp; South Gate</Text>
                    </View>
                     {renderIf(this.state.blocked == true, 
                    <View style={styles.NoteInfo}>
                        <Text style={styles.textBoldBlocked}>
                            Dear {this.props.screenProps.name}, Thank you for blocking your Calendar. 
                        </Text>
                    </View>
                     )}
                    <View>
                        <Button
                            onPress={() => this.getCalAuth()}
                            title="Block Your Calendar"
                            style={styles.calendarButton}
                            color="#FF4081"
                        />
                    </View>
                    <View style={styles.NoteInfo}>
                        <Text style={styles.Note}>You can call us by TAP any of below number(s) before you reach.</Text>
                        <Text style={styles.Note}>For parking : Please tap PARK.</Text>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    calendarButton: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 15,
        width: 200,
        height: 50,
        textAlign: 'center',
        backgroundColor: '#FF4081',
      },
      calendarContent: {
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        width: '100%',
        textAlign: 'center'
      },
      CalendarInfo: {
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        width: '100%',
        textAlign: 'center'         
      },
      textBoldHdr: {
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center',
        paddingBottom: 25,
      },
      textBold: {
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'center',
        paddingBottom: 15,
      },
      textBoldBlocked:{
        fontSize: 15,
        color: '#0000ff',
        fontWeight: '700',
        textAlign: 'center',
        paddingBottom: 5,
      },
      NoteInfo: {
        paddingTop: 15,
      },
      Note: {
        fontSize: 10,
        fontWeight: '700',
        textAlign: 'center',
        color: 'red'      
      }
});