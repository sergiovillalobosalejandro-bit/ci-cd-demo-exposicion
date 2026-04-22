// Versión CON BUG para demostración
// Usa este código en sum.js para romper el pipeline intencionalmente

function sum(a, b) {
  // BUG INTENCIONAL: Se suma 1 extra
  // Esto hará fallar los tests y demostrar que CI funciona
  return a + b + 1;
}

module.exports = sum;
