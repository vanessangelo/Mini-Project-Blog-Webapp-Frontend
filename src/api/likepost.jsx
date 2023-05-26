import axios from "axios";

export default function LikePost (token, { BlogId }) {
    return axios.post("https://minpro-blog.purwadhikabootcamp.com/api/blog/like", { BlogId }, { headers: {Authorization: `Bearer ${token}`}});
}

export function LikePostUser (token) {
    return axios.get("https://minpro-blog.purwadhikabootcamp.com/api/blog/byUser", { headers: {Authorization: `Bearer ${token}`}});

}