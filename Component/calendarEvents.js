import React, { Component } from 'react';
import { StyleSheet,Vibration, Alert, Text, TextInput, Platform, Button, View, Image, Dimensions} from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';

export default class MyCalendar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Madhulika\'s 10th Birthday Party',
            settings: {
                location: 'Fort WIllium',
                notes: 'notes',
                startDate: '2018-02-11T12:00:00.000Z',
                endDate: '2018-02-11T16:00:00.000Z',
            },
            cid :''
        };
    }

    getCalAuth = () => {
        RNCalendarEvents.authorizationStatus()
            .then(status => {
                RNCalendarEvents.saveEvent(
                    this.state.title, 
                    this.state.settings
                )
                .then(id => {
                    //RNCalendarEvents.findEventById(id)
                    Alert.alert('Calendar' + id );
                   // Alert.alert('Object '+ RNCalendarEvents.findEventById(id))
                  // handle success
                })
                .catch(error => {
                  // handle error
                });
           // Alert.alert('You are authorised - YOur calendare updated');
                // handle status
            })
            .catch(error => {
            // handle error
        });
    }


    render(){
        return(
            <View>
                <Text onPress={() => this.getCalAuth()}>Calendar</Text>
            </View>
        );
    }

}