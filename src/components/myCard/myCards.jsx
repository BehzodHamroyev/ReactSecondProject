import React from 'react';
import MyCard from './myCard';
import './myCard.css';
import User from './user.svg'
const data = [
    {
        title: 'Investment Trading',
        subTitle: "the quick fox jumps over the lazy dog"
    },
    {
        title: 'Raising Funds',
        subTitle: "the quick fox jumps over the lazy dog"
    },
    {
        title: 'Financial Analysis',
        subTitle: "the quick fox jumps over the lazy dog"
    },
    {
        title: 'Taxation Planning',
        subTitle: "the quick fox jumps over the lazy dog"
    }, {
        title: 'Save money and time',
        subTitle: "the quick fox jumps over the lazy dog"
    }, {
        title: 'Outsourced Consulting ',
        subTitle: "the quick fox jumps over the lazy dog"
    },
]


function MyCards() {
    return <div className="container MyCards">
        <div className="row">
            {
            data.map((v, i) => {
                return (
                    <MyCard title={
                            `${
                                v.title
                            }`
                        }
                        subTitle={
                            `${
                                v.subTitle
                            }`
                        }/>
                )
            })
        } </div>
    </div>
}
export default MyCards;
