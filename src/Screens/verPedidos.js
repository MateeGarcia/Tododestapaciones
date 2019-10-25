import React from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight} from 'react-native';

class verPedidos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hora: "12:15",
      fecha: "07/10/2019",
      tipoDeTurno: "Destapación",
      direccion: "Migueletes 699 Piso 7",
    }
  }


  
    render(){

      fetch ("$global.userid.pk", {
        method: "GET",
        headers: {
          accept: "application/json", "content-type": "application/json",
        },
        body: JSON.stringify({
             hora: (this.state.hora),
             fecha: (this.state.fecha), 
             tipoDeTurno: (this.state.tipoDeTurno),
             direccion: (this.state.direccion),
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

const styles = StyleSheet.create({

  turnoGuardado: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  }

})

module.exports = verPedidos;