import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop:35,
    gap: 12,
    paddingBottom: 40,
    backgroundColor: "#0f172a",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "700",
    color:"#ffffff",
    fontWeight: 900,
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 16,
    color:'#ffffff',
  },

  label: {
    fontSize: 16,
    fontWeight: "500",
    color:"#ffffff"
  },

  input: {
    borderWidth: 1,
    borderColor: "#d4d4d8",
    borderRadius: 10,
    padding: 14,
    backgroundColor: "#fff",
  },

  inputPequeno: {
    flex: 1,
  },

  row: {
    flexDirection: "row",
    gap: 10,
  },

  opcao: {
    flex: 1,
    padding: 14,
    borderWidth: 1,
    borderColor: "#d4d4d8",
    borderRadius: 10,
    alignItems: "center",
},

 opcaodespesa: {
    flex: 1,
    padding: 14,
    borderWidth: 1,
    borderColor: "#ef4444",
    borderRadius: 10,
    alignItems: "center",
},

 opcaoreceita: {
    flex: 1,
    padding: 14,
    borderWidth: 1,
    borderColor: "#10b981",
    borderRadius: 10,
    alignItems: "center",
},

textoopcao:{
  color:'#ffffff',
  fontWeight: 700  
},

  opcaoSelecionada: {
   shadowColor: "#2563eb",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "#2563eb",
    borderColor:'#2563eb'
  },

  opcaoSelecionadareceita:{
    shadowColor: "#10b981",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "#10b981",
  },

  opcaoSelecionadadespesa:{
    shadowColor: "#ef4444",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "#ef4444",
  },

  botao: {
    backgroundColor: "#2563eb",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
    shadowColor: "#2563eb",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "600",
  },

  resultado: {
    marginTop: 24,
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#f4f4f5",
    alignItems: "center",
  },

  resultadoTitulo: {
    fontSize: 16,
    marginBottom: 8,
  },

  valorSaldo: {
    fontSize: 32,
    fontWeight: 800,
  },
});