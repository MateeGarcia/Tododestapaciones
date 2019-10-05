import React from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight} from 'react-native';

class verPedidos extends React.Component {
    render(){
        return(
            fetch ("", {
          method: "GET",
          headers: {
            accept: "application/json", "content-type": "application/json",
          },
          body: JSON.stringify({

          })
        })   
        );
    }
}

module.exports = verPedidos;