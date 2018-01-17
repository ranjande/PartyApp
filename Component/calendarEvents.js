import React, { Component } from 'react';
import { StyleSheet,Vibration, Alert, Text, TextInput, Platform, Button, View, Image, Dimensions} from 'react-native';
import * as AddCalendarEvent from 'react-native-add-calendar-event';

import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab , SocialIcon, Avatar, Header} from 'react-native-elements';

import renderIf from '../Component/renderIf';
import renderElseIf from '../Component/renderElseIf';

export default class MyCalendar extends React.Component {

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
                Alert.alert('Event saved to your calendar.\n\nEvent ID: '+eventId);
                this.setState({blocked: true});
              } else {
                Alert.alert('You have not save this event to your calendar.');
              }
            })
            .catch((error) => {
              // handle error such as when user rejected permissions
              Alert.alert('You have rejected permission to add to your calendar.');
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
                title: 'De'
            };
        }

    render(){
        return(
                <View style={styles.calendarContent}>
                   
                    <View style={styles.CalendarInfo}>
                        <Text style={styles.textBoldHdr}>Madhulika's 10th Birthday Celebration</Text>
                        <Text style={styles.textBold}>Venue: Army Officers Institute, Fort WIlliam, Kolkata</Text>
                        <Text style={styles.textBold}>Date: 11th February, 2018</Text>
                        <Text style={styles.textBold}>Time: 12 NOON to 4:00 PM</Text>
                        <Text style={styles.textBold}>Entry Point: Gate No 1 and South Gate</Text>
                    </View>
                     {renderElseIf(this.state.blocked == true,
                    <View>
                        <Text>
                           Your Calendar is blocked  {this.state.blocked}
                        </Text>
                    </View>
                     )}
                    <View>
                    <Button
                            onPress={() => this.getCalAuth()}
                            title="Block your Calendar"
                            style={styles.headerLeftText}
                        />
                    </View>
                    <View>
                        <Text style={styles.Note}>Please call before you reach to destination.</Text>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    headerLeftText: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 15,
        width: 250,
        height: 50,
        textAlign: 'center',
        backgroundColor: '#FF4081',
        flexDirection:'bottom'
      },
      calendarContent: {
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        width: '100%',
        textAlign: 'center'
      },
      CalendarInfo: {
        paddingBottom: 25,
        paddingLeft: 15,
        paddingRight: 15,
        width: '100%',
        textAlign: 'center'         
      },
      textBoldHdr: {
        fontSize: 30,
        fontWeight: 700,
        textAlign: 'center',
        paddingBottom: 25,
      },
      textBold: {
        fontSize: 15,
        fontWeight: 700,
        textAlign: 'center',
        paddingBottom: 15,
      },
      Note: {
        fontSize: 10,
        fontWeight: 700,
        textAlign: 'justfy',
        color: 'red'      
      }
});