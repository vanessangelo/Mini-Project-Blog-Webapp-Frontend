import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
        <div className="bg-header bg-cover w-screen h-96 grid content-center">
            <div className="w-96 h-52 mx-32 grid grid-flow-row justify-center">
                <div className="grid">
                    <p className="font-monts font-bold text-8xl content-center text-ivory drop-shadow-5xl">COZY</p>
                </div>
                <div className="grid content-center">
                    <Link to='/login' className=" bg-ivory rounded drop-shadow-5xl text-center">Start Inspiring!</Link>
                </div>
            </div>
        </div>
        </>
    )
}