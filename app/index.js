import { useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  View
} from "react-native";
import { styles } from "../styles/LoginStyles";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function entrar() {

    const dados = await AsyncStorage.getItem(
      `usuario_${email}`
    );
p

    if (!dados) {
      alert("Usuário não encontrado");
      return;
    }

    const usuario = JSON.parse(dados);

    if (usuario.senha !== senha) {
      alert("Senha incorreta");
      return;
    }

    await AsyncStorage.setItem(
      "usuarioLogado",
      JSON.stringify(usuario)
    );

    router.replace("/home");
  }

  return (
    <View style={styles.container}>

      <View style={styles.logoContainer}>
        <Text style={styles.digestao}>Digestão</Text><Text> </Text><Text style={styles.financeira}>Financeira</Text>
      </View>


      <Text style={styles.titulo}>Login</Text>
      <Text style={styles.texto}>Email</Text>

      <TextInput style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu Email"
      />

      <Text style={styles.texto}>Senha</Text>

      <TextInput style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite sua Senha"
      />

      <Pressable style={styles.botao}
        onPress={entrar}
      ><Text style={styles.textoBotao}>Entrar</Text></Pressable>

    <View style={styles.cadastro}>
     <Text style={styles.textoCadastro}>Não possui conta?</Text><Pressable
        onPress={() =>
          router.push("/cadastro")
        }
      ><Text style={styles.textoLink}>Cadastrar-se</Text></Pressable>
      </View>

    </View>
  );
}