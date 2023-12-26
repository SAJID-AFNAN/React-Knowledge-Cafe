import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddBookmark, handleAddReadingTime }) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs : {blogs.length}</h1>
            {
                blogs.map(blog => <Blog
                    handleAddBookmark={handleAddBookmark}
                    key={blog.id}
                    blog={blog}
                    handleAddReadingTime={handleAddReadingTime}
                ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddBookmark: PropTypes.func.isRequired,
    handleAddReadingTime: PropTypes.func
}

export default Blogs;