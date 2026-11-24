import express from "express";
import cors from "cors";

import { conectarBanco } from "./conexao.js";
import { criarRotasLivros } from "./rotas/livros.js";

const app = express();
app.use(express.json());
app.use(cors());

export { app }; // para passar este objeto à função de criação de rotas

app.get("/", (req, res) => {
    res.send("Acesse a API em /api/livros");
});

criarRotasLivros(app);

try {
    await conectarBanco();
    const PORTA_API = 3000;
    app.listen(PORTA_API);
    console.log("API aguardando conexões na porta " + PORTA_API);   
} catch (erro) {
    console.log(`Ocorreu um erro: ${erro}`)
}