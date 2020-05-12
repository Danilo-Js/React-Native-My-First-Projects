import React, { Component } from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default class QuintoProjeto extends Component {
  constructor(props){
    super(props);
    this.state = {consumido:0, status:'Ruim', pct:0}

    this.addCopo = this.addCopo.bind(this);
    this.atualizar = this.atualizar.bind(this);
  }

  atualizar(){
    let s = this.state;
    s.pct = Math.floor((s.consumido/2000)*100);

    if(s.pct >= 100){
      s.status = "Bom";
    }else{
      s.status = "Ruim";
    }
    this.setState(s);
  }

  addCopo(){
    let s = this.state;
    s.consumido += 200;
    this.setState(s);
    this.atualizar();
  }

  render() {
    return (
      <View style={styles.body}>
        <ImageBackground source={require('./assets/images/waterbg.png')} style={styles.bgimage}>
          <View>
            <View style={styles.infoArea}>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>META</Text>
                <Text style={styles.areaDado}>2000ml</Text>
              </View>

              <View style={styles.area}>
                <Text style={styles.areaTitulo}>CONSUMIDO</Text>
                <Text style={styles.areaDado}>{this.state.consumido}ml</Text>
              </View>

              <View style={styles.area}>
                <Text style={styles.areaTitulo}>STATUS</Text>
                <Text style={styles.areaDado}>{this.state.status}</Text>
              </View>
            </View>

            <View style={styles.pctArea}>
              <Text style={styles.pctText}>{this.state.pct}%</Text>
            </View>

            <View style={styles.btnArea} >
              <Button onPress={this.addCopo} title="Beber 200ml" color="#45b2fc"/>
            </View>

          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 20
  },
  bgimage: {
    flex: 1,
    width: null
  },
  infoArea: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 50
  },
  area: {
    flex: 1,
    alignItems: 'center'
  },
  areaTitulo: {
    color: '#45b2fc'
  },
  areaDado: {
    color: '#2b4274',
    fontSize: 15,
    fontWeight: 'bold'
  },
  pctArea: {
    marginTop: 200,
    alignItems: 'center'
  },
  pctText: {
    fontSize: 70,
    color: '#FFFFFF',
    backgroundColor: 'transparent'
  },
  btnArea: {
    marginTop: 60,
    alignItems: 'center',
  },
  btn:{
    color: '#45b2fc',
    width: 100000,
    height: 100000
  }
});