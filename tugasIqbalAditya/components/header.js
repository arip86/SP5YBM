import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
export default function Header(){
    return (
        
<View style={styles.header}>
<Text style={styles.tittle}>EDEN</Text>
</View>
)

}
const styles = StyleSheet.create({
header:{
    height:100,
    paddingTop:40,
    backgroundColor: 'turquoise',
    borderColor:'cyan',
    borderWidth:2,
    borderStyle:'dotted',
    borderRadius: 10,

},
tittle: {
    textAlign:'center',
    color: 'green',
    fontSize:20,
    fontWeight:'bold'
    
},
});