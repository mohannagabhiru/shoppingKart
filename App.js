import { View, Text } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{flex:.5,flexDirection:'column',backgroundColor:'red',justifyContent:'space-around',alignItems:'center'}}>
      <View style={{flex:0.6,flexDirection:'row',flexWrap:'wrap',alignContent:'center'}}>
        <Text style={{padding:10,backgroundColor:'white', width: 50,height: 50,alignSelf:'flex-start'}}>Hello</Text>
        <Text style={{padding:10,backgroundColor:'orange', width: 50,height: 50}}>Hello</Text>
        <Text style={{padding:10,backgroundColor:'blue', width: 50,height: 50}}>Hello</Text>
        
      </View>
      {/* <Text style={{padding:10,margin:10,backgroundColor:'white'}}>Hello</Text>
      <Text style={{padding:10,margin:10,backgroundColor:'white',alignSelf:'baseline'}}>Hello5</Text>
      <Text style={{padding:10,margin:10,backgroundColor:'white'}}>Hello</Text>
      <Text style={{padding:10,margin:10,backgroundColor:'white'}}>Hello</Text>
      <Text style={{padding:10,margin:10,backgroundColor:'white'}}>Hello</Text>
      <Text style={{padding:10,margin:10,backgroundColor:'white'}}>Hello</Text>
      <Text style={{padding:10,margin:10,backgroundColor:'white'}}>Hello</Text>
      <Text style={{padding:10,margin:10,backgroundColor:'white'}}>Hello</Text>
      <Text style={{padding:10,margin:10,backgroundColor:'white'}}>Hello</Text>
      <Text style={{padding:10,margin:10,backgroundColor:'white'}}>Hello</Text>
      <Text style={{padding:10,margin:10,backgroundColor:'white'}}>Hello</Text> */}
      
    </View>
  )
}

export default App