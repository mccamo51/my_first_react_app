import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlog] = useState(null)

    const onDelete = (id) => {
        // const newList = blogs.filter(blog => blog.id !== id)
        // setBlog(newList)
    }

    useEffect(() => {
        fetch('http://localhost:8000/blog')
        .then(data => {
          return  data.json()
        }).then(response => {
            console.log(response)
            setBlog(response)
        })
    }, [])

    return (
        <div className='home'>
            {blogs && <BlogList blogs={blogs} title="All Blogs" onDelete={onDelete} />}
        </div>
    );
}

export default Home;
