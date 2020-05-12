import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Tela2 extends Component {

	static navigationOptions = ({navigator}) => ({
		title:'Bem Vindo 2'
	});

	render(){
		return(
			<View>
				<Text>TELA2</Text>
			</View>
		);
	}
}
export default Tela2;