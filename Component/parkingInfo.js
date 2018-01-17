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
      longitude:88.3411023,
      latitude:22.5553296,
      latitudeDelta:0.009,
      longitudeDelta:0.009
    } 

    return (
        <View style ={styles.container}>
            <MapView style={styles.map}
              provider = {MapView.POOVIDER_GOOGLE}
              initialRegion={region}
              location = 'rmy Officiers Institute, Fort William, Kolkata'
              onMapReady = {console.log('Map Loaded')}
            >
            
            <MapView.Marker
                coordinate={{latitude:22.5546958, longitude:88.3410475}}
                pinColor="red"
                title="Army Officiers Institute, Fort William"
                showCallout
            />	         
            <MapView.Marker
                coordinate={{latitude:22.5561231, longitude:88.3418801}}
                pinColor="purple"
                title="Parking Area: 1"
            />	
            <MapView.Marker
                coordinate={{latitude:22.5553296, longitude:88.3411023}}
                pinColor="green"
                title="Parking Area: 2"
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
    paddingBottom: 50,
    fontsize: 15,
  }
});