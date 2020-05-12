import React, { Component } from 'react';
import { View, StyleSheet, Picker, Text } from 'react-native';

export default class Projeto extends Component {
	constructor(props) {
		super(props);
		this.state = {
			servico: 0,
			servicos: [
				{ nome: 'Alinhamento', valor: 30 },
				{ nome: 'Balanceamento', valor: 20 },
				{ nome: 'Rodízio de Pneus', valor: 50 },
				{ nome: 'Dar uma voltinha', valor: 10 }
			]
		};
	}

	render() {
		let servicosItems = this.state.servicos.map((v, k) => {
			return <Picker.Item key={k} value={k} label={v.nome} />
		});
		return (
			<View style={styles.body}>
				<Text style={styles.logo}>AUTOPEÇAS JOSÉ</Text>
				<Picker selectedValue={this.state.servico} onValueChange={(itemValue, itemIndex) => this.setState({ servico: itemValue })}>
					{servicosItems}
				</Picker>
				<Text style={styles.texto}>R$ {this.state.servicos[this.state.servico].valor.toFixed(2)}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	body: {
		paddingTop: 20,
		backgroundColor: '#DDDDDD',
		flex: 1
	},
	logo: {
		fontSize: 30,
		textAlign: 'center',
		marginBottom: 20
	},
	texto:{
		fontSize:26,
		textAlign:'center',
		marginTop:20
	}
});