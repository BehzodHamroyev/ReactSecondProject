import React from 'react';
import './Contact.css';
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }


    render() {
        return (
            <div className="col-md-4 ">
                <div className="contact  text-center">
                    <img className="text-dark" src={
                            this.state.icon
                        } 
                        alt=""/>
                    <p>{
                        this.state.link1
                    }</p>
                    <p>{
                        this.state.link2
                    }</p>
                    <p className="fw-bold">Get Support</p>
                    <button className="btn btn-outline-info rounded">Submit Request</button>
                </div>

            </div>
        )
    }
}
export default Contact;
