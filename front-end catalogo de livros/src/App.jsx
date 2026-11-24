import { useEffect, useState } from "react";
// para usar a axios no projeto instale a biblioteca com o comando:
// npm install axios
import axios from "axios";
import ListaLivros from "./ListaLivros";
import CriarLivro from "./CriarLivro";
import "./App.css";

function App() {
  const [livros, setLivros] = useState([]);
  const [atualizacao, setAtualizacao] = useState(0);
  const [alterando, setAlterando] = useState(false);

  const [idAlterando, setIdAlterando] = useState("");
  const [tituloAlterando, setTituloAlterando] = useState("");
  const [autorAlterando, setAutorAlterando] = useState("");
  const [generoAlterando, setGeneroAlterando] = useState("");
  const [paginasAlterando, setPaginasAlterando] = useState("");
  const [precoAlterando, setPrecoAlterando] = useState("");
  const [estoqueAlterando, setEstoqueAlterando] = useState("");
  const [sinopseAlterando, setSinopseAlterando] = useState("");

  useEffect(() => {
    axios.get(`${ import.meta.env.VITE_BACKEND_URL }/livros`).then((resposta) => {
      setLivros(resposta.data);
    });
  }, [atualizacao]);

  function excluirLivro(id) {
    axios.delete(`${ import.meta.env.VITE_BACKEND_URL }/livros/${ id }`)
         .then((resposta) => {
            if (resposta.status == 200) {
              alert("Livro excluído com sucesso.");
              setAtualizacao(atualizacao + 1);
            } else {
              alert("Falha na exclusão");
            }
         })
         .catch((erro) => {
            console.log(erro.message);
         });
  }

  function alterarLivro(id, novoTitulo, novoAutor, novoGenero, novasPaginas, novoPreco, novoEstoque, novaSinopse) {
    // CORRIGIDO: mudado para 'livroAlterado' para bater com o envio abaixo (ou vice-versa)
    const livroAlterado = {
      titulo: novoTitulo,
      autor: novoAutor,
      genero: novoGenero,
      paginas: novasPaginas,
      preco: novoPreco,
      estoque: novoEstoque,
      sinopse: novaSinopse
    };
    
    axios.patch(`${ import.meta.env.VITE_BACKEND_URL }/livros/${ id }`, livroAlterado)
         .then((resposta) => {
            if (resposta.status == 200) {
              alert("Livro alterado com sucesso");
              setAtualizacao(atualizacao + 1);
              setAlterando(false);
            } else {
              alert("Falha na atualização");
            }
         })
         .catch((erro) => {
            console.log(erro.message);
         });
  }

  function incluirLivro(id, novoTitulo, novoAutor, novoGenero, novasPaginas, novoPreco, novoEstoque, novaSinopse) {
    const novoLivro = {
      titulo: novoTitulo,
      autor: novoAutor,
      genero: novoGenero,
      paginas: novasPaginas,
      preco: novoPreco,
      estoque: novoEstoque,
      sinopse: novaSinopse
    };

    axios.post(`${ import.meta.env.VITE_BACKEND_URL }/livros`, novoLivro)
         .then((resposta) => {
            if (resposta.status == 201) {
              alert("Livro incluído com sucesso.");
              setAtualizacao(atualizacao + 1);
            }
         }).catch((erro) => {
            console.log(erro.message);
            alert("Erro ao incluir livro: " + erro.message); // Opcional: mostra um alerta se falhar
         });
  }
  
  function iniciarAlteracao(id, titulo, autor, genero, paginas, preco, estoque, sinopse) {
    setAlterando(true);
    setIdAlterando(id);
    setTituloAlterando(titulo);
    setAutorAlterando(autor);
    setGeneroAlterando(genero);
    setPaginasAlterando(paginas);
    setPrecoAlterando(preco);
    setEstoqueAlterando(estoque);
    setSinopseAlterando(sinopse);
  }

  return (
    <div className="pagina">
      <CriarLivro alterarLivro={ alterarLivro } incluirLivro={ incluirLivro } alterando={ alterando } 
        id={ idAlterando } tituloAlt={ tituloAlterando } autorAlt={autorAlterando} generoAlt={generoAlterando} paginasAlt={paginasAlterando} 
        precoAlt={precoAlterando} estoqueAlt={estoqueAlterando} sinopseAlt={sinopseAlterando}/>
      <ListaLivros livros={ livros } excluirLivro={ excluirLivro } 
        iniciarAlteracao={ iniciarAlteracao }/>
    </div>
  );
}

export default App;