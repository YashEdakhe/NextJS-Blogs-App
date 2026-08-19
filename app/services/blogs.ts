let nextId = 5
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


export const addBlog = (title: string, author: string, url: string, likes: number) => {
    blogsList.push({
        id: nextId++,
        title,
        author,
        url,
        likes,
    })
}

export const getBlogs = () => {
    return blogsList
}
