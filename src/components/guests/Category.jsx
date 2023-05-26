import React, { useState, useEffect } from "react";
import AllCategories from "../../api/allcategories";

export default function Category() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        AllCategories()
            .then((response) => {
                setCategory(response.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="w-[19rem]">
            <div className="w-full grid grid-flow-row content-center">
                <div className="w-11/12 font-monts text-xl mx-2 my-4 underline decoration-2">
                    <p>CATEGORY</p>
                </div>
                <div className="ml-2"> Explore more from our searchbar! </div>
                <div className="mb-4">
                    {category.map((res) => (
                        <div key={`${res.id}`} className="bg-olive w-72 h-[80px] m-2 rounded-lg shadow-lg flex gap-2">
                            <div className="grid-flow-col content-center">
                                <div className="w-[100px] h-[80px]">
                                    <img className="w-[200px] h-[80px] object-cover rounded-tl-lg rounded-bl-lg"
                                        src={"../src/assets/IMG_2419.JPG"}
                                        alt="img" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center w-[100px] h-[70px]">
                                <div className="basis-2/4 h-32 grid content-end">
                                    <div className="text-left font-libre font-extrabold text-ivory ml-3">{res.name}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}