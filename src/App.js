import Topo from "./components/Topo";
import Home from "./components/Home";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Design from "./components/Design";
import Frontend from "./components/Frontend"
import Programacao from "./components/Programacao";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from 'react-router-dom';
import React, { Component } from "react";
import "./index.css"



class App extends Component {
  render() {
    return (
      <Router>

        <>
          <Topo />
          <Routes>
            <Route exact path="/" render={Home} />
            <Route exact path="/frontend" render={() => <Frontend />} />
            <Route exact path="/programacao" render={() => <Programacao />} />
            <Route exact path="/design" render={() => <Design />} />
            <Route exact path="/catalogo" render={(props) => <Catalogo />} />
            <Route component={NotFound} />
          </Routes>
        </>
      </Router>
    );
  }
}

export default App;
