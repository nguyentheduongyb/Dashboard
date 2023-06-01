import classNames from "classnames/bind";
import styles from "./TrailerMovie.module.scss";

const cx = classNames.bind(styles);

function TrailerMovie() {
    return (
        <div className={cx("grid", "wrapper")}>
            <div className={cx("header", "row no-gutters")}>
                <h2>Media</h2>
                <h3 className={cx("m-l-48")}>Trailer</h3>
            </div>
            <iframe
                width="300"
                height="168"
                src="https://www.youtube.com/embed/UBgPypHGAqE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default TrailerMovie;
