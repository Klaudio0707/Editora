import { React } from "react";
// import "../styles.css";


const Home = props => {
    console.log(props);
    return (
        <>
            <h2>{props.tituloPagina}</h2>
            <p>
                 {props.isbn}<br />
                 {props.titulo}<br />
                 {props.autor}<br />


            </p>
            {/* <div className="card">
                <div className="thumb">
                    <img src="./imagens/capas/9788575228074.jpg" alt="" />
                </div>
                <div className="detalhes">
                    <h3>Introdução ao Pentest - 2º Edição</h3>
                    <p>Introdução ao Pentest ....</p>
                    <a href="#">Leia mais &gt;</a>
                </div> */}

        </>
    );
}

export default Home;