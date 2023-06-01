import styles from "./Community.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Community() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("cover")}></div>
            <div className={cx("content", "p-5")}>
                <h2 className={cx("mb-4")}>Join Today</h2>
                <div className={cx("row no-gutters no-wrap justify-content-between")}>
                    <div className={cx("col-lg-7 d-flex flex-column justify-content-between")}>
                        <p>
                            Get access to maintain your own custom personal
                            lists, track what you've seen and search and
                            filter for what to watch next—regardless if it's
                            in theatres, on TV or available on popular
                            streaming services like .
                        </p>
                        <button className={cx("btn")}>Sign In</button>
                    </div>
                    <ul className={cx("col-lg-4")}>
                        <li>Enjoy TMDB ad free</li>
                        <li>Maintain a personal watchlist</li>
                        <li>Maintain a personal watchlist</li>
                        <li>Maintain a personal watchlist</li>
                        <li>Maintain a personal watchlist</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Community;
