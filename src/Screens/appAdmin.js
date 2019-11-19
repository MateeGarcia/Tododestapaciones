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
    global.array = [];
    this.state ={
      data: [],
    }
  }

renderArray() {
      fetch("http://10.8.17.18:8000/api/Turnos")
      .then ((response) => response.json())
      .then ((responseJson) => {

         for (i = 0; i <= responseJson.length; i++){
          global.array.push(responseJson[i])
        } 
        console.log(global.array)

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

          <View style={styles.viewPrincipal}>
            <Text>
              {global.array}
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