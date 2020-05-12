import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

export default class Projeto extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flatData: [
				{ key: "1", nome: 'Danilo', idade: 19 },
				{ key: "2", nome: 'Bryan', idade: 20 },
				{ key: "3", nome: 'Murilo', idade: 29 },
				{ key: "4", nome: 'Ze Da Tauba', idade: 150 },
				{ key: "5", nome: 'Murilo', idade: 29 },
				{ key: "6", nome: 'Murilo', idade: 29 },
				{ key: "7", nome: 'Murilo', idade: 29 },
				{ key: "8", nome: 'Murilo', idade: 29 },
				{ key: "9", nome: 'Murilo', idade: 29 },
				{ key: "10", nome: 'Murilo', idade: 29 },
				{ key: "11", nome: 'Murilo', idade: 29 },
				{ key: "12", nome: 'Murilo', idade: 29 },
				{ key: "13", nome: 'Murilo', idade: 29 },
				{ key: "14", nome: 'Murilo', idade: 29 },
				{ key: "15", nome: 'Murilo', idade: 29 },
				{ key: "16", nome: 'Murilo', idade: 29 },
				{ key: "17", nome: 'Murilo', idade: 29 },
				{ key: "18", nome: 'Murilo', idade: 29 },
				{ key: "19", nome: 'Murilo', idade: 29 },
				{ key: "20", nome: 'Murilo', idade: 29 },
				{ key: "21", nome: 'Murilo', idade: 29 },
				{ key: "21", nome: 'Murilo', idade: 29 },
				{ key: "23", nome: 'Murilo', idade: 29 },
				{ key: "24", nome: 'Murilo', idade: 29 },
				{ key: "25", nome: 'Murilo', idade: 29 }
			]
		}
	}

	flatRender(item) {
		return (
			<View style={styles.flatItem}>
				<Text style={styles.flatNome}>{item.nome}</Text>
				<Text style={styles.flatIdade}>{item.idade} anos</Text>
			</View>
		);
	}

	render() {
		return (
			<View style={styles.body}>
				<FlatList data={this.state.flatData} renderItem={({ item }) => this.flatRender(item)} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	body: {
		paddingTop: 20,
	},
	flatNome: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'black'
	},
	flatIdade: {
		fontSize: 14,
		fontWeight: 'bold',
		color: 'black'
	},
	flatItem: {
		padding: 10,
		borderWidth: 1,
		borderColor: '#000000'
	}
});