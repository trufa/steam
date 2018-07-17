import React, { Component } from 'react';
import './inicio.css';
import Ejemplo from "../../components/ejemplo/ejemplo";

class Inicio extends Component {
  render() {
    return (
      <div className="inicio">
       Pagina inicio
       <Ejemplo/>
      </div>
    );
  }
}

export default Inicio;
