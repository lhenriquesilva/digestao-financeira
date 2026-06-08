import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Home() {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [movimentacoes, setMovimentacoes] = useState<any[]>([]);

  const adicionarMovimentacao = () => {
    if (!descricao.trim() || !valor.trim()) return;

    const numeroValor = parseFloat(valor);

    if (isNaN(numeroValor)) return;

    const novaMovimentacao = {
      id: Date.now().toString(),
      descricao,
      valor: numeroValor,
    };

    setMovimentacoes([...movimentacoes, novaMovimentacao]);
    setDescricao("");
    setValor("");
  };

  const saldo = movimentacoes.reduce(
    (total, item) => total + item.valor,
    0
  );

  const receitas = movimentacoes
    .filter((item) => item.valor > 0)
    .reduce((total, item) => total + item.valor, 0);

  const despesas = movimentacoes
    .filter((item) => item.valor < 0)
    .reduce((total, item) => total + item.valor, 0);

  const removerMovimentacao = (id: string) => {
    setMovimentacoes(
      movimentacoes.filter((item) => item.id !== id)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>💰 Gestão Financeira</Text>

      <View style={styles.cardSaldo}>
        <Text style={styles.textoSaldo}>Saldo Atual</Text>
        <Text style={styles.valorSaldo}>
          R$ {saldo.toFixed(2)}
        </Text>
      </View>

      <View style={styles.resumo}>
        <View style={styles.cardResumo}>
          <Text style={styles.labelResumo}>Receitas</Text>
          <Text style={styles.receita}>
            R$ {receitas.toFixed(2)}
          </Text>
        </View>

        <View style={styles.cardResumo}>
          <Text style={styles.labelResumo}>Despesas</Text>
          <Text style={styles.despesa}>
            R$ {Math.abs(despesas).toFixed(2)}
          </Text>
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInput
        style={styles.input}
        placeholder="Valor (positivo ou negativo)"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <Pressable
        style={styles.botao}
        onPress={adicionarMovimentacao}
      >
        <Text style={styles.textoBotao}>
          Adicionar Movimentação
        </Text>
      </Pressable>

      <FlatList
        data={movimentacoes}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Nenhuma movimentação cadastrada.
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View>
              <Text style={styles.descricao}>
                {item.descricao}
              </Text>
              <Text
                style={[
                  styles.valor,
                  {
                    color:
                      item.valor >= 0
                        ? "#16a34a"
                        : "#dc2626",
                  },
                ]}
              >
                R$ {item.valor.toFixed(2)}
              </Text>
            </View>

            <Pressable
              style={styles.botaoExcluir}
              onPress={() =>
                removerMovimentacao(item.id)
              }
            >
              <Text style={styles.textoExcluir}>🗑️</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#eef2ff",
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 20,
    color: "#1e293b",
  },

  cardSaldo: {
    backgroundColor: "#4f46e5",
    padding: 25,
    borderRadius: 20,
    marginBottom: 20,
  },

  textoSaldo: {
    color: "#fff",
    fontSize: 18,
  },

  valorSaldo: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 8,
  },

  resumo: {
    flexDirection: "row",
    marginBottom: 20,
  },

  cardResumo: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 5,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  labelResumo: {
    color: "#64748b",
    fontSize: 14,
  },

  receita: {
    color: "#16a34a",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 5,
  },

  despesa: {
    color: "#dc2626",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 5,
  },

  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    fontSize: 16,
  },

  botao: {
    backgroundColor: "#4f46e5",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },

  descricao: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1e293b",
  },

  valor: {
    fontSize: 16,
    marginTop: 4,
    fontWeight: "bold",
  },

  botaoExcluir: {
    padding: 10,
  },

  textoExcluir: {
    fontSize: 20,
  },

  vazio: {
    textAlign: "center",
    color: "#64748b",
    marginTop: 30,
    fontSize: 16,
  },
});