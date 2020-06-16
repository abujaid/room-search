import React, { Component } from 'react'
import ImgSignup from '../../assets/images/imgSignup.png'

export default class Signup extends Component {
    render() {
        return (
            <>
                <div className="container mt-5 bg-primary">
                    <div className="row">
                        <div className="col-sm-5">
                            <form action="">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword">Confirm Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-dark">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-7">
                            <img src={ImgSignup} alt="signup" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
