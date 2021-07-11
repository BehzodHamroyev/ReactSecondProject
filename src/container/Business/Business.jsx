import React from "react";
import './Business.css';
import Content from '../../components/content/content';
import MyCards from "../../components/myCard/myCards";
import Fade from 'react-reveal/Fade';


function Business() {
    return (
        <section className="Business container-fluid">
            <Fade bottom>
                <Content title="Better Strategy With Quality Business" subtitle="Problems trying to resolve the conflict between
                                                                                                                            the two major realms of Classical physics: Newtonian mechanics "/></Fade>

            <Fade bottom>
                <MyCards className="MyCards"/></Fade>
        </section>
    )

}
export default Business;
