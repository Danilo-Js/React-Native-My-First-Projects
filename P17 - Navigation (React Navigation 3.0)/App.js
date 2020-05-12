import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Home from './src/Home';
import Tela2 from './src/Tela2';

/* "const Navegador = createStackNavigator" -> uma stack na parte de cima do app 
   "const Navegador = createBottomTabNavigator" -> duas opções (tab) de telas na parte de baixo do app
   "const Navegador = createDrawerNavigator" -> 
*/

const Navegador = createBottomTabNavigator({
	Home: {
		screen: Home
	},
//	Tela2: {
//		screen: Tela2
//	}
}, {
		unmountInativeRoutes: true,
		defaultNavigationOptions: {
			//....
		}
	});

const AppContainer = createAppContainer(Navegador);
export default AppContainer;