import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 16,
  },

  headerContainer: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: "center",
  },

  titulo: {
    fontSize: 32,
    fontWeight: "800",
    color: "#f1f5f9",
    marginBottom: 20,
    letterSpacing: 0.5,
  },

  saldoContainer: {
    backgroundColor: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
    borderRadius: 24,
    padding: 32,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 10,
  },

  saldoLabel: {
    fontSize: 14,
    color: "#e0f2fe",
    marginBottom: 12,
    fontWeight: "600",
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  saldoValor: {
    fontSize: 48,
    fontWeight: "900",
    color: "#ffffff",
    letterSpacing: -1,
  },

  mensagem: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fef08a",
    marginTop: 16,
    textAlign: "center",
  },

  inputContainer: {
    marginBottom: 24,
    paddingHorizontal: 0,
    gap: 12,
  },

  input: {
    backgroundColor: "#1e293b",
    borderRadius: 16,
    padding: 16,
    fontSize: 16,
    color: "#f1f5f9",
    borderWidth: 2,
    borderColor: "#334155",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },

  botoesContainer: {
    marginBottom: 30,
    gap: 12,
  },

  botaoCredito: {
    backgroundColor: "#10b981",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#10b981",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },

  botaoDebito: {
    backgroundColor: "#ef4444",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#ef4444",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },

  botaoReset: {
    backgroundColor: "#64748b",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },

  botaoprojecao: {
    backgroundColor: "#2563eb",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#2563eb",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },


  textoBotao: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  transacoesContainer: {
    backgroundColor: "#1e293b",
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 5,
  },

  transacoesTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#f1f5f9",
    marginBottom: 16,
    letterSpacing: 0.5,
  },

  semTransacoes: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
    paddingVertical: 24,
    fontStyle: "italic",
  },

  transacao: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: "#0f172a",
    marginBottom: 12,
    borderLeftWidth: 4,
  },

  transacaoDescricao: {
    fontSize: 16,
    fontWeight: "700",
    color: "#f1f5f9",
    marginBottom: 6,
  },

  transacaoTipo: {
    fontSize: 13,
    fontWeight: "600",
    color: "#cbd5e1",
    marginBottom: 4,
  },

  transacaoData: {
    fontSize: 12,
    color: "#64748b",
  },

  transacaoHora: {
    fontSize: 12,
    color: "#94a3b8",
    marginBottom: 4,
    fontWeight: "500",
  },

  transacaoValorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  transacaoValor: {
    fontSize: 16,
    fontWeight: "800",
  },

  botaoLixeira: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: "#7f1d1d",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  iconeLixeira: {
    fontSize: 18,
  },

  diarioSection: {
    backgroundColor: "#0f172a",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#3b82f6",
  },

  diarioHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#334155",
  },

  diarioData: {
    fontSize: 16,
    fontWeight: "800",
    color: "#f1f5f9",
  },

  diarioLiquido: {
    fontSize: 16,
    fontWeight: "800",
  },

  totaisContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#334155",
  },

  totalItem: {
    flex: 1,
    backgroundColor: "#1e293b",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
  },

  totalLabel: {
    fontSize: 12,
    color: "#94a3b8",
    marginBottom: 6,
    fontWeight: "600",
  },

  totalEntradas: {
    fontSize: 16,
    fontWeight: "800",
    color: "#10b981",
  },

  totalSaidas: {
    fontSize: 16,
    fontWeight: "800",
    color: "#ef4444",
  },
});