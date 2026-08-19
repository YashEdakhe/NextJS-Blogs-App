// id: 2,
//         title: "Second Blog",
//         author: "Jane Smith",
//         url: "https://allblogs.in/author/jane-smith",
//         likes: 15,

import {createBlogs} from "../../actions/blogs"

const createNewBlog  = ()=>{
    return(
        <div>
            <h1>Create Blog</h1>
            <form action = {createBlogs}>
                <div>
                    <label>
                        Title: <input type="text" name="title" required/>
                    </label> 
                </div>
                <div>
                    <label>
                        author: <input type="text" name="author" required/>
                    </label> 
                </div>
                <div>
                    <label>
                        URL: <input type="text" name="url" required/>
                    </label> 
                </div>
                <div>
                    <label>
                        Likes: <input type="number" name="likes" required/>
                    </label> 
                </div>
                <button type="submit">Create Blog</button>
            </form>
        </div>
    )
}
export default createNewBlog