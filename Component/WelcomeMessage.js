import React, { Component } from 'react';
import { StyleSheet,Vibration, Alert, Text, TextInput, Platform, Button, View, Image, Dimensions} from 'react-native';
import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab, SocialIcon, Avatar, Header} from 'react-native-elements';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const welcomemsg1 = '\n\nWe don’t know what you’ve been told\n'; 
const welcomemsg2 = 'But Madhulika turns 10 years old\n'; 
const welcomemsg3 = 'So wear your camouflage\n';
const welcomemsg4 = 'And spread the word…\n'; 
const welcomemsg5 = 'We are celebrating MADHULIKA’s 10th birthday on 11th February, 12 pm onwards at Fort William, Kolkata\n\n';
const welcomemsg6 = 'Please join us to celebrate...';



 export default class WelcomeMessage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            wvisible: false,
        };
    }

    _onPressButton= () =>{
        this.setState({
            wvisible: true,
        });  
        Alert.alert('You tapped the button!')
    }

    render() {

        return (
        <View style={styles.welcomeContainer} >
            <View style={styles.welcomeMeassageBox}>
                <Text style={styles.welcomeHeader}>
                    ATTENTION TROOPS!
                </Text>
                <Text style={styles.welcomeText}>{welcomemsg1}</Text>
                <Text style={styles.welcomeText}>{welcomemsg2}</Text>
                <Text style={styles.welcomeText}>{welcomemsg3}</Text>
                <Text style={styles.welcomeText}>{welcomemsg4}</Text>
                <Text style={styles.welcomeText}>{welcomemsg5}</Text>
                <Text style={styles.welcomeText}>{welcomemsg6}</Text>
                
            </View>
            <View style={styles.buttonClose}>
                <Icon
                    name='close'
                    size={30}
                    color='purple'
                    rounded
                    onPress={this._onPressButton}
                    activeOpacity={0.5}
                />
            </View>
            <Image
                style={{width: '100%', height: '100%'}}
                source={require('../Assets/Images/bcard_back_1920x1200.jpg')}
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    welcomeContainer : {
        width: WINDOW_WIDTH, 
        height: WINDOW_HEIGHT, 
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#691A99',
      },
      welcomeMeassageBox: { 
        width: WINDOW_WIDTH - 20, 
        marginBottom: 5,
        position: 'absolute',
        zIndex: 30,
        top: 250,
        justifyContent: 'center', 
        alignItems: 'center',
      },
      welcomeText : {
        fontSize: 20,
        color: '#691a99',
        fontWeight: '700',
        alignItems: 'center',
        justifyContent: 'center', 
      },
      welcomeHeader: {
        fontSize: 30,
        color: '#691a99',
        alignItems: 'center',
        justifyContent: 'center', 
      },
      buttonClose : {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        zIndex: 40,
        top: 10,
        paddingTop: 10,
        paddingRight: 10,
        position: 'absolute', 
        width: '95%'      
      }
});