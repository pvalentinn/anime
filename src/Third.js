import React, { Component } from 'react';
import style from './style/Studio.module.css';

class Third extends Component {

        
    state = {
        page: [
            {text: <img src='https://via.placeholder.com/250'></img>},
            {text: 'tex c'},
            {text: 'texv'},
            {text: 'texf'}
        ]
    }

    render() {
        return (
            <div className={style.third}>
                {this.state.page[this.props.index].text};
            </div>
        )
    }
}

export default Third
