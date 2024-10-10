import React from "react";
import { Link } from "react-router-dom";

  {/* // objeto livros é passado como um props dentro do componente home */}
const Home = ({ livros }) => ( 
  
  <main className="principal">
    <h2>Último lançamentos</h2>
    {livros
      .filter((n, index) => index < 8)
      .map(livro => (
        <div className="card" key={livro.id}>  {/* //a div card pega o id do livro */}
          <div className="thumb">

            <img src={"/imagens/capas/" + livro.isbn.replace(/-/g, "") + ".jpg"} alt="Thumbnail da capa do livro..." />

          </div>
          {livros
            .filter(c => c.slug === livro.slug)
            .map(livro => (
              <Link to={`/livro/${livro.slug}`} key={livro.id}>
                {
                  <div className="detalhes">
                    <h3>{livro.titulo}</h3>
                    <p>{livro.descricao.slice(0, 130) + "..."}</p>
                    <p>Leia Mais &gt; </p>
                  </div>
                }
              </Link>
            ))}
        </div>
      ))
    }

  </main>

);

export default Home;
