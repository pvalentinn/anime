import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './style/Home.module.css';
import { index } from './images';


class Home extends Component {
    state = { 
        box: [
            {to: '/anime', class: style.a, alt:'Anime'},
            {to: '/manga', class: style.b, alt:'Manga'},
            {to: '/studio', class: style.c, alt:'Studio'},
        ]
    }

    render() {
        return ( 
            <main className={style.main}>
                <div className={style.container}>
                    {this.state.box.map( (e, i) => 
                        <Link to={e.to} className={e.class} key={i+1}> 
                            <div className={style.box}>
                                <img src={index[i]} alt={e.alt}></img>
                                <h2>{e.alt}</h2>
                            </div>
                        </Link>
                    )}
                </div>
            </main>
        );
    }
}
 
export default Home;