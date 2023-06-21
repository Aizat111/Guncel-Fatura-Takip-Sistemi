import {createSlice} from '@reduxjs/toolkit'

interface ProfileState {
  isLoading: boolean
  error: string
  refresh: boolean
}

const initialState: ProfileState = {
  isLoading: false,
  error: '',
  refresh: false,
}

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setRefresh: (state) => {
      state.refresh = !state.refresh
    },
  },
})

export const {setRefresh} = ProfileSlice.actions

export default ProfileSlice.reducer
