import React from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight, ScrollView} from 'react-native';

class appAdmin2 extends React.Component {

  static navigationOptions = {

    title: "Turnos",

    headerStyle: {
      backgroundColor: "orange",
    }
  };
  
  constructor(props){
    super(props)

    this.state ={

    }
  }





componentDidMount() {



}

    render(){

        return( 
  console.log(global.nuevaLista),
          <View style={styles.viewPrincipal}>
            <Text>
                appAdmin2
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

module.exports = appAdmin2;

        /* 
        array1=[];
                    for (i = 0; i <= responseJson.length-1;i++){
                      array1.push(JSON.stringify(responseJson[i]));
                    } 
                    */