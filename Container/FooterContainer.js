import React, { Component } from 'react';
import {StyleSheet,Text, View, } from 'react-native';
import call from 'react-native-phone-call';


export default class Footer extends React.Component{

  callRSVP = (args) => {
    call(args).catch(console.error);
  }
   
  render(){

    const args1 = {
      host: 'Ranjan',
      number: '9874428418', // String value with the number to call
      prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
    }
    const args2 = {
      host: 'Subhra',
      number: '9830028418', // String value with the number to call
      prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
    }
    return(
        <View style={{flex: 1, flexDirection:'row', alignItems: 'flex-start'}}>
          <View>
            <Text style={styles.FooterText}>RSVP : </Text>
          </View>
          <View>
              <Text style={styles.FooterText}
                onPress={() => {
                  this.callRSVP(args1);
                }}
                title={args1.number}
              >{args1.host} - {args1.number}
            </Text>
          </View>
          <View>
            <Text style={styles.FooterText}
              onPress={() => {
                this.callRSVP(args2);
              }}
              title={args2.number}
            >{args2.host} - {args2.number}</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  FooterText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
  }
});
