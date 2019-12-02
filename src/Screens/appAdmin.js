import React from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight, ScrollView, Image} from 'react-native';

class appAdmin extends React.Component {

  static navigationOptions = {

    title: "                        Turnos",
    headerLeft: null,
    headerStyle: {
      backgroundColor: "orange",
    }
  };
  
  /*constructor(props){
    super(props)

    this.state ={

    }
  } */


asd(){
  this.props.navigation.navigate('appAdmin2');
}

botonCerrarSesion = () => {
  global.userid= ""
  

  fetch ("http://10.8.17.18:8000/api/users/", {
    method: "POST",
    headers: {
      accept: "application/json", "content-type": "application/json",
    },
    body: JSON.stringify({

      userid: (global.userid),
      
    })
  })

  this.props.navigation.navigate('Login');
}

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
      fetch(`http://10.8.17.18:8000/api/Turnos/`)
      .then((response) => response.json())
      .then((responseJson) => {
    global.nuevaLista= responseJson;
    console.log(global.nuevaLista)
      })
      .catch((error) => {
        console.error(error);
      });
      return( 

        <View style={styles.turnoGuardado}>


        <TouchableHighlight style={styles.botonLoginCompletado} 
hitSlop={{top: 10, left: 20, bottom: 10, right: 20}}
onPress={() => {this.props.navigation.navigate('pantallaPedirTurno')}}
>
    <Image style={styles.imagestyle} 
    source={require('../img/hacerUnPedido.png')} />
    </TouchableHighlight>

    <TouchableHighlight style={styles.botonLoginCompletado} 
hitSlop={{top: 10, left: 20, bottom: 10, right: 20}}
onPress={() => {this.props.navigation.navigate('pantallaPedirUrgencia')}}
>
    <Image style={styles.imagestyle} 
    source={require('../img/solicitarUrgencia.png')} />
    </TouchableHighlight>



    <TouchableHighlight style={styles.botonLoginCompletado} 
hitSlop={{top: 10, left: 20, bottom: 10, right: 20}}
onPress={() => {this.props.navigation.navigate('appAdmin2')}}
>
    <Image style={styles.imagestyle} 
    source={require('../img/verMiPedido.png')} />
    </TouchableHighlight>

    <TouchableHighlight style={styles.botonLoginCompletado} onPress={this.botonCerrarSesion}>

<Image style={styles.imagestyle} 
    source={require('../img/LOGOUT.png')} />
    </TouchableHighlight>



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
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },

  botonLogin:{
    padding: 5,
    marginHorizontal: 30,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    borderColor: "#000000",
    borderWidth: 0.5,
    paddingBottom: 5,
    marginTop: 60,
  },

  botonLogin2:{
    padding: 5,
    marginHorizontal: 30,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    borderColor: "#000000",
    borderWidth: 0.5,
    paddingBottom: 5,
    marginTop: 120,
  },

  botonLogin3:{
    padding: 5,
    marginHorizontal: 30,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    borderColor: "#000000",
    borderWidth: 0.5,
    paddingBottom: 5,
    marginTop: 121,
  },


    titulo: {
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: "white",
    },
  
    tituloTododestapaciones: {
    alignItems: "center",
    justifyContent:"center",
    fontSize: 30,
    marginTop: 25,
    },

    logaso: {
      height: 40,
      width: 220
      
    },

    falsoBoton: {
      borderRadius: 10,
      backgroundColor: "#Ff732d",
      fontWeight: "100",
      fontSize: 30,
      borderWidth: 1.5,
      width: 280,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
    },
})

module.exports = appAdmin;

        /* 
        array1=[];
                    for (i = 0; i <= responseJson.length-1;i++){
                      array1.push(JSON.stringify(responseJson[i]));
                    } 
                    */