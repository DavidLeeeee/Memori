import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigator from "./components/App_components/Navigator";
import Header from "./components/App_components/Header";

import Login from "./components/App_components/Login";
import Edit from "./pages/Edit_page";
import View from "./pages/View_page";
import Social from "./pages/Social_page";
import Search from "./pages/Search_page";
import { useNavStore } from "./Container/useNavState";
import { useLoginModalStore } from "./Container/useLoginModalState";

function App() {
  const { navState } = useNavStore();
  const { loginState } = useLoginModalStore();
  const paddingLeft = navState === 1 ? "0px" : "240px";

  return (
    <div style={{ paddingLeft, transition: "padding-left 1s ease-in-out" }}>
      <Router>
        <Navigator />
        <Header />
        {loginState === 0 ? <div></div> : <Login />}
        <Routes>
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/social/:id" element={<Social />} />
          <Route path="/search/" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
