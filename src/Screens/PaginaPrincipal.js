import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight} from 'react-native';

import Boton from "../Components/Boton"

class PaginaPrincipal extends React.Component {
    render(){
        return(
            <View style={styles.titulo}>
      <Text style={styles.tituloTododestapaciones}>
        Tododestapaciones
      </Text>

      <TouchableHighlight style={styles.botonLogin} onPress={() => {this.props.navigation.navigate('Login')}}>
      <Text>
       Hacer un pedido
      </Text>
    </TouchableHighlight>

    <TouchableHighlight style={styles.botonLogin2} onPress={() => {this.props.navigation.navigate('Login')}}>
      <Text>
       Ver mi pedido
      </Text>
    </TouchableHighlight>

    <TouchableHighlight style={styles.botonLogin3} onPress={() => {this.props.navigation.navigate('Login')}}>
      <Text>
       Mi cuenta
      </Text>
    </TouchableHighlight>

    </View> 
        );
    }
}

const styles = StyleSheet.create({

  botonLogin:{
    alignItems: 'center',
    width: 300,
    height: 30,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 310,
    borderWidth: 4,
    borderRadius: 0.5,
  },

  botonLogin2:{
    alignItems: 'center',
    width: 300,
    height: 30,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 310,
    borderWidth: 4,
    borderRadius: 0.5,
  },

  botonLogin3:{
    alignItems: 'center',
    width: 300,
    height: 30,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 310,
    borderWidth: 4,
    borderRadius: 0.5,
  },


    titulo: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#CCCCCC",
    },
  
    tituloTododestapaciones: {
    flex: 1,
    alignItems: "center",
    justifyContent:"center",
    fontSize: 30,
    marginTop: 25,
backgroundColor: "orange",
    }
  });

module.exports = PaginaPrincipal;