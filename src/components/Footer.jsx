import React from "react";

export default function Footer() {
    return (
        <div className="bg-darkcho w-screen h-36 grid content-center font-libre">
            <div className="m-4 flex flex-col gap-8">
                <div className="h-20 basis-3/4 flex text-center justify-between">
                        <div className="p-2 basis-1/2">
                            <p className="text-ivory font-bold mb-2">FIND US ON</p>
                            <a href="" className="text-xl"><i className='bx bxl-facebook-circle' style={{color:"#ffffff"}}></i></a>
                            <a href="" className="text-xl"><i className='bx bxl-instagram' style={{color:"#ffffff"}}></i></a>
                            <a href="" className="text-xl"><i className='bx bxl-twitter' style={{color:"#ffffff"}}></i></a>
                            <a href="" className="text-xl"><i className='bx bxl-reddit' style={{color:"#ffffff"}}></i></a>
                        </div>
                        <div className="p-2 basis-1/2">
                            <div>
                                <p className="text-ivory font-bold mb-2">Stay updated on our latest creations</p>
                            </div>
                            <div className="flex content-center justify-center">
                            <input type="text" placeholder="ex. john.doe@gmail.com" className="text-sm w-52"></input>
                            <button className=" bg-sage w-10 h-10 rounded text-4xl"><i className='bx bxs-envelope' style={{color:"#ffffff"}}></i></button>
                            </div>
                        </div>
                </div>
                <div className="text-right basis-1/4">
                    <p className="text-ivory text-sm text-center">Copyright <i className='bx bx-copyright' style={{ color:"#ffffff"}}></i>2023. All rights reserved</p>
                </div>
           </div>
        </div>
    )
}