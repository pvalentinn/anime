import React, { Component } from 'react';
import style from './style/Studio.module.css';
import First from './First';
import Second from './Second';
import Third from './Third';
import $ from 'jquery';

class Content extends Component {

    state = { index: this.props.index }

    componentWillMount() {



        $(`#${this.props.id} > div > div > div:last-child`).prependTo($(`#${this.props.id} > div > div`));
    }

    componentDidMount(){
        
        let $content = $('#'+this.props.id);
        let sliderWidth = $content.width();
        let list = $(`#${this.props.id} > div > div`)

        list.css({ width: sliderWidth * 3, marginLeft: -sliderWidth });
        list.children().css({ width: sliderWidth });
        
        window.addEventListener('resize', () =>  {
            sliderWidth = $content.width();
            list.css({ width: sliderWidth * 3, marginLeft: -sliderWidth });
            list.children().css({ width: sliderWidth});
        });
        $(`#${this.props.id} > div > div > div:last-child`).prependTo(list);

    }

    prev = () => {
        
        let list = $(`#${this.props.id} > div > div`);
        let sliderWidth = $('#'+this.props.id).width();

        $(`#${this.props.id} span`).first().click(() => {
            list.animate({left: - sliderWidth}, 500, () => {
                list.children().last().prependTo(list);
                list.css({left: ''});
            });
        });
    }

    next = () => {
        
        let list = $(`#${this.props.id} > div > div`);
        let sliderWidth = $('#'+this.props.id).width();

        $(`#${this.props.id} span`).last().click(() => {
            list.animate({left: + sliderWidth}, 500, () => {
                list.children().first().appendTo(list);
                list.css({left: ''});
            });
        });
    }

    render() {
        return (
            <div className={style.content} id={this.props.id}>
                <div className={style.slider}>
                    <span className={style.prev} onClick={this.prev}>&#10094;</span>
                    <span className={style.next} onClick={this.next}>&#10095;</span>
                    <div className={style.list}>
                        <First index={this.props.index}/>
                        <Second index={this.props.index}/> 
                        <Third index={this.props.index}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content