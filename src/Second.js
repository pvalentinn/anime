import React, { Component } from 'react';
import style from './style/Studio.module.css';

class Second extends Component {

    
    state = {
        page: [
            {text: <img src='https://via.placeholder.com/300'></img>},
            {text: <img src='https://via.placeholder.com/300'></img>},
            {text: 'texv'},
            {text: 'texf'}
        ]
    }

    render() {
        return (
            <div className={style.second}>
                {this.state.page[this.props.index].text};
            </div>
        )
    }
}

export default Second
