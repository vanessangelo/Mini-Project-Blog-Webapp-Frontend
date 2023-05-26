import axios from "axios";

export default function ChangePass (token, {currentPassword, password, confirmPassword}) {
    return axios.patch("https://minpro-blog.purwadhikabootcamp.com/api/auth/changePass", {currentPassword, password, confirmPassword}, { headers: {Authorization: `Bearer ${token}`}});
}