import React from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight, ScrollView, Image, TouchableOpacity, Alert} from 'react-native';

class verPedidos2 extends React.Component {

  static navigationOptions = {

    title: "     Turnos asignados",

    headerStyle: {
      backgroundColor: "orange",
    }
  };

  fafa() {
    Alert.alert("Para cancelar turnos llamar a: +54 9 154970 8009")
  
  }

 componentDidMount() {

} 



    constructor(props) {
      super(props);
      this.state = {};
      this.arrayholder = [];

    }
    componentWillMount() {



    } 


    render(){
        fetch(`http://192.168.0.196:8000/api/Turnos/?id_usuario=${global.userid}`)
        .then ((response) => response.json())
        .then ((responseJson) => {
          global.turnosUsuario= responseJson;
        })
        .catch((error) => {
          console.error(error);
        });

      return( 

        <View style={styles.turnoGuardado}>

    <TouchableOpacity style={styles.textito} onPress={() => { this.props.navigation.navigate("verPedidos");}}>
<Text>
          Ver mis pedidos
  </Text>
</TouchableOpacity>

    <TouchableOpacity style={styles.textito} onPress={this.fafa}>
<Text>
          Cancelar turnos
  </Text>
</TouchableOpacity>
                  </View>
      );
  } 




} 

const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    flexDirection: "column",
  },

  turnoGuardado: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-around"
  },

  textito: {
    backgroundColor: 'orange',
    height: 40,
    width: '50%',
    alignItems: 'center',
  },
})

module.exports = verPedidos2;
