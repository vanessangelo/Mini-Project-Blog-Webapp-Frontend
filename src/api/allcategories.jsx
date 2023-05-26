import axios from "axios";

export default function AllCategories() {
    return axios.get("https://minpro-blog.purwadhikabootcamp.com/api/blog/allCategory");
}