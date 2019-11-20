import React from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight} from 'react-native';

class verPedidos extends React.Component {

  static navigationOptions = {

    title: "Turnos asignados",

    headerStyle: {
      backgroundColor: "orange",
    }
  };
  
  constructor(props) {
    super(props);
    this.state = {
      hora: "",
      fecha: "",
      tipoDeTurno: "",
      direccion: "",
      dni: "",
    }
  }

  
  
    render(){







          /*
             hora: (this.state.hora),
             fecha: (this.state.fecha), 
             tipoDeTurno: (this.state.tipoDeTurno),
             direccion: (this.state.direccion),



          console.log(global.direccionn)
          console.log(global.diaa)
          console.log(global.horaa)
          console.log(global.tipoDeDestapacionn)

             */


        return(
          <View style={styles.turnoGuardado}>
<Text></Text>
              <Text>
              Fecha del turno: {global.diaa}
              </Text>
              <Text>
              Hora del turno: {global.horaa}
              </Text>
              <Text>
              Tipo de turno: {global.tipoDeDestapacionn}
              </Text>
              <Text>
              Dirección del turno: {global.direccionn}
              </Text>
            <Text></Text>
          </View>
        );
    }
}



/*
$global.userid.pk
*/





const styles = StyleSheet.create({

  turnoGuardado: {
    flex: 1,
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
  }

})

module.exports = verPedidos;