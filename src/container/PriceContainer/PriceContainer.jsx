import React from "react";
import './PriceContainer.css';
import Content from "../../components/content/content";
import Fade from 'react-reveal/Fade';
import Prices from '../../components/Price/Prices'
class PriceContainer extends React.Component {


    render() {
        return <div className="PriceContainer">
            <Fade bottom><Content title="Pricing" subtitle="Problems trying to resolve the conflict between
                the two major realms of Classical physics: Newtonian mechanics  "/></Fade>
            <Prices/>
        </div>
    }

}
export default PriceContainer;
