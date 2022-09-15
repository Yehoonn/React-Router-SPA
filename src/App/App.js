import { Route, Routes } from "react-router-dom";
import About from "../Components/About";
import Article from "../Components/Article";
import Articles from "../Components/Articles";
import HomePage from "../Components/HomePage";
import Layout from "../Components/Layout";
import Profile from "../Components/Profile";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/profiles/:user" element={<Profile />}></Route>
          <Route path="/Articles" element={<Articles />}>
            <Route path=":id" element={<Article />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
