import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Alert, AsyncStorage } from "react-native";

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      emailEscrito: "",
    }
  }




  onSubmitInfo = () => {
    if (this.state.email.length < 5 || this.state.Password.length <= 8) {
      Alert.alert("Invalid credentials");
    } else {
      fetch('http://10.8.17.9:3000/usernamelist', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          Username: (this.state.email),
          Password: (this.state.Password)
        })
      })
        .then((response) => response.json())
        .then((responseJson) => {

          if (responseJson.msg == " Si ") {

            global.UserID = responseJson.UserID;
            this.props.navigation.navigate('PaginaPrincipal');
          }
          else {
            Alert.alert("Email y/o contraseña erroneos");
          }
        })

        .catch((error) => {
          console.error(error);
        });
    }
  }





  render() {
    return (
      <View>
<Text style={styles.tituloTododestapacionesMenu}>
Tododestapaciones
</Text>
          <TextInput style={styles.usuarioInput} placeholder="Usuario" />
          <TextInput style={styles.contraseñaInput} secureTextEntry={true} placeholder="Contraseña" />
          

          

<TouchableHighlight style={styles.botonLoginCompletado} 
onPress={() => onSubmitInfo} 
onChange={(event) => this.setState({emailEscrito: event.nativeEvent.text})}
>

      <Text>
       Ingresar
      </Text>
      Alert.alert(this.state.emailEscrito);
      
    </TouchableHighlight>






    <Text style={styles.noTienesCuenta}> ¿No tienes cuenta? </Text>

    <TouchableHighlight style={styles.botonRegistrarse} onPress={() => Alert.alert("Pantalla Register")}>
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
