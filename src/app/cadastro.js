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

    const usuario = {
      nome,
      email,
      senha
    };
    if(usuario.email.trim() === "" || usuario.senha.trim() === "" || usuario.nome.trim() === ""){
        alert("Há campos que não foram preenchidos!")
        return;
    }
    await AsyncStorage.setItem(
      `usuario_${email}`,
      JSON.stringify(usuario)
    );

    alert(
      "Sucesso",
      "Cadastro realizado!"
    );

    router.replace("/");
}
  

  return (
    <View style={styles.container}>

     <View style={styles.logoContainer}>
            <Text style={styles.digestao}>Digestao</Text><Text> </Text><Text style={styles.financeira}>Financeira</Text>
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
        value={email}
        onChangeText={setEmail}
        style={ styles.input }
        placeholder="Digite seu Email"
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

    </View>
  );
}