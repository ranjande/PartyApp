import React, { Component } from 'react';
import { ScrollView, Vibration, AppRegistry,StyleSheet,Text, Alert, AsyncStorage, Platform, Button, View, Image, TouchableHighlight, FlatList, Dimensions, Menu} from 'react-native';
import MapView from 'react-native-maps';
import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab , SocialIcon, Avatar, Header} from 'react-native-elements';
//import Crashes from "mobile-center-crashes";

export default class MapDirectionScreen extends React.Component<{}> {
  static navigationOptions = {
    tabBarLabel: 'Locate',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
          <Icon
              name='map'
              size={30}
              color='white'
              avatarStyle={{ backgroundColor: '#98CBFE'}}
              activeOpacity={0.7}
          />
    ),
  };

  render() {


    const region = {
      longitude:-71.05977,
      latitude:42.35843,
      latitudeDelta:0.0922,
      longitudeDelta:0.0421
    } 
    /*
    const { region } = this.props;
    */
    //console.log(region);

    return (
      <View style ={styles.container}>

        <MapView style={styles.map}
          provider = {MapView.POOVIDER_GOOGLE}
          initialRegion={region}
          location = 'Kolkata'
          onMapReady = {console.log('Map Loaded')}
        >
         } <MapView.Marker coordinate={region} pinColor="red" />
            <MapView.Marker
              coordinate={{latitude:'22.5542', longitude:'88.3359'}}
              pinColor="green"
            />
    </MapView>  
        {/*
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});