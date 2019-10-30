import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight} from 'react-native';

import Boton from "../Components/Boton"

class PaginaPrincipal extends React.Component {




  static navigationOptions = {

    tittle: "Pagina principal",

    headerStyle: {
      backgroundColor: "orange",
    }
  };

    render(){
        return(
            <View style={styles.titulo}>
      <Text style={styles.tituloTododestapaciones}>
        Tododestapaciones
      </Text>

      <TouchableHighlight style={styles.botonLogin} onPress={() => {this.props.navigation.navigate('pantallaPedirTurno')}}>
      <Text>
       Hacer un pedido
      </Text>
    </TouchableHighlight>

    <TouchableHighlight style={styles.botonLogin2} onPress={() => {this.props.navigation.navigate('verPedidos')}}>
      <Text>
       Ver mi pedido
      </Text>
    </TouchableHighlight>

    <TouchableHighlight style={styles.botonLogin3} onPress={() => {this.props.navigation.navigate('Login')}}>
      <Text>
       Mi cuenta
      </Text>
    </TouchableHighlight>

    <Text>
      
    </Text>

    <Text>
      
      </Text>

      <Text>
      
      </Text>

      <Text>
      
      </Text>

      <Text>
      
      </Text>

      <Text>
      
      </Text>

      <Text>
      
      </Text>

      <Text>
      
      </Text>

      <Text>
      
      </Text>

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
      justifyContent: 'center',
      backgroundColor: "white",
    },
  
    tituloTododestapaciones: {
    alignItems: "center",
    justifyContent:"center",
    fontSize: 30,
    marginTop: 25,
    }
  });

module.exports = PaginaPrincipal;