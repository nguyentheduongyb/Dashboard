/* eslint-disable jsx-a11y/anchor-is-valid */
import classnames from "classnames/bind";
import styles from "./LoginMain.module.scss";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faUser } from "@fortawesome/free-solid-svg-icons";

import {
    faApple,
    faFacebook,
    faGoogle,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DisplayContext } from "~/Components/Layout/DisplayHeader";
import PhoneNumber from "./PhoneNumber";
import LoginWithFacebook from "../Login/FacebookLogin/Facebook";

const items = [
    {
        type: "qrcode",
        title: "Use QR Code",
        icon: <FontAwesomeIcon icon={faQrcode} />,
    },
    {
        type: "phone",
        title: "Continue with Phone Number",
        icon: <FontAwesomeIcon icon={faUser} />,
        form: <PhoneNumber />,
    },
    {
        type: "facebook",
        title: "Continue with Facebook",
        icon: <FontAwesomeIcon icon={faFacebook} />,
        form: <LoginWithFacebook />,
    },
    {
        type: "google",
        title: "Continue with Google",
        icon: <FontAwesomeIcon icon={faGoogle} />,
    },
    {
        type: "twitter",
        title: "Continue with Twitter",
        icon: <FontAwesomeIcon icon={faTwitter} />,
    },
    {
        type: "telegram",
        title: "Continue with Telegram",
        icon: <FontAwesomeIcon icon={faInstagram} />,
    },
    {
        type: "apple",
        title: "Continue with Apple",
        icon: <FontAwesomeIcon icon={faApple} />,
    },
];
const cx = classnames.bind(styles);
function Login() {
    const display = useContext(DisplayContext);
    return (
        <Fragment>
            <form className={cx("list-item")}>
                {items.map((item, index) => (
                    <Link
                        key={index}
                        onClick={() => {
                            display.typeLogin({
                                type: item.type,
                                form: item.form,
                            });
                        }}
                    >
                        <li className={cx("item")}>
                            <i className={cx("icon-link")}>{item.icon}</i>
                            {item.title}
                        </li>
                    </Link>
                ))}
            </form>
        </Fragment>
    );
}
export default Login;
