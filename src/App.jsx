function App() {
  const tareasPendientes = tareasIniciales.filter(
    (t) => !t.completada
  ).length;

  return (
    <>
      <div>
        <h1>TaskUPC — Mi Gestor Académico</h1>
      </div>
      <div>
        <Header pendientes={tareasPendientes} />
        <ListaTareas />
      </div>
    </>
  );
}

export default App;