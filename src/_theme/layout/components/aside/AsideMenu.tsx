import React from 'react'
import {AsideMenuMain} from './AsideMenuMain'

const AsideMenu: React.FC = () => {
  return (
    <div
      className='hover-scroll-overlay-y px-2 my-5 my-lg-5'
      id='kt_aside_menu_wrapper'
      data-kt-scroll='true'
      data-kt-scroll-height='auto'
      data-kt-scroll-dependencies="{default: '#kt_aside_toolbar, #kt_aside_footer', lg: '#kt_header, #kt_aside_toolbar, #kt_aside_footer'}"
      data-kt-scroll-offset='0'
    >
      <div
        className='menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold'
        id='#kt_aside_menu'
        data-kt-menu='true'
      >
        <AsideMenuMain />
      </div>
    </div>
  )
}

export default AsideMenu
