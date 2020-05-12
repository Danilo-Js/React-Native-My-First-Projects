import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, TextInput, Picker, Text, TouchableOpacity, Slider, Switch } from 'react-native';
import DatePicker from 'react-native-datepicker';

class BotaoSalvar extends Component {
	constructor(props) {
		super(props);
		this.styles = StyleSheet.create({
			botao: {
				width: 175,
				height: 35,
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
				fontSize: 13,
				fontWeight: 'bold'
			}
		});
	}

	render() {
		return (
			<TouchableOpacity style={this.styles.botao} onPress={this.props.clicouEmSalvar}>
				<View style={this.styles.botaoArea}>
					<Text style={this.styles.botaoText}>SALVAR</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

class BotaoAddCartao extends Component {
	constructor(props) {
		super(props);
		this.styles = StyleSheet.create({
			botao: {
				width: 50,
				height: 20,
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
				fontSize: 17,
				fontWeight: 'bold'
			}
		});
	}

	render() {
		return (
			<TouchableOpacity style={this.styles.botao} onPress={this.props.clicouEmAddCartao}>
				<View style={this.styles.botaoArea}>
					<Text style={this.styles.botaoText}>+</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

class BotaoRemoveCartao extends Component {
	constructor(props) {
		super(props);
		this.styles = StyleSheet.create({
			botao: {
				width: 50,
				height: 20,
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
				fontSize: 17,
				fontWeight: 'bold'
			}
		});
	}

	render() {
		return (
			<TouchableOpacity style={this.styles.botao} onPress={this.props.clicouEmRemoveCartao}>
				<View style={this.styles.botaoArea}>
					<Text style={this.styles.botaoText}>-</Text>
				</View>
			</TouchableOpacity>
		);
	}
}


export default class Projeto extends Component {
	constructor(props) {
		super(props);
		this.state = {
			DoadorDeOrgaos: '',
			DoadorVF: false,

			Salario: 400,
			Peso: 70,
			Altura: 1.70,
			date: "2016-05-15",
			Nome: '',
			QtCartoes: 0,
			salvar: '',

			sexo: 0,
			sexos: [
				{ nome: 'Masculino' },
				{ nome: 'Feminino' }
			],

			banco: 0,
			bancos: [
				{ nome: 'Caixa Econômica Federal' },
				{ nome: 'Banco do Brasil' },
				{ nome: 'Banco Santander' },
				{ nome: 'Banestes' },
			],
		};

		this.mudarNome = this.mudarNome.bind(this);
		this.Salvar = this.Salvar.bind(this);
		this.AddCartao = this.AddCartao.bind(this);
		this.RemoveCartao = this.RemoveCartao.bind(this);
	}

	Salvar() {
		let s = this.state;

		//convertendo o valor booleano em 'Sim' e 'Nao'
		if (s.DoadorVF == true) {
			s.DoadorDeOrgaos = 'Sim';
		} else {
			s.DoadorDeOrgaos = 'Não';
		}
		//colocando todas as informacoes numa variavel e depois fazendo um alert com ela
		s.salvar = 'DADOS PESSOAIS\nNome: ' + s.Nome + '\n Nascimento: ' + s.date + '\n Sexo: ' + s.sexos[s.sexo].nome + '\n Altura: ' + s.Altura.toFixed(2) + 'm' + '\n Peso: ' + s.Peso.toFixed(0) + 'kg' + '\n Doador de órgãos: ' + s.DoadorDeOrgaos + '\n\nDADOS FINANCEIROS\nSalário: R$' + s.Salario.toFixed(0) + '\nBanco: ' + s.bancos[s.banco].nome + '\nQt. de cartões: ' + s.QtCartoes;
		alert(s.salvar);
	}

	AddCartao() {
		let s = this.state;
		s.QtCartoes = s.QtCartoes + 1;
		this.setState(s);
	}

	RemoveCartao() {
		let s = this.state;
		if (s.QtCartoes != 0) {
			s.QtCartoes = s.QtCartoes - 1;
			this.setState(s);
		}
	}

	mudarNome(t) {
		let s = this.state;
		s.Nome = t;
		this.setState(s);
	}

	render() {
		//isso aqui é dos pickers do sexo e do banco
		let sexosItems = this.state.sexos.map((v, k) => {
			return <Picker.Item key={k} value={k} label={v.nome} />
		});
		let bancoItems = this.state.bancos.map((v, k) => {
			return <Picker.Item key={k} value={k} label={v.nome} />
		});

		return (
			<View style={styles.body}>
				<ImageBackground source={require('./assets/bg.jpg')} style={styles.bgimage}>
					<View style={{ flex: 1 }}></View>

					<TextInput style={styles.input} placeholder="Qual seu nome?" placeholderTextColor='black' onChangeText={this.mudarNome} />

					<Text style={styles.leg}>Qual seu aniversário?</Text>
					<DatePicker
						style={styles.dpck}
						date={this.state.date}
						mode="date"
						placeholder="Data do nascimento"
						format="YYYY-MM-DD"
						minDate="1950-01-001"
						maxDate="2016-06-01"
						confirmBtnText="Confirmar"
						cancelBtnText="Cancelar"
						customStyles={{
							dateIcon: {
								position: 'absolute',
								left: 0,
								top: 4,
								marginLeft: 20
							},
							dateInput: {
								marginLeft: 56,
								borderColor: 'black',
								borderRadius: 20,
								borderWidth: 1,
							}
						}}
						onDateChange={(date) => { this.setState({ date: date }) }}
					/>

					<Text style={styles.leg}>Qual seu sexo?</Text>
					<View style={styles.pick}>
						<Picker selectedValue={this.state.sexo} onValueChange={(itemValue, itemIndex) => this.setState({ sexo: itemValue })}>
							{sexosItems}
						</Picker>
					</View>

					<Text style={styles.leg}>Qual sua altura? {this.state.Altura.toFixed(2)}m</Text>
					<Slider minimumTrackTintColor="black" maximumTrackTintColor="grey" value={this.state.Altura} minimumValue={0} maximumValue={3} onValueChange={(v) => this.setState({ Altura: v })} />

					<Text style={styles.leg}>Qual seu peso? {this.state.Peso.toFixed(0)}kg</Text>
					<Slider minimumTrackTintColor="black" maximumTrackTintColor="grey" value={this.state.Peso} minimumValue={10} maximumValue={300} onValueChange={(v) => this.setState({ Peso: v })} />

					<Text style={styles.leg}>Você é doador de órgãos?</Text>
					<View style={styles.SW}>
						<Switch trackColor={{ true: 'black', false: 'grey' }} thumbColor="white" value={this.state.DoadorVF} onValueChange={(v) => this.setState({ DoadorVF: v })} />
					</View>





					<Text style={styles.leg}>Qual seu salário? R$ {this.state.Salario.toFixed(0)}</Text>
					<Slider minimumTrackTintColor="black" maximumTrackTintColor="grey" value={this.state.Salario} minimumValue={200} maximumValue={30000} onValueChange={(v) => this.setState({ Salario: v })} />

					<Text style={styles.leg}>Qual seu banco?</Text>
					<View style={styles.pick}>
						<Picker selectedValue={this.state.banco} onValueChange={(itemValue, itemIndex) => this.setState({ banco: itemValue })}>
							{bancoItems}
						</Picker>
					</View>

					<Text style={styles.leg}>Qt. de cartões</Text>
					<View style={styles.btn3}>
						<BotaoAddCartao clicouEmAddCartao={this.AddCartao} />
						<Text style={styles.leg1}>{this.state.QtCartoes.toFixed(0)}</Text>
						<BotaoRemoveCartao clicouEmRemoveCartao={this.RemoveCartao} />
					</View>

					<View style={styles.btn2}>
						<BotaoSalvar clicouEmSalvar={this.Salvar} />
					</View>

					<View style={{ flex: 1 }}></View>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
	},
	bgimage: {
		flex: 1,
	},
	input: {
		color: 'black',
		height: 40,
		borderWidth: 1,
		borderColor: 'black',
		margin: 10,
		padding: 10,
		borderRadius: 20
	},
	btn2: {
		justifyContent: 'center',
		alignItems: 'center',
		margin: 20
	},
	titulo: {
		color: 'black',
		fontSize: 30,
		fontWeight: 'bold',
	},
	tit: {
		justifyContent: 'center',
		alignItems: 'center',
		margin: 20
	},
	pick: {
		marginRight: 80,
		borderWidth: 1,
		marginLeft: 10,
		borderRadius: 20
	},
	dpck: {
		width: 200,
	},
	leg: {
		color: 'black',
		paddingTop: 5,
		marginTop: 5,
		marginLeft: 20,
		fontSize: 15,
		fontWeight: 'bold',
	},
	SW: {
		marginLeft: 20,
		alignItems: 'flex-start',
	},
	btn3: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		paddingLeft: 20,
		paddingRight: 30
	},
	leg1: {
		color: 'black',
		marginLeft: 20,
		marginRight: 20,
		fontSize: 15,
		fontWeight: 'bold',
	}
});