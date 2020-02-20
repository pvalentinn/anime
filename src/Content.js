import React, { Component } from 'react';
import style from './style/Studio.module.css';
import First from './First';
import Second from './Second';
import Third from './Third';

class Content extends Component {

    state = { index: this.props.index }

    render() {
        return (
            <div className={style.content}>
                <div className={style.slides}>
                    <First index={this.state.index}/>
                    <Second index={this.state.index}/>
                    <Third index={this.state.index}/>
                </div>

            </div>
        )
    }
}

export default Content
