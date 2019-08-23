import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Alert } from "react-native";

class Login extends React.Component {
  render() {
    return (
      <View>

          <TextInput style={styles.usuarioInput} placeholder="Usuario" />
          <TextInput style={styles.contraseñaInput} secureTextEntry={true} placeholder="Contraseña" />

<TouchableHighlight style={styles.botonLoginCompletado} onPress={() => Alert.alert("Logeado con exito")}>
      <Text>
       Ingresar
      </Text>
    </TouchableHighlight>

      </View>
    );
  }
}

module.exports = Login;

const styles = StyleSheet.create({


  contraseñaInput: {
    padding: 5,
    marginHorizontal: 30,
    backgroundColor: "red"
  },

  usuarioInput: {
    padding: 5,
    marginBottom: 20,
    marginTop: 200,
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

  
});
