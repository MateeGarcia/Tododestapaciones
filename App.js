import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "./src/Components/Login"
import PaginaPrincipal from "./src/Screens/PaginaPrincipal"

const RootStack = createStackNavigator(
  {
    Login: Login,
    PaginaPrincipal: PaginaPrincipal
  },
  {
    initialRouteName: "Login",
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render () {
    return <AppContainer />;
  }
}
