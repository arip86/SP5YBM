import React, {Component} from 'react' ;
import{AppRegistry,FlatList,StyleSheet,Text,View,Image,Alert} from 'react-native';
import flatlistData from '../data/flatlistData';
import Header from '../components/header';
import Swipeout from 'react-native-swipeout';

class FlatListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activeRowkey: null
        };
    }
    render(){
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId , direction) =>{
                if (this.state.activeRowkey != null) {
                this.setState({activeRowkey:null});
                }
            },
            onOpen: (secId, rowId , direction) => {
                this.setState({activeRowkey: this.props.item.key});
            },
            right: [
                {
                    onPress: () => {
                        Alert.alert(
                            'Hayoo',
                            'Yakin dihapus Bos ?',
                            [
                                {text:'No', onPress: () => console.log('Cancel Procesd'), style: 'cancel'},
                                {text:'Yes', onPress:() =>{
                                    flatlistData.splice(this.props.index, 1);
                                }},
                            ],
                            {cancelable:true}
                        )
                    },
                    text: 'Delete', type:'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };
        return (
            
            <Swipeout {...swipeSettings}>
 <View style={{
                flex:1,
                flexDirection:'column',
            }}>

            <View style={{
                flex:1,
                backgroundColor:'cyan',
                flexDirection:'row',
            }}>
                
<Image
source={{uri:this.props.item.imageUrl}}
style={{width:100,height:100,margin:5}}
></Image>
<View style={{
flex:1,
flexDirection: 'column',
height:100

}}>
                <Text style={styles.FlatListItem}>{this.props.item.name}</Text>
                <Text style={styles.FlatListItem}>{this.props.item.description}</Text>
            </View>
            </View>
            <View
            style={{
                height:2,
                backgroundColor: 'green'

            }}
            >     
            </View>
            </View>
            </Swipeout>

           
        )
    }
}
const styles = StyleSheet.create({
    FlatListItem:{
        color:'#228B22',
        padding:10,
        fontSize:20,
    },

})


export default class BasicFlatListData extends Component {
    render() {
        return (
            <View style={{flex:1, marginTop: 22}}>
                <Header/>
                <FlatList 
                data={flatlistData}
                renderItem={({item ,index}) => {
                    return(
                        <FlatListItem item={item} index={index}>
                        
                        </FlatListItem>
                 );
                }}
                >

                </FlatList>
                </View>
        );
    }
}
        