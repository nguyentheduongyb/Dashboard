import { useState, createContext } from "react";
import LoginMain from "~/Components/Page/LoginMain";

const DisplayContext = createContext();

function DisplayProvider({ children }) {
    const [display, setDisplay] = useState(false);
    const [type, setType] = useState("main");
    const [isLogin, setIsLogin] = useState(false);
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [imgAvatar, setImgAvatar] = useState("");
    const [formLogin, setFormLogin] = useState(<LoginMain />);
    const [data, setData] = useState({
        number: number,
        password: password,
    });

    const toggleDisplay = () => {
        setDisplay(!display);
        setType("main");
    };
    const toggleClose = () => {
        setDisplay(!display);
        setType("main");
    };
    const typeLogin = (e) => {
        setType(e.type);
        setFormLogin(e.form);
        console.log(e.form);
    };
    const handleLoginFacebook = (data) => {
        setIsLogin(true);
        setImgAvatar(data.picture.data.url);
        setDisplay(!display);
    };
    const handleLogout = () => {
        alert("Do you want to sign out?");
        setImgAvatar("");
        setType("main");
    };
    const item = {
        display,
        toggleDisplay,
        toggleClose,
        type,
        isLogin,
        handleLoginFacebook,
        setIsLogin,
        typeLogin,
        imgAvatar,
        handleLogout,
    };
    return (
        <DisplayContext.Provider value={item}>
            {children}
        </DisplayContext.Provider>
    );
}
export { DisplayProvider, DisplayContext };
