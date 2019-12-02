import React from 'react';
import {Alert, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, TouchableHighlight, Picker, Image, DatePickerAndroid, DatePickerIOS} from 'react-native';
import DatePicker from 'react-native-datepicker';

class pantallaPedirUrgencia extends React.Component {
    
  static navigationOptions = {

    title: "     Pedido de urgencia",

    headerStyle: {
      backgroundColor: "orange",
    }
  };

      constructor(props) {
        super(props);
        this.state = {
          tipoDeDestapacion: "",
          direccionEscrito: "",
          fechaEscrito: "",
          horaEscrito: "",
          date: "",
          hour: "",
          turno_o_urgencia: "",
        }
      }

        botonPedirTurno = () => {
          if (this.state.direccionEscrito.length >= 3) {
          fetch ("http://10.8.17.18:8000/api/Turnos/", {
            method: "POST",
            headers: {
              accept: "application/json", "content-type": "application/json",
            },
            body: JSON.stringify({
              id_usuario: `http://10.8.17.18:8000/api/users/${global.userid}/`,
              direccion_id: "http://10.8.17.18:8000/api/Direccion/1/",
              direccion_mateo: (this.state.direccionEscrito),
              fechaturno: "00:00",
              dia_turno: "2999-12-12",
              id_camionetaturno: "http://10.8.17.18:8000/api/Camioneta/1/",
              id_trabajadorturno: "http://10.8.17.18:8000/api/Trabajador/1/",
              rating: "http://10.8.17.18:8000/api/Ratings/1/",
              detalle_pedido: "asd",
              opciones_de_pedido: (this.state.tipoDeDestapacion),
              estado_turno: "true",
              turno_o_urgencia: "2",
            })
          });
          global.direccionn= this.state.direccionEscrito
          global.diaa= "URGENCIA"
          global.horaa= "URGENCIA"
          if (this.state.tipoDeDestapacion=="2")
          global.tipoDeDestapacionn= "Desagote"

          if (this.state.tipoDeDestapacion=="1")
          global.tipoDeDestapacionn= "Destapacion"

          if (this.state.tipoDeDestapacion=="3")
          global.tipoDeDestapacionn= "Limpieza Hidrojet"

                    if(global.userid == 18){
          this.props.navigation.navigate('appAdmin');
          } else {
          this.props.navigation.navigate('PaginaPrincipal');
          }
        } else {
          Alert.alert("Datos incompletos")
        }
        }   

    render(){
            return(
                <View style={styles.viewPedidos}>

<Text></Text>
<Text></Text>
<Text style={styles.valorAgregado}>
Las urgencias tienen un valor agregado del 50%
</Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<TextInput style={styles.direccionInput} placeholder="Dirección"
        onChange={(event) => this.setState({direccionEscrito: event.nativeEvent.text})}/>

        <Image style={styles.imagestyle} 
    source={require('../img/inputLineaNaranja.png')} />
    <Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text> Seleccione que servicio requiere</Text>

<Picker
  selectedValue={this.state.tipoDeDestapacion}
  style={{height: 50, width: 190}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({tipoDeDestapacion: itemValue})
  }>
  <Picker.Item label="Destapación" value="1"/>
  <Picker.Item label="Desagote" value="2" />
  <Picker.Item label="Limpieza Hidrojet" value="3" />

</Picker>
<Text></Text>


        <Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>

        <TouchableOpacity style={styles.botonPedirTurno} onPress={this.botonPedirTurno}>
        <Image style={styles.imagestyle} 
    source={require('../img/solicitarUrgencia.png')} />
        </TouchableOpacity>

        </View>
            );
            }

} 

const styles = StyleSheet.create({
    viewPedidos: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        
    },

    direccionInput: {
      width: 200,
    },
    
    picker: {
      
    },

    valorAgregado: {
        color: "red",
    },
})




module.exports = pantallaPedirUrgencia;