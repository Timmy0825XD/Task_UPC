import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";
import "./Form.css";

const NuevaTarea = () => {
  const [form, setForm] = useState({
    titulo: "",
    materia: "",
    fecha: "",
  });

  const { agregarTarea } = useTareas();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarTarea(form);
    navigate("/");
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Nueva tarea</h2>

        <input name="titulo" placeholder="Título" onChange={handleChange} />
        <input name="materia" placeholder="Materia" onChange={handleChange} />
        <input type="date" name="fecha" onChange={handleChange} />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default NuevaTarea;