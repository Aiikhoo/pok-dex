import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import {PokemonProvider} from "./contextes/PokemonsContext";
import {TypeProvider} from "./contextes/TypesContext";
import {ModalProvider} from "./contextes/ModalContext";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={
          <PokemonProvider>
            <TypeProvider>
              <ModalProvider>
                <Header key={"header"}/>
                <Home key={"home"}/>
              </ModalProvider>
            </TypeProvider>
          </PokemonProvider>
        } />
      </Routes>
    </>
  );
}

export default App;
