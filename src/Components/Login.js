import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Alert } from "react-native";

class Login extends React.Component {

  constructor(props){
    super(props);
    
    this.state = {
      loading: false,
      pokemon: {},
      url: ""
    }
  }

  componentDidMount(){
    this.getPokemon();
  }

  getPokemon = () => {
    this.setState({ loading:true })

    fetch(this.state.url)
    .then(res => res.json())
    .then( res => {
      this.setState({
        pokemon: res.results,
        url: res.next,
        loading: false
      })
    })
  };





  render() {
    return (
      <View>
<Text style={styles.tituloTododestapacionesMenu}>
Tododestapaciones
</Text>
          <TextInput style={styles.usuarioInput} placeholder="Usuario" />
          <TextInput style={styles.contraseñaInput} secureTextEntry={true} placeholder="Contraseña" />

          

<TouchableHighlight style={styles.botonLoginCompletado} onPress={() => Alert.alert("Logeado con exito")}>
      <Text>
       Ingresar
      </Text>
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
