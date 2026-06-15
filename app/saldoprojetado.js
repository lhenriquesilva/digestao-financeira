import { router } from "expo-router";
import { useMemo, useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View
} from "react-native";

import { styles } from "../styles/EstimativasStyles";

export default function ProjecaoFinanceira() {
  const [saldoAtual, setSaldoAtual] = useState("");

  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("receita");
  const [valor, setValor] = useState("");
  const [recorrencia, setRecorrencia] = useState("fixa");
  const [inicio, setInicio] = useState("");
  const [parcelas, setParcelas] = useState("");

  const [mesSelecionado, setMesSelecionado] = useState(
    String(new Date().getMonth() + 1).padStart(2, "0")
  );
  const [anoSelecionado, setAnoSelecionado] = useState(
    String(new Date().getFullYear()).slice(-2)
  );

  const [lancamentos, setLancamentos] = useState([]);

  function converterData(data) {
    const [mes, ano] = data.split("/");

    return {
      mes: Number(mes) - 1,
      ano: Number(`20${ano}`),
    };
  }

  function validarData(data) {
    return /^(0[1-9]|1[0-2])\/\d{2}$/.test(data);
  }

  function adicionarLancamento() {
    if (!descricao || !valor || !inicio) {
      return;
    }

    if (!validarData(inicio)) {
      alert("Digite a data no formato MM/AA.");
      return;
    }

    if (
      recorrencia === "parcelada" &&
      (!parcelas || Number(parcelas) <= 0)
    ) {
      alert("Informe a quantidade de parcelas.");
      return;
    }

    const novoLancamento = {
      descricao,
      tipo,
      valor: Number(valor.replace(",", ".")),
      recorrencia,
      inicio,
      quantidadeParcelas: Number(parcelas) || 0,
    };

    setLancamentos((prev) => [...prev, novoLancamento]);

    setDescricao("");
    setValor("");
    setInicio("");
    setParcelas("");
    setTipo("receita");
    setRecorrencia("fixa");
  }

  function calcularSaldoProjetado() {
    let saldo = Number(saldoAtual.replace(",", ".")) || 0;

    const anoFinal = Number(`20${anoSelecionado}`);
    const mesFinal = Number(mesSelecionado) - 1;

    lancamentos.forEach((lancamento) => {
      const { mes: mesInicio, ano: anoInicio } = converterData(
        lancamento.inicio
      );

      const totalMeses =
        (anoFinal - anoInicio) * 12 + (mesFinal - mesInicio);

      if (totalMeses < 0) return;

      let quantidadeOcorrencias = 0;

      switch (lancamento.recorrencia) {
        case "unica":
          quantidadeOcorrencias = totalMeses >= 0 ? 1 : 0;
          break;

        case "fixa":
          quantidadeOcorrencias = totalMeses + 1;
          break;

        case "parcelada":
          quantidadeOcorrencias = Math.min(
            totalMeses + 1,
            lancamento.quantidadeParcelas
          );
          break;

        default:
          quantidadeOcorrencias = 0;
      }

      const valorMensal =
        lancamento.recorrencia === "parcelada"
          ? lancamento.valor / lancamento.quantidadeParcelas
          : lancamento.valor;

      const valorTotal = valorMensal * quantidadeOcorrencias;

      if (lancamento.tipo === "receita") {
        saldo += valorTotal;
      } else {
        saldo -= valorTotal;
      }
    });

    return saldo;
  }

  const saldoProjetado = useMemo(
    () => calcularSaldoProjetado(),
    [saldoAtual, mesSelecionado, anoSelecionado, lancamentos]
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable
      style={{
        position:'fixed',
        backgroundColor:'#ef4444',
        top:25,
        right:10,
        marginBottom:20,
        width:80,
        padding:10,
        borderRadius:20,
        textAlign:'center'
      }}
      onPress={()=> router.push("/")}
      ><Text
      style={{
        color:"#ffffff",
        fontWeight: 800
      }}
      >Log-Out</Text></Pressable>
      <Text style={styles.titulo}><Text style={{color:"#10b981"}}>Projeção</Text> Financeira</Text>

      <Text style={styles.label}>Saldo atual</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 2500"
        keyboardType="numeric"
        value={saldoAtual}
        onChangeText={setSaldoAtual}
      />

      <Text style={styles.subtitulo}>Novo lançamento</Text>
<Text style={{color:"#ffffff",
  marginBottom:-10
}}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
    <Text style={{color:"#ffffff",
      marginBottom:-10
    }}>Valor</Text>
      <TextInput
        style={styles.input}
        placeholder="Valor"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />
  <Text style={{color:"#ffffff",
    marginBottom:-10
  }}>Início MM/AA</Text>
      <TextInput
        style={styles.input}
        placeholder="Início (MM/AA)"
        value={inicio}
        onChangeText={setInicio}
        maxLength={5}
      />

      <Text style={styles.label}>Tipo</Text>

      <View style={styles.row}>
        <Pressable
          style={[
            styles.opcaoreceita,
            tipo === "receita" && styles.opcaoSelecionadareceita,
          ]}
          onPress={() => setTipo("receita")}
        >
          <Text style={styles.textoopcao}>Receita</Text>
        </Pressable>

        <Pressable
          style={[
            styles.opcaodespesa,
            tipo === "despesa" && styles.opcaoSelecionadadespesa,
          ]}
          onPress={() => setTipo("despesa")}
        >
          <Text style={styles.textoopcao}>Despesa</Text>
        </Pressable>
      </View>

      <Text style={styles.label}>Recorrência</Text>

      <View style={styles.row}>
        {["unica", "fixa", "parcelada"].map((item) => (
          <Pressable
            key={item}
            style={[
              styles.opcao,
              recorrencia === item && styles.opcaoSelecionada,
            ]}
            onPress={() => setRecorrencia(item)}
          >
            <Text style={styles.textoopcao}>
              {item === "unica"
                ? "Única"
                : item === "fixa"
                ? "Fixa"
                : "Parcelada"}
            </Text>
          </Pressable>
        ))}
      </View>

      {recorrencia === "parcelada" && (
        <TextInput
          style={styles.input}
          placeholder="Quantidade de parcelas"
          keyboardType="numeric"
          value={parcelas}
          onChangeText={setParcelas}
        />
      )}

      <Pressable style={styles.botao} onPress={adicionarLancamento}>
        <Text style={styles.textoBotao}>Adicionar lançamento</Text>
      </Pressable>

      <Text style={styles.subtitulo}>Mês da projeção</Text>

      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.inputPequeno]}
          placeholder="MM"
          keyboardType="numeric"
          maxLength={2}
          value={mesSelecionado}
          onChangeText={setMesSelecionado}
        />

        <TextInput
          style={[styles.input, styles.inputPequeno]}
          placeholder="AA"
          keyboardType="numeric"
          maxLength={2}
          value={anoSelecionado}
          onChangeText={setAnoSelecionado}
        />
      </View>

      <View style={styles.resultado}>
        <Text style={styles.resultadoTitulo}>
          Saldo estimado em {mesSelecionado}/{anoSelecionado}
        </Text>

        <Text
          style={[
            styles.valorSaldo,
            {
              color: saldoProjetado >= 0 ? "#16a34a" : "#dc2626",
            },
          ]}
        >
          R$ {saldoProjetado.toFixed(2)}
        </Text>
      </View>

      <Pressable 
      style={styles.botaoavulso}
      onPress={()=> router.push("./home")}
      > 
      <Text style={styles.textoBotao}>SALDO AVULSO</Text>
      </Pressable>
    </ScrollView>
  );
}
