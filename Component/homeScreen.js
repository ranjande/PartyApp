import React, { Component } from 'react';
import { ScrollView, Vibration, AppRegistry,StyleSheet,Text, Alert, AsyncStorage, Platform, Button, View, Image, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab , SocialIcon, Avatar, Header} from 'react-native-elements';
import FadingSlides from 'react-native-fading-slides';
import renderElseIf from '../Component/renderElseIf';


export default class MyHomeScreen extends React.Component<{}> {

  
  static navigationOptions = {
    tabBarLabel: 'Home',


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

  constructor(props){
    super(props);
    this.state = {
        isAnimation : true,
        animTitle : 'Stop Animation',
    };
  }

  _toggleAnimation = (isAnimation, animTitle, animAltTitle) => {
      if(this.state.isAnimation == false) animTitle = animAltTitle;
      this.setState({isAnimation, animTitle});
  }


  render() {
    return (
      <ScrollView>
        <View style={styles.mainBlocks}>
            <View style={styles.movieblocksRow}>
            {renderElseIf(this.state.isAnimation, 
              <FadingSlides
                slides={slides}
                fadeDuration={800}
                stillDuration={1800}
                height={380}
                startAnimation={this.state.isAnimation}
              />
              ,
              <Image
                  source={require('../Assets/Images/madhulika/IMG_20170618.jpg')}
                  style={{width: '100%', height: '100%'}}
              /> 
            )}
            </View>
        </View>
        <Button 
          title={this.state.animTitle}
          onPress={() => this._toggleAnimation(!this.state.isAnimation, 'Start Animation', 'Stop Animation')}
        />
        {/*<Text> {JSON.stringify(this.props.screenProps)} </Text>*/}
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
    alignItems :'center',
    backgroundColor: '#E0E0E0'
  },
  movieblocksRow: {
      backgroundColor: '#E0E0E0',
      width: '100%',
      height: 375,
      flexDirection : 'column',
      paddingBottom: 10,
  },
});



const slides = [
  {
    image: require('../Assets/Images/madhulika/1.jpg'),
    imageWidth: '100%',
    imageHeight: 375,
    title: 'Hello World!',
    subtitle: 'This is a beautiful world',
    titleColor: '#ffffff',
    subtitleColor: '#00ff00',
  },
  {
    image: require('../Assets/Images/madhulika/2.jpg'),
    imageWidth: '100%',
    imageHeight: 375,
    title: 'Baby Doll',
    subtitle: 'Take me on your lap..',
    titleColor: '#00ff00',
    subtitleColor: '#00ff00',
  },
  {
    image: require('../Assets/Images/madhulika/3.jpg'),
    imageWidth: '100%',
    imageHeight: 375,
    title: 'Don\'t Call Me Naughty',
    subtitle: 'I am the coolest.',
    titleColor: '#ff0000',
    subtitleColor: '#ff0000',
  },
  {
    image: require('../Assets/Images/madhulika/4.jpg'),
    imageWidth: '100%',
    imageHeight: 375,
    title: 'Attention',
    subtitle: 'I wanna say something',
    titleColor: '#00ff00',
    subtitleColor: '#00ff00',
  },
  {
    image: require('../Assets/Images/madhulika/5.jpg'),
    imageWidth: '100%',
    imageHeight: 375,
    title: 'Fashionsita',
    subtitle: 'Look at me..',
    titleColor: '#ffffff',
    subtitleColor: '#00ff00',
  },
  {
    image: require('../Assets/Images/madhulika/6.jpg'),
    imageWidth: '100%',
    imageHeight: 375,
    title: 'Sweet Charmer',
    subtitle: 'Oh my God!',
    titleColor: '#ffffff',
    subtitleColor: '#00ff00',
  },
  {
    image: require('../Assets/Images/madhulika/7.jpg'),
    imageWidth: '100%',
    imageHeight: 375,
    title: 'Top of the World',
    subtitle: 'I want it that way..',
    titleColor: '#ffffff',
    subtitleColor: '#00ff00',
  },
  {
    image: require('../Assets/Images/madhulika/8.jpg'),
    imageWidth: '100%',
    imageHeight: 375,
    title: 'Awesome Mesome',
    subtitle: 'I\'m the prettiest',
    titleColor: '#ffffff',
    subtitleColor: '#00ff00',
  },
  {
    image: require('../Assets/Images/madhulika/9.jpg'),
    imageWidth: '100%',
    imageHeight: 375,
    title: 'Princess',
    subtitle: 'Call me Cinderella',
    titleColor: '#ffffff',
    subtitleColor: '#00ff00',
  },
  {
    image: require('../Assets/Images/madhulika/IMG_20170315.jpg'),
    imageWidth: '100%',
    imageHeight: 375,
    title: 'Now I\'m Ten',
    subtitle: 'Spreading my wings...',
    titleColor: '#ffffff',
    subtitleColor: '#00ff00',
  }
];