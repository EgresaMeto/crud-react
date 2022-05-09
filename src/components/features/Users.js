import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUser, deleteUser, updateUsername } from '../../reducers/Users'
import { useState } from 'react'
import AddElement from '../element/AddElement'
import DisplayElement from '../element/DisplayElement'

const Users = () => {
  const dispatch = useDispatch()
   const [activeElment, setActiveElement] = useState('')

  const userList = useSelector((state) => state.users.value)

  const [name , setName] = useState("")
  const [username, setUsername] = useState('')
  const [newUsername, setNewUsername] = useState('')
   
  const handleInputChange = (key, value) => {
     if (key === 'name') {
       return setName(value)
     }
     setUsername(value)
   }

const handleEditInputChange = (value) => {
  setNewUsername(value)
}

const handleAddElement = () => {
 dispatch(
   addUser({
     id: userList[userList.length - 1].id + 1,
     name,
     username,
   })
 )
 setUsername("")
 setName("")
}

const handleUpdateElement = (id) => {
   dispatch(updateUsername({ id: id, username: newUsername }))
   setNewUsername("")
}
  return (
    <div>
      <AddElement
        handleInputChange={handleInputChange}
        inputKeys={[
          { key: 'name', value: name },
          { key: 'username', value: username },
        ]}
        buttonName='Add User'
        handleAddElement={() => handleAddElement()}
      />
      <DisplayElement
        handleInputChange={handleEditInputChange}
        elements={userList}
        avticeElement={activeElment}
        elementKeys={['name', 'username']}
        setActiveElement={setActiveElement}
        inputKey={'NewUsername'}
        buttonUpdate='Update User'
        buttonDelete='Delete User'
        handleUpdateElement={(id) => handleUpdateElement(id)}
        handleDeleteElement={(id) => {
          dispatch(deleteUser({ id: id }))
        }}
      />
    </div>
  )
}

export default Users