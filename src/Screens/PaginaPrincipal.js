import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, Image} from 'react-native';

import Boton from "../Components/Boton"

class PaginaPrincipal extends React.Component {




  static navigationOptions = {

    title: "Pagina Principal",

    headerStyle: {
      backgroundColor: "orange",
    },
  };

  componentWillMount() {
    fetch(`http://192.168.0.196:8000/api/users/${global.userid}/`)
          .then ((response) => response.json())
          .then ((responseJson) => {

            global.nombre = responseJson.first_name
            global.apellido = responseJson.last_name
            global.mail = responseJson.email
            global.celular = responseJson.profile.celular
            global.dni = responseJson.dni

          })

          fetch(`http://192.168.0.196:8000/api/Turnos/?id_usuario=${global.userid}`)
          .then ((response) => response.json())
          .then ((responseJson) => {

            console.log(responseJson.Array.Object.dia_turno)
            console.log(responseJson.Object.fechaturno)
            console.log(responseJson.Object.opciones_de_pedido)
            console.log(responseJson.Object.direccion_id)
            global.fecha = responseJson.dia_turno
            global.hora = responseJson.fechaturno
            global.tipoDeTurno = responseJson.opciones_de_pedido
            global.direccion = responseJson.direccion_id
          })
  }

  botonCerrarSesion = () => {
    this.props.navigation.navigate('miCuenta');
  }

    render(){
        return(
            <View style={styles.titulo}>
<Text></Text>
      <Image style={styles.logaso} 
    source={require('../img/Logodestapaciones.png')} />

<Text></Text>
<Text></Text>
<Text></Text>


    <TouchableHighlight style={styles.botonLoginCompletado} 
hitSlop={{top: 10, left: 20, bottom: 10, right: 20}}
onPress={() => {this.props.navigation.navigate('pantallaPedirTurno')}}
>
    <Image style={styles.imagestyle} 
    source={require('../img/hacerUnPedido.png')} />
    </TouchableHighlight>

    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Text></Text>

    <TouchableHighlight style={styles.botonLoginCompletado} 
hitSlop={{top: 10, left: 20, bottom: 10, right: 20}}
onPress={() => {this.props.navigation.navigate('pantallaPedirUrgencia')}}
>
    <Image style={styles.imagestyle} 
    source={require('../img/solicitarUrgencia.png')} />
    </TouchableHighlight>


    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Text></Text>

    <TouchableHighlight style={styles.botonLoginCompletado} 
hitSlop={{top: 10, left: 20, bottom: 10, right: 20}}
onPress={() => {this.props.navigation.navigate('verPedidos')}}
>
    <Image style={styles.imagestyle} 
    source={require('../img/verMiPedido.png')} />
    </TouchableHighlight>

    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Text></Text>

    <TouchableHighlight style={styles.botonLoginCompletado} 
hitSlop={{top: 10, left: 20, bottom: 10, right: 20}}
onPress={this.botonCerrarSesion}>
    <Image style={styles.imagestyle} 
    source={require('../img/Opciones.png')} />
    </TouchableHighlight>

    </View> 
        );
    }
}

const styles = StyleSheet.create({

  botonLogin:{
    padding: 5,
    marginHorizontal: 30,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    borderColor: "#000000",
    borderWidth: 0.5,
    paddingBottom: 5,
    marginTop: 60,
  },

  botonLogin2:{
    padding: 5,
    marginHorizontal: 30,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    borderColor: "#000000",
    borderWidth: 0.5,
    paddingBottom: 5,
    marginTop: 120,
  },

  botonLogin3:{
    padding: 5,
    marginHorizontal: 30,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    borderColor: "#000000",
    borderWidth: 0.5,
    paddingBottom: 5,
    marginTop: 121,
  },


    titulo: {
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: "white",
    },
  
    tituloTododestapaciones: {
    alignItems: "center",
    justifyContent:"center",
    fontSize: 30,
    marginTop: 25,
    },

    logaso: {
      height: 40,
      width: 220
      
    },

    falsoBoton: {
      borderRadius: 10,
      backgroundColor: "#Ff732d",
      fontWeight: "100",
      fontSize: 30,
      borderWidth: 1.5,
      width: 280,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
    },

  });

module.exports = PaginaPrincipal;