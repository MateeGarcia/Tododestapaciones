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
          date: "",
          fechaEscrito: "",
          horaEscrito: "",
          date: "",
          hour: "",
        }
      }

      botonPedirTurno = () => {
        botonRegistrarse = () => {
          fetch ("http://10.8.17.18:8000/api/users/", {
            method: "POST",
            headers: {
              accept: "application/json", "content-type": "application/json",
            },
            body: JSON.stringify({
              id_usuario: 1,
              direccion_id: 1,
              fechaturno: fechaEscrito,
              id_camionetaturno: 1,
              id_trabajadorturno: 1,
              rating: 1,
              detalle_pedido: "asd",
              opciones_de_pedido: tipoDeDestapacion
              /*
              direccion: (this.state.direccionEscrito),
              fecha: (this.state.fechaEscrito),
              hora: (this.state.horaEscrito),
              tipo: (this.state.tipoDeDestapacion),
              */
            })
          });
        }   
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
  <Picker.Item label="Destapación" value="destapacion" />
  <Picker.Item label="Desagote" value="desagote" />
  <Picker.Item label="Limpieza Hidrojet" value="hidrojet" />

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
})




module.exports = pantallaPedirTurno;