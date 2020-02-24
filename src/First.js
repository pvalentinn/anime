import React, { Component } from 'react';
import style from './style/Studio.module.css';

class First extends Component {

    state = {
        page: [
            {text: 'text'},
            {text: 'tex c'},
            {text: 'texv'},
            {text: 'texf'}
        ]
    }

    render() {
        // console.log(this.props.index);
        return (
            <div className={style.first}>
                {this.state.page[this.props.index].text};
            </div>
        )
    }
}

export default First;