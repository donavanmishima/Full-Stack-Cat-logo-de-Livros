import Livro from "./Livro.jsx";

export default function ListaLivros({
  livros = [],
  excluirLivro,
  iniciarAlteracao
}) {
  return (
    <div>
      <h2>Livros</h2>

      <div className="lista-livros">
        {livros.map(livro => {
          const livroId = livro._id || livro.id;

          return (
            <Livro
              key={livroId}
              id={livroId}
              titulo={livro.titulo}
              autor={livro.autor}
              genero={livro.genero}
              paginas={livro.paginas}
              preco={livro.preco}
              estoque={livro.estoque}
              sinopse={livro.sinopse}
              excluirLivro={excluirLivro}
              iniciarAlteracao={iniciarAlteracao}
            />
          );
        })}
      </div>
    </div>
  );
}