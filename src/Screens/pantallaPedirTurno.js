import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, TouchableHighlight, Picker, Image, DatePickerAndroid, DatePickerIOS} from 'react-native';
import DatePicker from 'react-native-datepicker'

class pantallaPedirTurno extends React.Component {
    
    static navigationOptions = {

        tittle: "Pedido de turnos",
    
        headerStyle: {
          backgroundColor: "white",
        }
      };

      constructor(props) {
        super(props);
        this.state = {
          tipoDeDestapacion: "",
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
              direccion: (this.state.direccionEscrito),
              fecha: (this.state.fechaEscrito),
              hora: (this.state.horaEscrito),
              tipo: (this.state.tipoDeDestapacion),
            })
          });
        }   
      }

    render(){
            return(
                <View style={styles.viewPedidos}>

<DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />

        <TextInput style={styles.direccionInput} placeholder="Dirección"
        onChange={(event) => this.setState({direccionEscrito: event.nativeEvent.text})}/>

        <Image style={styles.imagestyle} 
    source={require('../img/inputLineaNaranja.png')} />

<Text></Text>
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