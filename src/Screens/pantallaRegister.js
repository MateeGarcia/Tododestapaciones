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
          dniEscrito: "",
        }
      }
      

      botonRegistrarse = () => {
        fetch ("http://127.0.0.1:8000/api/users/", {
          method: "POST",
          headers: {
            accept: "application/json", "content-type": "application/json",
          },
          body: JSON.stringify({
            first_name: (this.state.nombreEscrito),
            last_name: (this.state.apellidoEscrito),
            email: (this.state.mailEscrito),
            password: (this.state.contraseñaEscrito),
            username: (this.state.dniEscrito),

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
          
          
          <TextInput style={styles.dniInput} placeholder="DNI" 
          onChange={(event) => this.setState({dniEscrito: event.nativeEvent.text})}/>




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

  dniInput: {
    padding: 5,
    marginHorizontal: 30,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    borderColor: "#000000",
    borderWidth: 0.5,
    paddingBottom: 5,
  },

  siguiente: {
    paddingTop: 130,
  },  

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
    paddingBottom: 5,
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

