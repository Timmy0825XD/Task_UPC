const Header = ({ pendientes }) => {
  return (
    <header style={{
      backgroundColor: "#282c34",
      color: "white",
      padding: "15px",
      textAlign: "center"
    }}>
      <h1>TaskUPC</h1>
      <p>Tareas pendientes: {pendientes}</p>
    </header>
  );
};

export default Header;