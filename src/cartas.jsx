import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Carta from "./carta";
import { Button } from "react-bootstrap";

const Contenedor = styled.div`
  margin: 4px;
  border: 1px solid lightblue;
  border-radius: 2px;
`;
const Titulo = styled.h6`
  padding: 4px;
`;
const Lista = styled.div`
  padding: 4px;
`;

export default class Cartas extends React.Component {
    constructor(props) {
        super(props);
        this.visibles = props.visibles === undefined ? Number.MAX_SAFE_INTEGER : props.visibles;
        console.log(this.visibles);
        this.state = {
            cartas: props.cartas
        };
    }

    render() {
        let cartas = this.state.cartas.slice(0, this.visibles + 1).map((carta, indice) => {
            if (indice <= this.visibles) {
                carta.visible = indice < this.visibles;
                return carta;
            }
        });
        return (
            <Contenedor>
                <Titulo>{this.props.nombre} ({this.state.cartas.length})</Titulo>
                <Droppable droppableId={this.props.id}>
                    {provided => (
                        <Lista ref={provided.innerRef} {...provided.droppableProps}>
                            {cartas.map((carta, indice) => (
                                <Carta key={carta.id} indice={indice} carta={carta} visible={indice < this.visibles} />
                            ))}
                            {provided.placeholder}
                        </Lista>
                    )}
                </Droppable>
            </Contenedor>
        );
    }
}
