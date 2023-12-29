
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
        color: 'black',
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
    },
    text_inp:{
        borderWidth:1,
        borderColor:'black',
        margin:10,
        padding:1,
        borderRadius:10,
        width:250

    },
    btn:{
        alignItems:'center',
        backgroundColor:'#ccc',
        padding:10,
    }
})
export default styles;