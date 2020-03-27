import React from "react";
import ReactDOM from "react-dom";
import componentes from "./componentes";
import Cartas from "./cartas";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";

const Contenedor = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Titulo = styled.h4`
  padding: 8px;
`;

class Partida extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartasDesarrollo: {
        tablero: componentes.cartasDesarrollo,
        jugador1: [],
        jugador2: []
      }
    };
  }

  onDragEnd = result => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    let cartas = Object.assign({}, this.state.cartasDesarrollo);
    let origen = cartas[source.droppableId.replace("cartas-desarrollo-", "")];
    let destino = cartas[destination.droppableId.replace("cartas-desarrollo-", "")];
    const [eliminado] = origen.splice(source.index, 1);
    destino.splice(destination.index, 0, eliminado);
    cartas[destination.droppableId.replace("cartas-desarrollo-", "")] = destino;
    if (source.droppableId !== destination.droppableId) {
      cartas[source.droppableId.replace("cartas-desarrollo-", "")] = origen;
    }
    this.setState({ cartasDesarrollo: cartas });
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Tablero cartasDesarrollo={this.state.cartasDesarrollo.tablero} />
        <Jugador
          id="jugador1"
          nombre="Raquel"
          cartasDesarrollo={this.state.cartasDesarrollo.jugador1}
        />
        <Jugador
          id="jugador2"
          nombre="Víctor"
          cartasDesarrollo={this.state.cartasDesarrollo.jugador2}
        />
      </DragDropContext>
    );
  }
}

class Tablero extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cartasDesarrollo: props.cartasDesarrollo };
  }

  render() {
    return (
      <Contenedor>
        <Titulo>Tablero</Titulo>
        <Cartas
          id="cartas-desarrollo-tablero"
          nombre="Cartas de desarrollo"
          cartas={this.state.cartasDesarrollo}
          visibles={3}
        />
      </Contenedor>
    );
  }
}
class Jugador extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cartasDesarrollo: props.cartasDesarrollo };
  }

  render() {
    return (
      <Contenedor>
        <Titulo>{this.props.nombre}</Titulo>
        <Cartas
          id={"cartas-desarrollo-" + this.props.id}
          nombre="Cartas de desarrollo"
          cartas={this.state.cartasDesarrollo}
        />
      </Contenedor>
    );
  }
}

ReactDOM.render(<Partida />, document.getElementById("root"));
