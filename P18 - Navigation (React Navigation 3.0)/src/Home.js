import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Tela1 from './Tela1';
import Tela2 from './Tela2';

const Navegador = createStackNavigator({
	Tela1: {
		screen: Tela1
	},
	Tela2: {
		screen: Tela2
	}
}, {
	defaultNavigationOptions:{
		//TabBarIcon:
	}
});

const Home = createAppContainer(Navegador);
export default Home;