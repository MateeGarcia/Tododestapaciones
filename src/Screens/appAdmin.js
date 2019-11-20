import React from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight, ScrollView, Image} from 'react-native';

class appAdmin extends React.Component {

  static navigationOptions = {

    title: "Turnos",

    headerStyle: {
      backgroundColor: "orange",
    }
  };
  
  /*constructor(props){
    super(props)

    this.state ={

    }
  }





 componentDidMount() {

  fetch(`http://192.168.0.196:8000/api/Turnos/`)
    .then((response) => response.json())
    .then((responseJson) => {
global.nuevaLista= responseJson;
    })
    .catch((error) => {
      console.error(error);
    });

    this.props.navigation.navigate('appAdmin2');
} */



    constructor(props) {
      super(props);
      this.state = {};
      this.arrayholder = [];

    }
    componentWillMount() {
      return fetch('http://192.168.0.196:8000/api/Turnos/')
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              dataSource: responseJson,
            },
            function() {
              this.arrayholder = responseJson;
            }
            
          );
        })
        .catch(error => {
          console.error(error);
        });
    }


    render(){

      return( 

        <View style={styles.turnoGuardado}>
        <Text></Text>
                      <Text>
                      Fecha del turno: 2019-11-22
                      </Text>
                      <Text>
                      Hora del turno: 06:30
                      </Text>
                      <Text>
                      Tipo de turno: Desagote
                      </Text>
                      <Text>
                      Dirección del turno: Besares 4047
                      </Text>
                    <Text></Text>
                    <Image style={styles.imagestyle} 
    source={require('../img/inputLineaNaranja.png')} />
                  </View>
      );
  } 




} 

const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    flexDirection: "column",
  },

  turnoGuardado: {

  }
})

module.exports = appAdmin;

        /* 
        array1=[];
                    for (i = 0; i <= responseJson.length-1;i++){
                      array1.push(JSON.stringify(responseJson[i]));
                    } 
                    */