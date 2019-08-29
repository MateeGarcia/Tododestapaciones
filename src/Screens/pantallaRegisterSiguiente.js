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

          <TextInput style={styles.nombreInput} placeholder="Nombre" 
          onChange={(event) => this.setState({nombreEscrito: event.nativeEvent.text})}/>

          <TextInput style={styles.apellidoInput} placeholder="Apellido" 
          onChange={(event) => this.setState({apellidoEscrito: event.nativeEvent.text})}/>

          <TextInput style={styles.mailInput} placeholder="Mail" 
          onChange={(event) => this.setState({mailEscrito: event.nativeEvent.text})}/>

          <TextInput style={styles.contraseñaInput} placeholder="Contraseña" 
          onChange={(event) => this.setState({contraseñaEscrito: event.nativeEvent.text})}/>

          <TouchableOpacity style={styles.siguiente} 
          onPress={() => {this.props.navigation.navigate('pantallaRegister')}} />

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



