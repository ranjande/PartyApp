import React, { Component } from 'react';
import {AppRegistry, StyleSheet,Text, Button, View, Platform, Modal, ScrollView, TouchableOpacity, Image, TouchableHighlight, FlatList,} from 'react-native';
import {Video, VideoResizeMode} from 'react-native-video';
import Crashes from "mobile-center-crashes";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
      'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });

  
export default class MovieC extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home',
            modalVisible: false,
        };
      }
  
    setModalVisible(visible, selIcon) {
      this.setState({modalVisible: visible, selectedTab: selIcon});
    }
  render(){
    return (
        <ScrollView>
        <View style={styles.mainBlocks}>
            <View style={styles.movieblocksRow}>
                <Image
                    style={{width: '100%', height: '100%'}}
                    source={require('../Assets/Images/madhulika/IMG_20170315.jpg')}
                /> 
            </View>
            <View style={styles.movieblocksRow}>
                <View style={styles.movieblocksCol}>

                </View>
                <View style={styles.movieblocksCol}>
                </View>
            </View>
            <View style={styles.movieblocksRow}>
                <Text>MIDDD</Text>
            </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
});