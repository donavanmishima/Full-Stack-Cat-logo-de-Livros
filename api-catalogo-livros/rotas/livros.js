import { incluirLivro, obterLivro, alterarLivro, excluirLivro } from "../servicos/livros.js";

export function criarRotasLivros(app) {

    app.get("/api/livros", async (req, res) => {
        return res.json(await obterLivro());
    });
    
    app.get("/api/livros/:id", async (req, res) => {
        return res.json(await obterLivro({ _id: req.params.id }));
    });
    
    app.post("/api/livros", async (req, res) => {
        try {
            const livroIncluido = await incluirLivro(req.body);
            return res.status(201).json(livroIncluido);
        } catch (erro) {
            return res.status(500).json({ "erro": erro.message });
        }
    });

    app.patch("/api/livros/:id", async (req, res) => {
        try {
            const livroAlterado = await alterarLivro(req.params.id, req.body);
            return res.json(livroAlterado);
        } catch (erro) {
            return res.status(500).json({ "erro": erro.message });
        }
    });

    app.delete("/api/livros/:id", async (req, res) => {
        try {
            const { deletedCount } = await excluirLivro(req.params.id);
            if (deletedCount > 0) {
                return res.json({ "excluido": true });
            } else {
                return res.json({ "excluido": false });
            }
        } catch (erro) {
            return res.status(500).json({ "erro": erro.message });
        }
    });
}