import React, { Component } from 'react';
import { StyleSheet,Vibration, Alert, Text, TextInput, Platform, Button, BackHandler, View, Image, Dimensions} from 'react-native';
import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab, SocialIcon, Avatar, Header} from 'react-native-elements';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const welcomemsg1 = '\n\nWe don’t know what you’ve been told\n'; 
const welcomemsg2 = 'But Madhulika turns 10 years old\n'; 
const welcomemsg3 = 'So wear your camouflage\n';
const welcomemsg4 = 'And spread the word…\n'; 
const welcomemsg5 = '\n\n\n\n';
const welcomemsg6 = 'Please join us to celebrate...';



 export default class WelcomeMessage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            wvisible: false,
        };
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
      }
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
      }

      handleBackButtonClick() {
        BackHandler.exitApp();
        return true;
      }

    _onPressButton= () =>{
        Alert.alert(
            'Want to close App?',
            'This will close your application.',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
                {text: 'OK', onPress: () => this.handleBackButtonClick()},
            ],
            { cancelable: false }
        );
    }

    render() {

        return (
        <View style={styles.welcomeContainer} >
            <View style={styles.welcomeMeassageBox}>
                <Text style={styles.welcomeHeader}>
                    ATTENTION TROOPS!
                </Text>
                <Text style={styles.welcomeText}>{welcomemsg1}</Text>
                <Text style={styles.welcomeText1}>{welcomemsg2}</Text>
                <Text style={styles.welcomeText1}>{welcomemsg3}</Text>
                <Text style={styles.welcomeText1}>{welcomemsg4}</Text>
                <Text style={styles.welcomeText}>{welcomemsg5}</Text>
                <Text style={styles.welcomeText}>{welcomemsg6}</Text>
            </View>
            <View style={styles.buttonClose}>
                <Icon
                    name='close'
                    size={30}
                    color='white'
                    rounded
                    onPress={this._onPressButton}
                    activeOpacity={0.5}
                />
            </View>
            <Image
                style={{width: '100%', height: '100%'}}
                source={require('../Assets/Images/bday_back.jpg')}
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
        top: 135,
        justifyContent: 'center', 
        alignItems: 'center',
      },
      welcomeText : {
        fontSize: 20,
        color: '#00ff00', //'#691a99',
        fontWeight: '700',
        alignItems: 'center',
        justifyContent: 'center', 
      },
      welcomeText1 : {
        fontSize: 20,
        color: '#3E50B4', 
        fontWeight: '700',
        alignItems: 'center',
        justifyContent: 'center', 
      },
      welcomeHeader: {
        fontSize: 30,
        color: '#00ff00', //'#691a99',
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