import React from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight} from 'react-native';

class appAdmin extends React.Component {

  static navigationOptions = {

    title: "Turnos",

    headerStyle: {
      backgroundColor: "orange",
    }
  };
  
  constructor(){
    super()
    this.state ={
      data:[]
    }
  }

renderArray() {
  return fetch("http://192.168.0.196:8000/api/Turnos")
      .then ((response) => response.json())
      .then ((responseJson) => {  
        this.setState({data: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
}

componentDidMount() {
  this.renderArray()
}

    render(){

        return(
          console.log(data),
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