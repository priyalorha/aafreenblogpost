import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-component">

                    <div className="aafreen">
                    <h1> Living like Aafreen</h1>
                    <p>Mom & Lifestyle Blog -Aafreen Rehman Ahmed</p>
                    <p><a href="mailto:someone@gmail.com">Aafreen's email address</a>
                    </p>
                   
                    </div>
                    
                    <div className="subscribe">
                    <form >
                    
                    <input id="email" type="email" name="email" placeholder="your email address" />
                    <button type="submit" >subscribe</button>
                    </form>

                  
                

                    </div>
                    <div class="social-container">
                        Follow me on:
                    <a href="https://www.instagram.com/livinglikeaafreen/"
                                className="instagram social">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    </div>
  

               


                
            

                
            </div>
        )
    }
}
