import React from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight, ScrollView, FlatList, TouchableOpacity, Image, Alert} from 'react-native';


class verPedidos extends React.Component {

  static navigationOptions = {

    title: "     Turnos asignados",

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
      turnoCancelado: "",
    }
  }



  componentDidMount() {
    this.setState({ turnoCancelado: (this.state.turnoCancelado) + "1"})
  }
  
    render(){

        return(
          
<View style={styles.viewPrincipal}>
          <ScrollView>
          <View style={styles.viewPrincipal}>


            <FlatList
              data={global.turnosUsuario}
              extraData={this.state.turnoCancelado}
              renderItem={({ item }) => (
                (this.state.turnoCancelado) = (this.state.turnoCancelado) + "1",
                <View style={styles.secondaryContainer}>
  

                  <Text></Text>
                  
                  <Text>
                      Numero del pedido: {item.id}
                      </Text>
                      {item.turno_o_urgencia == '1'? <Text>Tipo de turno: Turno</Text>: null }
                      {item.turno_o_urgencia == '2'? <Text>Tipo de turno: Urgencia</Text>: null }

                      {item.turno_o_urgencia == '1'? <Text>Fecha del turno: {item.dia_turno}</Text>: null }
                      {item.turno_o_urgencia == '1'? <Text>Hora del turno: {item.fechaturno}</Text>: null }
                      
                      <Text>
                      Direccion del pedido: {item.direccion_mateo}
                      </Text>

                      {item.opciones_de_pedido == '1'? <Text>Tipo de servicio: Destapación</Text>: null }
                      {item.opciones_de_pedido == '2'? <Text>Tipo de servicio: Desagote</Text>: null }
                      {item.opciones_de_pedido == '3'? <Text>Tipo de servicio: Limpieza Hidrojet</Text>: null }

                      <Text></Text>


                    <Image style={styles.imagestyle} 
    source={require('../img/inputLineaNaranja.png')} /> 
                  
                </View>
              )} 
              keyExtractor={item => item.Id}
            />


          </View>
          </ScrollView>
          </View>
        );
    }
  }
  





const styles = StyleSheet.create({

  turnoGuardado: {
    flex: 1,
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },

  viewPrincipal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  
})

module.exports = verPedidos;