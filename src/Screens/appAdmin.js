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
        return(
          <View>

          </View>
        );
    }
}

const styles = StyleSheet.create({

})

module.exports = appAdmin;