import { useParams, useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";
import "./DetalleTarea.css";

const DetalleTarea = () => {
  const { id } = useParams();
  const { tareas, eliminarTarea } = useTareas();
  const navigate = useNavigate();

  const tarea = tareas.find((t) => t.id === Number(id));

  if (!tarea) {
    return (
      <div className="detalle-container">
        <p>Tarea no encontrada</p>
      </div>
    );
  }

  const handleDelete = () => {
    eliminarTarea(tarea.id);
    navigate("/");
  };

  return (
    <div className="detalle-container">
      <div className="detalle-card">
        <h2>{tarea.titulo}</h2>

        <p className="detalle-meta">
          {tarea.materia} • {tarea.fecha}
        </p>

        <span
          className={`estado ${
            tarea.completada ? "completada" : "pendiente"
          }`}
        >
          {tarea.completada ? "Completada" : "Pendiente"}
        </span>

        <div className="detalle-actions">
          <button className="btn-danger" onClick={handleDelete}>
            Eliminar
          </button>

          <button
            className="btn-secondary"
            onClick={() => navigate("/")}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetalleTarea;