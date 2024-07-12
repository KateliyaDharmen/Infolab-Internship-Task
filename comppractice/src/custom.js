import React from "react";
import First, { Second } from "./extra";
import App from "./App";
import Notification from "./Practice";

function Mycom () {
    return(
        <>
            <h1>Mycom</h1>
        </>
    )
}


function Compone() {
    return(
        <>
            <h1>Compone</h1>
            <Second />
        </>
    )
}

function Comptwo() {
    return(
        <>
            <h1>Comtwo</h1>
        </>
    )
}

function Add() {
    return(
        <>
            <h1>Add</h1>
            <Comptwo />
            <First />
            <Notification />
            <App />
        </>
    )
}

export default Mycom;
export {Compone, Add};