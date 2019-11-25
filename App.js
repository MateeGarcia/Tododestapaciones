import React from 'react';
import { createStackNavigator, createAppContainer} from "react-navigation";

import Login from "./src/Components/Login"
import PaginaPrincipal from "./src/Screens/PaginaPrincipal"
import pantallaRegister from "./src/Screens/pantallaRegister"
import pantallaRegisterSiguiente from "./src/Screens/pantallaRegisterSiguiente"
import pantallaPedirTurno from "./src/Screens/pantallaPedirTurno"
import pantallaPedirUrgencia from "./src/Screens/pantallaPedirUrgencia"
import verPedidos from "./src/Screens/verPedidos"
import verPedidos2 from "./src/Screens/verPedidos2"
import miCuenta from "./src/Screens/miCuenta"
import OrnitorrincoScreen from "./src/Screens/OrnitorrincoScreen"
import estrellas from "./src/Screens/estrellas"
import appAdmin from "./src/Screens/appAdmin"
import appAdmin2 from "./src/Screens/appAdmin2"
import cargar from "./src/Screens/cargar"
import cargar2 from "./src/Screens/cargar2"

const RootStack = createStackNavigator(
  {
    Login: Login, 
    PaginaPrincipal: PaginaPrincipal,
    pantallaRegister: pantallaRegister,
    pantallaRegisterSiguiente: pantallaRegisterSiguiente,
    pantallaPedirTurno: pantallaPedirTurno,
    verPedidos: verPedidos,
    verPedidos2: verPedidos2,
    miCuenta: miCuenta,
    OrnitorrincoScreen: OrnitorrincoScreen,
    estrellas: estrellas,
    appAdmin: appAdmin,
    appAdmin2: appAdmin2,
    pantallaPedirUrgencia: pantallaPedirUrgencia,
    cargar: cargar,
    cargar2: cargar2,
  },

  {
    initialRouteName: "Login",
  }
);


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {


    


  render () {
    return <AppContainer />;
  }
}

