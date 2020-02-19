import React from 'react';
import { Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Anime from './Anime';
import Manga from './Manga';
import './style/App.css';


function App() {
  return (
    <div>
      <Header />

      
      <Route path='/anime' component={Anime} />
      <Route path='/manga' component={Manga} />
      <Route path='/' component={Home} exact/>
      <Footer />
    </div>
  );
}

export default App;
