import React from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight, ScrollView, Image} from 'react-native';

class cargar2 extends React.Component {

  static navigationOptions = {

    title: "Turnos",

    headerStyle: {
      backgroundColor: "orange",
    }
  };






 componentDidMount() {
    this.props.navigation.navigate('appAdmin2');
} 



    constructor(props) {
      super(props);
      this.state = {};
      this.arrayholder = [];

    }
    componentWillMount() {
      /* return fetch('http://192.168.0.196:8000/api/Turnos/')
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
        }); */
    } 


    render(){

      return( 

        <View>
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

module.exports = cargar2;

        /* 
        array1=[];
                    for (i = 0; i <= responseJson.length-1;i++){
                      array1.push(JSON.stringify(responseJson[i]));
                    } 
                    */