import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

class Coments extends Component {
  render() {
    let view = null
    if(this.props.coments) {
      view = this.props.coments.map((item, index) =>{
        return (
          <View style={styles.comentContainer} key={index}>
            <Text style={styles.nickname}>{item.nickname}</Text>
            <Text style={styles.coment}>{item.comment}</Text>
          </View>
        )
      })
    }
    return (
      <View style={styles.container}>
        {view}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin:1
  },
  comentContainer: {
    flexDirection:'row',
    marginTop:5
  },
  nickname:{
    marginLeft: 5,
    fontWeight:'bold',
    color:'#444'
  },
  coment: {
    color: '#555',
    marginLeft: 5,
  }
})

export default Coments