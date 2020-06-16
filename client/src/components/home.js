import React, { Component } from 'react'
import Header from './header'
import cityscapes from '../assets/images/cityscapes.png'
import Footer from './footer'

export default class Home extends Component {
    render() {
        return (
            <>
                {/* <Header /> */}
                <div className="container mt-150">
                    <div className="row">
                        <div className="col-sm-6">
                            <h1>
                                Find Your New Place with roomie!
                            </h1>
                            <p>Easy as making friends, with roomie you can look for many rooms available across the country.</p>
                            <form action="">
                                <div className="search-container">
                                    <input type="text" className="search-input" placeholder="Enter a City" />
                                    <span><button className="search-button">Search</button></span>

                                </div>
                            </form>
                        </div>
                        <div className="col-sm-6">
                            <img src={cityscapes} alt="" className="" width="100%" />
                        </div>

                    </div>
                </div>
                {/* <Footer /> */}
            </>
        )
    }
}
