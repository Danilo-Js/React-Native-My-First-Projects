import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Janta extends Component {

  constructor(props) {

    super(props);
    this.state = { comida: props.comida };
    let comidas = ['Pizza', 'X-tudo', 'Banana', 'Miojo', 'Misto'];

    setInterval(() => {
      this.setState(previousState => {
        let n = Math.floor(Math.random() * comidas.length);
        return { comida: comidas[n] };
      });
    }, 1000);

  }

  render() {
    return (
      <View>
        <Text style={styles.blueCenterBig}>Hoje você vai jantar:</Text>
        <Text style={styles.aboveBlue}>{this.state.comida}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  blueCenterBig: {
    paddingTop: 0,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  aboveBlue: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
});

export default class PrimeiroProjeto extends Component {

  render() {

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'black' }}></View>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ flex: 1, backgroundColor: 'white' }}></View>
          <Janta comida='Biscoito' />
          <View style={{ flex: 1, backgroundColor: 'white' }}></View>
        </View>
        <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
      </View>
    );

  }

}