import React from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight} from 'react-native';

class appAdmin extends React.Component {

  static navigationOptions = {

    title: "Turnos",

    headerStyle: {
      backgroundColor: "orange",
    }
  };
  
  constructor(props) {
    super(props);
    this.state = {

    }
  }



    render(){


      fetch("https://jsonplaceholder.typicode.com/posts")
      .then ((response) => response.json())
      .then ((data) => {
                   console.log(data[2].id)
      })

        return(
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