import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Tela2 extends Component {
	static navigationOptions = ({ navigator }) => ({
		title: 'CHAT'
	});

	render() {
		const param = this.props.navigation.state.params;
		return (
			<View style={{ flex: 1 }}>
				<Text style={styles.titl}> Conversando com {param.nome}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	titl: {
		fontSize: 20,
		color: 'black',
		textAlign: 'center'
	}
});
export default Tela2;