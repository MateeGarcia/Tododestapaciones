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
          <View style={styles.viewPrincipal}>

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