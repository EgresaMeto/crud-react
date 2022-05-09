import React from 'react'
import Element from './Element';

const DisplayElement = (props) => {
  const {
    elements,
    handleInputChange,
    handleUpdateElement,
    handleDeleteElement,
    inputKey,
    elementKeys,
    buttonUpdate,
    buttonDelete,
    avticeElement,
    setActiveElement,
  } = props
  return (
   <div>
    {elements.map((element, index) => {
        return (
          <div key={index}>
            <Element
              handleInputChange={handleInputChange}
              handleUpdateElement={handleUpdateElement}
              handleDeleteElement={handleDeleteElement}
              elementKeys={elementKeys}
              element={element}
              setActiveElement={setActiveElement}
              edit={element.id == avticeElement}
              buttonUpdate={buttonUpdate}
              buttonDelete={buttonDelete}
              inputKey={inputKey}
            />
          </div>
        )
      })}
   </div>
  )
}

export default DisplayElement
