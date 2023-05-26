import React from "react";
import CardLike from "./CardLike";

export default function TopTen() {

    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 400;
    }

    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 400;
    }
    
    return (
        <div>
            <div className="text-center py-4 text-xl font-bold">Trending Now!</div>
            <div className=" text-right right-0 top-5 mr-4">
                <button onClick={scrollLeft} className="text-xl"><i className='bx bx-chevron-left' style={{color:"#1d0d0c"}}></i></button>
                <button onClick={scrollRight} className="text-xl"><i className='bx bx-chevron-right' style={{color:"#1d0d0c"}}></i></button>
            </div>
            <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide">
                <div>
                <CardLike />
                </div>
            </div>
        </div>
    )
}