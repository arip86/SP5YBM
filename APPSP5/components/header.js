import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
export default function Header(){
    return (
        
<View style={styles.header}>
<Text style={styles.tittle}>Menu MakananQ</Text>
</View>
)

}
const styles = StyleSheet.create({
header:{
    height:80,
    paddingTop:30,
    backgroundColor: 'cyan',
    borderColor:'#000',
    borderWidth:2,
    borderStyle:'solid',
    borderRadius: 10,

},
tittle: {
    textAlign:'center',
    color: 'green',
    fontSize:20,
    fontWeight:'bold'
    
},
});