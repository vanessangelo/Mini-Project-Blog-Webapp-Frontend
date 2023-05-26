import React, { useEffect } from "react";
import { useState } from "react";
import AllCategories from "../api/allcategories";

export default function SearchFilter() {
    const [ isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [ isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const [ allCategory, setAllCategory] = useState([])

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
    };

    useEffect(() => {
        AllCategories()
        .then((resp) => {
            setAllCategory(resp.data);
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <form>
                <div className="flex">
                    <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
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
                                        <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{result.name}</button>
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
                        <div id="dropdown" className={`z-10 absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${isDropdownOpen2 ? 'block' : 'hidden'}`}>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                <li>
                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ascending</button>
                                </li>
                                <li>
                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Descending</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative w-full">
                        <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-darkcho focus:border-darkcho" placeholder="Search by Title or Keyword..." />
                        <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-darkcho rounded-r-lg border border-darkcho hover:bg-olive focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}