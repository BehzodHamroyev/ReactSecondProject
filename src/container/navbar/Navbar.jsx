import React from 'react';
import './navbar.css';
import Logo from './logo.png';
import Link from '../../components/nabar.componets/Link';
import Button from '../../components/button.header/button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faShoppingCart, faBars} from '@fortawesome/free-solid-svg-icons';
import Zoom from '../../../node_modules/react-reveal/Zoom';


const data = [
    {
        url: "https://codepen-hb.netlify.app/",
        title: "Home"
    }, {
        url: "https://codepen-hb.netlify.app/",
        title: "Product"
    }, {
        url: "https://codepen-hb.netlify.app/",
        title: "Pricing"
    }, {
        url: "https://codepen-hb.netlify.app/",
        title: "Contact"
    }
]
class Navbar extends React.Component {
    // constructor(props) {
    //     this.state = props;
    // }
    state = {
        hid: true
    }
    toggleF = () => {
        this.setState((state) => {
            console.log(state);
            return {
                hid: !state.hid
            };
        })
    }
    render() {
        return (
            <div className="Navbar shadow container-fluid  px-5 py-3 d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex align-items-center">
                    <div>
                        <a href="#">
                            <img src={Logo}
                                className="logo"
                                alt=""/></a>
                    </div>
                    {
                    data.map((v) => {
                        return (
                            <div className="link ml-3 d-none d-lg-block"
                                key={
                                    v.title
                            }>
                                <Link url={
                                        v.url
                                    }
                                    title={
                                        v.title
                                    }/>
                            </div>
                        )
                    })
                } </div>
                <div className="button d-none d-lg-block ">
                    <Button/>
                </div>
                <div className="icon d-lg-none d-block">
                    <button className="btn">
                        <FontAwesomeIcon className="fs-4 text-white"
                            icon={faSearch}/></button>
                    <button className="btn"><FontAwesomeIcon className="fs-4 text-white"
                            icon={faShoppingCart}/></button>
                    <button className="btn cursor-pointer mr-2">
                        <FontAwesomeIcon onClick={
                                this.toggleF
                            }
                            className="fs-4 text-white"
                            icon={faBars}/>
                    </button>

                </div>
                <div className={
                    `mobil-menu ${
                        this.state.hid && "d-none" || ""
                    }  d-lg-none d-block mt-5  text-center w-100 `
                }>
                    {
                    data.map((v) => {
                        return (
                            <div className="link  text-white mt-4 "
                                key={
                                    v.title
                            }>
                                <Zoom duration={900}>
                                    <Link url={
                                            v.url
                                        }
                                        title={
                                            v.title
                                        }/>
                                </Zoom>
                            </div>
                        )
                    })
                } </div>
            </div>
        )
    }


}
export default Navbar;
