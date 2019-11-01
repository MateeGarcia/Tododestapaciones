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

      fetch ("http://10.8.17.18:8000/api/Turnos/?id_usuario=" + "1", {
        method: "GET",
        headers: {
          accept: "application/json", "content-type": "application/json",
        },
        body: JSON.stringify({
          id_usuario: (this.state.dni),
          direccion_id: (this.state.direccionId)


          /*
             hora: (this.state.hora),
             fecha: (this.state.fecha), 
             tipoDeTurno: (this.state.tipoDeTurno),
             direccion: (this.state.direccion),
             */
        })
      })

        return(
          <View style={styles.turnoGuardado}>

              <Text>
              Fecha del turno: {this.state.fecha}
              </Text>
              <Text>
              Hora del turno: {this.state.hora}
              </Text>
              <Text>
              Tipo de turno: {this.state.tipoDeTurno}
              </Text>
              <Text>
              Dirección del turno: {this.state.direccion}
              </Text>
            
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
    justifyContent: "center",
    alignItems: "center",
  }

})

module.exports = verPedidos;