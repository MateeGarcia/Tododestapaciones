import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Alert, AsyncStorage } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class pantallaRegister extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          emailEscrito: "",
          contraseñaEscrita: "",
          botonLogearse: "",
        }
      }



      render() {
        return (
        <View>

      <TextInput style={styles.usuarioInput} placeholder="Usuario" 
          onChange={(event) => this.setState({emailEscrito: event.nativeEvent.text})}
           />


        </View>

        )}



}

module.exports = pantallaRegister;


