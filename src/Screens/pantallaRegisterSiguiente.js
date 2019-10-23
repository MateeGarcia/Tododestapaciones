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
          dniEscrito: "",
        }
      }


      botonRegistrarse = () => {
        fetch ("http://10.8.17.18:8000/api/users/", {
          method: "POST",
          headers: {
            accept: "application/json", "content-type": "application/json",
          },
          body: JSON.stringify({


            email: (this.state.mailEscrito),
            first_name: (this.state.nombreEscrito),
            last_name: (this.state.apellidoEscrito),
            password: (this.state.contraseñaEscrito),
            dni: (this.state.dniEscrito),

            profile:{
              id_direccion: [1],
              photo: null,
              nacimiento: null,
              celular: (this.state.celularEscrito),
            },
          })
        })

        
        .then((responseid) => {response.id(); userid = responseid;})
        .then((response) => {response.json(); respuesta = response;})
        .then((responseJson) => {
          console.log(respuesta);
          if (respuesta.ok) {

            this.props.navigation.navigate('Login');
          }
          else {
            Alert.alert("Datos invalidos");
          }
        })

        
        
        

        .catch((error) => {
          console.error(error);
        });
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CCCCCC"
  }
})



