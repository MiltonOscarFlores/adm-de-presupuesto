import { useState } from "react";
import Error from "./Error";

const Pregunta = ({ setPresupuesto, setRestante, setMostrarPregunta }) => {
  //Definir el State+
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  //Funcion que lee el presupuesto
  const definirPresupuesto = (e) => {
    setCantidad(Number(e.target.value, 10));
  };

  //Submit para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    //Validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    //Si pasa la validacion
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMostrarPregunta(false);
  };

  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu Presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </>
  );
};

export default Pregunta;
