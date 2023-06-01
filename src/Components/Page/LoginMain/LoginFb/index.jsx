import { Validator } from "~/Components/Page/FormValidator";
import ClassNames from "classnames/bind";
import styles from "./LoginFb.module.scss";
import { useRef } from "react";

const cx = ClassNames.bind(styles);
function LoginFb() {
    Validator({
        form: "#form-1",
        errorMessage: ".form-message",
        rules: [
            Validator.isRequired("#fullname"),
            Validator.isRequired("#email"),
            Validator.isEmail("#email"),
            Validator.minLength("#password", 6),
            Validator.isRequired("#password_confirmation"),

            Validator.isConfirmed("#password_confirmation", function () {
                return document.querySelector("#password").value;
            }),
        ],
    });

    return (
        <form action="" method="POST" className={cx("form")} id="form-1">
            <h3 className={cx("heading")}>Thành viên đăng ký</h3>
            <p className={cx("desc")}>
                Cùng nhau học lập trình miễn phí tại F8 ❤️
            </p>
            <div className={cx("spacer")}></div>
            <div className={cx("form-group")}>
                <label className={cx("form-label")}>Tên đầy đủ</label>
                <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    placeholder="VD: Sơn Đặng"
                    className={cx("form-control")}
                />
                <span className={cx("form-message")}></span>
            </div>

            <div className={cx("form-group")}>
                <label className={cx("form-label")}>Email</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="VD: email@domain.com"
                    className={cx("form-control")}
                />
                <span className={cx("form-message")}></span>
            </div>

            <div className={cx("form-group")}>
                <label className={cx("form-label")}>Mật khẩu</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Nhập mật khẩu"
                    className={cx("form-control")}
                />
                <span className={cx("form-message")}></span>
            </div>

            <div className={cx("form-group")}>
                <label className={cx("form-label")}>Nhập lại mật khẩu</label>
                <input
                    id="password_confirmation"
                    name="password_confirmation"
                    placeholder="Nhập lại mật khẩu"
                    type="password"
                    className={cx("form-control")}
                />
                <span className={cx("form-message")}></span>
            </div>

            <button className={cx("form-submit")}>Đăng ký</button>
        </form>
    );
}

export default LoginFb;
