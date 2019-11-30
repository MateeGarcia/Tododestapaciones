import React from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight, Alert, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Rating, AirbnbRating } from 'react-native-ratings';

class miCuenta extends React.Component {

  static navigationOptions = {

    title: "            Opciones",

    headerStyle: {
      backgroundColor: "orange",
    }
  };
  
  constructor(props) {
    super(props);
    this.state = {
        /* nombre: "",
        apellido: "",*/
        contraseña: "",
        /* mail: "",*/
        direccion: "",
        /* celular: "",
        dni: "", */
        estrellasEscrita: "",
    }
  }

  cambiarScreen = () => {
    this.props.navigation.navigate('estrellas');
  }

  botonEstrellas2 = ( rating ) => {
    estrellasEscrita = `${rating}`;
    console.log(estrellasEscrita)
    Alert.alert(
      '',
      `¿Estas seguro de que deseas seleccionar ${rating} estrellas?`,
      [
        {text: 'Cancelar', onPress: () => console.log('Cancelar')},
        {text: 'Continuar', onPress: () => {this.botonEstrellas()}},
      ],
      {cancelable: false},
    );
  }

  botonCerrarSesion = () => {
    global.userid= ""
    

    fetch ("http://192.168.0.196:8000/api/users/", {
      method: "POST",
      headers: {
        accept: "application/json", "content-type": "application/json",
      },
      body: JSON.stringify({

        userid: (global.userid),
        
      })
    })

    this.props.navigation.navigate('Login');
  }



  botonEstrellas = () => {
    fetch('http://192.168.0.196:8000/api/Ratings/', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        Rating_general: `${estrellasEscrita}`,
        trabajador1: "http://192.168.0.196:8000/api/Trabajador/1/",
        Cant_Rating: "3",
        Rating_numers: "3",
      })
    })
    this.props.navigation.navigate('PaginaPrincipal');
  }





    render(){

          

        return(



          <View style={styles.view1}>
                       <Text></Text>
            <Text> 
              Nombre: {global.nombre} {global.apellido}
            </Text>
            <Text></Text>
            <Text></Text>
            <Text>
              Mail: {global.mail}
            </Text>
            <Text></Text>
            <Text></Text>
            <Text>
              Celular: {global.celular}
            </Text>
            <Text></Text>
            <Text></Text>
            <Text>
              DNI: {global.dni}
            </Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
 
            <Text></Text>


            <AirbnbRating
  count={5}
  reviews={["1", "2", "3", "4", "5"]}
  defaultRating={5}
  size={60}
  onFinishRating={this.botonEstrellas2}
/>
<Text></Text>
<Text></Text>
<Text></Text>

<Text></Text>


<TouchableHighlight style={styles.botonLogin3} onPress={this.botonCerrarSesion}>

<Image style={styles.imagestyle} 
    source={require('../img/LOGOUT.png')} />
    </TouchableHighlight>

          </View>
        );
    }
}

const styles = StyleSheet.create({
  view1: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flex: 1,
  }
})

module.exports = miCuenta;