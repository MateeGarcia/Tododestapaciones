import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, TouchableHighlight, Picker, Image, DatePickerAndroid, DatePickerIOS} from 'react-native';
import DatePicker from 'react-native-datepicker';

class pantallaPedirTurno extends React.Component {
    
  static navigationOptions = {

    title: "Pedido de turnos",

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
        }
      }

        botonPedirTurno = () => {
          fetch ("http://10.8.17.18:8000/api/Turnos/", {
            method: "POST",
            headers: {
              accept: "application/json", "content-type": "application/json",
            },
            body: JSON.stringify({
              id_usuario: `http://10.8.17.18:8000/api/users/${global.userid}/`,
              direccion_id: "http://10.8.17.18:8000/api/Direccion/2",
              fechaturno: "12:00:00",
              dia_turno: (this.state.date),
              id_camionetaturno: "http://10.8.17.18:8000/api/Camioneta/1/",
              id_trabajadorturno: "http://10.8.17.18:8000/api/Trabajador/1/",
              rating: "http://10.8.17.18:8000/api/Ratings/2/",
              detalle_pedido: "asd",
              opciones_de_pedido: 2,
              estado_turno: true,
              /*
              direccion: (this.state.direccionEscrito),
              fecha: (this.state.fechaEscrito),
              hora: (this.state.horaEscrito),
              tipo: (this.state.tipoDeDestapacion),
              */
            })
          });
        }   

    render(){
            return(
                <View style={styles.viewPedidos}>
        <TextInput style={styles.direccionInput} placeholder="Dirección"
        onChange={(event) => this.setState({direccionEscrito: event.nativeEvent.text})}/>

        <Image style={styles.imagestyle} 
    source={require('../img/inputLineaNaranja.png')} />

<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>

<DatePicker
      date={this.state.date}
      onDateChange={date => this.setState({ date })}
      mode={"date"}
    />

<Text></Text>
<Text></Text>
<Text></Text>

<DatePicker
      date={this.state.hour}
      onDateChange={hour => this.setState({ hour })}
      mode={"time"}
    />

<Text></Text>
<Text></Text>
<Text></Text>

<Picker
  selectedValue={this.state.tipoDeDestapacion}
  style={{height: 50, width: 190}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({tipoDeDestapacion: itemValue})
  }>
  <Picker.Item label="Destapación" value="1" />
  <Picker.Item label="Desagote" value="2" />
  <Picker.Item label="Limpieza Hidrojet" value="3" />

</Picker>

        <Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>

        <TouchableOpacity style={styles.botonPedirTurno} onPress={this.botonPedirTurno}>
          <Text>
          Solicitar turno
          </Text>
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
        justifyContent: "center",
        
    },

    direccionInput: {
      width: 200,
    },
})




module.exports = pantallaPedirTurno;