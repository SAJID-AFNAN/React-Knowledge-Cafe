import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog, handleAddBookmark, handleAddReadingTime }) => {
    const { id, title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;
    return (
        <div className="mb-20 space-y-2">
            <img className="w-full mb-4" src={cover} alt={`cover picture ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddBookmark(blog)} className="ml-2 text-2xl text-red-800"><IoBookmarksOutline></IoBookmarksOutline></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''>{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleAddReadingTime(id, reading_time)} className="text-violet-700 font-bold hover:underline hover:text-violet-800">Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func.isRequired,
    handleAddReadingTime: PropTypes.func
}

export default Blog;