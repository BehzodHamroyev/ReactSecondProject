import React from 'react';
// import Fade from 'react-reveal/Fade';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons'
class Price extends React.Component {
    constructor(props) {
        super(props)
        this.state = props;
    }
    render() {
        return <div className="Price bg-white py-4">
            <p className="text-dark title fw-bold fs-1">{this.state.title}</p>
            <p className="text-dark subTitle fw-bold text-secondary w-50">{this.state.subTitle}</p>
            <p className="text-info fw-bold priceMonth">{this.state.price}</p>
            <button className=" btn btn-info text-white">Try for free
            </button>
            <div className="updates">
                <span className="rounded-circle check bg-success text-white"><FontAwesomeIcon icon={faCheck}/></span>Unlimited product updates
            </div>
            <div className="updates">
                <span className="rounded-circle check bg-success text-white"><FontAwesomeIcon icon={faCheck}/></span>Unlimited product updates
            </div>
            <div className="updates">
                <span className="rounded-circle check bg-success text-white"><FontAwesomeIcon icon={faCheck}/></span>Unlimited product updates
            </div>
            <div className="updates">
                <span className="rounded-circle check bg-secondary text-white "><FontAwesomeIcon icon={faCheck}/></span>1GB  Cloud storage
            </div>
            <div className="updates">
                <span className="rounded-circle check bg-secondary text-white"><FontAwesomeIcon icon={faCheck}/></span>Email and community 
                                        support
            </div>

        </div>
    }
}
export default Price;
