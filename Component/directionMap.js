import React, { Component } from 'react';
import { ScrollView, Vibration, AppRegistry,StyleSheet,Text, Alert, AsyncStorage, Platform, Button, View, Image, TouchableHighlight, FlatList, Dimensions, Menu} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab , SocialIcon, Avatar, Header} from 'react-native-elements';
import Crashes from "mobile-center-crashes";


const { WINDOW_WIDTH, WINDOW_HEIGHT } = Dimensions.get('window');

export default class MapDirectionScreen extends React.Component<{}> {

  static navigationOptions = {
    tabBarLabel: 'Locate',
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

  constructor(props) {
    super(props);
    this.state = {
      initialPosition: '',
      lastPosition: '',
      coordinates: [
        {
          latitude: 22.6413802,
          longitude: 88.4707479,
        },
        {
          latitude:22.550432,
          longitude:88.339831,
        },
      ],
    };
    this.mapView = null;
  }

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
       (position)=> {
          const initialPosition = JSON.stringify(position);
          this.setState({initialPosition});
       },
       (error) => alert(error.message),
       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
       const lastPosition = JSON.stringify(position);
       this.setState({ lastPosition });
    });
 }
 componentWillUnmount = () => {
   navigator.geolocation.clearWatch(this.watchID);
 }

  watchID: ?number = null;

  render() {

    const region = {
      longitude:88.3393902,
      latitude:22.5560008,
      latitudeDelta:0.022,
      longitudeDelta:0.0021
    } 

    const ASPECT_RATIO = WINDOW_WIDTH / WINDOW_HEIGHT;
    const LATITUDE = 22.550432;
    const LONGITUDE = 88.339831;
    const LATITUDE_DELTA = 0.022;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
    const GOOGLE_MAPS_APIKEY = 'AIzaSyDXRs3OKZNE3p8NdxHKc2pP42cTwIyH2ZM';

    return (
      <View style ={styles.container}>
        <MapView style={styles.map}
          provider = {MapView.POOVIDER_GOOGLE}
          initialRegion={region}
          onMapReady = {console.log('Map Loaded')}
        >
          <MapView.Marker
            coordinate={{latitude:22.5560008, longitude:88.3393902}}
            pinColor="red"
            title="Army Officer's Institute, Fort William"
          />	

          <MapView.Marker
            coordinate={{latitude:22.6413802, longitude:88.4707479}}
            pinColor="blue"
            title="Siddha Town, Rajarhat"
          />	

          <MapViewDirections
            origin={this.state.coordinates[0]}
            waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): null}
            destination={this.state.coordinates[this.state.coordinates.length-1]}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="black"
            /*
            onReady={(result) => {
              this.mapView.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: (width / 20),
                  bottom: (height / 20),
                  left: (width / 20),
                  top: (height / 20),
                }
              });
            }}
            onError={(errorMessage) => {
               console.log('GOT AN ERROR'+ errorMessage);
            }}*/
          />


        </MapView> 

        <View style={styles.Drive}>
            <Text style = {styles.boldText}>
               Initial position: {this.state.initialPosition}
            </Text>
            <Text style = {styles.boldText}>
               Current position: {this.state.lastPosition}
            </Text>
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
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  Drive: {
    height: 100,
    width: 400,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    flexDirection : 'column',
  },
  boldText: {
    fontSize: 10,
    color: 'blue',
 }
});