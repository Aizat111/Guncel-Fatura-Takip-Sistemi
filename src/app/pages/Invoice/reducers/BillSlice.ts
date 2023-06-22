import {createSlice} from '@reduxjs/toolkit'

interface BillState {
  isLoading: boolean
  error: string
  refresh: boolean
}

const initialState: BillState = {
  isLoading: false,
  error: '',
  refresh: false,
}

export const BillSlice = createSlice({
  name: 'bills',
  initialState,
  reducers: {
    setRefresh: (state) => {
      state.refresh = !state.refresh
    },
  },
})

export const {setRefresh} = BillSlice.actions

export default BillSlice.reducer
