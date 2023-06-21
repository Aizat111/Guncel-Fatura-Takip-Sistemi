import {createSlice} from '@reduxjs/toolkit'

interface UserState {
  isLoading: boolean
  error: string
  refresh: boolean
}

const initialState: UserState = {
  isLoading: false,
  error: '',
  refresh: false,
}

export const UserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setRefresh: (state) => {
      state.refresh = !state.refresh
    },
  },
})

export const {setRefresh} = UserSlice.actions

export default UserSlice.reducer
