import React, { Component } from 'react';
import $ from 'jquery';
import style from './style/Anime.module.css';
import Table from './Table';
import Reviews from './Reviews';


class Anime extends Component {
    state = {
        display: ''
    }

    show = (index) => {
        let display = this.state.display;
        let article = $('article');
        index = parseInt(index[3]) - 1;

        if (display !== index) {
            article.animate({opacity: '1'}, "slow");
            display = index;
            if (display === 0) return this.setState({display: display/*, review: this.state.reviews[0].content*/});
            else if (display === 1)return this.setState({display: display/*, review: this.state.reviews[1].content*/});
            else if (display === 2)return this.setState({display: display/*, review: this.state.reviews[2].content*/});
            else if (display === 3)return this.setState({display: display/*, review: this.state.reviews[3].content*/});
            else if (display === 4)return this.setState({display: display/*, review: this.state.reviews[4].content*/});
        } else if (display === index) {
            article.animate({opacity: '0'}, "slow");
            display = '';
            return this.setState({display: display});
        }       
    }

    scrollbarWidthResize() {
        let tableBody = document.querySelector('#tableBody');
        if(!tableBody) return;
        let row = document.querySelector('#aot');
        let scrollbarWidth = tableBody.offsetWidth - row.offsetWidth;
        let rowTableHead = $('#tableHeaderRow');
        rowTableHead.css('marginRight', scrollbarWidth);
    }

    componentDidMount() {
        this.scrollbarWidthResize();
        window.addEventListener('resize', this.scrollbarWidthResize.bind(this));
    }

    render() { 
        return ( 
            <main className={style.main}>
                <div className={style.container}>
                    <Table show={this.show} />
                    <Reviews index={this.state.display}/>
                </div>
            </main>
        );
    }
}
 
export default Anime;