import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Alert, AsyncStorage, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class pantallaRegister extends React.Component {

  static navigationOptions = {

    
    title: "Registre su cuenta",
    headerStyle: {
      backgroundColor: "#CCCCCC",
    }

  };
  
    constructor(props) {
        super(props);
        this.state = {
          nombreEscrito: "",
          apellidoEscrito: "",
          mailEscrito: "",
          contraseñaEscrito: "",
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

          <TextInput style={styles.nombreInput} placeholder="Nombre" 
          onChange={(event) => this.setState({nombreEscrito: event.nativeEvent.text})}/>



          <TextInput style={styles.apellidoInput} placeholder="Apellido" 
          onChange={(event) => this.setState({apellidoEscrito: event.nativeEvent.text})}/>



          <TextInput style={styles.mailInput} placeholder="Mail" 
          onChange={(event) => this.setState({mailEscrito: event.nativeEvent.text})}/>



          <TextInput style={styles.contraseñaInput} placeholder="Contraseña" 
          onChange={(event) => this.setState({contraseñaEscrito: event.nativeEvent.text})}/>
          


          <TextInput style={styles.direccionInput} placeholder="Dirección" 
          onChange={(event) => this.setState({direccionEscrito: event.nativeEvent.text})}/>

          <TextInput style={styles.mailadmInput} placeholder="Mail de la administración" 
          onChange={(event) => this.setState({mailadmEscrito: event.nativeEvent.text})}/>

          <TextInput style={styles.celularInput} placeholder="Telefono Celular" 
          onChange={(event) => this.setState({celularEscrito: event.nativeEvent.text})}/>







          <TouchableOpacity style={styles.siguiente} 
          onPress={this.botonRegistrarse}> 
          
          <Image style={styles.imagestyle} 
    hitSlop={{top: 2, left: 20, bottom: 2, right: 20}}
    source={require('../img/crearCuenta.png')} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.siguiente} 
          onPress={() => {this.props.navigation.navigate('pantallaRegisterSiguiente')}}> 
          </TouchableOpacity>
          

        </View>

        )}



        }

module.exports = pantallaRegister;

const styles = StyleSheet.create({
  viewInputs: {
    backgroundColor: "#CCCCCC",
    alignItems: "center",
    justifyContent: "center",
  },

  nombreInput: {
    padding: 5,
    marginHorizontal: 30,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    borderColor: "#000000",
    borderWidth: 0.5,
    paddingTop: 30,
  },

  apellidoInput: {
    padding: 5,
    marginHorizontal: 30,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    borderColor: "#000000",
    borderWidth: 0.5,
  },

  mailInput: {
    padding: 5,
    marginHorizontal: 30,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    borderColor: "#000000",
    borderWidth: 0.5,
  },

  contraseñaInput: {
    padding: 5,
    marginHorizontal: 30,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    borderColor: "#000000",
    borderWidth: 0.5,
  },

  direccionInput: {
    padding: 5,
    marginHorizontal: 30,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    borderColor: "#000000",
    borderWidth: 0.5,
  },

  mailadmInput: {
    padding: 5,
    marginHorizontal: 30,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    borderColor: "#000000",
    borderWidth: 0.5,
  },

  celularInput: {
    padding: 5,
    marginHorizontal: 30,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    borderColor: "#000000",
    borderWidth: 0.5,
  },


})

