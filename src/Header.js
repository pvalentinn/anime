import React, { Component } from 'react';
import Nav from './Nav';
import { Route } from "react-router-dom";
import './style/Header.css';

class Header extends Component {
    state = { 
        titre: 'Anime site',
        intro: 'Découvre mes goûts sur différentes oeuvres de la culture japonaise.',
    }

    render() { 
        return ( 
            <header>
                <div className="title">
                    <h1>{this.state.titre}</h1>
                    <p>{this.state.intro}</p>
                </div>
                <Route path='/studio' component={Nav}/>
                <Route path='/anime' component={Nav} />
                <Route path='/manga' component={Nav} />
                <Route path='/' component={Nav} exact/>

            </header>
        );
    }
}
 
export default Header;