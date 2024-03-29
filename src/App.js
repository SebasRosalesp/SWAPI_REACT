import React from "react";
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from "./componentes/Nav";
import Pagina from "./componentes/Pagina";
import StateCompo from "./componentes/StateCompo";
import Foot from "./componentes/Foot";




const App = () => {

  return(
    <StateCompo>
      <div className="fuerza_container">
                <div className="fuerza"></div>
      </div>
      <Nav/>
      <Pagina/>
      <Foot/>
    </StateCompo>
  );
};

export default App;