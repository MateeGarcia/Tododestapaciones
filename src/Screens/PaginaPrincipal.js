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
       ¡Ingresa a tu cuenta aqui!
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


    titulo: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
backgroundColor: "orange",
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