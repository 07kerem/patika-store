import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput, FlatList,
  StyleSheet,
  Text,
  InputAccessoryView,
  useColorScheme,
  View,
} from 'react-native';
import shop_new from './shop_new.json'
import Card from './Card'





function App() {
 
  return (  
    <SafeAreaView style= {Styles.container}>
<View style= {Styles.header}>
      <Text style={Styles.header_text}>PATİKA STORE</Text>
      <TextInput style= {Styles.input}
    placeholder='Ara...'
    />
    </View>
    <View>
      <FlatList 
      data={shop_new}
      renderItem={({item}) => <Card news={item}/> }
      numColumns={2}
      />
    </View>
    </SafeAreaView>
   
   
  )
}

const Styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'white'
  },
  input:{
    paddingLeft:15,
    color:'gray',
    fontSize:17,
    fontWeight:'300',
    backgroundColor: '#EBEBEB',
    borderRadius:10,
    
  },
  header:{
    padding:10,

  },
  header_text:{
   color:'purple',
   fontWeight: 'bold',
   fontSize:22,
   paddingBottom: 10,
  }
})





export default App;
