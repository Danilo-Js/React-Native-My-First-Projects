import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './src/Home';
import Tela2 from './src/Tela2';

const Navegador = createDrawerNavigator({
	CHAT: {
		screen: Home
	},
}, {
		unmountInativeRoutes: true,
	});

const AppContainer = createAppContainer(Navegador);
export default AppContainer;