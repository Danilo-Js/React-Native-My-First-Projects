import React, { Component } from 'react';
import { View, StyleSheet, Button, StatusBar} from 'react-native';

export default class Projeto extends Component {
	constructor(props){
		super(props);
		this.state = {
			statusStyle:'dark-content',
			bgColor:'#FFFFFF'
		};

		this.alternar = this.alternar.bind(this);

	}

	alternar(){
		let s = this.state;
		if(s.statusStyle == 'dark-content'){
			s.statusStyle = 'light-content';
			s.bgColor = '#000000';
		}else{
			s.statusStyle = 'dark-content';
			s.bgColor = '#FFFFFF';
		}
		this.setState(s);
	}

/*  barStyle={default} -> padrão
	barStyle={light-content} -> branco
	barStyle={dark-content} -> preto

	no Android dá pra usar backgroundColor="" pra definir o fundo da
	StatusBar, mas no iPhone não.
*/

	render() {
		return (
			<View style={[styles.body, {backgroundColor:this.state.bgColor}]}>
			<StatusBar barStyle={this.state.statusStyle} hidden={false}/>
				<Button title="Alternar" onPress={this.alternar}/>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	body: {
		paddingTop: 20,
		flex: 1,
		justifyContent:'center',
		alignItems:'center'
	}
});