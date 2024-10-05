import React from "react";
import Home from "./Home";

const Principal = () => {
  const isbn = "ISBN: 978-85-7522-xxx-x";
  const titulo = "React";
  const autor = "Maujor";
  const tituloPagina = "Últimos lançamentos";

  return (
    <main className="principal">
      <Home
        isbn={isbn}
        titulo={titulo}
        autor={autor}
        tituloPagina={tituloPagina}
      />
    </main>
  );
}

export default Principal;