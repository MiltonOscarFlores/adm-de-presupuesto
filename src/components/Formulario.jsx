import { useState } from "react";
import Error from "./Error";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const agregargasto = (e) => {
    e.preventDefault();

    //VALIDAR
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    //CONSTRUIR EL GASTO

    //Pasar el gasto al componente principal

    //RESETEAR EL FORMULARIO
  };

  return (
    <form onSubmit={agregargasto}>
      <h2>Agrega tus gastos aquí </h2>
      {error ? (
        <Error mensaje="Todos los campos son obligatorios o Presupuesto incorrecto" />
      ) : null}
      <div className="campo">
        <label> Nombre gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label> Cantidad gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => setCantidad(Number(e.target.value))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      />
    </form>
  );
};

export default Formulario;
