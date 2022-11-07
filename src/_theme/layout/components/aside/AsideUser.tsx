/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useDispatch} from 'react-redux'
import * as auth from '../../../../app/modules/auth/redux/AuthRedux'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {HeaderUserMenu} from '../../../partials'

const AsideUser: React.FC = () => {
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(auth.actions.logout())
  }

  return (
    <div className='aside-user d-flex align-items-sm-center justify-content-center py-5'>
      <div className='me-5'>
        <div
          className='symbol symbol-40px cursor-pointer'
          data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
          data-kt-menu-overflow='false'
          data-kt-menu-placement='bottom-start'
        >
          <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='' />
        </div>
        <HeaderUserMenu />
      </div>

      <div className='flex-row-fluid flex-wrap'>
        <div className='d-flex align-items-center flex-stack'>
          <div className='me-2'>
            {/* eslint-disable-next-line */}
            <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bold lh-0'>
              Paul Melone
            </a>

            <span className='text-gray-400 fw-bold d-block fs-8'>Python Dev</span>
          </div>

          {/* eslint-disable-next-line */}
          <button
            onClick={() => {
              logout()
            }}
            className='btn btn-icon btn-active-color-primary me-n4'
          >
            <KTSVG
              path='/media/icons/duotune/arrows/arr076.svg'
              className='svg-icon-2 svg-icon-gray-400'
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AsideUser
