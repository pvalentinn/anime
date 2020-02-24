import React, { Component } from 'react';
import style from './style/Studio.module.css';
import { a1, bones, madhouse, witstudio } from './images';

class Third extends Component {

        
    state = {
        images: [a1, bones, madhouse, witstudio]
    }

    render() {
        return (
            <div className={style.third}>
                <h2>Animes les plus populaires du Studio : </h2>
                <div className={style.anime}>
                    {this.state.images[this.props.index].map((e, i) =>
                        <figure key={'anime'+i}>
                            <img id={'img'+i} alt={e.name} src={e.img}></img>
                            <figcaption id={'caption'+i}>{e.name}</figcaption>
                        </figure>
                    )}
                </div>
                
            </div>
        )
    }
}

export default Third
