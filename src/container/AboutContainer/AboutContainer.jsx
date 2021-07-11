import React from "react";
import './AboutContainer.css';
import Content from "../../components/content/content";
import Fade from 'react-reveal/Fade';
import About from '../../components/About/About'
class Aboutcontainer extends React.Component {


    render() {
        return <div className="aboutContainer">
            <Fade bottom><Content title="About Us" subtitle="Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics "/></Fade>
            <About/>
        </div>
    }

}
export default Aboutcontainer;
