import React, { useState } from 'react'

const Element = (props) => {

 
 const {
   handleInputChange,
   buttonUpdate,
   buttonDelete,
   inputKey,
   handleUpdateElement,
   handleDeleteElement,
   elementKeys,
   element,
   edit,
   setActiveElement,
 } = props
  return (
    <div className='p-8 border bg-gray-200 mb-2'>
      {elementKeys &&
        elementKeys.map((el) => (
          <h1 className='text-black-300 justify-center'>{element[el]}</h1>
        ))}
      {!edit && (
        <button
          className='bg-blue-500 hover:bg-blue-700 mr-4 text-white font-bold py-2 px-4 rounded'
          onClick={() => setActiveElement(element.id)}
        >
          Edit
        </button>
      )}
      {edit && (
        <div>
          <input
            className='bg-white shadow-lg  mr-4 rounded px-8 pt-4 pb-4 mb-4'
            type='text'
            placeholder={`${inputKey}...`}
            onChange={(event) => {
              handleInputChange(event.target.value)
            }}
          />
          <button
            className='bg-blue-500 hover:bg-blue-700 mr-4 text-white font-bold py-2 px-4 rounded'
            onClick={() => {
              handleUpdateElement(element.id)
              setActiveElement("")
            }}
          >
            {buttonUpdate}
          </button>
          <button
            className='bg-red-500 hover:bg-red-700 mr-4 text-white font-bold py-2 px-4 rounded'
            onClick={() => handleDeleteElement(element.id)}
          >
            {buttonDelete}
          </button>
        </div>
      )}
    </div>
  )
}

export default Element