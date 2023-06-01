import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import { useState } from "react";
import tmdb from "~/API/tmdb";
import { useNavigate } from 'react-router-dom';


import { request } from "~/API/request";
const cx = classNames.bind(styles);

function LogIn() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await tmdb.post(`/users/login`, {
                email: email,
                password: password
            });

            setTimeout(() => {
                alert("Login Successfully")

            }, 200)
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('id', res.data.user._id)
            if (localStorage.getItem('token')) {
                navigate("/")

            }
            // Thực hiện xử lý dữ liệu submit trả về (nếu có)
        } catch (error) {
            alert("Login Failure")

            // Xử lý lỗi (nếu có)
        }
    }
    return (
        <main className="main-content mt-0 ps">
            <section>
                <div className="page-header min-vh-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column">
                                <div className="card card-plain">
                                    <div className="card-header pb-0 text-start">
                                        <h4 className="font-weight-bolder">Login</h4>
                                        <p className="mb-0">Enter your email and password to login</p>
                                    </div>
                                    <div className="card-body">
                                        <form role="form">
                                            <div className="mb-3">
                                                <input onChange={(e) => { setEmail(e.target.value) }} type="email" className="form-control form-control-lg" placeholder="Email" aria-label="Email" />
                                            </div>
                                            <div className="mb-3">
                                                <input onChange={(e) => { setPassword(e.target.value) }} type="password" className="form-control form-control-lg" placeholder="Password" aria-label="Password" />
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="rememberMe" />
                                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                            </div>
                                            <div className="text-center">
                                                <button onClick={handleSubmit} type="submit" className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Login</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                                        <p className="mb-4 text-sm mx-auto">
                                            Don't have an account?
                                            <Link to="/register" className="text-primary text-gradient font-weight-bold ms-1">Register</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                                <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center">
                                    <img src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/shapes/pattern-lines.svg" alt="pattern-lines" className="position-absolute opacity-4 start-0" />
                                    <div className="position-relative">
                                        <img className="max-width-500 w-100 position-relative z-index-2" src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/illustrations/chat.png" alt="chat-img" />
                                    </div>
                                    <h4 className="mt-5 text-white font-weight-bolder">"Attention is the new currency"</h4>
                                    <p className="text-white">The more effortless the writing looks, the more effort the writer actually put into the process.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></section>
        </main>


    );
}

export default LogIn;
