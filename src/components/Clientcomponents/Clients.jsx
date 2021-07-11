import React from 'react';
import Client from './Client';

import './Clients.css';
const data = [
    {
        img: 'user1.svg',
        name: 'Regina Miles',
        job: "Design",
        start: 3,
        comment: "This proved to be impossible using         concepts of space and time. Einstein         new view of time first and then"
    }, {
        img: 'user2.svg',
        name: 'Regina Miles',
        job: "Design",
        start: 3,
        comment: "This proved to be impossible using concepts of space and time. Einstein new view of time first and then"
    }

]


function Clients() {
    return <div className="Clients ">
        <div className="row container-fluid">
            {
            data.map((v, i) => {
                return (
                    <Client  name={
                            `${
                                v.name
                            }`
                        }
                        job={
                            `${
                                v.job
                            }`
                        }
                        comment={
                            `${
                                v.comment
                            }`
                        }
                        img={
                            `${
                                v.img
                            }`
                        }/>
                )
            })
        } </div>
    </div>
}
export default Clients;
