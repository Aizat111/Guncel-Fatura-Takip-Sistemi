import {all} from 'redux-saga/effects'
import {combineReducers} from 'redux'

import * as auth from '../../app/modules/auth'
import RoleSlice from '../../app/pages/Roles/reducers/RoleSlice'
import UserSlice from '../../app/pages/Users/reducers/UserSlice'
import ProfileSlice from '../../app/pages/Profile/reducers/ProfileSlice'

export const rootReducer = combineReducers({
  auth: auth.reducer,
  roles: RoleSlice,
  users: UserSlice,
  profile: ProfileSlice
})

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([auth.saga()])
}
