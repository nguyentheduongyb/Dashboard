import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import MovieCard from "~/Components/Page/Movies/Genre.jsx";
import styles from "./MovieList.module.scss";
import tmdb from "~/API/tmdb";
import { request } from "~/API/request";
const cx = classNames.bind(styles);

function MovieList({ page, fetch }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await tmdb.get(request[fetch], {
                params: {
                    page: page,
                },
            });
            setMovies(data.results);
        };
        fetchMovies();
    }, [fetch]);
    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("scroll")}>
                    <div className={cx("blur-head")}>
                        <div className={cx("blur-children-head")}>
                            <div className={cx("blur-last-head")}></div>
                        </div>
                    </div>
                    <ul className={cx("popular-list", "row")}>
                        {movies.map((item, index) => (
                            <MovieCard
                                request={request[fetch]}
                                key={index}
                                item={item}
                            ></MovieCard>
                        ))}
                    </ul>
                    <div className={cx("blur")}>
                        <div className={cx("blur-children")}>
                            <div className={cx("blur-last")}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieList;
