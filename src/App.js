import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={
          <LanguageProvider>
            <PokemonProvider>
              <TypeProvider>
                <ModalProvider>
                  <Header key={"header"}/>
                  <Home key={"home"}/>
                </ModalProvider>
              </TypeProvider>
            </PokemonProvider>
        </LanguageProvider>
        } />
      </Routes>
    </>
  );
}

export default App;
