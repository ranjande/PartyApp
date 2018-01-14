import React, { Component } from 'react';
import { ScrollView, Vibration, AppRegistry,StyleSheet,Text, Alert, AsyncStorage, Platform, Button, View, Image, TouchableHighlight, FlatList, Dimensions, Menu} from 'react-native';
import MapView from 'react-native-maps';
import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab , SocialIcon, Avatar, Header} from 'react-native-elements';
import Crashes from "mobile-center-crashes";

export default class ParkingInfoScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Park',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
          <Icon
              name='car'
              size={30}
              color='white'
              avatarStyle={{ backgroundColor: '#98CBFE'}}
              activeOpacity={0.7}
          />
    ),
  };

  render() {

    const region = {
      longitude:88.3393902,
      latitude:22.5560008,
      latitudeDelta:0.009,
      longitudeDelta:0.009
    } 

    return (
        <View style ={styles.container}>
            <MapView style={styles.map}
              provider = {MapView.POOVIDER_GOOGLE}
              initialRegion={region}
              location = 'Kolkata'
              onMapReady = {console.log('Map Loaded')}
            >
            <MapView.Marker
                coordinate={{latitude:22.5560008, longitude:88.3393902}}
                pinColor="purple"
                title="Parking Area: 1"
            />	
            <MapView.Marker
                coordinate={{latitude:22.5565148, longitude:88.3398102}}
                pinColor="green"
                title="Parking Area: 2"
            />	
          </MapView>  
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