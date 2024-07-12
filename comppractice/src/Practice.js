import react from "react";

const Notification = () => {
    return(
        <>
            <h1>This is Notification</h1>
        </>
    );
}

function Login() {
    return (
        <>
            <h1>This is Login</h1>
        </>
    )
}

function Logout() {
    return (
        <>
            <h1>This is Login</h1>
            <Login /> 
        </>
    )
}

export default Notification;
export {Login,Logout};