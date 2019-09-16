import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, Picker} from 'react-native';

class pantallaPedirTurno extends React.Component {
    
    static navigationOptions = {

        tittle: "Pedido de turnos",
    
        headerStyle: {
          backgroundColor: "#CCCCCC",
        }
      };

    render(){
            return(
                <View style="viewPedidos">

                <Text> hola </Text>
        <TextInput style={styles.direccionInput} placeholder="Dirección" 
        onChange={(event) => this.setState({direccionEscrito: event.nativeEvent.text})}/>

        <TextInput style={styles.fechaInput} placeholder="Fecha" 
        onChange={(event) => this.setState({fechaEscrito: event.nativeEvent.text})}/>

        <TextInput style={styles.horaInput} placeholder="Hora" 
        onChange={(event) => this.setState({horaEscrito: event.nativeEvent.text})}/>

        <Picker
        selectedValue={this.state.language}
        style={{height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) =>
        this.setState({language: itemValue})
        }>

        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        
        </Picker>

        </View>
            );
            }

} 

const styles = StyleSheet.create({
    viewPedidos: {
        alignItems: "center",
        alignContent: "center",
    }
})




module.exports = pantallaPedirTurno;