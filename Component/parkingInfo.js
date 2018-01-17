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
                showCallout
            />	
            <MapView.Marker
                coordinate={{latitude:22.5565148, longitude:88.3398102}}
                pinColor="green"
                title="Parking Area: 2"
                showCallout
            />	
          </MapView>  
          <View>
            <Text style={styles.parkInfoText}>Parking Area: 1 &amp; 2</Text>
          </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 430,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#EEEEEE'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  parkInfoText:{
    fontWeight: '700',
    fondColor: '#0000ff', 
    paddingTop: 30,
    fontsize: 15,
  }
});