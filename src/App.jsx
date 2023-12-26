import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/BookMarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddBookmark = book => {
    const newBookmarks = [...bookmarks, book]
    setBookmarks(newBookmarks)
  }

  const handleAddReadingTime = (id, time) => {
    const newtime = readingTime + time;
    setReadingTime(newtime)

    //removeBookmarks
    const reamainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(reamainingBookmarks)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddBookmark={handleAddBookmark} handleAddReadingTime={handleAddReadingTime}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
