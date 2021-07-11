import React from 'react';
import Content from '../../components/content/content';
import './ContacContainer.css';
import Fade from 'react-reveal/Fade';
import Contacts from '../../components/Contact/Contacts';
class ContacContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = props;
    }
    render() {
        return <div className="ContacContainer">
            <Fade left>
                <Content title={"Get In Touch"}
                    subtitle={"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "} /></Fade>
            <Fade bottom><Contacts /></Fade>
        </div>
    }


}
export default ContacContainer;
