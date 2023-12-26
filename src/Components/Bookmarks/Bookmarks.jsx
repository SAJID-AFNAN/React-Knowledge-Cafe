import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

function Bookmarks({ bookmarks, readingTime }) {

    return (
        <div className='md:w-1/3 mt-4 ml-5'>
            <div className='bg-gray-300 rounded-xl mb-4 p-4'>
                <h2 className='text-violet-700 text-3xl'>Spent Time On Read : {readingTime}</h2>
            </div>
            <div className='bg-gray-300 rounded-xl pb-2'>
                <h2 className='text-3xl pl-4'>Bookmark Blogs : {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
}
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
};

export default Bookmarks;