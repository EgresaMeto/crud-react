import { createSlice } from '@reduxjs/toolkit'
import { CarsData } from '../CarData'

export const userSlice = createSlice({
  name: 'cars',
  initialState: { value: CarsData },
  reducers: {
    addCar: (state, action) => {
      state.value.push(action.payload)
    },
    deleteCar: (state, action) => {
      state.value = state.value.filter((car) => car.id !== action.payload.id)
    },
    updateType: (state, action) => {
      state.value.map((car) => {
        if (car.id === action.payload.id) {
          car.type = action.payload.type
        }
      })
    },
  },
})

export const { addCar, deleteCar, updateType } = userSlice.actions
export default userSlice.reducer
