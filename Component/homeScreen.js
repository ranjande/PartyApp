import React, { Component } from 'react';
import { ScrollView, Vibration, AppRegistry,StyleSheet,Text, Alert, AsyncStorage, Platform, Button, View, Image, Dimensions} from 'react-native';
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
            <View style={styles.movieblocksRow} style={{backgroundColor:'#FFFFFF', width: '100%'}}>
            <FadingSlides
              slides={slides}
              fadeDuration={1500}
              stillDuration={1000}
              height={380}
              startAnimation={true}
            />
            </View>
           {/* <View style={styles.movieblocksRow}>
                <View style={styles.movieblocksCol}>
                  <Text>Hello</Text>
                </View>
              </View> */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainBlocks : {
    flex: 1,
    flexDirection : 'column',
    height: '100%',
  },
  movieblocksRow: {
      backgroundColor: '#FFFFFF',
      flex: 1,
      flexDirection : 'row',
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



const slides = [
  {
    image: require('../Assets/Images/madhulika/1.jpg'),
    imageWidth: '100%',
    imageHeight: 250,
    title: 'Hello World',
    subtitle: 'This is a beautiful world',
    titleColor: '#0000ff',
    subtitleColor: '#0000ff',
  },
  {
    image: require('../Assets/Images/madhulika/2.jpg'),
    imageWidth: 300,
    imageHeight: 250,
    title: 'Bye World',
    subtitle: 'This is a see you soon',
    titleColor: '#0000ff',
    subtitleColor: '#0000ff',
  }
  ,
  {
    image: require('../Assets/Images/madhulika/3.jpg'),
    imageWidth: 300,
    imageHeight: 350,
    title: 'Bye World',
    subtitle: 'This is a see you soon',
    titleColor: '#0000ff',
    subtitleColor: '#0000ff',
  }
  ,
  {
    image: require('../Assets/Images/madhulika/4.jpg'),
    imageWidth: 300,
    imageHeight: 350,
    title: 'Bye World',
    subtitle: 'This is a see you soon',
    titleColor: '#0000ff',
    subtitleColor: '#0000ff',
  }
  ,
  {
    image: require('../Assets/Images/madhulika/5.jpg'),
    imageWidth: 350,
    imageHeight: 350,
    title: 'Bye World',
    subtitle: 'This is a see you soon',
    titleColor: '#0000ff',
    subtitleColor: '#0000ff',
  }
  ,
  {
    image: require('../Assets/Images/madhulika/6.jpg'),
    imageWidth: 350,
    imageHeight: 350,
    title: 'Bye World',
    subtitle: 'This is a see you soon',
    titleColor: '#0000ff',
    subtitleColor: '#0000ff',
  }
  ,
  {
    image: require('../Assets/Images/madhulika/7.jpg'),
    imageWidth: 350,
    imageHeight: 350,
    title: 'Bye World',
    subtitle: 'This is a see you soon',
    titleColor: '#0000ff',
    subtitleColor: '#0000ff',
  }
  ,
  {
    image: require('../Assets/Images/madhulika/8.jpg'),
    imageWidth: 350,
    imageHeight: 350,
    title: 'Bye World',
    subtitle: 'This is a see you soon',
    titleColor: '#0000ff',
    subtitleColor: '#0000ff',
  }
  ,
  {
    image: require('../Assets/Images/madhulika/9.jpg'),
    imageWidth: 350,
    imageHeight: 350,
    title: 'Bye World',
    subtitle: 'This is a see you soon',
    titleColor: '#0000ff',
    subtitleColor: '#0000ff',
  }
  ,
  {
    image: require('../Assets/Images/madhulika/10.jpg'),
    imageWidth: 300,
    imageHeight: 350,
    title: 'Bye World',
    subtitle: 'This is a see you soon',
    titleColor: '#0000ff',
    subtitleColor: '#0000ff',
  }
];