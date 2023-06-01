/* eslint-disable jsx-a11y/anchor-is-valid */
import ClassNames from "classnames/bind";
import styles from "./Login.module.scss";
import LoginMain from "~/Components/Page/LoginMain";
import { useContext, Fragment } from "react";
import { DisplayContext } from "~/Components/Layout/DisplayHeader";
import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// import PhoneNumber from "~/Components/Page/LoginMain/PhoneNumber";
import PhoneNumber from "../LoginMain/PhoneNumber";
import LoginWithFacebook from "./FacebookLogin/Facebook";

const cx = ClassNames.bind(styles);

function Login() {
    const displayHeader = useContext(DisplayContext);
    const closeBtn = useRef();
    const displayForm = useRef();
    useEffect(() => {
        if (displayHeader.display) {
            displayForm.current.classList.add(cx("showing"));
            displayForm.current.classList.remove(cx("hide"));

            closeBtn.current.onclick = () => {
                displayForm.current.classList.add(cx("hide"));
                displayForm.current.classList.remove(cx("showing"));
            };
        }
    }, [displayHeader.display]);
    const renderSwitch = () => {
        switch (displayHeader.type) {
            case "main":
                return <LoginMain />;
            case "facebook":
                return <LoginWithFacebook />;
            case "phone":
                return <PhoneNumber />;
        }
    };
    return (
        displayHeader.display && (
            <div ref={displayForm} className={cx("wrapper")}>
                <div className={cx("container")}>
                    <div className={cx("heading")}>
                        <h2>Login to TikTok</h2>
                        <button
                            onClick={displayHeader.toggleClose}
                            ref={closeBtn}
                            className={cx("close")}
                        >
                            <FontAwesomeIcon
                                className={cx("icon-close")}
                                icon={faXmark}
                            />
                        </button>
                    </div>
                    <div className={cx("content")}>{renderSwitch()}</div>
                    <div className={cx("footer")}>
                        You don't have an account ?<a href="#">Register</a>
                    </div>
                </div>
            </div>
        )
    );
}
export default Login;
