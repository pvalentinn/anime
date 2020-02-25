import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class Nav extends Component {
    state = {
        link: '',     
        href: [
            {link: `/`, to: '/', name: 'Home'},
            {link: `/anime`, to: '/anime', name: 'anime'},
            {link: `/manga`, to: '/manga', name: 'manga'},
            {link: `/studio`, to: '/studio', name: 'studio'}
        ]
    }

    componentWillMount() {
        let copy = this.state;
        copy.link = window.location.href.slice(0, window.location.href.length-1);
        copy.href.forEach(e => e.link = copy.link+e.link);
        return this.setState({link: copy.link, href: copy.href});
    }


    render() {
        console.log(this.state.link)
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