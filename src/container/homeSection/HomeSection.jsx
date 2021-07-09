import React from 'react';
import './homesection.css';
import ButtomHome from '../../components/buttomhome/buttom.home';
import Content from '../../components/content/content';
function Home() {

    return (
        <section className="home">
            <Content title="Creating a Beautifull & Usefull Solutitons" subtitle="We know how large objects will act, but things on a
                                            small scale just do not act that way."/>
            <ButtomHome/>
        </section>
    )
}
export default Home;
