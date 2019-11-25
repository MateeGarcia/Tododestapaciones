import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Alert, AsyncStorage, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class pantallaRegisterSiguiente extends React.Component {

  static navigationOptions = {

    tittle: "                Registro",

    headerStyle: {
      backgroundColor: "orange",
    }
  };

    constructor(props) {
        super(props);
          global.userid = "",
        this.state = {
          direccionEscrito: "",
          mailadmEscrito: "mailadmEscrito@gmail.com",
          celularEscrito: "",
          dniEscrito: "",
        }
      }


      botonRegistrarse = () => {
        fetch ("http://192.168.0.196:8000/api/users/", {
          method: "POST",
          headers: {
            accept: "application/json", "content-type": "application/json",
          },
          body: JSON.stringify({


            email: (global.mailEscrito),
            first_name: (global.nombreEscrito),
            last_name: (global.apellidoEscrito),
            password: (global.contraseñaEscrito),
            dni: (this.state.dniEscrito),
            direccion: (this.state.direccionEscrito),

            profile:{
              photo: null,
              nacimiento: null,
              celular: (this.state.celularEscrito),
              rating_mateo: 1,
            },
          })
        })

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

          <TextInput style={styles.dniInput} placeholder="DNI" 
          onChange={(event) => this.setState({dniEscrito: event.nativeEvent.text})}/>
          <Image style={styles.imagestyle} 
    source={require('../img/inputLineaNaranja.png')} />


<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>

           <TextInput style={styles.mailadmInput} placeholder="Mail de la administración" 
          onChange={(event) => this.setState({mailadmEscrito: event.nativeEvent.text})}/>
          <Image style={styles.imagestyle} 
    source={require('../img/inputLineaNaranja.png')} /> 

<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>

          <TextInput style={styles.celularInput} placeholder="Telefono Celular" 
          onChange={(event) => this.setState({celularEscrito: event.nativeEvent.text})}/>
          <Image style={styles.imagestyle} 
    source={require('../img/inputLineaNaranja.png')} />

<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>

<TextInput style={styles.celularInput} placeholder="Direccion" 
          onChange={(event) => this.setState({direccionEscrito: event.nativeEvent.text})}/>
          <Image style={styles.imagestyle} 
    source={require('../img/inputLineaNaranja.png')} />

<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>

          <TouchableOpacity style={styles.siguiente} 
          onPress={this.botonRegistrarse}> 

<Image
        style={styles.button}
        source={require('../img/crearCuenta.png')}
      />

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
    backgroundColor: "white"
  },

  dniInput: {
    width: 200,
  },

  mailadmInput: {
    width: 200,
  },

  celularInput: {
    width: 200,
  },
})



