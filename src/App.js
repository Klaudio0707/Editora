import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topo from "./components/Topo";
import Home from "./components/Home";
import Frontend from "./components/Frontend";
import Programacao from "./components/Programacao";
import Design from "./components/Design";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Rodape from "./components/Rodape";
import Livro from "./components/Livro";

import "./index.css";

class App extends Component {
  state = {
    livros: []
  };

 componentDidMount() {
 fetch("/api/todosOsLivros.json")
 .then(response => response.json())
 .then(livros => this.setState({ livros }))
 .catch(function(erro){
  document
.querySelectorAll("main")[0]
.insertAdjacentHTML("beforeend", "<p class='alerta'>Mensagem de Erro</p>");
 })
.finally(function(){
console.log("Sempre Retorna");

});
 }
  render() {

    return (
      <Router>
        <Topo />
        <Routes>
          <Route path="/" element={<Home livros={this.state.livros} />} />
          <Route path="/frontend" element={<Frontend livros={this.state.livros} />} />
          <Route path="/programacao" element={<Programacao livros={this.state.livros} />} />
          <Route path="/design" element={<Design livros={this.state.livros} />} />
          <Route path="/catalogo" element={<Catalogo livros={this.state.livros} />} />
          <Route
            path="/livro/:livroSlug"
            element={<Livro livros={this.state.livros} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Rodape />
      </Router>
    );
  }
}

export default App;