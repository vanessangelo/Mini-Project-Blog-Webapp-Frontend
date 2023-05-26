import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import profile from "../../api/profile";
import EditPic from "./EditPic";
import EditUsername from "./EditUsername";
import EditEmail from "./EditEmail";
import EditPhone from "./EditPhone";
import EditPass from "./EditPass";

export default function SettingContentUser () {
    const [ data, setData ] = useState({})
    const token = useSelector((state) => state.auth.token)
    
    useEffect(() => {
        if(!token) {
            return;
        }
        profile(token)
        .then(resp => {
            setData(resp.data)
        })
            
    }, [token])

    // picture
    const handleSaveImg = () => {
        profile(token)
        .then(resp => {
            setData(resp.data)
        })
    }
    
    //username
    const handleSaveUsername = () => {
        profile(token)
        .then(resp => {
            setData(resp.data)
        })
    }

    //email
    const handleSaveEmail = () => {
        profile(token)
        .then(resp => {
            setData(resp.data)
        })
    }

    //phone
    const handleSavePhone = () => {
        profile(token)
        .then(resp => {
            setData(resp.data)
        })
    }
    
    //password
    const handleSavePassword = () => {
        profile(token)
        .then(resp => {
            setData(resp.data)
        })
    }


    return (
        <>
        <div className="w-[48.5rem] h-full m-auto mt-5">
            <div className="grid gap-2">
                <div className="w-11/12 font-monts text-xl mx-2 underline decoration-2 ml-[0.90rem]">
                    <p>Setting</p>
                </div>
                <div className="component">
                        <div className="img div wrapper">
                            <EditPic oldProfile={data.imgProfile} onSaveImg={handleSaveImg} />
                        </div>
                        <div className="username">
                            <EditUsername oldProfile={data.username} onSaveUsername={handleSaveUsername}/>
                        </div>
                        <div>
                            <EditEmail oldProfile={data.email} onSaveEmail={handleSaveEmail}/>
                        </div>
                        <div>
                            <EditPhone oldProfile={data.phone} onSavePhone={handleSavePhone}/>
                        </div>
                        <div>
                            <EditPass oldProfile={data.password} onSavePassword={handleSavePassword}/>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}