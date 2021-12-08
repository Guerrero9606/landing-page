import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useEffect, useRef} from "react";
import Body from "../components/Body";
import Header from "../components/Header";

function Home () {
    return (
        <>
            <Header />
            <Body />
        </>
    );
}

export default Home;