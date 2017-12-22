import React, { Component } from 'react';
import {StyleSheet,Text, View, } from 'react-native';
import call from 'react-native-phone-call';

export default class Footer extends React.Component{

  callRSVP = (args) => {
    call(args).catch(console.error);
  }
   
  render(){

    const args = {
      number: '9874428418', // String value with the number to call
      prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
    }

    return(
        <View style={{flex: 1, flexDirection:'row'}}>
          <View>
            <Text style={styles.FooterText}>RSVP : </Text>
          </View>
          <View>
            <Text style={styles.FooterText}
              onPress={() => {
                this.callRSVP(args);
              }}
              title={args.number}
            >Ranjan De - {args.number}</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  FooterText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 5,
  }
});
