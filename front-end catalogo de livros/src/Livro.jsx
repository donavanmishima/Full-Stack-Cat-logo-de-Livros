import './Livro.css';

export default function Livro({ id, titulo, autor, genero, paginas, preco, estoque, sinopse,excluirLivro, iniciarAlteracao }) {
    return (
        <div className='livro'>
            <h3>{ titulo }</h3>
            <p>{ autor }</p>
            <p>{ genero }</p>
            <p>{ paginas } páginas</p>
            <span>Preço R$ { preco.toFixed(2) }</span>
            <span>Estoque: { estoque }</span>
            <p>{ sinopse }</p>
            <button onClick={ () => {
                excluirLivro(id);
            } }>Excluir</button>
            <button onClick={ () => {
                iniciarAlteracao(id, titulo, autor, genero, paginas, preco, estoque, sinopse);
            } }>Alterar</button>
        </div>
    );
}