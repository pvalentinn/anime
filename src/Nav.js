import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class Nav extends Component {
    state = {         
        href: [
        {link: 'http://localhost:3000/', to: '/', name: 'Home'},
        {link: 'http://localhost:3000/anime', to: '/anime', name: 'anime'},
        {link: 'http://localhost:3000/manga', to: '/manga', name: 'manga'},
        {link: 'http://localhost:3000/studio', to: '/studio', name: 'studio'}
    ] }
    render() { 
        return ( 
            <nav>
            <ul>
                {this.state.href.map( function(e, i) {
                    if (!window.location.href.includes(e.link)) {
                        return <li key={i}><Link to={e.to}>{capitalizeFirstLetter(e.name)}</Link></li>
                    } else if (window.location.href.includes(e.link) && !e.link.includes(e.name)){
                        if(e.link === window.location.href) return false;
                        return <li key={i}><Link to={e.to}>{e.name}</Link></li>
                    } else return false;
                })}
            </ul>
            </nav>
         );
    }
}
 
export default Nav;