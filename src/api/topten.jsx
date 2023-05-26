import axios from "axios";

export default function TopTenLikes() {
    return axios.get("https://minpro-blog.purwadhikabootcamp.com/api/blog/pagFav");
}