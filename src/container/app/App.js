import React from 'react';
import './App.css'
import Navbar from "../navbar/Navbar";
// import { directive } from '@babel/types';
import Home from '../homeSection/HomeSection';
import Business from '../Business/Business'
function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <Business />
        </div>
    )

}
export default App;