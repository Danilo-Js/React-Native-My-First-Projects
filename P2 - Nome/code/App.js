import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';

export default class SegundoProjeto extends Component {

  constructor(props) {
    super(props);
    this.state = { texto: '' };

    this.mudarTexto = this.mudarTexto.bind(this);

  }

  mudarTexto(t) {
    let s = this.state;
    if (t.length > 0) {
      s.texto = 'Olá, ' + t;
    } else {
      s.texto = '';
    }
    this.setState(s);
  }

  render() {

    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <View style={{ flex: 1 }}></View>
        <View style={{ paddingTop: 30 }}>
          <TextInput style={styles.input} placeholder="Qual seu nome?" placeholderTextColor='white' onChangeText={this.mudarTexto} />

          <Text style={styles.texto}>{this.state.texto}</Text>
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
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  }
});