import React from 'react'
import ImageLogin from '../../assets/images/img-login.png'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <div className="container mt-5" style={{ backgroundColor: 'lightgray' }}>
                <div className="row">
                    <div className="col-sm-5" style={{ float: "right" }}>
                        <div className="mt-5">
                            <h1>Sign in</h1>
                            <p>Don’t have an account? <Link to="/signup">Sign up?</Link></p>
                        </div>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="email">E-mail</label>
                                <input type="text" className="form-control" />
                            </div><div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" placeholder="**********" className="form-control" />
                            </div>
                            <div className="form-group">
                                <Link className="" to="/password-reset" style={{color:'#f56565'}}>Forgot password?</Link>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-light" style={{ backgroundColor: "yellow" }}>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-7">
                        <img src={ImageLogin} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
