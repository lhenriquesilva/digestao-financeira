import { useState } from "react";
import {
    Button,
    Text,
    TextInput,
    View
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function entrar() {

    const dados = await AsyncStorage.getItem(
      `usuario_${email}`
    );

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

    router.replace("/");
  }

  return (
    <View style={{ padding: 20 }}>

      <Text>Email</Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1 }}
      />

      <Text>Senha</Text>

      <TextInput
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        style={{ borderWidth: 1 }}
      />

      <Button
        title="Entrar"
        onPress={entrar}
      />

      <Button
        title="Cadastrar"
        onPress={() =>
          router.push("/cadastro")
        }
      />

    </View>
  );
}