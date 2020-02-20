import React, { Component } from 'react';
import style from './style/Anime.module.css';
import { Link } from 'react-router-dom';
import { animes } from './images';
import Pen from './Pen';

class Table extends Component {
    state = { 
        tableHead: [
            {content: <></>},
            {content: <h1>Nom <br /><em>(licence)</em></h1> },
            {content: <h1>Manga</h1>},
            {content: <h1><Link to='/studio'>Studio</Link></h1> },
            {content: <h1>Note(/10)</h1> },
            {content: <h1>Review</h1> }
        ],
        tableBody: [
            {id: 'aot', col: [
                {content: <img src={animes[0]} alt='aot'/>},
                {content: <h2><Link to='/manga#aot'>Shingeki no Kyojin</Link> <br /> Attack on titan<br /><em>(Wakanim)</em></h2>},
                {content: <h2>29 tomes en VO (Kodansha)<br />28 en VF (Pika)</h2>},
                {content: <h2>Wit Studio</h2>},
                {content: <h2>9(Avis)<br /><br />8.47 (MAL)<br />9.2 (Nautijon)</h2>},
            ]},
            {id: 'opm', col: [
                {content: <img src={animes[1]} alt='opm'/>},
                {content: <h2>One Punch Man<br /><em>(ADN)</em></h2>},
                {content: <h2>20 tomes en VO (Shueisha)<br />20 en VF (Kurokawa)</h2>},
                {content: <h2>Mad House<br />J.C Staff</h2>},
                {content: <h2>S1 puis S2<br />8.5/5.5(Avis)<br /><br />8.70/7.56 (MAL)<br />8.82/7.73 (Nautijon)</h2>},
            ]},
            {id: 'kny', col: [
                {content: <img src={animes[2]} alt='kny'/>},
                {content: <h2><Link to="/manga#kny">Kimetsu no Yaiba</Link><br />Demon Slayer<br/><em>(Wakanim)</em></h2>},
                {content: <h2>17 tomes en VO (Shueisha)<br />4 tomes en VF (Panini)</h2>},
                {content: <h2>Ufotable</h2>},
                {content: <h2>9(Avis)<br /><br />8.96 (MAL)<br />9.38 (Nautijon)</h2>},
            ]},
            {id: '', col: [
                {content: <img src={animes[3]} alt='arifureta'/>},
                {content: <h2><span>Arifureta Shokugyou <br /> de Sekai Saikyou</span><br />(Arifureta)<br /><em>(Wakanim)</em></h2>},
                {content: <h2>5 tomes en VO (OVERLAP)<br /><em>Pas de sortie Fr</em></h2>},
                {content: <h2>asread<br /> WHITE FOX</h2>},
                {content: <h2>4(Avis)<br /><br />6.48 (MAL)<br />7.26 (Nautijon)</h2>},
            ]},
            {id: '', col: [
                {content: <img src={animes[4]} alt='anohana'/>},
                {content: <h2><span>Ano Hi Mita Hana <br /> no Namae wo Bokutachi wa <br /> Mada Shiranai</span><br />(Anohana)<br /><em>(Wakanim/Netflix/Amazon)</em></h2>},
                {content: <h2>3 tomes en VO(Shueisha)<br />3 tomes en VF (Panini)<br /><em>Oeuvre terminé.</em></h2>},
                {content: <h2>asread<br /> WHITE FOX</h2>},
                {content: <h2>8.5(Avis)<br /><br />8.51 (MAL)<br />8.76 (Nautijon)</h2>},
            ]},
        ]
    }

    render() { 
        return ( 
            <div className={style.table}>
                <div className={style.tableHead}>
                    <div className={style.row}>
                        {this.state.tableHead.map( (e, i) => 
                            <div className={style.col} key={i+1}>{e.content}</div>
                        )}
                    </div>
                </div>
                <div className={style.tableBody}>
                    {this.state.tableBody.map( (e, i)  => 
                        <div className={style.row} id={e.id} key={i+1}>
                            {e.col.map( (col, index) => 
                                <div className={style.col} key={index+1}>{col.content}</div>
                            )}
                            <div className={style.col} key={'penRow'+ i}><Pen id={'pen' + i} key={i+1} class={style.pen} show={this.props.show}/></div>
                        </div>
                    )}
                    <div className={style.disclaimer}>
                        <h3>Les oeuvres ci-dessus ne sont pas classées par ordre de préférence. Mes critiques sont subjectives et n'engagent que moi.</h3>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Table;