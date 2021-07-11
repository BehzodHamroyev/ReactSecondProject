import React from 'react';
import Content from '../../components/content/content';
import Clients from '../../components/Clientcomponents/Clients'
import './ClientContainer.css';
import Fade from 'react-reveal/Fade';
class ClientContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = props;
    }
    render() {
        return <div className="  ClientContainer">
            <Fade left>
                <Content title={"What Clients Say"}
                    subtitle={"Problems trying to resolve the conflict between The two major realms of Classical physics: Newtonian mechanics "}/></Fade>

            <Fade bottom><Clients className="container"/></Fade>
        </div>
    }


}
export default ClientContainer;
