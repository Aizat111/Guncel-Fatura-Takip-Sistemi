import React from 'react'
import HeaderTopbar from './HeaderTopbar'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Link} from 'react-router-dom'
import {Dropdown3} from '../../../partials/content/dropdown/Dropdown3'

const HeaderBase: React.FC = () => {
  return (
    <div id='kt_header' className='header align-items-stretch' >
      <div className='header-brand' style={{backgroundColor: '#40a1ae'}}>
  

        <div className='d-none d-lg-block'>
          <button
            className='btn btn-icon btn-color-gray-500 w-auto px-0 btn-active-color-primary'
            data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
            data-kt-menu-placement='bottom-start'
            data-kt-menu-overflow='true'
          >
            <KTSVG path='/media/icons/duotune/coding/cod001.svg' className='svg-icon-1 me-n1' />
          </button>
          <Dropdown3 />
        </div>

        <div className='d-flex align-items-center d-lg-none ms-n3 me-1' title='Show aside menu'>
          <div
            className='btn btn-icon btn-active-color-primary w-30px h-30px'
            id='kt_aside_mobile_toggle'
          >
            <KTSVG path='/media/icons/duotune/abstract/abs015.svg' className='svg-icon-1' />
          </div>
        </div>
      </div>

      <div className='topbar'>
        <HeaderTopbar />
      </div>
    </div>
  )
}

export default HeaderBase
