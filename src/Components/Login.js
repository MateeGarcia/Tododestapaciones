import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Alert, AsyncStorage, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class Login extends React.Component {

  static navigationOptions = {

    title: "Acceso a la cuenta",

    headerStyle: {
      backgroundColor: "#CCCCCC",
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      emailEscrito: "",
      contraseñaEscrita: "",
      botonLogearse: "",
    }
  }



  botonLogearse = () => {
    if (this.state.emailEscrito.length < 5 || this.state.contraseñaEscrita.length <= 8) {
      Alert.alert("Invalid credentials"); 
    } else {
      fetch('', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          mail: (this.state.emailEscrito),
          contraseña: (this.state.contraseñaEscrita),
        })
      })
        .then((response) => response.json())
        .then((responseJson) => {

          if (responseJson.msg == " Si ") {

            global.UserID = responseJson.UserID;
            this.props.navigation.navigate('PaginaPrincipal');
          }
          else {
            Alert.alert("Email y/o contraseña incorrecta");
          }
        })

        .catch((error) => {
          console.error(error);
        });
    }
  }


  render() {
    return (
      <View style={styles.viewTodo}>
<Text style={styles.tituloTododestapacionesMenu}>
Tododestapaciones
</Text>


          <TextInput style={styles.usuarioInput} placeholder="Mail" 
          onChange={(event) => this.setState({emailEscrito: event.nativeEvent.text})}>
          </TextInput>
           

          <TextInput style={styles.contraseñaInput} secureTextEntry={true} placeholder="Contraseña" 
          onChange={(event) => this.setState({contraseñaEscrita: event.nativeEvent.text})}
          />
          
      
          

<TouchableHighlight style={styles.botonLoginCompletado} 
hitSlop={{top: 10, left: 20, bottom: 10, right: 20}}
onPress={this.botonLogearse}
>

    <Image style={styles.imagestyle} 
    source={require('../img/ingresar.png')} />
    </TouchableHighlight>






    <Text style={styles.noTienesCuenta}> ¿No tienes cuenta? </Text>

    <TouchableHighlight style={styles.botonRegistrarse} onPress={() => {this.props.navigation.navigate('pantallaRegister')}}>
      
    <Image style={styles.imagestyle} 
    hitSlop={{top: 2, left: 20, bottom: 2, right: 20}}
    source={require('../img/registrateAhora.png')} />
    </TouchableHighlight>



      </View>
    );
  }
}

module.exports = Login;

const styles = StyleSheet.create({

  viewTodo: {
    backgroundColor: "#CCCCCC",
  },

  tituloTododestapacionesMenu: {
    marginHorizontal:20,
    fontSize: 35,
    marginTop: 25,
  },

  noTienesCuenta: {
    marginHorizontal: 110,
    marginTop: 150,
  },


  contraseñaInput: {
    padding: 5,
    marginHorizontal: 30,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    borderColor: "#000000",
    borderWidth: 0.5,
  },

  usuarioInput: {
    padding: 5,
    marginBottom: 20,
    marginTop: 100,
    marginHorizontal: 30,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    borderColor: "#000000",
    borderWidth: 0.5,
  },

  botonLoginCompletado: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 110,
  },

  botonRegistrarse: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 110,
  },
    
  
});
