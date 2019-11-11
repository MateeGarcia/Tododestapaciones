import React from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Rating, AirbnbRating } from 'react-native-ratings';

class estrellas extends React.Component {

  static navigationOptions = {

    title: "¡Puntuá nuestro servicio!",

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
        estrellasEscrita: "",
    }
  }



  botonEstrellas2 = () => {
    this.props.navigation.navigate('paginaPrincipal');
  }





  botonEstrellas = () => {
    fetch('http://10.8.17.18:8000/api/auth/login/', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        estrellas: (this.state.estrellasEscrita),
      })
    })
  }
  
    render(){
        return(
          <View style={styles.view1}>
<AirbnbRating
  count={5}
  reviews={["1", "2", "3", "4", "5"]}
  defaultRating={5}
  size={60}
  onFinishRating={this.botonEstrellas2}
/>
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

module.exports = estrellas;