import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Alert, AsyncStorage } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class pantallaRegisterSiguiente extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          nombreEscrito: "",

          apellidoEscrito: "",
          mailEscrito: "",
          contraseñaEscrito: "",
        }
      }



      render() {
        return (
        <View style={styles.viewInputs}>

          <TextInput style={styles.direccionInput} placeholder="Dirección" 
          onChange={(event) => this.setState({direccionEscrito: event.nativeEvent.text})}/>

          <TextInput style={styles.mailadmInput} placeholder="Mail de la administración" 
          onChange={(event) => this.setState({mailadmEscrito: event.nativeEvent.text})}/>

          <TextInput style={styles.celularInput} placeholder="Telefono Celular" 
          onChange={(event) => this.setState({celularEscrito: event.nativeEvent.text})}/>

          <TouchableOpacity style={styles.siguiente} 
          onPress={() => {this.props.navigation.navigate('pantallaRegister')}}> 
          <Text> Registrarte </Text>
          </TouchableOpacity>

        </View>

        )}



}

module.exports = pantallaRegisterSiguiente;

const styles = StyleSheet.create({
  viewInputs: {
    alignItems: "center",
    justifyContent: "center",
  }
})



