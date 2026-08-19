import { getBlogs } from "../services/blogs"

export default function blogs(){
    const blogs = getBlogs();
    return(
        <div>
            <h1>Blogs</h1>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <h4>{blog.title}</h4>
                        <p>Author: {blog.author}</p>
                        <p>URL: <a href={blog.url}>{blog.url}</a></p>
                        <p>Likes: {blog.likes}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}