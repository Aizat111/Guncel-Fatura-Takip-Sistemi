/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from 'react'
import {Dropdown, NavDropdown} from 'react-bootstrap'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {UserModel} from '../../../../app/modules/auth/models/UserModel'
import * as auth from '../../../../app/modules/auth/redux/AuthRedux'
import { Api } from '../../../../app/pages/Services/api'
import {RootState} from '../../../../setup'
import { useAppSelector } from '../../../../setup/hooks/redux'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {HeaderUserMenu} from '../../../partials'

const AsideUser: React.FC = () => {
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(auth.actions.logout())
  }
  const loginUser: UserModel = useSelector<RootState>(({auth}) => auth.user, shallowEqual) as UserModel
  const [user, setUser] = useState<any>()
  const {refresh} = useAppSelector((state)=>state.users)

  useEffect(()=>{
    Api()
    .users.user(loginUser.id)
    .then((res) => {
      setUser(res)
    })
  },[refresh])

  return (
    <div style={{height: '200px'}} className='py-5'>
      <div className='d-flex flex-column align-items-center justify-content-center'>
        <div className='me-5 text-center' style={{borderRadius: '50%'}}>
          <div
            className='symbol symbol-40px cursor-pointer'
            data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
            data-kt-menu-overflow='false'
            data-kt-menu-placement='bottom-start'
            style={{borderRadius: '50%'}}
          >
            {/* {user.avatar ? (
              <img
                style={{height: '100px', width: 'auto', borderRadius: '50%'}}
                src={user.avatar}
                className='rounded'
                alt=''
              />
            ) : (
              <div className='symbol-label bg-primary text-inverse-primary fw-bolder fs-1 h-100px w-100px rounded'>
                {user.name?.substring(0, 1)}
              </div>
            )} */}
            <img
              style={{height: '130px', width: 'auto', borderRadius: '50%'}}
              src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800'
              className='rounded'
              alt='profil_photo'
            />
          </div>
          {/* <HeaderUserMenu /> */}
        </div>
        <div className='mt-4'>
          <div className='d-flex text-center align-items-center flex-stack'>
            <div className='me-2'>
              {/* eslint-disable-next-line */}
              <a href='#' className='fs-2 lh-0 fw-bolder text-white-800 text-light'>
                {/* {user.name} */}
                {user?.firstname} {user?.lastname}
              </a>
              <div className='d-flex justify-content-center'>
                <span
                  style={{background: '#9DB2BF'}}
                  className='text-white-600 fw-bold d-block mt-2 fs-5 badge w-100 '
                >
                  {' '}
                  {user?.roles[0]?.value}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AsideUser
