import React, { Component } from 'react';
import style from './style/Studio.module.css';
import { studios } from './images';

class First extends Component {
    state = {
        content: [
            {name: 'A-1 Pictures', img: studios[0], description: `Aniplex, filiale de Sony Music Japan, participe régulièrement à la production de séries d'animation depuis sa création en 1995. Dans la première moitié des années 2000, le nombre de séries animées produites est en pleine explosion, d'où la possibilité d'Aniplex d'animer ses propres séries au lieu de passer par d'autres studios. C'est dans ce but qu'est créé A-1 Pictures en mai 2005. Le studio se diversifie à partir de 2007 et produit toutes sortes d'anime, de la série sportive à la tranche de vie en passant par la science-fiction.`},
            {name: 'Bones', img: studios[1], description: `Bones Inc. est un studio d'animation japonaise fondé en octobre 1998 par Masahiko Minami, Hiroshi Ousaka et Toshihiro Kawamoto, tous trois ex-employés de chez Sunrise. Le studio fit ses premiers pas en 2001 en coproduisant avec Sunrise Cowboy Bebop, le film.`},
            {name: 'Mad House', img: studios[2], description: `Madhouse Inc. est un studio de films et séries d'animation japonais fondé le 17 octobre 1972 par d'anciens employés de Mushi Production dont Masao Maruyama, Osamu Dezaki, Rintaro, et Yoshiaki Kawajiri. Son premier travail fut l'adaptation en anime de Ace o Nerae! en collaboration avec TMS.`},
            {name: 'Wit House', img: studios[3], description: `Wit Studio, Inc. est un studio d'animation japonaise situé à Musashino dans la préfecture de Tokyo, au Japon, fondé en juin 2012 par des producteurs de Production I.G en tant que filiale de IG Port. Il est connu pour de nombreux anime célèbres dont l'adaptation de L'Attaque des Titans.`}
        ]
    }

    render() {
        return (
            <div className={style.first}>
                <div className={style.studio}>
                    <h2>{this.state.content[this.props.index].name}</h2>
                    <span className={style.img} style={{backgroundImage: `url(${this.state.content[this.props.index].img})`}}></span>
                </div>
                <hr />
                <div className={style.description}><p>{this.state.content[this.props.index].description}</p></div>
            </div>
        )
    }
}

export default First;