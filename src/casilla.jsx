import React from "react";
import styled from "styled-components";


const Contenedor = styled.button`
  background: ${props => props.color ? props.color : "#ccc"};
  border: none;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;
  height: 32px;
  margin: 1px;
  padding: 0;
  text-align: center;
  width: 32px;
  cursor: pointer;
`;

export default class Casilla extends React.Component {
    render() {
      return (
        <Contenedor onClick={() => this.props.onClick()} color={this.props.casilla.color}>
            {this.props.casilla.valor}
        </Contenedor>
      );
    }
  }