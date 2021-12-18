import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import NewTournament from "./pages/new-tournament/new-tournament.component";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-tourney" element={<NewTournament />} />
        </Routes>
      </div>
    );
  }
}

export default App;
