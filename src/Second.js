import React, { Component } from 'react';
import style from './style/Studio.module.css';

class Second extends Component {

    
    state = {
        videos: [
            {link: "https://www.youtube.com/embed/iwWXeXbcXPE"},
            {link: "https://www.youtube.com/embed/uGZ-pD2IYM8"},
            {link: "https://www.youtube.com/embed/15W08Kjy5RA"},
            {link: "https://www.youtube.com/embed/7jngL-Q4Ako"}
        ]
    }

    render() {
        return (
            <div className={style.second}>
                <h2>Best of du studio : </h2>
                <iframe src={this.state.videos[this.props.index].link} className={style.video} title={'video'+this.props.index}></iframe>
            </div>
        )
    }
}

export default Second
