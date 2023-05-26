import React, { useState, useEffect } from "react";
import axios from "axios";
import AllCategories from "../../api/allcategories";
import Blog from "../../api/blog";
import { Link } from "react-router-dom";
import { Pagination } from "flowbite-react";

export default function BlogLanding() {

    const [filter, setFilter] = useState({
        search: "",
        id_cat: "",
        sort: ""
    });

    const handleInput = (e) => {
        const copyFilter = { ...filter };
        copyFilter.search = e.target.value;
        setFilter(copyFilter);
    }

    const handleCategory = (id) => {
        const copyFilter = { ...filter };
        copyFilter.id_cat = id + "";
        setFilter(copyFilter);
    }

    const handleSort = (param) => {
        const copyFilter = { ...filter };
        copyFilter.sort = param;
        setFilter(copyFilter);
    }

    const buttonFilterBlog = (e) => {
        e.preventDefault()
        const temptData = {}
        if (filter.search) {
            temptData.search = filter.search
        }
        if (filter.id_cat) {
            temptData.id_cat = filter.id_cat
        }
        if (filter.sort) {
            temptData.sort = filter.sort
        }

        const params = new URLSearchParams(temptData);
        const paramsStr = params.toString();
        const baseURL = "https://minpro-blog.purwadhikabootcamp.com/api/blog"

        axios.get(`${baseURL}?${paramsStr}`)
            .then((response) => {
                setAllBlog(response.data.result);
            })
            .catch((err) => console.log(err));
    }

    // for searchfilter 
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const [allCategory, setAllCategory] = useState([])

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
    };

    const closeDropdowns = () => {
        setIsDropdownOpen(false);
        setIsDropdownOpen2(false);
    };

    useEffect(() => {
        AllCategories()
            .then((resp) => {
                setAllCategory(resp.data);
            })
            .catch((err) => console.log(err))
    }, [])

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchData = async (page) => {
        try {
            const response = await axios.get(
                `https://minpro-blog.purwadhikabootcamp.com/api/blog?page=${page}`
            );
            const { rows, result: blogData } = response.data;
            setCurrentPage(page);
            setTotalPages(Math.ceil(rows / 8));
            setAllBlog(blogData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const onPageChange = (page) => {
        if (page != currentPage) {
            fetchData(page)
        }
    };

    // for cardbloglanding
    const [allBlog, setAllBlog] = useState([])

    useEffect(() => {
        Blog()
            .then((response) => {
                setAllBlog(response.data.result);
                setTotalPages(Math.ceil(response.data.rows / 8));
            })
            .catch((err) => console.log(err));
    }, [])


    return (
        <div className="w-[55rem]">
            <div className="w-full grid grid-flow-row content-center">
                <div> {/* ini searchfilter */}
                    <form>
                        <div className="flex">
                            <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"></label>
                            <div className="relative">
                                <button id="dropdown-button" onClick={toggleDropdown} className=" font-fira text-s w-44 flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100" type="button">
                                    Search by Categories
                                    <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </button>
                                <div id="dropdown" className={`z-10 absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${isDropdownOpen ? 'block' : 'hidden'}`}>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                        {allCategory.map((result) => {
                                            return (
                                                <li>
                                                    <button type="button" onClick={() => { handleCategory(result.id); closeDropdowns() }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{result.name}</button>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="relative">
                                <button id="dropdown-button2" onClick={toggleDropdown2} className=" font-fira text-s w-44 flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100" type="button">
                                    Sort by
                                    <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </button>
                                <div id="dropdown" className={`z-10 absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 ${isDropdownOpen2 ? 'block' : 'hidden'}`}>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                        <li>
                                            <button type="button" onClick={() => { handleSort("ASC"); closeDropdowns() }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ascending</button>
                                        </li>
                                        <li>
                                            <button type="button" onClick={() => { handleSort("DESC"); closeDropdowns() }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Descending</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="relative w-full">
                                <input type="search" id="search-dropdown" onChange={handleInput} className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-darkcho focus:border-darkcho" placeholder="Search by Title or Keyword..." />
                                <button type="submit" onClick={buttonFilterBlog} className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-darkcho rounded-r-lg border border-darkcho hover:bg-olive focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                    <span className="sr-only">Search</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="w-11/12 font-monts text-xl mx-2 my-4 underline decoration-2 ml-[0.90rem]">
                    <p>BLOG</p>
                </div>
                <div className="mb-4">
                    <div> {/* ini cardbloglanding */}
                        {allBlog.map((result) => (
                            <div className="w-full grid grid-flow-row content-center">
                                <div className="bg-ivory w-[53rem] h-[180px] m-2 rounded-lg shadow-lg flex gap-2 hover:bg-white ml-[0.90rem]">
                                    <div className="grid-flow-col content-center">
                                        <div className="w-[12rem] h-[180px]">
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
                                                <div className="p-[4px] mr-1">
                                                    <div className="w-5 h-5 rounded-full overflow-hidden">
                                                        <img className="w-full h-full"
                                                            src={`https://minpro-blog.purwadhikabootcamp.com/${result.User.imgProfile}`}
                                                            alt="x" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="basis-2/4 h-32 grid content-end">
                                                <Link to={`/post/${result.id}`}>
                                                    <div className="text-left text-3xl font-libre font-extrabold text-darkcho hover:underline">{result.title}</div>
                                                </Link>
                                            </div>
                                            <div className="basis-1/4 flex gap-1 justify-end">
                                                <div>
                                                    <p className="text-xs pt-1 text-darkcho font-bold"></p>
                                                </div>
                                                <div>
                                                    <Link to="/login">
                                                        <i className='bx bxs-heart mr-[10px]' style={{ color: "#1D0D0C" }} ></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                    <div className="m-4">
                        <Pagination
                            currentPage={currentPage}
                            onPageChange={onPageChange}
                            showIcons={true}
                            totalPages={totalPages}
                            className=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}