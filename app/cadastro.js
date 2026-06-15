import { useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  View
} from "react-native";
import { styles } from "../styles/CadastroStyles";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function Cadastro() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function cadastrar() {
  const emailFormatado = email.trim().toLowerCase();

  if (
    nome.trim() === "" ||
    emailFormatado === "" ||
    senha.trim() === ""
  ) {
    alert("Há campos que não foram preenchidos!");
    return;
  }

  const usuarioExistente = await AsyncStorage.getItem(
    `usuario_${emailFormatado}`
  );

  if (usuarioExistente) {
    alert("Este e-mail já está cadastrado!");
    return;
  }

  const usuario = {
    nome: nome.trim(),
    email: emailFormatado,
    senha
  };

  await AsyncStorage.setItem(
    `usuario_${emailFormatado}`,
    JSON.stringify(usuario)
  );

  alert("Cadastro realizado com sucesso!");

  router.replace("/");
}
  

  return (
    <View style={styles.container}>

     <View style={styles.logoContainer}>
            <Text style={styles.digestao}>Digestão</Text><Text> </Text><Text style={styles.financeira}>Financeira</Text>
          </View>
    
    
          <Text style={styles.titulo}>Cadastro</Text>
      <Text style={styles.texto}>Nome</Text>

      <TextInput
        value={nome}
        onChangeText={setNome}
        style={ styles.input }
        placeholder="Digite seu Nome"
      />

      <Text style={styles.texto}>Email</Text>

      <TextInput
  style={styles.input}
  value={email}
  onChangeText={(texto) => setEmail(texto.trim().toLowerCase())}
  placeholder="Digite seu Email"
  autoCapitalize="none"
/>

      <Text style={styles.texto}>Senha</Text>

      <TextInput
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        style={ styles.input }
        placeholder="Digite sua Senha"
      />

      <Pressable style={styles.botao}
        onPress={cadastrar}
      ><Text  style={styles.textoBotao}>Cadastrar-se</Text></Pressable>
      <Pressable
      onPress={()=>
        router.push("/")
      }><Text style={styles.textoLink}>Voltar</Text></Pressable>



<Pressable style={{
        position:'relative',
        top:50,
        padding:10,
        backgroundColor: '#2563eb',
        borderRadius: 20
      }}
        onPress={()=> router.push('./missao')}
      ><Text
      style={{
        color:"#ffffff",
        fontSize: 12,
        fontWeight: 800
      }}
      >Nossa Missao</Text></Pressable>
  <Text style={styles.rodape}>and on, and on, and on...</Text>

    </View>
  );
}