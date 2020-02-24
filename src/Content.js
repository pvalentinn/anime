import React, { Component } from 'react';
import style from './style/Studio.module.css';
import First from './First';
import Second from './Second';
import Third from './Third';
import $ from 'jquery';

class Content extends Component {

    state = { 
        index: this.props.index,
        display: 0 
    }

    prev = () => {
        let copy = this.state;
        if(copy.display === 0) copy.display = 2 
        else {
            copy.display--
        }

        let list = $(`#${this.props.id} > div > div`);
        let sliderWidth = $('#'+this.props.id).width();

        list.animate({left: + sliderWidth}, 500, () => {
            this.setState({display: copy.display})
            list.css({left: ''});
        });
    }

    next = () => {
        let copy = this.state;
        if(copy.display === 2) copy.display = 0 
        else {
            copy.display++
        }
        
        let list = $(`#${this.props.id} > div > div`);
        let sliderWidth = $('#'+this.props.id).width();

        list.animate({left: - sliderWidth}, 500, () => {
            this.setState({display: copy.display})
            list.css({left: ''});                
        });
    }

    render() {
        return (
            <div className={style.content} id={this.props.id}>
                <div className={style.slider}>
                    <span className={style.prev} onClick={this.prev}>&#10094;</span>
                    <span className={style.next} onClick={this.next}>&#10095;</span>
                    <div className={style.list}>
                    {(() => {
                            if(this.state.display === 0) {
                                return(
                                <>
                                    <Third index={this.props.index} key='third'/>
                                    <First index={this.props.index} key='first'/>
                                    <Second index={this.props.index} key='second'/> 
                                </>
                                )
                            } else if (this.state.display === 1) {
                                return(
                                <>
                                    <First index={this.props.index} key='first'/>
                                    <Second index={this.props.index} key='second'/>
                                    <Third index={this.props.index} key='third'/> 
                                </>
                                )
                            } else if (this.state.display === 2) {
                                return(
                                <>
                                    <Second index={this.props.index} key='second'/>
                                    <Third index={this.props.index} key='third'/>
                                    <First index={this.props.index} key='first'/>
                                </> 
                                )
                            }
                        })()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Content