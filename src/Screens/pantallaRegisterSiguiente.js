import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Alert, AsyncStorage } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class pantallaRegisterSiguiente extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          direccionEscrito: "",
          mailadmEscrito: "",
          celularEscrito: "",
        }
      }


      botonRegistrarse = () => {
        fetch ("/API/User", {
          method: "POST",
          headers: {
            accept: "application/json", "content-type": "application/json",
          },
          body: JSON.stringify({
            nombre: (this.state.nombre),
            apellido: (this.state.apellido),
            mail: (this.state.mail),
            contraseña: (this.state.contraseña),
            celular: (this.state.celular),
          })
        })
      }

      botonRegister2 = () => {
        fetch ("/API/Direccion", {
          method: "POST",
          headers: {
            accept: "application/json", "content-type": "application/json",
          },
          body: JSON.stringify({
            telefono: (this.state.telefono),
            calle: (this.state.calle),
            numero_calle: (this.state.numero_calle),
            piso: (this.state.piso),
          })
    })
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
          onPress={this.botonRegistrarse}> 
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



