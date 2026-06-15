import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Missao() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Text style={styles.title}>Nossa Missão</Text>
        <Text style={styles.badge}>Missão & Visão</Text>

        <Text style={styles.paragraph}>
          Nossa missão é simplificar a gestão financeira diária, oferecendo uma
          ferramenta clara e intuitiva para o registro de entradas e saídas.
          Queremos dar a cada usuário o controle total sobre o seu dinheiro,
          transformando o ato de anotar ganhos e gastos em um hábito simples que
          abre portas para a estabilidade e previsibilidade financeira.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.subtitle}>Visão</Text>
        <Text style={styles.paragraph}>
          Ser o parceiro financeiro de bolso mais confiável do país, liderando o
          mercado com uma plataforma simples que transforma o caos financeiro em
          previsibilidade e tranquilidade.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: "#111827",
    borderRadius: 24,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.18,
    shadowRadius: 18,
    elevation: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#f8fafc",
    marginBottom: 12,
    letterSpacing: 0.2,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#1e293b",
    color: "#38bdf8",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 999,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#e2e8f0",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 26,
    color: "#cbd5e1",
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#334155",
    marginVertical: 20,
    borderRadius: 1,
  },
});