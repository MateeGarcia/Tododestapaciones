import React from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight, ScrollView, Image} from 'react-native';

class verPedidos2 extends React.Component {

  static navigationOptions = {

    title: "     Turnos asignados",

    headerStyle: {
      backgroundColor: "orange",
    }
  };
  
  /*constructor(props){
    super(props)

    this.state ={

    }
  } */





 componentDidMount() {

} 



    constructor(props) {
      super(props);
      this.state = {};
      this.arrayholder = [];

    }
    componentWillMount() {



    } 


    render(){
        fetch(`http://192.168.0.196:8000/api/Turnos/?id_usuario=${global.userid}`)
        .then ((response) => response.json())
        .then ((responseJson) => {
          global.turnosUsuario= responseJson;
        })
        .catch((error) => {
          console.error(error);
        });
      this.props.navigation.navigate('verPedidos');
      return( 

        <View style={styles.turnoGuardado}>
        <Text></Text>

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

module.exports = verPedidos2;

        /* 
        array1=[];
                    for (i = 0; i <= responseJson.length-1;i++){
                      array1.push(JSON.stringify(responseJson[i]));
                    } 
                    */