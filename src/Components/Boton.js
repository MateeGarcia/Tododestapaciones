import React, { Component } from "react";
import{
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableHighlight,
  Navigator,
  Button
} from "react-native";

class Boton extends React.Component {
  
    render(){
        return(
<Text>
  boton
</Text>
          


        );
    }
}

const styles = StyleSheet.create({

  Boton:{
    width: 300,
    height: 30,
    backgroundColor: "red",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 320,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: "center",
  },

  textoBoton: {
    color: "white"
  }

})

module.exports = Boton;