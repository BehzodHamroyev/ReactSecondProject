import React from "react";
import './button.header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

function Button() {
    return (
        <div className="d-flex">
            <button className="btn btn-outline-info mr-3">Log In</button>
            <button className="btn  btn-info text-white mr-2 d-flex align-items-center justify-content-around">Become a member
                <FontAwesomeIcon className="ml-2" icon={faArrowRight}/></button>
        </div>
    )
}
export default Button;
