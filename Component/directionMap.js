import React, { Component } from 'react';
import { ScrollView, Vibration, AppRegistry,StyleSheet,Text, Alert, AsyncStorage, Platform, Button, View, Image, TouchableHighlight, FlatList, Dimensions, Menu} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import getDirections from 'react-native-google-maps-directions'

import {Fonts} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tabs, Tab , SocialIcon, Avatar, Header} from 'react-native-elements';

import Crashes from "mobile-center-crashes";


const { WINDOW_WIDTH, WINDOW_HEIGHT } = Dimensions.get('window');

//const ASPECT_RATIO = WINDOW_WIDTH / WINDOW_HEIGHT;
//const LATITUDE = 22.550432;
//const LONGITUDE = 88.339831;
//const LATITUDE_DELTA = 0.050003;
//const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

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

    /* GET RECENTER API START */
    findMe = () => {
      console.log('find me');
      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          const {latitude, longitude} = this.state.coordinates[0]
          this.setState({
            position: {
              latitude,
              longitude,
            },
            region: {
              latitude,
              longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.001,
            }
          })
        },
        (error) => console.log(JSON.stringify(error)),
        {
          enableHighAccuracy: true, timeout: 2000, maximumAge: 3000
        }
      )
    }
    /* GET RECENTER API END */


    /* GET Direction API START */
    handleGetDirections = () => {
      const data = {
        source: {
          latitude: 22.6413802,
          longitude: 88.4707479,
        },
        destination: {
          latitude:22.550432,
          longitude:88.339831,
        },
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
      navigator.geolocation.getCurrentPosition(
        (position)=> {
          const initialPosition = JSON.stringify(position);
          this.setState({ initialPosition : JSON.stringify(position)});
        },
            (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        this.watchID = navigator.geolocation.watchPosition((position) => {
               const lastPosition = JSON.stringify(position);
               this.setState({ lastPosition: JSON.stringify(position) });
          });
      }
      
      
      componentWillUnmount = () => {
           navigator.geolocation.clearWatch(this.watchID);
      }
   
  watchID: ?number = null;

  render() {
    const GOOGLE_MAPS_APIKEY = 'AIzaSyDXRs3OKZNE3p8NdxHKc2pP42cTwIyH2ZM';
    const ASPECT_RATIO = WINDOW_WIDTH / WINDOW_HEIGHT;


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
                onMapReady = {console.log('Map Loaded')}
              >
                  <MapView.Marker
                    coordinate={{latitude:22.5560008, longitude:88.3393902}}
                    pinColor="red"
                    title="Army Officers Institute, Fort William"
                  />	

                  <MapView.Marker draggable
                    coordinate={{latitude:22.6413802, longitude:88.4707479}}
                    pinColor="blue"
                    onDragEnd={
                      (e) => {
                        console.log('dragEnd', e.nativeEvent.coordinate)
                        //this.setState({coordinates: Object.assign({}, this.state.coordinates, {[0]: e.nativeEvent.coordinate})});
                        this.setState({coordinates: Object.assign({}, this.state.coordinates, e.nativeEvent.coordinate)});
                        console.log('dragEnd State', this.state.coordinates[0]);
                      }
                    }
                  />	

                  <MapViewDirections
                    origin={this.state.coordinates[0]}
                    waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): null}
                    destination={this.state.coordinates[this.state.coordinates.length-1]}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={5}
                    strokeColor="red"
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
              <Text style = {styles.boldText}>
                  Initial position: {this.state.initialPosition}
              </Text>
              <Text style = {styles.boldText}>
                    Current position: {this.state.lastPosition}
               </Text>
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