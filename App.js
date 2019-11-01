import React from 'react';
import { createStackNavigator, createAppContainer} from "react-navigation";

import Login from "./src/Components/Login"
import PaginaPrincipal from "./src/Screens/PaginaPrincipal"
import pantallaRegister from "./src/Screens/pantallaRegister"
import pantallaRegisterSiguiente from "./src/Screens/pantallaRegisterSiguiente"
import pantallaPedirTurno from "./src/Screens/pantallaPedirTurno"
import verPedidos from "./src/Screens/verPedidos"
import miCuenta from "./src/Screens/miCuenta"

const RootStack = createStackNavigator(
  {
    Login: Login,
    PaginaPrincipal: PaginaPrincipal,
    pantallaRegister: pantallaRegister,
    pantallaRegisterSiguiente: pantallaRegisterSiguiente,
    pantallaPedirTurno: pantallaPedirTurno,
    verPedidos: verPedidos,
    miCuenta: miCuenta,
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

