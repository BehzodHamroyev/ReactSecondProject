import React from 'react';
import './navbar.css';
import Logo from './logo.png';
import Link from '../../components/nabar.componets/Link';
import Button from '../../components/button.header/button';


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
    constructor(props) {
        super(props)
        this.state = props;
    }
    render() {
        return (
            <div className="Navbar container-fluid  px-5 py-3 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <div>
                        <img src={Logo}
                            className="logo mr-5"
                            alt=""/>
                    </div>
                   
                    {
                    data.map((v) => {
                        return (
                            <div className="link" key={v.title}>
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
                <div className="button">
                    <Button/>
                </div>
            </div>
        )
    }


}
export default Navbar;
