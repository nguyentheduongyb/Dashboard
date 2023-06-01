import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import CastItem from "./CastItem";
import styles from "./CastList.module.scss";
import tmdb from "~/API/tmdb";

import TrailerMovie from "../Movies/TrailerMovie";
import Recommendations from "../Movies/Recommendations";

const cx = classNames.bind(styles);

function ListCast({ id, path, fetch }) {
    const [casts, setCastList] = useState([]);

    useEffect(() => {
        const fetchcasts = async () => {
            const { data } = await tmdb.get(`${path}/${id}/credits`);
            setCastList(data.cast);
        };
        fetchcasts();
    }, [id]);
    return (
        <div className={cx("wrapper", "col-lg-9")}>
            <div className={cx("inner")}>
                <h2 className={cx("m-b-24")}>Series Cast</h2>
                <div className={cx("scroll")}>
                    <ul className={cx("popular-list")}>
                        {casts.map((item, index) => {
                            if (item.profile_path)
                                return (
                                    <CastItem
                                        key={index}
                                        item={item}
                                    ></CastItem>
                                );
                        })}
                    </ul>
                    <div className={cx("blur")}>
                        <div className={cx("blur-children")}>
                            <div className={cx("blur-last")}></div>
                        </div>
                    </div>
                </div>
                <TrailerMovie></TrailerMovie>
                <Recommendations id={id} path={path}></Recommendations>
            </div>
        </div>
    );
}

export default ListCast;
