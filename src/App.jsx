import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaTareas from "./components/ListaTareas";
import Header from "./components/Header";
import NuevaTarea from "./pages/NuevaTarea";
import DetalleTarea from "./pages/DetalleTarea";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ListaTareas />} />
        <Route path="/nueva" element={<NuevaTarea />} />
        <Route path="/tarea/:id" element={<DetalleTarea />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;