import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"


export default function MyBlogContentUser () {
    const [ myBlog, setMyBlog ] = useState([])

    const token = useSelector((state) => state.auth.token)

    useEffect(() => {
        axios.get("https://minpro-blog.purwadhikabootcamp.com/api/blog/pagUser", { headers: {Authorization: `Bearer ${token}`}})
        .then((res) => {
            setMyBlog(res.data.result);
        })
    }, [token])

    
    if(myBlog.length == 0){
        return <p>LOADING</p>
    }

    const handleDelete = (id) => {
        axios.patch(`https://minpro-blog.purwadhikabootcamp.com/api/blog/remove/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          alert(`${res.data}`);
          axios.get("https://minpro-blog.purwadhikabootcamp.com/api/blog/pagUser", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            setMyBlog(res.data.result);
          });
        });
      }
      

    return (
        <div className=" w-[48.5rem] h-full m-auto mt-5">
            <div className="blog">
            <div className="w-11/12 font-monts text-xl mx-2 my-4 underline decoration-2 ml-[0.90rem]">
                    <p>My Blog!</p>
            </div>
            <div className="mb-4 grid justify-center">
            <div>
                {myBlog.map((result) => (
                <div className="w-[48rem] grid grid-flow-row content-center">
                    <div className="bg-ivory w-[45rem] h-fit m-2 rounded-lg shadow-lg flex gap-2 hover:bg-white ml-[0.90rem]">
                        <div className="grid-flow-col content-center">
                            <div className="w-[12rem] h-fit">
                                <img className="w-[200px] h-[180px] object-cover rounded-tl-lg rounded-bl-lg"
                                    src={`https://minpro-blog.purwadhikabootcamp.com/${result.imageURL}`}
                                    alt="image not found" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-[45rem]">
                            <div className="grid grid-flow-row">
                                <div className="flex gap-2 justify-between basis-1/4">
                                    <div className="top-[825px] w-28">
                                        <p className="font-fira text-left text-lg underline decoration-2 text-darkcho">{result.Category.name}</p>
                                    </div>
                                    <div className="p-[4px] mr-1 flex">
                                        <span className="font-libre text-sm mr-2">{new Date(result.createdAt).toLocaleDateString()}</span>
                                        <div className="w-5 h-5 rounded-full overflow-hidden"> 
                                        <img className="w-full h-full"
                                        src={`https://minpro-blog.purwadhikabootcamp.com/${result.User.imgProfile}`}
                                        alt="x" />
                                        </div>
                                    </div>
                                </div>
                                <div className="basis-2/4 h-32 grid content-end">
                                    <Link to={`/postIdUser/${result.id}`}>
                                        <div className="text-left text-3xl font-libre font-extrabold text-darkcho hover:underline">{result.title}</div>
                                    </Link>
                                </div>
                                <div>

                                </div>
                                <div className="basis-1/4 flex gap-1 justify-end">
                                    <button onClick={() => handleDelete(result.id)}>
                                        <p className="pt-1 text-darkcho font-bold text-2xl"><i className='bx bxs-trash' ></i></p>
                                    </button>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
                )}
            </div>
            </div>
            </div>
        </div>
    )
}