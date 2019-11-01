import React from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight} from 'react-native';

class miCuenta extends React.Component {

  static navigationOptions = {

    title: "Mi cuenta",

    headerStyle: {
      backgroundColor: "orange",
    }
  };
  
  constructor(props) {
    super(props);
    this.state = {
        nombre: "",
        apellido: "",
        contraseña: "",
        mail: "",
        direccion: "",
        celular: "",
        dni: "",
    }
  }


  
    render(){

        fetch ("$global.userid.pk", {
            method: "GET",
            headers: {
              accept: "application/json", "content-type": "application/json",
            },
            body: JSON.stringify({
                 nombre: (this.state.nombre),
                 apellido: (this.state.apellido),
                 contraseña: (this.state.contraseña),
                 mail: (this.state.mail),
                 direccion: (this.state.direccion),
                 celular: (this.state.celular), 
                 dni: (this.state.dni),
            })
          })

        return(
          <View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
})

module.exports = miCuenta;