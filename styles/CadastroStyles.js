import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#0f172a",
    },

    input:{
       backgroundColor: 'hsl(222, 47%, 30%)',
       padding:10,
       borderRadius: 10,
       marginBottom:10,
       marginTop:5,
       width:'60%',
       placeholderTextColor: '#ffffff',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 10,
        color:'#ffffff',
    },
    texto:{
        color:'#ffffff',
        fontSize:16,
        fontFamily:'monospace',
    },

    botao:{
        backgroundColor: "#10b981",
    paddingVertical: 10,
    width:'50%',
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#10b981",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    margin:15
    },
    textoBotao:{
        color:'#ffffff',
        fontWeight:900,
        fontSize:20
    },

    cadastro:{
        alignItems:'center',
        margin:20,
        width:'100%'
    },

    textoCadastro:{
        color:'#ffffff'
    },
    textoLink:{
        color:'#10b981',
    },

    titulo:{
        position:'relative',
        top:-50,
        color:'#ffffff',
        fontSize: 40,
        fontWeight:800,
        letterSpacing:0.5
    },

    logoContainer:{ 
        position:'relative',
        top:-80,
        width:'100%',
        flex:0.4,
        flexDirection:'colum',
        justifyContent:'center',
        alignItems:'center',
    },
    digestao:{
        color:'#10b981',
        fontSize:55,
        fontWeight:900,
        letterSpacing:0.5,
        marginBottom:-30
    },
    financeira:{
        color:"#ffffff",
        fontSize:55,
        fontWeight:900,
        letterSpacing:0.5,
    }
});