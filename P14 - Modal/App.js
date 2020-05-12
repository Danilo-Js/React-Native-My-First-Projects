import React, { Component } from 'react';
import { View, StyleSheet, Modal, Text, Button } from 'react-native';

export default class Projeto extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false
		};

		this.abrirModal = this.abrirModal.bind(this);
		this.fecharModal = this.fecharModal.bind(this);
	}

	abrirModal() {
		let s = this.state;
		s.modalVisible = true;
		this.setState(s);
	}

	fecharModal() {
		let s = this.state;
		s.modalVisible = false;
		this.setState(s);
	}

	/*  animationType="fade" -> aparece na tela
		animationType="none" -> sem animação
		animationType="slide" -> arrastar de baixo pra cima
	*/

	render() {
		return (
			<View style={styles.body}>
				<Modal animationType="slide" visible={this.state.modalVisible}>
					<View style={styles.modal}>
						<Button title="X" onPress={this.fecharModal} />
						<Text>Testando 1,2,3..</Text>
					</View>
				</Modal>

				<Button title="Abrir Modal" onPress={this.abrirModal} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	body: {
		paddingTop: 20,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	modal: {
		flex: 1,
		backgroundColor: '#00FF00',
		paddingTop: 25,
		alignItems:'flex-start'
	}
});