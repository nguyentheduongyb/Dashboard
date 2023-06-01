import FacebookLogin from "react-facebook-login";
import { useContext } from "react";
import { DisplayContext } from "~/Components/Layout/DisplayHeader";

const LoginWithFacebook = () => {
    const DisplayHeader = useContext(DisplayContext);
    const componentClicked = (response) => {
        console.log(response);
    };

    return (
        <FacebookLogin
            appId="1338235893664710"
            autoLoad={false}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={DisplayHeader.handleLoginFacebook}
            size="small"
        />
    );
};
export default LoginWithFacebook;
