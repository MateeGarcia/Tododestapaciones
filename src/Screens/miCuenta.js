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
          <View style={styles.view1}>
            <Text>
              Nombre: {this.state.nombre}
            </Text>
            <Text>
              Apellido: {this.state.apellido}
            </Text>
            <Text>
              Contraseña: {this.state.contraseña}
            </Text>
            <Text>
              Mail: {this.state.mail}
            </Text>
            <Text>
              Direccion: {this.state.direccion}
            </Text>
            <Text>
              Celular: {this.state.celular}
            </Text>
            <Text>
              DNI: {this.state.dni}
            </Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  view1: {
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    flex: 1,
  }
})

module.exports = miCuenta;