import axios from "axios";

export default function Blog () {
    return axios.get("https://minpro-blog.purwadhikabootcamp.com/api/blog");
}

export function OneBlog (id) {
    return axios.get(`https://minpro-blog.purwadhikabootcamp.com/api/blog/${id}`);
}

export function CreateBlog (formData, token) {
    return axios.post(`https://minpro-blog.purwadhikabootcamp.com/api/blog`, formData , { headers: {Authorization: `Bearer ${token}`}})
}
