import React from 'react'

const AddElement = (props) => {
 const { handleInputChange, handleAddElement, inputKeys, buttonName } = props
  return (
    <div className='mt-8 mb-8'>
      {inputKeys.length > 0 && inputKeys.map((el)=>{
      return (<input
         className='bg-white shadow-lg  mr-4 rounded px-8 pt-4 pb-4 mb-4'
         type='text'
         value={el.value}
         placeholder={`${el.key}...`}
         onChange={(event) => handleInputChange(el.key, event.target.value)}
       />)
      })}
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
        onClick={handleAddElement}
      >
        {buttonName}
      </button>
    </div>
  )
}

export default AddElement