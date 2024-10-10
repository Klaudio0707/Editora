import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Catalogo = ({ livros }) => {
  return (
    <main className="principal">
      <h2> Categoria Frontend</h2>
      <ol>
        {livros
          .filter(livro => livro.categoria === "frontend") 
          // se categoria de livro for frontend
          .map(livro => (
            // o map fica encarregado de criar a lista de cada item do objeto pelo filter
            <li key={livro.id}>
              {/* // o link é responsável em linkar cada linha do titulo do slug - do slug x pega titulo x */}
              <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>
            </li>
          ))}
      </ol>
      <h2>Categoria programação</h2>
      <ol>
        {livros
          .filter(livro => livro.categoria === "programacao")
          .map(livro => (
            <li key={livro.id}>
              <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>
            </li>
          ))}

      </ol>
      <h2>Categoria Design</h2>
      <ol>
        {livros
          .filter(livro => livro.categoria === "design")
          .map(livro => (
            <li key={livro.id}>
              <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>
            </li>
          ))}
      </ol>
    </main>

  )


}
export default Catalogo;