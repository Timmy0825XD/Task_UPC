import { useState } from "react";
import { useTareas } from "../context/TareasContext";
import TareaCard from "./TareaCard";
import "./ListaTareas.css";

const ListaTareas = () => {
  const { tareas } = useTareas();
  const [filtro, setFiltro] = useState("todas");

  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === "pendientes") return !t.completada;
    if (filtro === "completadas") return t.completada;
    return true;
  });

  return (
    <div className="container">
      <div className="filtros">
        <button
          className={filtro === "todas" ? "activo" : ""}
          onClick={() => setFiltro("todas")}
        >
          Todas
        </button>

        <button
          className={filtro === "pendientes" ? "activo" : ""}
          onClick={() => setFiltro("pendientes")}
        >
          Pendientes
        </button>

        <button
          className={filtro === "completadas" ? "activo" : ""}
          onClick={() => setFiltro("completadas")}
        >
          Completadas
        </button>
      </div>
      
      {tareasFiltradas.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "40px", color: "#64748b" }}>
          <p style={{ fontSize: "15px" }}>No hay tareas disponibles</p>
          <span style={{ fontSize: "13px" }}>
            Intenta crear una nueva tarea o cambiar el filtro
          </span>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {tareasFiltradas.map((t) => (
            <TareaCard key={t.id} {...t} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListaTareas;