import { conectarBanco } from "./conexao.js";
import { Livro } from "./model/livros.js"; // Ou mude para o nome correto exportado no seu model

async function testar() {
    await conectarBanco();

    const livro1 = new Livro({
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J.K Rowling",
        genero: "Aventura",
        paginas: 208, 
        preco: 29.90,
        estoque: true,
        sinopse: "um menino magico muito loco"
    });
    const livroIncluido1 = await livro1.save();
    console.log(livroIncluido1);
}

testar();