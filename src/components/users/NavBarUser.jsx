import { Link } from "react-router-dom";
import LogoutUser from "./LogoutUser";
import { useEffect, useState } from "react";
import profile from "../../api/profile";
import { useSelector } from "react-redux";

export default function NavBarUser() {
    const [username, setUsername] = useState("")

    const token = useSelector((state) => state.auth.token)

    useEffect(() => {
        profile(token)
            .then((res) => setUsername(res.data.username))
    })

    return (
        <div className="w-full">
            <div className="mr-2 pr-5">
                <div className="bg-ivory rounded-b-xl grid grid-flow-row justify-center shadow-xl gap-6">
                    <div className="w-35 grid grid-flow-row gap-1">
                        <div className="font-monts text-center my-5">
                            <p className="text-sm text-left">
                                WELCOME,
                            </p>
                            <p className="text-lg bg-sage mt-2 px-2 rounded-sm">
                                {username}!
                            </p>
                        </div>
                        <div className="grid grid-flow-row gap-1 justify-center">
                            <div className="w-28 text-center border-b-2 border-gray-400">
                                <Link to="/homeuser" className="font-fira text-gray-700  hover:text-black">Home</Link>
                            </div>
                            <div className="w-28 text-center border-b-2 border-gray-400">
                                <Link to="/settinguser" className="font-fira text-gray-700  hover:text-black">Setting</Link>
                            </div>
                            <div className="w-28 text-center border-b-2 border-gray-400">
                                <Link to="/writeuser" className="font-fira text-gray-700  hover:text-black">Write</Link>
                            </div>
                            <div className="w-28 text-center border-b-2 border-gray-400">
                                <Link to="/mybloguser" className="font-fira text-gray-700  hover:text-black">My Blog</Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-flow-row justify-center">
                        <div className="logout">
                            <LogoutUser />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}