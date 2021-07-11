import React from 'react';
import './App.css'
import Navbar from "../navbar/Navbar";
import Home from '../homeSection/HomeSection';
import Business from '../Business/Business'
import ClientContainer from '../ClientContainer/ClientContainer';
import AboutContainer from '../AboutContainer/AboutContainer';
import PriceContainer from '../PriceContainer/PriceContainer';
import ContacContainer from '../ContacContainer/ContacContainer';
import TopFooter from '../TopFooter/TopFooter';
import Footer from  '../FooterContainer/FooterContainer'
function App() {
    return (
        <div className="app">
            <Navbar />
            <Home />
            <Business />
            <ClientContainer />
            <AboutContainer />
            <PriceContainer />
            <ContacContainer />
            <TopFooter />
            <Footer/>
        </div>
    )

}
export default App;