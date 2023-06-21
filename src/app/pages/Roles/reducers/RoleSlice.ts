import {createSlice} from '@reduxjs/toolkit'

interface RoleState {
  isLoading: boolean
  error: string
  refresh: boolean
}

const initialState: RoleState = {
  isLoading: false,
  error: '',
  refresh: false,
}

export const RoleSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {
    setRefresh: (state) => {
      state.refresh = !state.refresh
    },
  },
})

export const {setRefresh} = RoleSlice.actions

export default RoleSlice.reducer
