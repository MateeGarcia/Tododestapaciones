import React from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight, ScrollView, FlatList, TouchableOpacity, Image, Alert} from 'react-native';

class appAdmin2 extends React.Component {

  static navigationOptions = {

    title: "               Turnos",

    headerStyle: {
      backgroundColor: "orange",
    }
  };
  
  constructor(props){
    super(props)
    this.state ={
      turnoCancelado: "1"
    }
  }

componentWillMount() {

}

  


    render(){

        return( 
<ScrollView>
          <View style={styles.viewPrincipal}>

            
            <FlatList
              data={global.nuevaLista}
              extraData={this.state.turnoCancelado}
              renderItem={({ item }) => (

                <View style={styles.secondaryContainer}>
                  <TouchableOpacity onPress={() => {

Alert.alert(
  '',
  `¿Estas seguro que deseas eliminar el turno ${item.id}?`,
  [
    {text: 'Cancelar', onPress: () => console.log('Cancelar')},
    {text: 'Continuar', onPress: () => {

       fetch(`http://10.8.17.18:8000/api/Turnos/${item.id}/`, {
        method: "DELETE"
        }) 

        item.estado_turno = false
        this.setState({ turnoCancelado: (this.state.turnoCancelado) + "1"})


    }},
  ],
  {cancelable: false},
);







                  }
                  }>
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


                      {item.estado_turno == true? <Text>¿Turno habilitado?: Si</Text>: null }
                      {item.estado_turno == false? <Text>¿Turno habilitado?: No</Text>: null }
<Text></Text>
                  
                    <Image style={styles.imagestyle} 
    source={require('../img/inputLineaNaranja.png')} />
                      </TouchableOpacity>
                  
                </View>
              )} 
              keyExtractor={item => item.Id}
            />
          

          </View>
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    flexDirection: "column",
  },

  viewPrincipal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})

module.exports = appAdmin2;


        /* 
        array1=[];
                    for (i = 0; i <= responseJson.length-1;i++){
                      array1.push(JSON.stringify(responseJson[i]));
                    } 
                    
                    */