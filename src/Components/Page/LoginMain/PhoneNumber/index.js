/* eslint-disable jsx-a11y/anchor-is-valid */
import ClassNames from "classnames/bind";
import styles from "./PhoneNumber.module.scss";
import { useState } from "react";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const cx = ClassNames.bind(styles);

function PhoneNumber() {
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState({
        number: number,
        password: password,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        setData({ number: number, password: password });
        return handleLogin(number, password);
    };
    const handleLogin = (number, password) => {
        console.log(data);
        if (number === "123" && password === "123") {
            console.log("true");
        } else {
            console.log("false");
        }
    };
    return (
        <Fragment>
            <form className={cx("form")}>
                <div className={cx("form-group")}>
                    <label>
                        VN +84
                        <FontAwesomeIcon
                            className={cx("icon")}
                            icon={faCaretDown}
                        />
                    </label>
                    <input
                        type="number"
                        onChange={(e) => {
                            setNumber(e.target.value);
                        }}
                        className={cx("form-control")}
                        aria-describedby="emailHelp"
                        placeholder="Phone Number"
                    />
                </div>
                <div className={cx("form-group")}>
                    <input
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        type="password"
                        className={cx("form-control")}
                        placeholder="Password"
                    />
                </div>
                <a href="#" className={cx("other")}>
                    Forgot Password ?
                </a>
                <button
                    onClick={handleSubmit}
                    type="submit"
                    className={cx("btn")}
                >
                    Submit
                </button>
            </form>
        </Fragment>
    );
}
export default PhoneNumber;
