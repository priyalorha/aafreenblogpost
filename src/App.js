import React, { Component } from 'react'
import Footer from './screens/Footer'
import Headers from './screens/Headers'
import MainBody from './screens/MainBody'

export default class App extends Component {
    render() {
        return (

            <div className="grid-container">
            <header>
               <Headers/>
            </header>
            <main>
               <MainBody/>

            </main>

            <footer><Footer/></footer>
            
                
            
            </div>
        )
    }
};
