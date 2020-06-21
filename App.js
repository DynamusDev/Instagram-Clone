import React, {Component} from 'react'
import Header from './src/components/Header'
import {View} from 'react-native'
import Post from './src/components/Post'



export default class App extends Component {
  render() {
    const coments =[{
      nickname:'Joana Helena Silva',
      coments: 'excelente foto!' 
    }, {
      nickname:'Rafael Gustavo Pereira',
      coments: 'Muito Ruim, faço melhor...'
    }]

    return (
      <View style={{flex:1}}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')} 
          coments={coments}/>
      </View>
    );
  }
}

