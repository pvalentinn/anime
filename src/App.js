import React from 'react';
import { Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Manga from './Manga';
import Anime from './Anime';
import Studio from './Studio';

import './style/App.css';


function App() {
  return (
    <div>
      <Header />
      
      <Route path='/anime' component={Anime} />
      <Route path='/manga' component={Manga} />
      <Route path='/studio' component={Studio} />
      <Route path='/' component={Home} exact/>
      
      <Footer />
    </div>
  );
}

export default App;
