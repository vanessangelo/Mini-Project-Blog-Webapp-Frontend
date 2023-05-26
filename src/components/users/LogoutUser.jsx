import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { remove } from "../../store/reducer/authSlice";

export default function LogoutUser() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.removeItem('token');
        dispatch(remove(localStorage.removeItem('token')))
        navigate('/');
    }

    return (
        <>
            <button type="button" onClick={handleLogOut} className="text-sm bg-gray-200 py-1 px-2 rounded mb-4 mt-5 hover:bg-sage hover:font-bold">Log Out</button>
        </>
    )
}