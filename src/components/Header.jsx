import { useTareas } from "../context/TareasContext";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { tareas } = useTareas();
  const pendientes = tareas.filter((t) => !t.completada).length;

  return (
    <header className="header">
      <div>
        <h1>TaskUPC</h1>
        <span>{pendientes} pendientes</span>
      </div>

      <Link to="/nueva" className="btn-primary">
        Nueva tarea
      </Link>
    </header>
  );
};

export default Header;