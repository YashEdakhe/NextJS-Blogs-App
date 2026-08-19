const blogsList = [
    {
        id: 1,
        title: "First Blog",
        author: "William Brown",
        url: "https://willcb.com/blog/",
        likes: 20,
    },
    {
        id: 2,
        title: "Second Blog",
        author: "Jane Smith",
        url: "https://allblogs.in/author/jane-smith",
        likes: 15,
    },
    {
        id: 3,
        title: "Third Blog",
        author:" Alice Johnson",
        url: "https://www.ajohnsonwriter.com/blog",
        likes: 30,
    },
    {
        id: 4,
        title: "Fourth Blog",
        author:" Michael Davis",
        url: "https://www.michaelddavis.com/blog",
        likes: 25,
    }
]

export default function blogs(){
    return(
        <div>
            <h1>Blogs</h1>
            <ul>
                {blogsList.map((blog) => (
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