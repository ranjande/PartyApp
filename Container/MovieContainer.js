import React, { Component } from 'react';
import {AppRegistry, StyleSheet,Text, Button, View, Platform, Modal, ScrollView, TouchableOpacity, Image, TouchableHighlight, FlatList,} from 'react-native';
import {ReactVideoPackage, Video} from 'react-native-video';
import { Player } from 'video-react';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
      'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });

  
export default class Movie extends React.Component{

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
                {/*<Player>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                </Player> */}
                </View>
                <View style={styles.movieblocksCol}>
                <Text>RRR</Text>
                {/*
                    // Within your render function, assuming you have a file called 
                    // "background.mp4" in your expansion file. Just add your main and (if applicable) patch version 
                    <Video source={{uri: "../Assets/Movies/20171014.mp4", mainVer: 1, patchVer: 0}} // Looks for .mp4 file (background.mp4) in the given expansion version. 
                        rate={1.0}                   // 0 is paused, 1 is normal. 
                        volume={1.0}                 // 0 is muted, 1 is normal. 
                        muted={false}                // Mutes the audio entirely. 
                        paused={false}               // Pauses playback entirely. 
                        resizeMode="cover"           // Fill the whole screen at aspect ratio. 
                        repeat={true}                // Repeat forever. 
                        onLoadStart={this.loadStart} // Callback when video starts to load 
                        onLoad={this.setDuration}    // Callback when video loads 
                        onProgress={this.setTime}    // Callback every ~250ms with currentTime 
                        onEnd={this.onEnd}           // Callback when playback finishes 
                        onError={this.videoError}    // Callback when video cannot be loaded 
                        style={styles.backgroundVideo} />
        
                        // Later to trigger fullscreen 
                        this.player.presentFullscreenPlayer()
                        
                        // To set video position in seconds (seek) 
                        this.player.seek(0)
                */}
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