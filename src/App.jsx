import "./styles/normalize.css";
import "./styles/styles.css";
import Layout from "./layout/Layout";

/* Pages & Views */
/*import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";*/

/* Envolvemos nuestra app con el Enrutador*/
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Aquello que no estará enrutado y aparecerá en todas las páginas: MI LAYOUT*/}
        <Layout></Layout>

        {/* Indicamos todas las rutas que tiene la App 
        <Routes>
          {/* COMPONENTE: funcion que renderiza un elemento, es decir devuelve un elemento

        element={Home} -> pasamos el componente, NO
        element={<Home/>} -> renderizar elemento, SI
        */}
        {/*El patch es un match del que después se nobrará así el fichero
          <Route path="/" com={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        */}
      </div>
    </BrowserRouter>
  );
}

export default App;
