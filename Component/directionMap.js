import React, { Component } from 'react';
import { ScrollView, Vibration, AppRegistry,StyleSheet,Text, Alert, AsyncStorage, Platform, Button, View, Image, TouchableHighlight, FlatList, Dimensions, Menu} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import getDirections from 'react-native-google-maps-directions'
import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab , SocialIcon, Avatar, Header} from 'react-native-elements';
import Crashes from "mobile-center-crashes";


const GOOGLE_MAPS_APIKEY = 'AIzaSyDXRs3OKZNE3p8NdxHKc2pP42cTwIyH2ZM';
const { WINDOW_WIDTH, WINDOW_HEIGHT } = Dimensions.get('window');
const ASPECT_RATIO = WINDOW_WIDTH / WINDOW_HEIGHT;

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
        source: {
          latitude: 22.6413802,
          longitude: 88.4707479,
        },
        destination: {
          latitude:22.550432,
          longitude:88.339831,
        }
      };
      this.mapView = null;
    }

    /* GET RECENTER API START */
    findMe = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const {latitude, longitude} = position
          this.setState({source: Object.assign({}, this.state.source, {latitude: position.coords.latitude, longitude: position.coords.longitude})});
          console.log('Init: '+JSON.stringify(this.state.source));
        },
        (error) => console.log(error.message),
        {enableHighAccuracy: true, timeout: 10000, maximumAge: 1000}
      )
      
      this.watchID = navigator.geolocation.watchPosition((position) => {
            const {latitude, longitude} = position
             this.setState({source: Object.assign({}, this.state.source, {latitude: position.coords.latitude, longitude: position.coords.longitude})});
            console.log('Watch: '+JSON.stringify(this.state.source));
        });
    }
    /* GET RECENTER API END */


    /* GET Direction API START */
    handleGetDirections = () => {
      const data = {
        source: this.state.source,
        destination: this.state.destination,
        params: [
          {
            key: "dirflg",
            value: "d"
          }
        ]
      }
      getDirections(data)
    }
    /* GET Direction API END */
     componentDidMount = () => {
        this.findMe;
      }
      
      componentWillUnmount = () => {
        navigator.geolocation.clearWatch(this.watchID);
      }
   
  watchID: ?number = null;



  render() {
    const region = {
      longitude:88.3411023,
      latitude:22.5553296,
      latitudeDelta:0.2999992,
      longitudeDelta:0.2005002
    } 

    return (
          <View style={styles.mainContainer}>
              <View style ={styles.mapContainer}>
                  <MapView style={styles.map}
                    provider = {MapView.POOVIDER_GOOGLE}
                    initialRegion={region}
                    //onMapReady = {this.findMe()}
                  >

                  <MapView.Marker draggable
                    coordinate={this.state.source}
                    pinColor="blue"
                    onDragEnd={
                      (e) => {
                        this.setState({source: e.nativeEvent.coordinate})
                        console.log('dragEnd Source State', this.state.source);
                      }
                    }
                    showCallout
                    animateMarkerToCoordinate
                  />	

                  <MapView.Marker
                    coordinate={this.state.destination}
                    pinColor="red"
                    showCallout
                    title="Army Officers Institute, Fort William"
                  />	

                  <MapViewDirections
                    origin={this.state.source}
                   // waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): null}
                    destination={this.state.destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={5}
                    strokeColor="purple"
                  /> 


              </MapView> 
        </View> 
        {/* Buttons */}
        <View style={styles.Drive}>
              <View>
                  <Button
                      onPress={this.findMe} 
                      title="RECENTER"
                      buttonStyle={styles.mapButton}
                      color="#3F51B5"
                      borderRadius={5}
                  />
              </View>
              <View style={{marginLeft: 50}}>
                  <Button
                      onPress={this.handleGetDirections} 
                      title="GET DIRECTION" 
                      color="#3F51B5"
                      buttonStyle={styles.mapButton}
                      borderRadius={5}
                  />
              </View>
          </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT, 
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT - 70, 
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  Drive: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 30,
    paddingRight: 10,
    position: 'absolute',
    bottom: 30,
  },
  boldText: {
    fontSize: 10,
    color: 'black',
 },   
 mapButton: {
  color: '#ffffff',
  fontWeight: '700',
  fontSize: 10,
  width: 100,
  height: 50,
  textAlign: 'center',
  backgroundColor: '#3F51B5',
},
});