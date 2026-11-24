import { useEffect, useState } from "react";
import "./CriarLivro.css";

export default function CriarLivro({ alterarLivro, incluirLivro, alterando, id, tituloAlt, autorAlt, generoAlt, paginasAlt, precoAlt, estoqueAlt, sinopseAlt }) {

    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [genero, setGenero] = useState("");
    const [paginas, setPaginas] = useState("");
    const [preco, setPreco] = useState("");
    const [estoque, setEstoque] = useState("");
    const [sinopse, setSinopse] = useState("");

    // Correção: Atualiza os campos sempre que o modo ou os dados passados mudarem
    useEffect(() => {
        if (alterando) {
            setTitulo(tituloAlt || "");
            setAutor(autorAlt || "");
            setGenero(generoAlt || "");
            setPaginas(paginasAlt || "");
            setPreco(precoAlt || "");
            setEstoque(estoqueAlt || "");
            setSinopse(sinopseAlt || "");
        } else {
            // Limpa o formulário caso mude para o modo de inclusão
            setTitulo("");
            setAutor("");
            setGenero("");
            setPaginas("");
            setPreco("");
            setEstoque("");
            setSinopse("");
        }
    }, [alterando, tituloAlt, autorAlt, generoAlt, paginasAlt, precoAlt, estoqueAlt, sinopseAlt]);

    function processarEnvio(evento) {
        evento.preventDefault();
        
        // Verifica se os campos não estão vazios
        if (titulo.trim() !== "" && autor.trim() !== "" && genero.trim() !== "" && paginas !== "" && preco !== "" && estoque !== "" && sinopse.trim() !== "") {
            if (alterando) {
                alterarLivro(id, titulo, autor, genero, paginas, preco, estoque, sinopse);
            } else {
                incluirLivro(id, titulo, autor, genero, paginas, preco, estoque, sinopse);
            }
            
            // Limpa os campos após o envio bem-sucedido (se necessário para inclusão)
            if (!alterando) {
                setTitulo("");
                setAutor("");
                setGenero("");
                setPaginas("");
                setPreco("");
                setEstoque("");
                setSinopse("");
            }
        } else {
            alert("Preencha todos os campos");
        }
    }

    return (
        <>
            <h2>{alterando ? "Alterar" : "Criar"} - Adicione, Edite ou Exclua algum livro!</h2>
            <form onSubmit={processarEnvio}>
                <div>
                    <label htmlFor="titulo">Titulo do Livro:</label>
                    <input type="text" id="titulo" name="titulo"
                        value={titulo} onChange={(evento) => setTitulo(evento.target.value)} />
                </div>
                <div>
                    <label htmlFor="autor">Autor:</label>
                    <input type="text" id="autor" name="autor"
                        value={autor} onChange={(evento) => setAutor(evento.target.value)} />
                </div>
                <div>
                    <label htmlFor="genero">Genero:</label>
                    <input type="text" id="genero" name="genero"
                        value={genero} onChange={(evento) => setGenero(evento.target.value)} />
                </div>
                <div>
                    <label htmlFor="paginas">Páginas:</label>
                    <input type="number" id="paginas" name="paginas" step="any"
                        value={paginas} onChange={(evento) => setPaginas(evento.target.value)} />
                </div>
                <div>
                    <label htmlFor="preco">Preço: R$</label>
                    <input type="number" id="preco" name="preco" step="any"
                        value={preco} onChange={(evento) => setPreco(evento.target.value)} />
                </div>
                <div>
                    <label htmlFor="estoque">Estoque: </label>
                    <input type="number" id="estoque" name="estoque" step="any"
                        value={estoque} onChange={(evento) => setEstoque(evento.target.value)} />
                </div>
                <div>
                    <label htmlFor="sinopse">Sinopse:</label>
                    <textarea id="sinopse" name="sinopse"
                        value={sinopse} onChange={(evento) => setSinopse(evento.target.value)} />
                </div>
                <button type="submit">Enviar</button>
                {
                    alterando && (
                        <button onClick={(evento) => {
                            evento.preventDefault();
                            setTitulo("");
                            setAutor("");
                            setGenero("");
                            setPaginas("");
                            setPreco("");
                            setEstoque("");
                            setSinopse("");
                        }}>Cancelar</button>
                    )
                }
            </form>
        </>
    );
}