import React from "react";
 import Logo from "./Logo"; //importação para usar no Topo
import Navegacao from "./Navegacao";

const Topo = () => {
    return (
        <header className="topo">

            <Logo />
            <Navegacao />
        </header>
    );


}

export default Topo;