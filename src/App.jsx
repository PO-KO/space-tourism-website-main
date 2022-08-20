import { Home } from "./pages/home/Home";
import { GlobalStyle } from "./Global.style";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Destination } from "./pages/destination/Destination";
import { Crew } from "./pages/crew/Crew";
import { useState } from "react";
import { NotFound } from "./pages/notFound/NotFound";
import { Techs } from "./pages/techs/Techs";

function App() {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Header isNavShowing={isNavShowing} setIsNavShowing={setIsNavShowing} />
      <Routes>
        <Route path="/" element={<Home setIsNavShowing={setIsNavShowing} />} />
        <Route
          path="destination"
          element={<Destination setIsNavShowing={setIsNavShowing} />}
        />
        <Route
          path="crew"
          element={<Crew setIsNavShowing={setIsNavShowing} />}
        />
        <Route
          path="technology"
          element={<Techs setIsNavShowing={setIsNavShowing} />}
        />
        <Route
          path="*"
          element={<NotFound setIsNavShowing={setIsNavShowing} />}
        />
      </Routes>
    </>
  );
}

export default App;
