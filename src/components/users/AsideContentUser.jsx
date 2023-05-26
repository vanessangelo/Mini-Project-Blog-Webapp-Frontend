import {useState, useEffect} from "react";
import TopTenLikes from "../../api/topten";
import Category from "../guests/Category";
import foto from "../../assets/Untitled.jpg"
import { Link } from "react-router-dom";

export default function AsideContentUser () {
    const [topLike, setTopLike] = useState([]);

    useEffect(() => {
        TopTenLikes()
            .then((response) => {
                console.log(response);
                setTopLike(response.data.result);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
        <div className="">
            <div className="w-full grid grid-flow-row content-center">
                <div className="mb-4">
                    <div>
                        <Category />
                    </div>
                </div>
            </div>
            <div className="w-full grid grid-flow-row content-center">
                <div className="w-11/12 font-monts text-xl mx-2 my-4 underline decoration-2">
                    <p>Trending Now!</p>
                </div>
                <div className="mb-4">
                    <div>
                        {topLike.map((result) => (
                            <>
                            <Link to={`/postIdUser/${result.id}`}>
                            <div className="bg-olive w-72 h-[180px] m-2 rounded-lg shadow-lg flex gap-2 hover:bg-darkcho">   
                                <div className="grid-flow-col content-center">
                                    <div className="w-[100px] h-[180px]">
                                        <img className="w-[200px] h-[180px] object-cover rounded-tl-lg rounded-bl-lg"
                                            src={foto}
                                            alt="img" />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center w-[180px]">
                                    <div className="grid grid-flow-row">
                                        <div className="flex gap-2 justify-between basis-1/4">
                                            <div className="top-[825px] w-28">
                                                <p className="font-fira text-left text-lg underline decoration-2 text-ivory">{result.Category.name}</p>
                                            </div>
                                            <div className="p-[4px] mr-1">
                                                <div className="w-5 h-5 rounded-full overflow-hidden"> 
                                                <img className="w-full h-full"
                                                src={foto}
                                                alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="basis-2/4 h-32 grid content-end">
                                            <div className="text-left font-libre font-extrabold text-ivory">{result.title}</div>
                                        </div>
                                        <div className="basis-1/4 flex gap-1 justify-end">
                                            <div>
                                                <p className="text-xs pt-1 text-ivory font-bold">{result.total_fav}</p>
                                            </div>
                                            <div>
                                                <i className='bx bxs-heart mr-[10px]' style={{color:"#FFF"}} ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}