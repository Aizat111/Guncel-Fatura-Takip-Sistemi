import {TypedUseSelectorHook, useDispatch} from 'react-redux'
import {AppDispatch} from '../redux/Store'
import {RootState} from '../redux/RootReducer'
import {useSelector} from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector