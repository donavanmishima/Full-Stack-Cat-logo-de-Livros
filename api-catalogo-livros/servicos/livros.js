import { Livro } from "../model/livros.js";

export async function incluirLivro({titulo, autor, genero, paginas, preco, estoque, sinopse }) {
    const novoLivro = new Livro({ titulo, autor, genero, paginas, preco, estoque, sinopse });
    return await novoLivro.save();
}
export async function obterLivro(
    query = {},
    { sortBy = "titulo", sortOrder = "ascending"} = {}) {
    return await Livro.find(query).sort({ [sortBy]: sortOrder });
}

export async function alterarLivro(
    idLivro,
    { titulo, autor, genero, paginas, preco, estoque, sinopse}) {
    return await Livro.findOneAndUpdate(
        { _id: idLivro }, 
        { $set: { titulo, autor, genero, paginas, preco, estoque, sinopse }},
        { new: true }
    );
}

export async function excluirLivro(idLivro) {
    return await Livro.deleteOne({_id: idLivro});
}