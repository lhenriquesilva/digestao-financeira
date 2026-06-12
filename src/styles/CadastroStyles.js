import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#0f172a",
    },

    input:{
       backgroundColor: 'hsl(222, 47%, 30%)',
       padding:'10px',
       borderRadius: '10px',
       marginBottom:'10px',
       marginTop:'5px',
       width:'60%',
       placeholderTextColor: '#ffffff',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 10,
    },
    texto:{
        color:'#ffffff',
        fontSize:'16pt',
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
    margin:'15px'
    },
    textoBotao:{
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:'12pt'
    },

    cadastro:{
        alignItems:'center',
        margin:'20px',
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
        top:'-50px',
        color:'#ffffff',
        fontSize: '2.5rem',
        fontWeight:'bold',
        letterSpacing:0.5
    },

    logoContainer:{ 
        position:'relative',
        top:'-80px',
        width:'100vw',
        flex:0.4,
        flexDirection:'colum',
        justifyContent:'center',
        alignItems:'center',
    },
    digestao:{
        color:'#10b981',
        fontSize:'55px',
        fontWeight:'bold',
        letterSpacing:0.5,
        marginBottom:'-30px'
    },
    financeira:{
        color:"#ffffff",
        fontSize:'55px',
        fontWeight:'bold',
        letterSpacing:0.5,
    }
});