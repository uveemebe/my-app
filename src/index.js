import React from "react";
import ReactDOM from "react-dom";
import Tablero from "./tablero";
import tableroInicial from "./tableroInicial";

ReactDOM.render(<Tablero casillas={tableroInicial.casillas} valores={tableroInicial.valores} />, document.getElementById("root"));
