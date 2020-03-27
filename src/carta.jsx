import React from 'react';
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import 'bootstrap/dist/css/bootstrap.min.css';


const Contenedor = styled.div`
  padding: 6px;
  border-radius: 3px;
  margin: 3px;
  background-color: lightgreen;
`;

export default class Carta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {carta: props.carta};
    }

    render() {
        return <Draggable draggableId={this.state.carta.id} index={this.props.indice}>
            {provided => (
                <Contenedor id={this.props.carta.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    {this.state.carta.visible ? this.state.carta.nombre : "[Carta]"}
                </Contenedor>
            )}
        </Draggable>
    }
}
