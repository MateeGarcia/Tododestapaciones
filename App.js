import React from 'react';
import { createStackNavigator, createAppContainer} from "react-navigation";

import Login from "./src/Components/Login"
import PaginaPrincipal from "./src/Screens/PaginaPrincipal"
import pantallaRegister from "./src/Screens/pantallaRegister"
import pantallaRegisterSiguiente from "./src/Screens/pantallaRegisterSiguiente"

const RootStack = createStackNavigator(
  {
    Login: Login,
    PaginaPrincipal: PaginaPrincipal,
    pantallaRegister: pantallaRegister,
    pantallaRegisterSiguiente: pantallaRegisterSiguiente,
    pantallaPedirTurno: pantallaPedirTurno,
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

