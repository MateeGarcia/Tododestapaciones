import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, TouchableHighlight, Picker} from 'react-native';

class pantallaPedirTurno extends React.Component {
    
    static navigationOptions = {

        tittle: "Pedido de turnos",
    
        headerStyle: {
          backgroundColor: "#CCCCCC",
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

        <TextInput style={styles.direccionInput} placeholder="Dirección" 
        onChange={(event) => this.setState({direccionEscrito: event.nativeEvent.text})}/>

        <TextInput style={styles.fechaInput} placeholder="Fecha" 
        onChange={(event) => this.setState({fechaEscrito: event.nativeEvent.text})}/>

        <TextInput style={styles.horaInput} placeholder="Hora" 
        onChange={(event) => this.setState({horaEscrito: event.nativeEvent.text})}/>
        

        <Picker
        style={{height: 50, width: 170}}
        onValueChange={(itemValue) => this.setState({tipoDeDestapacion: itemValue})
        }>
          
        <Picker.Item label="Destapación" value="destapacion" />
        <Picker.Item label="Desagote" value="desagote" />
        <Picker.Item label="Limpieza Hidrojet" value="hidrojet" />
        </Picker>

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
        backgroundColor: "#CCCCCC",
        justifyContent: "center",
        justifyContent: "space-around",
    },
})




module.exports = pantallaPedirTurno;