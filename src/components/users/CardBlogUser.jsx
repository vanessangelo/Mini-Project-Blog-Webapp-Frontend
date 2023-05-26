import React, { useState, useEffect } from "react";
import axios from "axios";
import AllCategories from "../../api/allcategories";
import Blog from "../../api/blog";  
import { Link } from "react-router-dom";

export default function CardBlogUser () {
    return (
        <>
        <div className="bg-ivory w-[46.5rem] h-[180px] m-2 rounded-lg shadow-lg flex gap-2 hover:bg-white ml-[0.90rem]">
            <div className="grid-flow-col content-center">
                <div className="w-[12rem] h-[180px]">
                    <img className="w-[200px] h-[180px] object-cover rounded-tl-lg rounded-bl-lg"
                        src={"../src/assets/IMG_2419.JPG"}
                        alt="img" />
                </div>
            </div>
            <div className="flex flex-col justify-center w-[45rem]">
                <div className="grid grid-flow-row">
                    <div className="flex gap-2 justify-between basis-1/4">
                        <div className="top-[825px] w-28">
                            <p className="font-fira text-left text-lg underline decoration-2 text-darkcho">Internasional</p>
                        </div>
                        <div className="p-[4px] mr-1">
                            <div className="w-5 h-5 rounded-full overflow-hidden"> 
                            <img className="w-full h-full"
                            src={"../src/assets/IMG_2419.JPG"}
                            alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="basis-2/4 h-32 grid content-end">
                        <div className="text-left text-3xl font-libre font-extrabold text-darkcho">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, esse!</div>
                    </div>
                    <div className="basis-1/4 flex gap-1 justify-end">
                        <div>
                            <p className="text-xs pt-1 text-darkcho font-bold">5</p>
                        </div>
                        <div>
                            <i className='bx bxs-heart mr-[10px]' style={{color:"#1D0D0C"}} ></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}