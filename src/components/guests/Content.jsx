import React from "react";
import Category from "./Category";
import BlogLanding from "./BlogLanding";


export default function Content() {
    return (
        <div className="bg-ivory w-screen h-full grid content-center justify-center font-libre">
            <div className="m-4 p-4 w-full grid grid-flow-col gap-2 content-center ">
                <div className="col-span-12">
                    <BlogLanding />
                </div>
                <div className="col-span-1">
                    <div className="w-[19rem] h-10">  
                    </div>
                    <Category />
                </div>
            </div>
        </div>
    )
}