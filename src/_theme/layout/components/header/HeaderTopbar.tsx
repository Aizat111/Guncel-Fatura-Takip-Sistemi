/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {KTSVG} from '../../../helpers'
import {PageTitle} from './page-title/PageTitle'
import {HeaderNotificationsMenu, QuickLinks, Search} from '../../../partials'
import {useLayout} from '../../core'

const HeaderTopbar: React.FC = () => {
  const {classes} = useLayout()
  return (
    <div
      className={`${classes.headerContainer} py-6 py-lg-0 d-flex flex-column flex-sm-row align-items-lg-stretch justify-content-sm-between`}
    >
      <PageTitle />

      <div className='d-flex align-items-center overflow-auto pt-3 pt-sm-0'>
        <div className='header-search me-4'>
          <Search />
        </div>

        <div className='d-flex'>
          <div className='d-flex align-items-center me-4'>
            {/* eslint-disable-next-line */}
            <a
              href='#'
              className='btn btn-icon btn-active-light btn-outline btn-outline-default btn-icon-gray-700 btn-active-icon-primary'
              data-kt-menu-trigger='click'
              data-kt-menu-attach='parent'
              data-kt-menu-placement='bottom-end'
              data-kt-menu-flip='bottom'
            >
              <KTSVG path='/media/icons/duotune/general/gen025.svg' className='svg-icon-1' />
            </a>
            <QuickLinks />
          </div>

          <div className='d-flex align-items-center me-4'>
            {/* eslint-disable-next-line */}
            <a
              href='#'
              id='kt_drawer_chat_toggle'
              className='btn btn-icon btn-active-light btn-outline btn-outline-default btn-icon-gray-700 btn-active-icon-primary'
              data-kt-menu-trigger='click'
              data-kt-menu-attach='parent'
              data-kt-menu-placement='bottom-end'
              data-kt-menu-flip='bottom'
            >
              <KTSVG path='/media/icons/duotune/communication/com012.svg' className='svg-icon-1' />
            </a>
          </div>

          <div className='d-flex align-items-center'>
            {/* eslint-disable-next-line */}
            <a
              href='#'
              className='btn btn-icon btn-primary'
              data-kt-menu-trigger='click'
              data-kt-menu-attach='parent'
              data-kt-menu-placement='bottom-end'
              data-kt-menu-flip='bottom'
            >
              3
            </a>
            <HeaderNotificationsMenu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTopbar
