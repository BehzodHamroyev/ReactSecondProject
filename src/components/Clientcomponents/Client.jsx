import React from "react";
import './Clients.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons';
// import {faStar} from '@fortawesome/free-solid-svg-icons';
class Client extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {
        return <div className="col-md-6  m-0 p-0 ">
            <div className="row bg-white  mt-4 mx-3">
                <div className="col-md-4 m-0 p-0 overflow-hidden">
                    <img src={
                            this.state.img
                        }
                        className="h-100 img-fluid w-100"
                        alt=""/>
                </div>
                <div className="col-md-8">
                    <p className="fw-bold text-dark m-0  mt-4">
                        {
                        this.state.name
                    } </p>
                    <p className="text-dark m-0">
                        {
                        this.state.job
                    }</p>
                    <FontAwesomeIcon className="text-warning "
                        icon={faStar}/>
                    <FontAwesomeIcon className="text-warning "
                        icon={faStar}/>
                    <FontAwesomeIcon className="text-warning "
                        icon={faStar}/>
                    <FontAwesomeIcon className="text-warning "
                        icon={faStar}/>
                    <FontAwesomeIcon className="text-warning "
                        icon={faStar}/>
                    <p className="text-dark m-0  mb-4">
                        {
                        this.state.comment
                    }</p>

                </div>
            </div>

        </div>
    }


}
export default Client;
