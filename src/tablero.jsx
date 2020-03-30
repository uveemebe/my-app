import React from "react";
import styled from "styled-components";
import Casilla from "./casilla";

const Contenedor = styled.div``;
const Fila = styled.div`
  clear: both;
  float: left;
`;
const Boton = styled.button`
  margin-top: 8px;
  clear: both;
  float: left;
`;

export default class Tablero extends React.Component {
  constructor(props) {
    super(props)
    this.state = { casillas: props.casillas }
    this.casillas = JSON.parse(JSON.stringify(props.casillas))
  }

  limpiar = () => {
    this.setState({ casillas: JSON.parse(JSON.stringify(this.casillas)) })
  }

  girar = () => {
    const alto = this.state.casillas.length;
    const ancho = this.state.casillas[0].length;
    let casillas = [];
    for (let x = 0; x < ancho; x++) {
      let fila = [];
      for (let y = alto - 1; y >= 0; y--) {
        fila.push(this.state.casillas[y][x]);
      }
      casillas.push(fila);
    }
    this.setState({ casillas: casillas });
  };

  pulsar = (x, y) => {
    let casillas = this.state.casillas.slice()
    let casilla = casillas[y][x];
    const indice = casilla.valores.findIndex(
      valor => valor === casilla.valor
    )
    casilla.valor = casilla.valores[indice < casilla.valores.length - 1 ? indice + 1 : 0]
    casillas[y][x] = casilla
    this.setState({ casillas: casillas })
  };

  render() {
    return (
      <Contenedor>
        {this.state.casillas.map((fila, y) => (
          <Fila key={y}>
            {fila.map((casilla, x) => (<Casilla key={x} onClick={() => this.pulsar(x, y)} casilla={casilla} />))}
          </Fila>
        ))}
        <Boton onClick={this.girar}>Girar</Boton>
        <Boton onClick={this.limpiar}>Limpiar</Boton>
      </Contenedor>
    );
  }
}
