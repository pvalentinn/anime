import React, { Component } from 'react';
import $ from 'jquery';
import style from './style/Anime.module.css';
import Table from './Table';
import Reviews from './Reviews';
import { Link } from 'react-router-dom';

class Anime extends Component {
    state = {
        display: 0,
        review: <p className={style.review}></p>,
        reviews: [
            {content: <p className={style.review}>Probablement mon oeuvre de japanimation favorite. <br /><Link to="/manga#aot">Le manga </Link>est déjà génial de par son intrigue mais Wit Studio sublime le tout en animation. <br /> Les OST, l'animation et les dessins sont sublimes, oeuvre a voir !</p>},
            {content: <p className={style.review}>Simplement le meilleur dans son genre ! <br /> Un anime de combat ou l'histoire n'est pas le point fort, mais ou l'évolution des personnages reste intéressante. <br /> Un anime a regarder donc principalement pour son animation qui est surement une des meilleures. <br /> Après son changement de studio, l'anime perd son plus gros atout: l'ANIMATION et perd donc aussi tout son intérêt.</p>},
            {content: <p className={style.review}>Humblement le meilleur anime de 2019 ! <br /> Une adaptation en anime qui a fait carton: <br /> le studio Ufotable surprend avec un style graphique assez original, des scènes de combats uniques et des OST fortes. <br /> L'histoire a quelques allures de déjà vu, mais la formule est toujours éfficace.</p>},
            {content: <p className={style.review}>Après le meilleur, on aborde un des pires animes de 2019 (selon moi). <br />Une introduction désastreuse, une 3D omniprésente et horrible a regarder. <br /> N'ayant pas lu le manga, l'adaptation rend l'histoire plate et fait penser a un autre Isekai qui manque térriblement d'originalité. <br /> Un des animés que je déconseille le plus.</p>},
            {content: <p className={style.review}>Un anime pas comme les autres mentionnés précédemment<br /> L'histoire est à la fois touchante et divertissante, les OST sont INCROYABLES et la fin donne minimum les larmes aux yeux. <br /> Un animé que je recommande fortement dans son genre !</p>}
        ]
    }

    show = (index) => {
        let display = this.state.display;
        let article = $('article');

        if (display !== index) {
            article.animate({opacity: '1'}, "slow");
            display = index;
            if (display === 'pen0') return this.setState({display: display, review: this.state.reviews[0].content});
            else if (display === 'pen1')return this.setState({display: display, review: this.state.reviews[1].content});
            else if (display === 'pen2')return this.setState({display: display, review: this.state.reviews[2].content});
            else if (display === 'pen3')return this.setState({display: display, review: this.state.reviews[3].content});
            else if (display === 'pen4')return this.setState({display: display, review: this.state.reviews[4].content});
        } else if (display === index) {
            article.animate({opacity: '0'}, "slow");
            display = 0;
            return this.setState({display: display});
        }       
    }

    render() { 
        return ( 
            <main className>
                <div className={style.container}>
                    <Table show={this.show} />
                    <Reviews review={this.state.review}/>
                </div>
            </main>
        );
    }
}
 
export default Anime;