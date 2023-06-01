import classNames from "classnames/bind";
import styles from "./CastItem.module.scss";

const cx = classNames.bind(styles);

function CastItem({ item, ...props }) {
    return (
        <li className={cx("col-lg-2")}>
            <div>
                <a href="#">
                    <img
                        className={cx("poster")}
                        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.profile_path}`}
                    />
                    <p>{item.name || item.original_title}</p>
                </a>
                <p className={cx("time")}>
                    {item.first_air_date || item.release_date}
                </p>
            </div>
        </li>
    );
}

export default CastItem;
