import React from 'react';
import './Contact.css';
import Contact from './Contact'
const data = [
    {
        icon: "Vector (3).svg",
        link1: "georgia.young@example.com",
        link2: "georgia.young@ple.com"
    }, {
        icon: "location-2955.svg",
        link1: "georgia.young@example.com",
        link2: "georgia.young@ple.com"
    }, {
        icon: "Vector (5).svg",
        link1: "georgia.young@example.com",
        link2: "georgia.young@ple.com"
    }
]

function Contacts() {
    return (
        <div className="Contacts container">
            <div className="row">
                {
                data.map((v, i) => {
                    return (
                        <Contact icon={
                                `${
                                    v.icon
                                }`
                            }
                            link1={
                                `${
                                    v.link1
                                }`
                            }
                            link2={
                                `${
                                    v.link2
                                }`
                            }/>
                    )
                })
            } </div>
        </div>
    )

}
export default Contacts;
