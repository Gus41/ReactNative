
import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        color:'black',
        marginTop:50
        

    },
    txt:{
        color: 'white',
        fontSize:20,
        textAlign: 'center'
    },
    content:{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        shadowColor: 'black',
        margin:10
    },
    image:{
        width:50,
        resizeMode:'contain', //ajusta a imagem ao width
        
    },
    imgback:{
        resizeMode: 'cover',
        width:'100%',
        height:'100%'
    }
})
export default styles;