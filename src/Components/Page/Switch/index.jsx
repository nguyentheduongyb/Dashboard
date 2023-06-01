import classNames from "classnames/bind";
import { useState, useRef, useLayoutEffect } from "react";
import styles from "./Switch.module.scss";

const cx = classNames.bind(styles);

function Switch({ items, onToggle, isToggled }) {
    const [itemWidth1, setItemWidth1] = useState();
    const [itemWidth2, setItemWidth2] = useState();

    const itemRef1 = useRef();
    const itemRef2 = useRef();
    useLayoutEffect(() => {
        setItemWidth1(itemRef1.current.offsetWidth);
        setItemWidth2(itemRef2.current.offsetWidth);
    }, []);
    const handleToggle = (selected) => {
        onToggle(selected);
    };
    return (
        <div className={cx("wrapper")}>
            <div
                ref={itemRef1}
                onClick={handleToggle.bind(null, items[0] || items[2])}
                className={cx("button", isToggled)}
            >
                {items[0]}
            </div>
            <div
                ref={itemRef2}
                onClick={() => {
                    handleToggle(items[1] || items[3]);
                }}
                className={cx("button", isToggled)}
            >
                {items[1]}
            </div>
            <div
                className={cx("active")}
                style={
                    isToggled
                        ? {
                            left: `${itemWidth1}px`,
                            width: `${itemWidth2}px`,
                        }
                        : {
                            left: "0",
                            width: `${itemWidth1}px`,
                        }
                }
            ></div>
        </div>
    );
}

export default Switch;
