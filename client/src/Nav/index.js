import React from 'react';
import {withOptions} from '../Providers/OptionProvider';
import {withUser} from '../Providers/UserProvider';
import {Link} from 'react-router-dom';


//assets
import './Nav.css'
import logo from '../assets/icons/emoji-sad.png'
import drop from '../assets/icons/drop-icon2.png'

const Nav = (props) => {
    return (
        <div className='nav-container'>
            <div onClick={props.on ? props.toggle : () => {}}>
                <div id="logo-background"></div>
                <Link to='/'><img src={logo} alt="" id="logo" /></Link>
            </div>
            <span>Wheel of Suck</span>
            <div onClick={props.toggle} style={{display: props.on ? 'none' : 'block'}}>
                <div id="drop-background"></div>
                <img src={drop} alt="" id="drop"  />
            </div>
            <ul onClick={props.toggle} id='nav-items' style={{display: props.on ? 'block' : 'none'}}>
                {props.token ? 
                    <>
                        <li><Link to='/add' >Add New</Link></li>
                        <li><Link to='/history' >History</Link></li>
                        <li><Link to='/link' >Lists</Link></li>
                        <li><a href='/#' onClick={() => {props.logout(); props.clearHistory()}}>Logout</a></li>
                    </>
                    :
                    <>
                        <li><Link to='/login' >Login</Link></li>
                        <li><Link to='/signup' >Sign Up</Link></li>
                    </>
                }
            </ul>
        </div>

    );
};

export default withUser(withOptions(Nav));