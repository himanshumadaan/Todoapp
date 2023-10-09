import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Toast from "../common/Toast";
import { login, terms_Condition } from "../services/services";
import { Button, Modal } from "react-bootstrap";
const Login = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [acceptTerms, setTerms] = useState(false)
    const [preview, setpreview] = useState(false);
    const [credentials, setCredentials] = useState({
        username: null,
        password: null
    });
    const navigate = useNavigate();
    const handleSubmit = () => {
        if (!credentials.username) {
            Toast(true, 'please enter username')
        } else if (!credentials.password) {
            Toast(true, 'Please enter password');
        } else if (credentials.username && credentials.password) {
            navigate('/dashboard');
        }
    }





    return (
        <div>
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-xl-9">
                        <div className="auth-full-bg pt-lg-5 p-4">
                            <div className="w-100">
                                <div className="bg-overlay"></div>
                                <div className="d-flex h-100 flex-column">

                                    <div className="p-4 mt-auto">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-7">
                                                <div className="text-center">

                                                    <h4 className="mb-3"><i className="bx bxs-quote-alt-left text-primary h1 align-middle me-3"></i><span className="text-primary">5k</span>+ Satisfied clients</h4>

                                                    <div dir="ltr">
                                                        <div className="owl-carousel owl-theme auth-review-carousel" id="auth-review-carousel">
                                                            <div className="item">
                                                                <div className="py-3">
                                                                    <p className="font-size-16 mb-4">" Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist' folder...no need to install git and all the other stuff the documentation talks about. "</p>

                                                                    <div>
                                                                        <h4 className="font-size-16 text-primary">Abs1981</h4>
                                                                        <p className="font-size-14 mb-0">- Skote User</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="item">
                                                                <div className="py-3">
                                                                    <p className="font-size-16 mb-4">" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. "</p>
                                                                    <div>
                                                                        <h4 className="font-size-16 text-primary">nezerious</h4>
                                                                        <p className="font-size-14 mb-0">- Skote User</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="auth-full-page-content p-md-5 p-4">
                            <div className="w-100">
                                <div className="d-flex flex-column h-100">
                                    <div className="mb-4 mb-md-5">
                                        <a href="index.html" className="d-block auth-logo">
                                            <img src="assets/images/logo-dark.png" alt="" height="18" className="auth-logo-dark" />
                                            <img src="assets/images/logo-light.png" alt="" height="18" className="auth-logo-light" />
                                        </a>
                                    </div>
                                    <div className="my-auto">

                                        <div>
                                            <h5 className="text-primary">Welcome Back !</h5>
                                            <p className="text-muted">Sign in to continue to Zashed.</p>
                                        </div>

                                        <div className="mt-4">
                                            <form >

                                                <div className="mb-3">
                                                    <label for="username" className="form-label">Username</label>
                                                    <input type="text" className="form-control" id="username" placeholder="Enter username" value={credentials?.username} onChange={(event) => setCredentials((prev) => ({ ...prev, username: event.target.value }))} />
                                                </div>

                                                <div className="mb-3">
                                                    <div className="float-end">
                                                        <Link className="text-muted" to="/forgotpassword" >Forgot password?</Link>
                                                    </div>
                                                    <label className="form-label">Password</label>
                                                    <div className="input-group auth-pass-inputgroup">
                                                        <input type={preview ? "text" : "password"} className="form-control" placeholder="Enter password" aria-label="Password" value={credentials?.password} onChange={(event) => setCredentials((prev) => ({ ...prev, password: event.target.value }))} aria-describedby="password-addon" />
                                                        <button className="btn btn-light " type="button" id="password-addon" onClick={() => setpreview(!preview)}><i className="mdi mdi-eye-outline"></i></button>
                                                    </div>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="remember-check" />
                                                    <label className="form-check-label" for="remember-check">
                                                        Remember me
                                                    </label>
                                                </div>

                                                <div className="mt-3 d-grid">
                                                    <button className="btn btn-primary waves-effect waves-light" type="button" onClick={handleSubmit}>Log In</button>
                                                </div>




                                            </form>

                                        </div>
                                    </div>


                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>


    )
};
export default Login;


