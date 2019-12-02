import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Alert, AsyncStorage, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

var respuesta;

class Login extends React.Component {

  static navigationOptions = {
  
    title: "               Acceso a la cuenta",
    headerLayoutPreset: "center",

    headerStyle: {
      backgroundColor: "orange",

    }
  };

  constructor(props) {
    super(props);
    global.userid = "";
    this.state = {
      emailEscrito: "",
      contraseñaEscrita: "",
      botonLogearse: "",
      dni: "",
      dniEscrita: "",
    }

  }



  botonLogearse = () => {
    if (this.state.dniEscrita.length < 1 || this.state.contraseñaEscrita.length <= 1) {
      Alert.alert("Credenciales Invalidas"); 
    } else {
      fetch('http://10.8.17.18:8000/api/auth/login/', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          mail: (this.state.emailEscrito),
          password: (this.state.contraseñaEscrita),
          username: (this.state.dniEscrita),

        })
      })
        /* .then((response) => {global.userid = response.id}) */
        .then((response) => response.json().then((responseJson)=> {
          console.log(response);
          if (response.ok) {
          global.userid = responseJson.user.pk;

          if (global.userid == "18") {
            this.name.clear();
            this.password.clear();
            this.props.navigation.navigate("appAdmin");
          } else {
            this.name.clear();
            this.password.clear();
            this.props.navigation.navigate("PaginaPrincipal");
          }
         }

         else {
           Alert.alert("Datos invalidos");
         } 

         

        console.log(global.userid)
        })).catch((error) => {
          console.error(error);
        });


        
    }
  }


  render() {
    return (
      <View style={styles.viewTodo}>
<Text style={styles.tituloTododestapacionesMenu}>
</Text>
<Image style={styles.logaso} 
    source={require('../img/Logodestapaciones.png')} />

<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>


<TextInput ref={input => { this.name = input }} style={styles.usuarioInput} secureTextEntry={false} placeholder="DNI" 
          onChange={(event) => this.setState({dniEscrita: event.nativeEvent.text})}
          />
<Image style={styles.imagestyle} 
    source={require('../img/inputLineaNaranja.png')} />
    <Text></Text>

           

          <TextInput ref={input => { this.password = input }} style={styles.contraseñaInput} secureTextEntry={true} placeholder="Contraseña" 
          onChange={(event) => this.setState({contraseñaEscrita: event.nativeEvent.text})}
          />
<Image style={styles.imagestyle} 
    source={require('../img/inputLineaNaranja.png')} />


          <Text>

          </Text>
      
          

<TouchableHighlight style={styles.botonLoginCompletado} 
hitSlop={{top: 10, left: 20, bottom: 10, right: 20}}
onPress={this.botonLogearse}
>

    <Image style={styles.imagestyle} 
    source={require('../img/ingresar.png')} />
    </TouchableHighlight>




    <Text></Text>







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

  usuarioInput: {
    width: 200,
  },

  contraseñaInput: {
    width: 200,
  },

  dniInput: {
    padding: 5,
    marginHorizontal: 30,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    borderColor: "#000000",
    borderWidth: 0.5,
  },

  viewTodo: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },

  tituloTododestapacionesMenu: {
    fontSize: 35,
  },

  noTienesCuenta: {
    marginHorizontal: 110,
    marginTop: 150,
  },

  botonLoginCompletado: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 110,
  },

  botonRegistrarse: {
    alignItems: "flex-end",
    flex: 2,
  },

  logaso: {
    height: 40,
    width: 220
    
  }
    
  
});
