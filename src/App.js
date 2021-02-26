import React, { Component } from 'react'
import Footer from './screens/Footer'
import Headers from './screens/Headers'
import MainBody from './screens/MainBody'

export default class App extends Component {
    render() {
        return (

            <div className="grid-container">
                <div className="header">
                <Headers/></div>
                <div className="main">
                <MainBody/>
                </div>
                <div className="footer">
                <Footer/>
                </div>
                
            
            </div>
        )
    }
};
