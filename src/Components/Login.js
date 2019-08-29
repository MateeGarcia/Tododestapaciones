import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Alert, AsyncStorage } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class Login extends React.Component {

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



  botonRegister = () => {
    fetch ("/API/User", {
      method: "POST",
      headers: {
        accept: "application/json", "content-type": "application/json",
      },
      body: JSON.stringify({
        nombre: (this.state.nombre),
        apellido: (this.state.apellido),
        mail: (this.state.mail),
        contraseña: (this.state.contraseña),
        celular: (this.state.celular),
      })
})
  }

  botonRegister2 = () => {
    fetch ("/API/Direccion", {
      method: "POST",
      headers: {
        accept: "application/json", "content-type": "application/json",
      },
      body: JSON.stringify({
        telefono: (this.state.telefono),
        calle: (this.state.calle),
        numero_calle: (this.state.numero_calle),
        piso: (this.state.piso),
      })
})
  }





  render() {
    return (
      <View>
<Text style={styles.tituloTododestapacionesMenu}>
Tododestapaciones
</Text>
          <TextInput style={styles.usuarioInput} placeholder="Usuario" 
          onChange={(event) => this.setState({emailEscrito: event.nativeEvent.text})}
           />

          <TextInput style={styles.contraseñaInput} secureTextEntry={true} placeholder="Contraseña" 
          onChange={(event) => this.setState({contraseñaEscrita: event.nativeEvent.text})}
          />
          

          

<TouchableOpacity style={styles.botonLoginCompletado} 
onPress={this.botonLogearse}
>

      <Text>
       Ingresar
      </Text>
      
      
    </TouchableOpacity>






    <Text style={styles.noTienesCuenta}> ¿No tienes cuenta? </Text>

    <TouchableHighlight style={styles.botonRegistrarse} onPress={() => {this.props.navigation.navigate('Login')}}>
      <Text>
       Registrarse
      </Text>
    </TouchableHighlight>



      </View>
    );
  }
}

module.exports = Login;

const styles = StyleSheet.create({

  tituloTododestapacionesMenu: {
    marginHorizontal:20,
    fontSize: 35,
    marginTop: 25,
  },

  noTienesCuenta: {
    marginHorizontal: 110,
    marginTop: 50,
  },


  contraseñaInput: {
    padding: 5,
    marginHorizontal: 30,
    backgroundColor: "red"
  },

  usuarioInput: {
    padding: 5,
    marginBottom: 20,
    marginTop: 100,
    marginHorizontal: 30,
    backgroundColor: "red"
  },

  botonLoginCompletado: {
    width: 150,
    height: 30,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 110,
    borderRadius: 4,
    borderWidth: 1
  },

  botonRegistrarse: {
    width: 150,
    height: 30,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
    marginBottom: 10,
    marginHorizontal: 110,
    borderRadius: 4,
    borderWidth: 1
  },
    
  
});
