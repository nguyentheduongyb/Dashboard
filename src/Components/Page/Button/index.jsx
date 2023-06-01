import ClassNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = ClassNames.bind(styles);

function Button({
    className,
    to,
    href,
    primary,
    text,
    disable,
    outline,
    rounded,
    small,
    large,
    children,
    onClick,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Comp = "button";

    const props = { onClick, ...passProps };
    if (to) {
        props.to = to;
        Comp = "Link";
    } else if (href) {
        props.href = href;
        Comp = "a";
    }
    //Remove event listener when disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith("on") && typeof props[key] === "function") {
                delete props[key];
            }
        });
    }
    const classes = cx("wrapper", {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded,
        leftIcon,
        rightIcon,
    });
    return (
        <div>
            <Comp className={classes} {...props}>
                {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
                <span className={cx("title")}>{children}</span>
                {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
            </Comp>
        </div>
    );
}

export default Button;
