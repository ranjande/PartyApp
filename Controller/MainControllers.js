import React, { Component } from 'react';
import {StyleSheet,Text, View, } from 'react-native';
import call from 'react-native-phone-call';


export default class RSVP extends React.Component{

  callRSVP = (args) => {
    call(args).catch(console.error);
  }

  render(){
      return(null);
  }
}
   