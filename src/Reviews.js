import React, { Component } from 'react';


class Reviews extends Component {
    state = {  }
    render() { 
        return ( 
            <article>
                {this.props.review}
            </article>
         );
    }
}
 
export default Reviews;