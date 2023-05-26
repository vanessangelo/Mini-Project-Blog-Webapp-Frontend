import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { OneBlog } from "../api/blog";
import NavBar from "../components/guests/Navbar";

export default function SinglePost () {
    const [post, setPost] = useState([]);

    useEffect (() => {
        OneBlog(postId)
        .then((res) => {
            setPost(res.data[0])
        })
    }, [])

    if(post == []){
        return <p>LOADING</p>
    }
    
    const {postId} = useParams()

    return (
        <>
        <div className="sticky top-0 z-50">
            <NavBar />
        </div>
            <div className="w-full h-[45rem]"> 
                <div className="p-2 px-20 h-[40rem] flex flex-col">
                    <div className="img desc flex h-[20rem] ">
                        <div className="img basis-1/3">
                            <div className="w-[32rem] h-[19rem] m-2 shadow-lg shadow-darkcho rounded-lg">
                                <img className="w-full h-full object-cover rounded-lg"
                                    src={"../src/assets/IMG_2419.JPG"}
                                    alt="img" />
                            </div>
                        </div>
                        <div className="desc basis-2/3 m-2 w-[35rem] flex flex-col gap-2 content-between">
                            <div className="flex flex-col content-between h-[19rem]">
                                <div className="cat date flex justify-between">
                                    <div className="cat px-2 underline font-fira bg-olive text-ivory rounded-sm">
                                        {post.Category?.name}
                                    </div>
                                    <div className="date font-libre text-sm px-2 text-gray-600">
                                        {new Date(post.createdAt).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="title h-fit text-left p-2 align-baseline font-monts font-bold text-2xl">
                                    {post.title}
                                </div>
                                <div className="keyword">
                                    {post.Blog_Keywords && post.Blog_Keywords.map((keyword) => (
                                        <span className="bg-ivory rounded-md keyword px-2 text-sage font-semibold w-fit mx-1">
                                            {keyword?.Keyword?.name}
                                        </span>
                                    ))}
                                </div>
                                <div className="profpic, username, likes flex justify-between py-2">
                                    <div className="flex gap-1 justify-end px-1 pt-[1.5px]">
                                        <div className="w-5 h-5 rounded-full overflow-hidden"> 
                                        <img className="w-full h-full"
                                        src={`https://minpro-blog.purwadhikabootcamp.com/${post?.User?.imgProfile}`}
                                        alt="x" />
                                        </div>
                                        <div className="font-fira text-sm text-gray-500 mx-1">
                                            {post?.User?.username}
                                        </div>
                                    </div>
                                    <div className="flex gap-1 justify-end">
                                        <Link to="/login">
                                            <div>
                                                <p className="text-xs pt-1 text-darkcho font-bold"></p>
                                            </div>
                                            <div>
                                                <i className='bx bxs-heart mr-[10px] text-lightcho' ></i>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content h-[30rem]">
                        <div className="my-4 mx-40 font-libre font-semibold indent-12 text-justify">
                        {post.content}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}