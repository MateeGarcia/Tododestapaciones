import React from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight} from 'react-native';

class appAdmin extends React.Component {

  static navigationOptions = {

    title: "Turnos",

    headerStyle: {
      backgroundColor: "orange",
    }
  };
  
  constructor(props){
    super(props)
    this.state ={
      data: [],
    }
  }

renderArray() {
  return fetch("http://10.8.17.18:8000/api/Turnos")
      .then ((response) => response.json())
      .then ((responseJson) => {
        console.log(responseJson)
        for (i = 0; responseJson.length <= i; i++){
          data.push()
        }
        /* const lista = this.state.data.concat(responseJson);
        this.setState({data: lista}); */

      })
      .catch((error) => {
      });
}

componentDidMount() {
  this.renderArray()
}

    render(){

        return( 
          /* console.log(this.state.data), */
          <View style={styles.viewPrincipal}>
            <Text>

            </Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    flexDirection: "column",
  }
})

module.exports = appAdmin;

        /* 
        array1=[];
                    for (i = 0; i <= responseJson.length-1;i++){
                      array1.push(JSON.stringify(responseJson[i]));
                    } 
                    */