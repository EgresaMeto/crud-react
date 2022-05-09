import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addBook, deleteBook, updateTitle } from '../../reducers/Books'
import { useState } from 'react'
import AddElement from '../element/AddElement'
import DisplayElement from '../element/DisplayElement'

const Books = () => {
  const dispatch = useDispatch()

  const bookList = useSelector((state) => state.books.value)
  const [ activeElment, setActiveElement] = useState("")
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const handleInputChange = (key, value) => {
    if (key === 'author') {
      return setAuthor(value)
    }
    setTitle(value)
  }

  const handleEditInputChange = (value) => {
    setNewTitle(value)
  }

  const handleAddElement = () => {
    dispatch(
      addBook({
        id: bookList[bookList.length - 1].id + 1,
        author,
        title,
      })
    )
    setTitle('')
    setAuthor('')
  }

  const handleUpdateElement = (id) => {
    dispatch(updateTitle({ id: id, title: newTitle }))
    setNewTitle('')
  }
  return (
    <div>
      <AddElement
        handleInputChange={handleInputChange}
        inputKeys={[
          { key: 'author', value: author },
          { key: 'title', value: title },
        ]}
        buttonName='Add Book'
        handleAddElement={() => handleAddElement()}
      />
      <DisplayElement
        handleInputChange={handleEditInputChange}
        elements={bookList}
        avticeElement={activeElment}
        elementKeys={['author', 'title']}
        inputKey={'NewTitle'}
        setActiveElement={setActiveElement}
        buttonUpdate='Update Title'
        buttonDelete='Delete Title'
        handleUpdateElement={(id) => handleUpdateElement(id)}
        handleDeleteElement={(id) => {
          dispatch(deleteBook({ id: id }))
        }}
      />
    </div>
  )
}

export default Books
