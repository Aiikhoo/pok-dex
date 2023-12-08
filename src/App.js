import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { LanguagesProvider } from "./contextes/LanguagesContext"; 



function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={
          <LanguagesProvider>
            <PokemonProvider>
              <TypeProvider>
                <ModalProvider>
                  <Header key={"header"}/>
                  <Home key={"home"}/>
                </ModalProvider>
              </TypeProvider>
            </PokemonProvider>
        </LanguagesProvider>
        } />
      </Routes>
    </>
  );
}

export default App;
