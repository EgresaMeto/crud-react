import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCar, deleteCar, updateType } from '../../reducers/Cars'
import { useState } from 'react'
import AddElement from '../element/AddElement'
import DisplayElement from '../element/DisplayElement'

const Cars = () => {
  const dispatch = useDispatch()

  const carList = useSelector((state) => state.cars.value)
const [activeElment, setActiveElement] = useState('')
  const [mark, setMark] = useState('')
  const [type, setType] = useState('')
  const [newType, setNewType] = useState('')

  const handleInputChange = (key, value) => {
    if (key === 'mark') {
      return setMark(value)
    }
    setType(value)
  }

  const handleEditInputChange = (value) => {
    setNewType(value)
  }

  const handleAddElement = () => {
    dispatch(
      addCar({
        id: carList[carList.length - 1].id + 1,
        mark,
        type,
      })
    )
    setMark('')
    setType('')
  }

  const handleUpdateElement = (id) => {
    dispatch(updateType({ id: id, type: newType }))
    setNewType('')
  }

  return (
    <div>
      <AddElement
        handleInputChange={handleInputChange}
        handleAddElement={() => handleAddElement()}
        inputKeys={[
          { key: 'mark', value: mark },
          { key: 'type', value: type },
        ]}
        buttonName='Add Car'
      />

      <DisplayElement
        handleInputChange={handleEditInputChange}
        avticeElement={activeElment}
        elements={carList}
        elementKeys={['mark', 'type']}
        inputKey={'NewType'}
        setActiveElement={setActiveElement}
        buttonUpdate='Update Type'
        buttonDelete='Delete Type'
        handleUpdateElement={(id) => handleUpdateElement(id)}
        handleDeleteElement={(id) => {
          dispatch(deleteCar({ id: id }))
        }}
      />
    </div>
  )
}

export default Cars
