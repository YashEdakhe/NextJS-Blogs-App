"use server"

import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";
import {addBlog} from "../services/blogs";

export const createBlogs = async(formData: FormData) => {
    const title = formData.get("title")?.toString() ?? '';
    const author = formData.get("author")?.toString() ?? '';
    const url = formData.get("url")?.toString() ?? '';
    const likes = parseInt(formData.get("likes")?.toString() ?? '0', 10);
addBlog(title, author,url, likes);
revalidatePath("/blogs");
redirect("/blogs")
}