/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {Dropdown, NavDropdown} from 'react-bootstrap'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {UserModel} from '../../../../app/modules/auth/models/UserModel'
import * as auth from '../../../../app/modules/auth/redux/AuthRedux'
import {RootState} from '../../../../setup'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {HeaderUserMenu} from '../../../partials'

const AsideUser: React.FC = () => {
  const user: UserModel = useSelector<RootState>(({auth}) => auth.user, shallowEqual) as UserModel
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(auth.actions.logout())
  }

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
              <a
                href='#'
                className=' text-hover-danger fs-2 lh-0 fw-bolder text-white-800 text-light'
              >
                {/* {user.name} */}
                Sena Yılmaz
              </a>
              <span  style={{background: '#377c8b'}} className='text-white-600 fw-bold d-block mt-2 fs-5 badge '>
                {' '}
                {/* {user.assignment ? user.assignment.name : ''}{' '} */}
                Kullanıcı
              </span>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AsideUser
