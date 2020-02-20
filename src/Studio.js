import React, { Component } from 'react';
import style from './style/Studio.module.css';
import $ from 'jquery';
import Content from './Content';

class Studio extends Component {
    state = {
        box: [
            {id: 'box1', name: 'A-1 Pictures', state: 0},
            {id: 'box2', name: 'Bones', state: 0},
            {id: 'box3', name: 'Mad House', state: 0},
            {id: 'box4', name: 'Wit Studio', state: 0},
        ],
        content: <></>,
        id: ''
    }

    toggle = (id, i) => {
        let copy = [...this.state.box];
        // let which;
        // let verify = copy.some(e => {
        //     if (e.state === 1) {
        //         which = e;
        //         return e.state === 1
        //     } else {
        //         return e.state === 1
        //     }
        // }); 
        if(copy[i].state === 0){
            // if(verify) {
            //     $(`#${which.id} + div`).animate({height: '0px'}, 'fast');
            //     copy[copy.indexOf(which)].state = 0;
            // }

            $(`${id} + div`).animate({height: '400px'}, 'fast');
            copy[i].state = 1;
            return this.setState({box: copy});
        } else if(copy[i].state === 1){
            $(`${id} + div`).animate({height: '0px'}, 'fast');
            copy[i].state = 0;
            return this.setState({box: copy});
        }
    }

    updateState = (i) => {
        let copy = [...this.state.box];
        console.log(copy[i].state)
        copy[i].state = 1;
        console.log(copy)
        return this.setState({box: copy});
    }

    componentDidUpdate(){
        let which;
        let verify = this.state.box.some(e => {
            if (e.state === 1) {
                which = e;
                return e.state === 1
            } else {
                return e.state === 1
            }
        }); 
        if(verify) this.toggle(which.id, parseInt(which.id[3]) - 1);
    }

    render() {
        return (
            <main className={style.main}>
                {this.state.box.map( (e, i) =>
                <>
                    <div className={style.box} id={e.id} key={e.id} 
                    onClick={() => this.updateState(i)}>
                        <h2 key={'h2'+i}>{e.name}</h2>
                    </div>

                    {(() => {
                        if(this.state.box[i].state === 1) { 
                        return <Content key={'content'+i} index={i} />
                    }
                        else return console.log('non');
                    })()}

                </> 
                )}
            </main>
        )
    }
}

export default Studio
