import classNames from "classnames/bind";
import styles from "./Section.module.scss";

import Switch from "~/Components/Page/Switch";

const cx = classNames.bind(styles);

function Section({ title, children, ...props }) {
    return (
        <div className={cx("wrapper mt-5 mb-5")}>
            <section className={"d-flex p-3 align-items-center"}>
                {title && <h3 className={"me-5"}>{title}</h3>}
                <Switch {...props} />
            </section>
            {children}
        </div>
    );
}

export default Section;
