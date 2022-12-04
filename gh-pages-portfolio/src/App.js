import React from "react";
import Header from "./components/Header.js";
import GithubCorner from 'react-github-corner';
//import logo from './img/me.jpg';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <GithubCorner href="https://github.com/judss" direction="left" target="_blank" octoColor="#001219" bannerColor="#0a9396"/>
    </div>
  );
}

export default App;
