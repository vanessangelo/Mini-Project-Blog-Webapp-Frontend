import React, { useEffect, useState } from "react";
import Blog from "../../api/blog";

export default function CardBlogLanding () {
    const [ allBlog, setAllBlog ] = useState([])

    useEffect (() => {
        Blog()
        .then((response) => {
            console.log(response);
            setAllBlog(response.data.result);
        })
        .catch((err) => console.log(err)); 
    }, [])
    return (
        <>
        {allBlog.map((result) => (
            <div className="w-full grid grid-flow-row content-center">
                <div className="bg-ivory w-[53rem] h-[180px] m-2 rounded-lg shadow-lg flex gap-2 hover:bg-white ml-[0.90rem]">
                    <div className="grid-flow-col content-center">
                        <div className="w-[12rem] h-[180px]">
                            <img className="w-[200px] h-[180px] object-cover rounded-tl-lg rounded-bl-lg"
                                src={result.imageURL}
                                alt="image not found" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-[45rem]">
                        <div className="grid grid-flow-row">
                            <div className="flex gap-2 justify-between basis-1/4">
                                <div className="top-[825px] w-28">
                                    <p className="font-fira text-left text-lg underline decoration-2 text-darkcho">{result.Category.name}</p>
                                </div>
                                <div className="p-[4px] mr-1">
                                    <div className="w-5 h-5 rounded-full overflow-hidden"> 
                                    <img className="w-full h-full"
                                    src={result.User.imgProfile}
                                    alt="x" />
                                    </div>
                                </div>
                            </div>
                            <div className="basis-2/4 h-32 grid content-end">
                                <div className="text-left text-3xl font-libre font-extrabold text-darkcho">{result.title}</div>
                            </div>
                            <div className="basis-1/4 flex gap-1 justify-end">
                                <div>
                                    <p className="text-xs pt-1 text-darkcho font-bold"></p>
                                </div>
                                <div>
                                    <i className='bx bxs-heart mr-[10px]' style={{color:"#1D0D0C"}} ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
            )}
        </>
    )
}