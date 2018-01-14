import React, { Component } from 'react';
import { ScrollView, Vibration, AppRegistry,StyleSheet,Text, Alert, AsyncStorage, Platform, Button, View, Image, TouchableHighlight, FlatList, Dimensions, Menu} from 'react-native';
import MapView from 'react-native-maps';
import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab , SocialIcon, Avatar, Header} from 'react-native-elements';
import Video, {VideoResizeMode} from 'react-native-video';


export default class MyHomeScreen extends React.Component<{}> {
  
  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
          <Icon
              name='home'
              size={30}
              color='white'
              avatarStyle={{ backgroundColor: '#98CBFE'}}
              activeOpacity={0.7}
          />
    ),
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.mainBlocks}>
            <View style={styles.movieblocksRow}>
            <Video source={{uri: "https://www.youtube.com/watch?v=VgvpPFIhjws", mainVer: 1, patchVer: 0}} // Looks for .mp4 file (background.mp4) in the given expansion version. 
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
            </View>
            <View style={styles.movieblocksRow}>
                <View style={styles.movieblocksCol}>
                <Image
                    source={require('../Assets/Images/party_card.jpg')}
                    style={{width: 50, height: 50}}
                /> 
                </View>
                <View style={styles.movieblocksCol}>
                <Image
                    source={require('../Assets/Images/party_card.jpg')}
                    style={{width: 50, height: 50}}
                /> 
                </View>
            </View>
            <View style={styles.movieblocksRow}>
            <Image
                    source={require('../Assets/Images/party_card.jpg')}
                    style={{width: 50, height: 50}}
                /> 
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
    width: 200,
    height: 300,
    borderWidth: 3,
    borderColor: '#000'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  mainBlocks : {
    flex: 1,
    flexDirection : 'column',
    height: '100%',
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