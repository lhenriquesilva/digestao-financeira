import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "../styles/HomeStyles";

export default function Home() {
  const [saldo, setSaldo] = useState(0);
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [transacoes, setTransacoes] = useState([]);
  const [mensagem, setMensagem] = useState("");

  const obterDataFormatada = () => {
    const agora = new Date();
    const dia = String(agora.getDate()).padStart(2, "0");
    const mes = String(agora.getMonth() + 1).padStart(2, "0");
    const ano = agora.getFullYear();
    const horas = String(agora.getHours()).padStart(2, "0");
    const minutos = String(agora.getMinutes()).padStart(2, "0");
    return {
      data: `${dia}/${mes}/${ano}`,
      hora: `${horas}:${minutos}`,
      completa: `${dia}/${mes}/${ano} ${horas}:${minutos}`
    };
  };

  const adicionarCredito = () => {
    const valorNumerico = parseFloat(valor);
    const desc = descricao.trim() || "Grana";
    const { data, hora, completa } = obterDataFormatada();
    
    if (!isNaN(valorNumerico) && valorNumerico > 0) {
      const novoSaldo = saldo + valorNumerico;
      setSaldo(novoSaldo);
      
      setTransacoes([
        { 
          tipo: "crédito", 
          valor: valorNumerico, 
          descricao: desc,
          data,
          hora,
          completa,
          timestamp: new Date().getTime()
        },
        ...transacoes,
      ]);
      
      setMensagem("🎉 Grana entrando!");
      setValor("");
      setDescricao("");
      
      setTimeout(() => setMensagem(""), 2500);
    }
  };

  const adicionarDebito = () => {
    const valorNumerico = parseFloat(valor);
    const desc = descricao.trim() || "Gasto";
    const { data, hora, completa } = obterDataFormatada();
    
    if (!isNaN(valorNumerico) && valorNumerico > 0 && saldo >= valorNumerico) {
      const novoSaldo = saldo - valorNumerico;
      setSaldo(novoSaldo);
      
      setTransacoes([
        { 
          tipo: "débito", 
          valor: valorNumerico, 
          descricao: desc,
          data,
          hora,
          completa,
          timestamp: new Date().getTime()
        },
        ...transacoes,
      ]);
      
      setMensagem("💸 Gastei!");
      setValor("");
      setDescricao("");
      
      setTimeout(() => setMensagem(""), 2500);
    }
  };

  const resetarConta = () => {
    setSaldo(0);
    setTransacoes([]);
    setValor("");
    setDescricao("");
    setMensagem("");
  };

  const removerTransacao = (index) => {
    const transacao = transacoes[index];
    
    let novoSaldo = saldo;
    if (transacao.tipo === "crédito") {
      novoSaldo = saldo - transacao.valor;
    } else {
      novoSaldo = saldo + transacao.valor;
    }
    
    setSaldo(novoSaldo);
    const novasTransacoes = transacoes.filter((_, i) => i !== index);
    setTransacoes(novasTransacoes);
    
    setMensagem("🗑️ Transação removida!");
    setTimeout(() => setMensagem(""), 2500);
  };

  // Agrupar transações por data
  const agruparPorData = () => {
    const grupos = {};
    transacoes.forEach(t => {
      if (!grupos[t.data]) {
        grupos[t.data] = [];
      }
      grupos[t.data].push(t);
    });
    return grupos;
  };

  
  const calcularTotaisPorData = (transacoesDia) => {
    let entradas = 0;
    let saidas = 0;
    transacoesDia.forEach(t => {
      if (t.tipo === "crédito") {
        entradas += t.valor;
      } else {
        saidas += t.valor;
      }
    });
    return { entradas, saidas, liquido: entradas - saidas };
  };

  const transacoesPorData = agruparPorData();

  return (
    <ScrollView style={styles.container}>
      <Pressable
      style={{
        position:'fixed',
        backgroundColor:'#ef4444',
        top:25,
        right:10,
        marginBottom:50,
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



      <View style={styles.headerContainer}>
        <Text style={styles.titulo}>💰 Meu Dinheiro</Text>
        
        <View style={styles.saldoContainer}>
          <Text style={styles.saldoLabel}>Tenho Agora</Text>
          <Text style={styles.saldoValor}>
            R$ {saldo.toFixed(2).replace(".", ",")}
          </Text>
          
          {mensagem ? (
            <Text style={styles.mensagem}>
              {mensagem}
            </Text>
          ) : null}
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Receita/Despesa"
          placeholderTextColor="#999"
          value={descricao}
          onChangeText={setDescricao}
        />
        <TextInput
          style={styles.input}
          placeholder="Valor"
          placeholderTextColor="#999"
          value={valor}
          onChangeText={setValor}
          keyboardType="decimal-pad"
        />
      </View>

      <View style={styles.botoesContainer}>
        <Pressable
          onPress={adicionarCredito}
          style={styles.botaoCredito}
        >
          <Text style={styles.textoBotao}>💰 RECEBI</Text>
        </Pressable>

        <Pressable
          onPress={adicionarDebito}
          style={[
            styles.botaoDebito,
            saldo < (parseFloat(valor) || 0) && { opacity: 0.5 },
          ]}
          disabled={saldo < (parseFloat(valor) || 0)}
        >
          <Text style={styles.textoBotao}>💸 GASTEI</Text>
        </Pressable>

        <Pressable
          onPress={resetarConta}
          style={styles.botaoReset}
        >
          <Text style={styles.textoBotao}>🔄 LIMPAR</Text>
        </Pressable>

          <Pressable
          onPress={()=> router.push("./saldoprojetado")}
          style={styles.botaoprojecao}
        >
          <Text style={styles.textoBotao}>SALDO PROJETADO</Text>
        </Pressable>

      </View>

      <View style={styles.transacoesContainer}>
        <Text style={styles.transacoesTitle}>� Meu Histórico</Text>
        {transacoes.length === 0 ? (
          <Text style={styles.semTransacoes}>Sem movimentações ainda</Text>
        ) : (
          Object.keys(transacoesPorData)
            .sort((a, b) => new Date(b.split('/').reverse().join('-')) - new Date(a.split('/').reverse().join('-')))
            .map((data) => {
              const transacoesDia = transacoesPorData[data];
              const { entradas, saidas, liquido } = calcularTotaisPorData(transacoesDia);
              
              return (
                <View key={data} style={styles.diarioSection}>
                  <View style={styles.diarioHeader}>
                    <Text style={styles.diarioData}>📅 {data}</Text>
                    <Text style={[styles.diarioLiquido, { color: liquido >= 0 ? "#10b981" : "#ef4444" }]}>
                      R$ {liquido.toFixed(2).replace(".", ",")}
                    </Text>
                  </View>
                  
                  <View style={styles.totaisContainer}>
                    <View style={styles.totalItem}>
                      <Text style={styles.totalLabel}>Recebi</Text>
                      <Text style={styles.totalEntradas}>+ R$ {entradas.toFixed(2).replace(".", ",")}</Text>
                    </View>
                    <View style={styles.totalItem}>
                      <Text style={styles.totalLabel}>Gastei</Text>
                      <Text style={styles.totalSaidas}>- R$ {saidas.toFixed(2).replace(".", ",")}</Text>
                    </View>
                  </View>

                  {transacoesDia.map((transacao, idx) => (
                    <View key={idx} style={[
                      styles.transacao,
                      { borderLeftColor: transacao.tipo === "crédito" ? "#10b981" : "#ef4444" }
                    ]}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.transacaoHora}>{transacao.hora}</Text>
                        <Text style={styles.transacaoDescricao}>
                          {transacao.descricao}
                        </Text>
                        <Text style={styles.transacaoTipo}>
                          {transacao.tipo === "crédito" ? "� Recebi" : "💸 Gastei"}
                        </Text>
                      </View>
                      <View style={styles.transacaoValorContainer}>
                        <Text
                          style={[
                            styles.transacaoValor,
                            { color: transacao.tipo === "crédito" ? "#10b981" : "#ef4444" },
                          ]}
                        >
                          {transacao.tipo === "crédito" ? "+" : "-"} R${" "}
                          {transacao.valor.toFixed(2).replace(".", ",")}
                        </Text>
                        <Pressable
                          onPress={() => removerTransacao(transacoes.indexOf(transacao))}
                          style={styles.botaoLixeira}
                        >
                          <Text style={styles.iconeLixeira}>🗑️</Text>
                        </Pressable>
                      </View>
                    </View>
                  ))}
                </View>
              );
            })
        )}
      </View>
    </ScrollView>
  );
}