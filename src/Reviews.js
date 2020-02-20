import React, { Component } from 'react';
import style from './style/Anime.module.css';


class Reviews extends Component {
    state = {  }
    render() { 
        return ( 
            <article className={style.article}>
                {this.props.review}
            </article>
         );
    }
}
 
export default Reviews;