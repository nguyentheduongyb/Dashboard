import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./MovieItems.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function MovieItems(item) {
    const movie = item.item;
    return (
        <Link to={`/tv/detail/${movie.id}`} className={cx("wrapper")}>
            <img
                className={cx("image")}
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                alt="Anh"
            />
            <div className={cx("info")}>
                <p className={cx("title")}>
                    <span>{movie.name}</span>
                    <FontAwesomeIcon
                        className={cx("check")}
                        icon={faCheckCircle}
                    />
                </p>
                <span className={cx("genre")}>Phimhanhdong</span>
            </div>
        </Link>
    );
}

export default MovieItems;
