import React from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight} from 'react-native';
import MapView from "react-native-maps";

class OrnitorrincoScreen extends React.Component {
    render(){
        return(
            <Text>
                <MapView>
                    region={{
                        latitude: 59.3293234999999,
                        longitude: 18,
                        longitudeDelta: 0.1,
                        longitudeDelta: 0.1,
                    }}
                </MapView>
            </Text>     
        );
    }
}

module.exports = OrnitorrincoScreen;