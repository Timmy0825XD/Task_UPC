import { createContext, useContext, useEffect, useState } from "react";

const TareasContext = createContext();

export const TareasProvider = ({ children }) => {
  const [tareas, setTareas] = useState(() => {
    const data = localStorage.getItem("tareas");
    return data ? JSON.parse(data) : [];
  });

  // Persistencia
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  // CRUD
  const agregarTarea = (tarea) => {
    const nueva = {
      ...tarea,
      id: Date.now(),
      completada: false,
    };
    setTareas([...tareas, nueva]);
  };

  const toggleTarea = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  return (
    <TareasContext.Provider
      value={{ tareas, agregarTarea, toggleTarea, eliminarTarea }}
    >
      {children}
    </TareasContext.Provider>
  );
};

export const useTareas = () => useContext(TareasContext);