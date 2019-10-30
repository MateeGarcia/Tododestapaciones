 import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Alert, AsyncStorage, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class pantallaRegister extends React.Component {

  static navigationOptions = {

    tittle: "Registro",

    headerStyle: {
      backgroundColor: "orange",
    }
  };

  constructor(props) {
    super(props);

    global.nombreEscrito = "";
    global.apellidoEscrito = "";
    global.mailEscrito = "";
    global.contraseñaEscrito = "";

}

  guardarGlobal = () => {
    this.props.navigation.navigate('pantallaRegisterSiguiente');
  }

      render() {
        return (
        <View style={styles.viewInputs}>
          <Text></Text>
          <Text></Text>
          <TextInput style={styles.nombreInput} placeholder="Nombre" 
          onChange={(event) => {global.nombreEscrito = event.nativeEvent.text}}/>
                    <Image style={styles.imagestyle} 
    source={require('../img/inputLineaNaranja.png')} />

<Text></Text>
<Text></Text>
<Text></Text>


          <TextInput style={styles.apellidoInput} placeholder="Apellido" 
          onChange={(event) => {global.apellidoEscrito = event.nativeEvent.text}}/>
                    <Image style={styles.imagestyle} 
    source={require('../img/inputLineaNaranja.png')} />

<Text></Text>
<Text></Text>
<Text></Text>


          <TextInput style={styles.mailInput} placeholder="Mail" 
          onChange={(event) => {global.mailEscrito = event.nativeEvent.text}}/>
                    <Image style={styles.imagestyle} 
    source={require('../img/inputLineaNaranja.png')} />
<Text></Text>
<Text></Text>
<Text></Text>


          <TextInput style={styles.contraseñaInput} secureTextEntry={true} placeholder="Contraseña" 
          onChange={(event) => {global.contraseñaEscrito = event.nativeEvent.text}}/>
                    <Image style={styles.imagestyle} 
    source={require('../img/inputLineaNaranja.png')} />

<Text></Text>
<Text></Text>
<Text></Text>



          <TouchableOpacity style={styles.siguiente} 
           onPress={this.guardarGlobal}>

          

          <Image style={styles.imagestyle} 
    hitSlop={{top: 2, left: 20, bottom: 2, right: 20}}
    source={require('../img/siguiente.png')} />

          </TouchableOpacity>


          

        </View>

        )}



        }

module.exports = pantallaRegister;

const styles = StyleSheet.create({

  dniInput: {
    padding: 5,
    marginHorizontal: 30,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    borderColor: "#000000",
    borderWidth: 0.5,
    paddingBottom: 5,
  },

  siguiente: {
    paddingTop: 30,
    alignItems: "center",
    paddingBottom: 80,
  },  

  viewInputs: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
})

