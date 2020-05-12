import React, { Component } from 'react';
import { View, StyleSheet, SectionList, Text } from 'react-native';

export default class Projeto extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listData: [
				{
					title: 'B', data: [
						{ key: "1", nome: 'Bunitim', idade: 19 }
					]
				},
				{
					title: 'C', data: [
						{ key: "2", nome: 'Cláudio', idade: 23 },
						{ key: "3", nome: 'Clebim', idade: 34 },
						{ key: "4", nome: 'Curioso', idade: 900 }
					]
				},
				{
					title: 'D', data: [
						{ key: "5", nome: 'Dantas', idade: 8 },
						{ key: "6", nome: 'Diverson', idade: 45 }
					]
				},
				{
					title: 'E', data: [
						{ key: "7", nome: 'Euzim', idade: 8 },
						{ key: "8", nome: 'Espertim', idade: 45 },
						{ key: "9", nome: 'Euzim', idade: 8 },
						{ key: "10", nome: 'Espertim', idade: 45 },
						{ key: "11", nome: 'Euzim', idade: 8 },
						{ key: "12", nome: 'Espertim', idade: 45 },
						{ key: "13", nome: 'Euzim', idade: 8 },
						{ key: "14", nome: 'Espertim', idade: 45 },
						{ key: "15", nome: 'Euzim', idade: 8 },
						{ key: "16", nome: 'Espertim', idade: 45 },
						{ key: "17", nome: 'Euzim', idade: 8 },
						{ key: "18", nome: 'Espertim', idade: 45 }
					]
				}
			]
		};
	}

	listSectionRender(section) {
		return (
			<Text style={styles.section}>Letra {section.title}</Text>
		);
	}

	listRender(item) {
		return (
			<Text style={styles.item}>{item.nome} - {item.idade} anos</Text>
		);
	}

	render() {
		return (
			<View style={styles.body}>
				<SectionList sections={this.state.listData} renderItem={({ item }) => this.listRender(item)} renderSectionHeader={({ section }) => this.listSectionRender(section)} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	body: {
		paddingTop: 20
	},
	item: {
		fontSize: 18,
		height: 40,
		padding: 10,
		color: 'black'
	},
	section: {
		fontSize: 14,
		backgroundColor: '#CCCCCC',
		padding: 10,
		fontWeight: 'bold',
		color: 'black'
	}
});