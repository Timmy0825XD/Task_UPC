import { useTareas } from "../context/TareasContext";
import { Link } from "react-router-dom";
import "./TareaCard.css";

const TareaCard = ({ id, titulo, materia, fecha, completada }) => {
  const { toggleTarea } = useTareas();

  return (
    <div className={`card ${completada ? "done" : ""}`}>
      <div className="left">
        <h3>{titulo}</h3>
        <p>{materia} • {fecha}</p>
      </div>

      <div className="right">
        <input
          type="checkbox"
          className="checkbox"
          checked={completada}
          onChange={() => toggleTarea(id)}
        />
        <Link to={`/tarea/${id}`} className="link">
          Ver
        </Link>
      </div>
    </div>
  );
};

export default TareaCard;