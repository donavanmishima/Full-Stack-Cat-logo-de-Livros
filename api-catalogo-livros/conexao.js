import mongoose from "mongoose";

export function conectarBanco() {

    const ENDERECO_BANCO = "mongodb://localhost:27017/api";

    mongoose.connection.on("open", () => {
        console.log("Conectado ao MongoDB com sucesso");
    });

    const conexao = mongoose.connect(ENDERECO_BANCO);
    return conexao;
}