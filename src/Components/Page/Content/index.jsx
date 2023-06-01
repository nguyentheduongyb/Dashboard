import classNames from "classnames/bind";
import styles from "./Content.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
const cx = classNames.bind(styles);

function Content({ title, category, children }) {
    const [movies, setMovies] = useState([]);

    const [genre, setGenre] = useState("tv");
    const API = `https://api.themoviedb.org/3/${genre}/popular?api_key=0e7933ccb96aa8a6aa3112ae73201b82&language=en-US&page=1`;
    useEffect(() => {
        axios.get(API).then((response) => {
            setTimeout(() => {
                setMovies(response.data.results);
            }, 700);
        });
    }, [genre]);
    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("header", "row no-gutters")}>
                    <h3 className={cx("popular-title")}>{title}</h3>
                    <div className={cx("selector")}>
                        <h3
                            className={cx("button", genre == "tv" && "active")}
                            onClick={() => {
                                setGenre("tv");
                            }}
                        >
                            On TV
                        </h3>

                        <h3
                            className={cx(
                                "button",
                                genre == "movie" && "active",
                            )}
                            onClick={() => {
                                setGenre("movie");
                            }}
                        >
                            In Theaters
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
