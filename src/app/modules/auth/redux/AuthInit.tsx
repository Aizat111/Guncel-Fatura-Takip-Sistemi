import {FC, useEffect, useRef, ReactNode} from 'react'
import {connect, ConnectedProps, shallowEqual, useDispatch, useSelector} from 'react-redux'
import * as auth from './AuthRedux'

import {RootState} from '../../../../setup'
import React from 'react'
import { getUserByToken } from './AuthCRUD'

const mapState = (state: RootState) => ({auth: state.auth})
const connector = connect(mapState, auth.actions)
type PropsFromRedux = ConnectedProps<typeof connector>

const AuthInit: FC<any> = (props) => {
  const didRequest = useRef(false)
  const dispatch = useDispatch()
  const accessToken = useSelector<RootState>(({auth}) => auth.accessToken, shallowEqual)

  // We should request user by authToken before rendering the application
  useEffect(() => {
    const requestUser = async () => {
      try {
        if (!didRequest.current) {
          // const {data: user} = await getUserByToken(accessToken as string)
          // dispatch(props.fulfillUser(user))
        }
      } catch (error) {
        console.error(error)
        if (!didRequest.current) {
          dispatch(props.logout())
        }
      }

      return () => (didRequest.current = true)
    }

    if (accessToken) {
      requestUser()
    } else {
      dispatch(props.logout())
    }
    // eslint-disable-next-line
  }, [])

  return <>{props.children}</>
}

export default connector(AuthInit)
