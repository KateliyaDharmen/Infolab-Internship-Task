import React from "react";
import { Login } from "./Practice";

function First() {
    return(
        <>
            <h1>First Component</h1>
        </>
    )
}

const Second = () => {
    return(
        <>
            <h1>Second Component</h1>
        </>
    )
}

const Third = () => {
    return(
        <>
            <h1>Second Component</h1>
            <Second />
            <Login />
        </>
    )
}

export default First;
export {Second, Third};