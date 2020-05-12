import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

class Botao extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.styles = StyleSheet.create({
			botao: {
				width: 250,
				height: 50,
				borderWidth: 2,
				borderColor: 'black',
				backgroundColor: 'transparent',
				borderRadius: 25,
			},
			botaoArea: {
				flex: 1,
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center'
			},
			botaoText: {
				color: 'black',
				fontSize: 20,
				fontWeight: 'bold'
			}
		});
	}

	render() {
		return (
			<TouchableOpacity style={this.styles.botao} onPress={this.props.clicou}>
				<View style={this.styles.botaoArea}>
					<Text style={this.styles.botaoText}>Conversar</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

class Tela1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nome: ''
		};

		this.mudarNOME = this.mudarNOME.bind(this);
	}

	static navigationOptions = ({ navigator }) => ({
		title: 'CHAT'
	});

	mudarNOME(t) {
		let s = this.state;
		s.nome = t;
		this.setState(s);
	}

	render() {
		return (
			<View style={styles.tudo}>
				<View style={styles.TxtInput}>
					<TextInput style={styles.input} placeholder="Digite o nome de quem deseja conversar..." placeholderTextColor='black' onChangeText={this.mudarNOME} />
				</View>
				<View style={styles.btn}>
					<Botao clicou={() => this.props.navigation.navigate('Tela2', { nome: this.state.nome })} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	btn: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	input: {
		flex: 1,
		color: 'black',
		height: 40,
		borderWidth: 1,
		borderColor: 'black',
		margin: 10,
		padding: 10,
	},
	TxtInput: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	tudo:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
export default Tela1;