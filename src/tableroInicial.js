const valores = [null, "1", "2", "3", "4", "5", "6", "X"];
const azul = { valor: null, color: "lightblue", valores: valores };
const rojo = { valor: null, color: "salmon", valores: valores };
const verde = { valor: null, color: "lightgreen", valores: valores };
const amarillo = { valor: null, color: "lemonchiffon", valores: valores };
const tableroInicial = {
  casillas: [
    [c(azul), c(azul), c(azul), c(azul), c(rojo), c(rojo), c(rojo), c(rojo)],
    [c(azul), c(azul), c(azul), c(azul), c(rojo), c(rojo), c(rojo), c(rojo)],
    [c(azul), c(azul), c(azul), c(azul), c(rojo), c(rojo), c(rojo), c(rojo)],
    [c(azul), c(azul), c(azul), c(azul), c(rojo), c(rojo), c(rojo), c(rojo)],
    [c(verde), c(verde), c(verde), c(verde), c(amarillo), c(amarillo), c(amarillo), c(amarillo)],
    [c(verde), c(verde), c(verde), c(verde), c(amarillo), c(amarillo), c(amarillo), c(amarillo)],
    [c(verde), c(verde), c(verde), c(verde), c(amarillo), c(amarillo), c(amarillo), c(amarillo)],
    [c(verde), c(verde), c(verde), c(verde), c(amarillo), c(amarillo), c(amarillo), c(amarillo)]
  ]
};
function c(src) {
  return Object.assign({}, src);
}

export default tableroInicial;
