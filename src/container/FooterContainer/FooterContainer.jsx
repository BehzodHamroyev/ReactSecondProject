import React from "react";
import './FooterContainer.css';
import Logo from './logo.png';
// class Link extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = props;
//     }
//     render() {
//         return (
//             <div className="link"></div>
//         )
//     }
// }
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {
        return (
            <div className="ContacContainer container-fluid">
                <div className="row container">
                    <div className="col-md-2 col-sm-6 col-12">
                        <p className="text-white">Company Info</p>
                        <a href="#" className=" text-start">www.company</a>
                        <a href="#" className=" text-start">companyna</a>
                        <a href="#" className=" text-start">Phone: +7 485-118</a>
                        <a href="#" className=" text-start">Phone: +7 485-118</a>
                    </div>

                    <div className="  cardFooter col-md-2 col-sm-6 col-12">
                        <p className="text-white">Home</p>
                        <a href="#" className=" text-start">Landingpage</a>
                        <a href="#" className=" text-start">Documentation</a>
                        <a href="#" className=" text-start">Referral Program</a>
                        <a href="#" className=" text-start">UI & UX Design</a>
                        <a href="#" className=" text-start">Web Design</a>
                    </div>
                    <div className=" cardFooter col-md-2 col-sm-6 col-12">
                        <p className="text-white">Menu</p>
                        <a href="#" className=" text-start">Landingpage</a>
                        <a href="#" className=" text-start">Documentation</a>
                        <a href="#" className=" text-start">Referral Program</a>
                        <a href="#" className=" text-start">UI & UX Design</a>
                        <a href="#" className=" text-start">Web Design</a>
                    </div>
                    <div className=" cardFooter col-md-4 col-sm-6 col-12">
                        <p className="text-white">Company</p>
                        <a href="#" className=" text-start">Landingpage</a>
                        <a href="#" className=" text-start">Documentation</a>
                        <a href="#" className=" text-start">Referral Program</a>
                        {/* <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"> */}
                        <div className="form d-flex mt-2">
                            <input type="text" className='input' placeholder="your email"/>
                            <button type="submit" className="btn btn-outline-success text-white">Submit</button>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
