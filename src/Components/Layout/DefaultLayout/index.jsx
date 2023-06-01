import ClassNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "~/Components/Layout/Components/Header";
import Sidebar from "~/Components/Layout/Components/Sidebar";
import Footer from "~/Components/Layout/Components/Footer";
import { Link } from "react-router-dom";

import { Modal, Button, Form } from 'react-bootstrap';
import image from '~/assets/images/minion_writing.png'
const cx = ClassNames.bind(styles);

function DefaultLayout({ children }) {
    const token = localStorage.getItem('token')

    return (
        <div className={cx("wrapper")}>
            <Sidebar></Sidebar>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ps--active-y">
                <Header></Header>
                <div className="container-fluid py-4">
                    {children}
                    <Footer />
                </div>
            </main>
            <Modal show={!token} size="lg" >
                <Modal.Header closeButton>
                    <Modal.Title>{ }</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex align-items-center">
                    <div className="col-lg-7">
                        <h1 className="text-danger text-center">500</h1>

                        <h6 className="text-center">You must be logged in to use this function</h6>
                        <div className="text-center mt-4">
                            <Link to="/login" className="btn btn-primary">Login</Link>
                        </div>

                    </div>
                    <div className="col-lg-5 ms-auto">
                        <img className="w-100" src={image} />
                    </div>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default DefaultLayout;
