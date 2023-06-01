import ClassNames from "classnames/bind";
import styles from "./Discovery.module.scss";

const cx = ClassNames.bind(styles);
function Discovery({ children }) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("content")}>
                <h1>Welcome!</h1>
                <h2>Unlimited Movies, TV Show And More</h2>
                {children}
            </div>
        </div>
    );
}

export default Discovery;
