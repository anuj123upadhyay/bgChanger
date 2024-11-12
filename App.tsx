
import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



export default function App():JSX.Element {

 const [randomBackground,setRandomBackground] = useState('#FFFFFF');

 const generateColor = ()=>{
  const hexRange = "0123456789ABCDEF"
  let color = "#" 
  for (let i = 0; i < 6; i++) {
   color+=hexRange[Math.floor(Math.random() * 16)]
    
  }
  setRandomBackground(color)
 }


  return (
    <>
    <StatusBar backgroundColor={"#000000"}/>
    <View style={[styles.container,{backgroundColor:randomBackground}]}>
      <TouchableOpacity onPress={generateColor}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnText}>Press Me</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  actionBtn:{
    borderRadius:12,
    backgroundColor:"#6A1840",
    paddingVertical:10,
    paddingHorizontal:40
  },
  actionBtnText:{
    fontSize:24,
    color:'#FFFFFF',
    textTransform:'uppercase'
  }
})