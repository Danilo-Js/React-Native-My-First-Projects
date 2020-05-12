import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, FlatList } from 'react-native';
import MsgItem from './src/MsgItem';

export default class Projeto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: [
        { key: '1', nome: 'Danilo', msg: 'Oi', m: true },
        { key: '2', nome: 'Gatinha', msg: 'Opa, tudo bem?', m: false },
        { key: '3', nome: 'Gatinha', msg: 'Como vai a vida?', m: false },
        { key: '4', nome: 'Danilo', msg: 'Vai muito bem, graças ao seu Deus. E você? Tá namorando ainda?', m: true },
        { key: '5', nome: 'Gatinha', msg: 'Não, terminei.', m: false },
        { key: '6', nome: 'Danilo', msg: 'Ah, sim..', m: true },
        { key: '7', nome: 'Danilo', msg: 'Bora sair hj? Te pago um cerveja rsrs', m: true },
        { key: '8', nome: 'Gatinha', msg: 'Uhm....', m: false },
        { key: '9', nome: 'Gatinha', msg: 'Bora', m: false },
      ]
    };
  }

  render() {
    return (
      <View style={styles.body}>
        <ImageBackground source={require('./assets/bcg.jpg')} style={styles.chat}>
          <FlatList
            data={this.state.chat}
            renderItem={({ item }) => <MsgItem data={item} />}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  chat: {
    flex: 1,
    paddingTop: 30
  }
});