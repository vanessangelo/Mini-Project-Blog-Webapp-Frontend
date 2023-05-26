import NavBarUser from "../components/users/NavBarUser";
import AsideContentUser from "../components/users/AsideContentUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeContentUser from "../components/users/HomeContentUser";

export default function HomeUser() {

    const navigate = useNavigate()

    useEffect (() => {
        const token = localStorage.getItem("token")
        if (!token) {
            navigate('/')
        }
    })

    return (
        <>
        <div className="w-screen flex content-around gap-2">
            <div className="flex-2 sticky top-0 h-60 w-[18rem]">
                <NavBarUser />
            </div>
            <div className="flex-5 w-[50rem]">
                <HomeContentUser/>
            </div>
            <div className="flex-2 justify-center">
                <AsideContentUser/>
            </div>
        </div>
        </>
    )
}