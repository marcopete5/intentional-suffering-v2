import React, { Component } from 'react';
import {withOptions} from '../Providers/OptionProvider';

//assets
import green from '../assets/icons/green-back.png'
import wheel from '../assets/icons/wheel.png'
import spin from '../assets/icons/spin-btn.png'
import shoes from '../assets/icons/shoes.png'
import './Home.css';


class Home extends Component {
    constructor(){
        super()

        this.state = {
            deg: 0,
            challenge: 'Spin the wheel',
            currentOption: {},
            hasChallenge: false,
            spinning: false
        }
    }

    componentDidMount(){
        this.props.getAllOptions()
    }

    spinWheel = () => {
        this.setState(({spinning}) => ({spinning: !spinning}), ()=> {
            if(this.state.hasChallenge || !this.state.spinning){
                alert('You must complete your current challenge in order to spin the wheel again')
            }else {
                this.setState(({deg}) => ({deg: deg + Math.floor(Math.random()* 360)+720}), 
                ()=>{
                    setTimeout(()=>{
                        this.setChallenge()
                    },3010)
                }
            )
            }
        })
    }

    setChallenge = () => {
        let current = this.props.options[Math.floor(Math.random()*this.props.options.length)]
        this.setState({
            challenge: current.challenge,
            currentOption: current,
            hasChallenge: true
        }, ()=> {
            this.props.addToHistory(this.state.currentOption)
        })
    }


    render() {
        return (
            <div id='spinCont' style={{backgroundImage: `url(${shoes})`}}>
                <button id='spinLabel' onClick={this.spinWheel}>{this.state.challenge}</button>
                <img alt='wheel' src={wheel} id ="wheel" style={{ transform: `rotate(${this.state.deg}deg)` }}/>
                <img alt='green circle' src={green} id="green"/>
                <img alt='spin button' src={spin} id="spinBtn" onClick={this.spinWheel}/>
            </div>
        );
    }
}

export default withOptions(Home);


