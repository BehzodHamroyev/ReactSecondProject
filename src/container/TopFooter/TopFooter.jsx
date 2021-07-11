import React from 'react';
import './topFooter.css';
import Logo from './logo.png';
import Instagram from './instagram.svg';
import Facebook from './facebook.svg';
import Twiter from './twiter.svg';

function TopFooter() {
    return (
        <div className="topFooter w-100 container ">
            <div className="row  d-flex justify-content-betweent align-items-center">
                <div className="col-6 mb-3">
                    <a href="#">
                        <img className="logo"
                            src={Logo}
                            alt=""/></a>
                </div>
                <div className="col-6 mb-3 d-flex justify-content-end align-items-center">
                    <div className="d-flex">
                        <a href="https://www.facebook.com/"><img className='mr-2'
                                src={Facebook}
                                alt=""/></a>
                        <a href="https://www.instagram.com/?hl=ru"><img className='mr-2'
                                src={Twiter}
                                alt=""/></a>
                        <a href="https://www.instagram.com/?hl=ru"><img className='mr-2'
                                src={Instagram}
                                alt=""/></a>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )

}
export default TopFooter;
