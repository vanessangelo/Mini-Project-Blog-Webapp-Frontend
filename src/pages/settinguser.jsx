import NavBarUser from "../components/users/NavBarUser";
import AsideContentUser from "../components/users/AsideContentUser";
import SettingContentUser from "../components/users/SettingContentUser";

export default function SettingUser () {
    return (
        <>
        <div className="w-screen flex content-center gap-2">
            <div className="flex-2 sticky top-0 h-60 w-[18rem]">
                <NavBarUser />
            </div>
            <div className="flex-5 w-[50rem]">
                <SettingContentUser />
            </div>
            <div className="flex-2 justify-center">
                <AsideContentUser/>
            </div>
        </div>
        </>
    )
}