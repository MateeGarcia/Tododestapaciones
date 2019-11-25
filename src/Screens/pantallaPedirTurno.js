import React from 'react';
import {StyleSheet, Text, TextInput, View, Button, TouchableOpacity, TouchableHighlight, Picker, Image, DatePickerAndroid, DatePickerIOS} from 'react-native';
import DatePicker from 'react-native-datepicker';

class pantallaPedirTurno extends React.Component {
    
  static navigationOptions = {

    title: "     Pedido de turnos",

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

          global.direccionn= this.state.direccionEscrito
          global.diaa= this.state.date
          global.horaa= this.state.hour
          if (this.state.tipoDeDestapacion=="2")
          global.tipoDeDestapacionn= "Desagote"

          if (this.state.tipoDeDestapacion=="1")
          global.tipoDeDestapacionn= "Destapacion"

          if (this.state.tipoDeDestapacion=="3")
          global.tipoDeDestapacionn= "Limpieza Hidrojet"

          console.log(global.direccionn)
          console.log(global.diaa)
          console.log(global.horaa)
          console.log(global.tipoDeDestapacionn)

          fetch ("http://192.168.0.196:8000/api/Turnos/", {
            method: "POST",
            headers: {
              accept: "application/json", "content-type": "application/json",
            },
            body: JSON.stringify({
              id_usuario: `http://192.168.0.196:8000/api/users/${global.userid}/`,
              direccion_id: "http://192.168.0.196:8000/api/Direccion/1/",
              direccion_mateo: (this.state.direccionEscrito),
              fechaturno: (this.state.hour),
              dia_turno: (this.state.date),
              id_camionetaturno: "http://192.168.0.196:8000/api/Camioneta/1/",
              id_trabajadorturno: "http://192.168.0.196:8000/api/Trabajador/1/",
              rating: "http://192.168.0.196:8000/api/Ratings/1/",
              detalle_pedido: "asd",
              opciones_de_pedido: (this.state.tipoDeDestapacion),
              estado_turno: "true",
              turno_o_urgencia: "1",
              /*
              direccion: (this.state.direccionEscrito),
              fecha: (this.state.fechaEscrito),
              hora: (this.state.horaEscrito),
              tipo: (this.state.tipoDeDestapacion),
              */
            })
          });
          
          this.props.navigation.navigate('PaginaPrincipal');
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

<View style={styles.picker}> 
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
</View>
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

        <TouchableOpacity style={styles.botonPedirTurno} onPress={this.botonPedirTurno}>
        <Image style={styles.imagestyle} 
    source={require('../img/hacerUnPedido.png')} />
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
    
    picker: {
      
    }
})




module.exports = pantallaPedirTurno;