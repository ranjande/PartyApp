import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, Vibration, AppRegistry,StyleSheet,Text, Alert, AsyncStorage, Platform, Button, View, Image, TouchableHighlight, Dimensions} from 'react-native';

import Realm from 'realm';


export default class RealmDBCreate extends React.Component<{}> {



// Query
let people = realm.objects('Person', 'age >= 17');
people.length // => 0

// Write
realm.write(() => {
    savedPerson = realm.create('Person', {
        name: 'Hal Incandenza',
        age: 17,
    });
});

render(){
    return();
}

// Queries are updated in real-time
people.length // => 1

}

export default class RealmDBFetch extends React.Component<{}> {

    const realm = new Realm({schema: [Person]});
    
    // Query
    let people = realm.objects('Person', 'age >= 17');
    people.length // => 0
    
    // Write
    realm.write(() => {
        savedPerson = realm.create('Person', {
            name: 'Hal Incandenza',
            age: 17,
        });
    });
    
    // Queries are updated in real-time
    people.length // => 1
    
    }