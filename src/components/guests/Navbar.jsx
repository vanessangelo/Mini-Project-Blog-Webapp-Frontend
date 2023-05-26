import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="bg-lightcho w-screen h-16 flex content-center font-libre text-right ">
           <div className="w-14 h-14 flex basis-2/3">
                <Link to="/" className="basis-1/2 w-14 h-14 p-4 m-1">
                    <div className="hover:font-bold">
                        HOME
                    </div>
                </Link>
                <Link to="/login" className="basis-1/2 w-14 h-14 p-4 m-1">
                    <div className="hover:font-bold">
                        WRITE
                    </div>
                </Link>
           </div>
           <div className="basis-1/3 text-right">
                <Link to="/login"><i className='bx bxs-user-circle text-4xl p-2 pr-4 m-1' style={{color: "#f9fbf2"}}></i></Link>
           </div>
        </div>
    )
}