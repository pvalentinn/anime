import React, { Component } from 'react';
import { animes } from './images';

class Pen extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <img src={animes[5]} alt='pen' className={this.props.class} onClick={() => this.props.show(this.props.id)} id={this.props.id}/>
            </>
         );
    }
}
 
export default Pen;