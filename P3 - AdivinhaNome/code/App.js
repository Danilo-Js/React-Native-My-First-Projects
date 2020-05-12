import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default class TerceiroProjeto extends Component {
  constructor(props) {
    super(props);
    this.state = { inputTexto: '', inputTexto2: '', texto: '', texto2: '' };

    this.apertouBotao = this.apertouBotao.bind(this);
    this.apertouBotao2 = this.apertouBotao2.bind(this);
  }

  apertouBotao() {
    let s = this.state;
    s.texto = "Olá, " + s.inputTexto;
    this.setState(s);
  }

  apertouBotao2() {
    let ss = this.state;
    if (ss.inputTexto2 == '') {
      // code...
    } else {
      if (ss.inputTexto2 == ss.inputTexto) {
        ss.texto2 = "Você acertou!";
      } else {
        ss.texto2 = "Você errou!";
      }
    }
    this.setState(ss);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'blue' }}>
        <View style={{ flex: 1 }}></View>

        <View>
          <TextInput style={styles.input} placeholder="Qual seu nome?" placeholderTextColor='white' onChangeText={(inputTexto) => this.setState({ inputTexto })} />

          <Button title="Saudações" onPress={this.apertouBotao} />

          <Text style={styles.texto}>{this.state.texto}</Text>
        </View>

        <View style={{ flex: 1 }}></View>

        <View>
          <TextInput style={styles.input} placeholder="Adivinhe meu nome..." placeholderTextColor='white' onChangeText={(inputTexto2) => this.setState({ inputTexto2 })} />

          <Button title="Adivinhei" onPress={this.apertouBotao2} />

          <Text style={styles.texto}>{this.state.texto2}</Text>
        </View>

        <View style={{ flex: 1 }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    color: 'white',
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    margin: 10,
    padding: 10,
  },
  texto: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
});