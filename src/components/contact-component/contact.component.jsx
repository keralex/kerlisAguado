import React from 'react';
import './contact.styles.scss';
import twitter from '../../assets/asset1.png';

const Contact = () =>(
    <div className='wrapperbox'>
        <div className='bigcircle'>
            <div>
            <h1>CONTACT ME</h1>
            <p>Hi! if you want us to work toguether contact me!</p>
            <p>I'm available for frelance projects and full-time jobs.</p>
            <p>Kerlis.aguado26@gmail.com</p>
            <p>+54 911 54635604</p>
            <div className='icons'>
                <img src={twitter} alt='twitter icon'/>
            </div>
            </div>
        
        </div>
    </div>
)

export default Contact;
