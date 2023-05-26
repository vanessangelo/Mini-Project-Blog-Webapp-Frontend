import { Link } from "react-router-dom";
import LogoutUser from "./LogoutUser";

export default function NavBarUser () {
    return (
        <div className="w-full">
            <div className="mr-2 pr-5">
                <div className="bg-ivory rounded-b-xl grid grid-flow-row justify-center shadow-xl gap-6">
                    <div className="top w-28 grid grid-flow-row gap-1">
                        <div className="font-monts text-lg text-center my-5">
                            WELCOME!
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