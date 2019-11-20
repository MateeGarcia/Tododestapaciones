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
             */


        return(
          <View style={styles.turnoGuardado}>
<Text></Text>
              <Text>
              Fecha del turno: 2019-11-22
              </Text>
              <Text>
              Hora del turno: 06:30
              </Text>
              <Text>
              Tipo de turno: Desagote
              </Text>
              <Text>
              Dirección del turno: Besares 4047
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