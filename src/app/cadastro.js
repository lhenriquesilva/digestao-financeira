import { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  View
} from "react-native";

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

    router.replace("/login");
}
  

  return (
    <View style={{ padding: 20 }}>

      <Text>Nome</Text>

      <TextInput
        value={nome}
        onChangeText={setNome}
        style={{ borderWidth: 1 }}
      />

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
        title="Cadastrar"
        onPress={cadastrar}
      />

    </View>
  );
}