import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Tela1 extends Component {
	static navigationOptions = ({navigator}) => ({
		title:'Bem Vindo 1 '
	});

	render(){
		return(
			<View>
				<Text>TELA1</Text>
			</View>
		);
	}
}
export default Tela1;