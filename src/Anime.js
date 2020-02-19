import React, { Component } from 'react';
import $ from 'jquery';
import style from './style/Anime.module.css';
import Table from './Table';
import Reviews from './Reviews';

class Anime extends Component {
    state = {
        display: 0
    }

    show = (index) => {
        let display = this.state.display;
        let review = $('#review');
        let article = $('article');
        console.log(review);
        console.log(display)
        console.log(index)

        article.fadeIn(1200).css('display', 'flex');
        if (display === index) {
            article.fadeOut(700);
            display = 0;
            this.setState({display: display});
        } else if (display === 'pen0') {
            review.text('Ouioui');
            display = 'pen0'
            console.log(display)
            this.setState({display: display})
        }
        
    }

    render() { 
        return ( 
            <main className={style}>
                <div className={style.container}>
                    <Table show={this.show} />
                    <Reviews />
                </div>
            </main>
        );
    }
}
 
export default Anime;