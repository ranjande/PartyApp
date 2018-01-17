import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, Vibration, AppRegistry,StyleSheet,Text, Alert, AsyncStorage, Platform, Button, View, Image, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab , SocialIcon, Avatar, Header} from 'react-native-elements';
import FadingSlides from 'react-native-fading-slides';


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
            <FadingSlides
              slides={slides}
              fadeDuration={200}
              stillDuration={1000}
              height={350}
              startAnimation={true}
            />
            </View>
            {/* <ActivityIndicator size="large" color="#0000ff" />*/}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainBlocks : {
    flex:1,
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,
  },
  movieblocksRow: {
      backgroundColor: '#FFFFFF',
      width: '100%',
      height: 360,
      flexDirection : 'column',
      paddingBottom: 10,
  },
});



const slides = [
  {
    image: require('../Assets/Images/madhulika/1.jpg'),
    imageWidth: '100%',
    imageHeight: 350,
    title: 'Hello World',
    subtitle: 'This is a beautiful world',
    titleColor: '#0000ff',
    subtitleColor: '#0000ff',
  },
  {
    image: require('../Assets/Images/madhulika/2.jpg'),
    imageWidth: '100%',
    imageHeight: 350,
    title: 'Bye World',
    subtitle: 'This is a see you soon',
    titleColor: '#0000ff',
    subtitleColor: '#0000ff',
  },
  {
    image: require('../Assets/Images/madhulika/3.jpg'),
    imageWidth: '100%',
    imageHeight: 350,
    title: 'Bye World',
    subtitle: 'This is a see you soon',
    titleColor: '#0000ff',
    subtitleColor: '#0000ff',
  },
  {
    image: require('../Assets/Images/madhulika/4.jpg'),
    imageWidth: '100%',
    imageHeight: 350,
    title: 'Bye World',
    subtitle: 'This is a see you soon',
    titleColor: '#0000ff',
    subtitleColor: '#0000ff',
  },
  {
    image: require('../Assets/Images/madhulika/5.jpg'),
    imageWidth: '100%',
    imageHeight: 350,
    title: 'Bye World',
    subtitle: 'This is a see you soon',
    titleColor: '#0000ff',
    subtitleColor: '#0000ff',
  },
  {
    image: require('../Assets/Images/madhulika/6.jpg'),
    imageWidth: '100%',
    imageHeight: 350,
    title: 'Bye World',
    subtitle: 'This is a see you soon',
    titleColor: '#0000ff',
    subtitleColor: '#0000ff',
  },
  {
    image: require('../Assets/Images/madhulika/7.jpg'),
    imageWidth: '100%',
    imageHeight: 350,
    title: 'Bye World',
    subtitle: 'This is a see you soon',
    titleColor: '#0000ff',
    subtitleColor: '#0000ff',
  },
  {
    image: require('../Assets/Images/madhulika/8.jpg'),
    imageWidth: '100%',
    imageHeight: 350,
    title: 'Bye World',
    subtitle: 'This is a see you soon',
    titleColor: '#0000ff',
    subtitleColor: '#0000ff',
  },
  {
    image: require('../Assets/Images/madhulika/9.jpg'),
    imageWidth: '100%',
    imageHeight: 350,
    title: 'Bye World',
    subtitle: 'This is a see you soon',
    titleColor: '#0000ff',
    subtitleColor: '#0000ff',
  },
  {
    image: require('../Assets/Images/madhulika/IMG_20170315.jpg'),
    imageWidth: '100%',
    imageHeight: 350,
    title: 'Bye World',
    subtitle: 'This is a see you soon',
    titleColor: '#0000ff',
    subtitleColor: '#0000ff',
  }
];