import React, { Component } from 'react';
import style from './style/Manga.module.css';
import { mangas } from './images';
import { Link } from 'react-router-dom';

class Manga extends Component {
    state = {
        containers : [
            {id: 'aot', img: mangas[0], titre: <Link to="/anime#aot">Attack on Titan</Link>, note: ' (9/10)', class: style.img,
            resume: 'Dans un monde ravagé par des titans mangeurs d’homme depuis plus d’un siècle, les rares survivants de l’Humanité n’ont d’autre choix pour survivre que de se barricader dans une cité-forteresse. Le jeune Eren, témoin de la mort de sa mère dévorée par un titan, n’a qu’un rêve : entrer dans le corps d’élite chargé de découvrir l’origine des titans, et les annihiler jusqu’au dernier…',
            avis: <p>L'histoire et le suspens qu'avait réussi à créer <Link to="/anime#aot">l'anime</Link> m'a poussé a le lire. <br /> L'auteur Isayama Hajime ne laisse RIEN au hasard et les surprises se multiplient ! <br />Une histoire qui vaut le détour.</p>
            },
            {id: 'tg', img: mangas[1], titre: 'Tokyo Ghoul', note: ' (8.5/10)', class: style.imgRight, 
            resume: 'A Tokyo sévissent des goules (monstres cannibales) qui prennent l’apparence d’humains pour mieux les dévorer. L’histoire nous entraîne dans le quotidien du jeune Ken Kaneki qui réalise, peu après avoir été grièvement blessé par une goule, qu’il est de plus en plus attiré par la chair humaine. Tout en s’adaptant à sa nouvelle condition et aux dangereuses règles qui régissent le monde des Goules, Ken essaye de mener une vie normale avec ses amis. Mais maintenant, il doit aussi faire face à ceux qui les pourchassent…',
            avis: <p>Le manga et l'adapation sont assez différentes et c'est pour cette raison que j'ai commencé le manga. <br /> Selon moi, l'histoire est bien meilleur en manga car bien plus détaillé notamment. <br /> Néanmoins, les scenès de combats sont a s'y perdre ce qui n'était pas le cas dans la première adaptation.</p>
            },
            {id: 'jojo', img: mangas[2], titre: 'Jojo Bizarre Adventure : Stone Ocean', note: ' (8/10)', class: style.img,
            resume: "2011, Jolyne Kujo est accusée d'un meurtre qu'elle n'a pas commis. Elle accepte d'en endosser la responsabilité pour voir sa peine réduite. Elle est donc envoyée dans une célèbr /e prison pour femmes : Green Dolphin en Floride où, à cause d'un entaille faite par une pierre que lui fut transmise par son père Jotaro Kujo, elle commence à développer un étrange pouvoir. Arrivera à-t-elle à s'enfuir grâce à sa nouvelle capacité ? Qui sont ces hommes restés fidèles à Dio malgré les deux décennies écoulées depuis sa mort ?",
            avis: <p>Les Jojos sont des incontournables, que ce soit en anime ou en manga, pour leurs style unique et extravagant. Cette partie de JoJo est la seule que j'ai lu en manga, faute d'adaptation, et la folie des aventures des personnages principaux est identique à leur version anime, je recommande fortement. <br /> </p>
            },
            {id: 'kg', img: mangas[3], titre: "King's game", note: ' (8.5/10)',  class: style.imgRight,
            resume: `L'histoire se centre sur une classe entière de 32 lycéens qui reçoivent un étrange message venant d'une personne se faisant appeler le "Roi." Le message contient des ordres que les lycéens doivent accomplir sous peine de mourir. Au fur et à mesure que les jours passent, les ordres du "Roi" deviennent de plus en plus extrêmes..`,
            avis: <p>Un <a href="https://fr.wikipedia.org/wiki/Seinen" target='_blank'>Seinen</a> peu connu, assez gore où le drama et l'horreur sont omniprésents. <br />Une intrigue mystérieuse ou des ados se retrouvent forcer de 'jouer' avec la vie et la mort! <br /> L'histoire et le besoin d'en connaitre la fin en font un excellent manga, selon moi. </p>
            },
            {id: 'kuni', img: mangas[4], titre: 'Houseki no Kuni', note: ' (7/10)', class: style.img,
            resume: `Dans ce monde, la terre a été frappée d'une chute de météores, réduisant sa surface à une simple île en forme de croissant, totalement infertile. Les continents ayant été détruits se sont réunis dans le ciel pour former 6 lunes Cependant, la terre est maintenant peuplée par une nouvelle espèce: Les cristaux. Ils sont immortels et se nourrissent de lumière. Ils sont régulièrement attaquées par les Séléniens, les habitants des 6 lunes, qui veulent récupérer le cristal dont ils sont faits pour en faire des armes et des ornements. Phosphophyllite est l'un d'eux. Elle veut combattre les séléniens, mais à cause de sa maladresse et de sa très faible solidité, ça lui est impossible, et Phosphophyllite n'a donc pas encore de tâche assignée. Mais un jour, maître Varja, le plus vieux des cristaux, lui donne l'ordre d'écrire une encyclopédie qui relate l'histoire des cristaux et leur environnement, ce qui l'amènera à rencontrer un certain cristal nommé Cinabr /e...`,
            avis: <p>Comme beaucoup d'autre manga, j'ai commencé suite a l'anime. <br /> Charmé par l'univers qui est gracieux et peu commun, l'histoire donne envie d'en apprendre plus sur l'environnement, dans lequel évolue les personnages,et sur les personnages eux-mêmes !</p>
            },
            {id: 'kny', img: mangas[5], titre: <Link to="/anime#kny">Kimetsu No Yaiba</Link>, note: ' (8.5/10)', class: style.imgRight, 
            resume: `Depuis les temps anciens, il existe des rumeurs concernant des démons mangeurs d'hommes qui se cachent dans les bois. Pour cette raison, les citadins locaux ne s'y aventurent jamais la nuit. La légende raconte aussi qu'un tueur de démons déambule la nuit, chassant ces démons assoiffés de sang. Pour le jeune Tanjirou, ces rumeurs vont bientôt devenir sa dure réalité ...`,
            avis: <p>Le manga n'a rien a envié a son format <Link to="/anime#kny">anime</Link> : <br /> il reste fidèle a son atmosphère d'ancien Japon, les protagonistes risquent toujours leur vies dans des combats effrénés et ça se sens. Bon dans son adaptation et son format papier, une histoire à suivre !</p>
            }
        ]
    }

    render() {
        return (
            <main className={style.main}>
                {this.state.containers.map( (e, i) =>
                    <div className={style.container} id={e.id}>
                        <div className={e.class}><img src={e.img} alt={e.titre}/></div>
                        <div className={style.txt}>
                            <div className={style.name}>
                                <h1>{e.titre}{e.note}</h1><span className={style.emoji}>📖</span>
                                <span className={style.resume}>{e.resume}</span>
                            </div>
                            {e.avis}
                        </div>
                    </div>
                )}

            </main>
        )
    }
}

export default Manga