import axios from "axios";

export default function profile (token) {

    return axios.get("https://minpro-blog.purwadhikabootcamp.com/api/auth/", { headers: {Authorization: `Bearer ${token}`}});
}