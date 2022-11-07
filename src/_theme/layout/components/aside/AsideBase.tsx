import React from 'react'
import AsideToolbar from './AsideToolbar'
import AsideMenu from './AsideMenu'
import AsideUser from './AsideUser'

const AsideBase: React.FC = () => {
  return (
    <div
      id='kt_aside'
      className='aside'
      data-kt-drawer='true'
      data-kt-drawer-name='aside'
      data-kt-drawer-activate='{default: true, lg: false}'
      data-kt-drawer-overlay='true'
      data-kt-drawer-width="{default:'200px', '300px': '250px'}"
      data-kt-drawer-direction='start'
      data-kt-drawer-toggle='#kt_aside_mobile_toggle'
    >
      <div className='aside-toolbar py-5' id='kt_aside_toolbar'>
        <AsideToolbar />
      </div>

      <div className='aside-menu flex-column-fluid'>
        <AsideMenu />
      </div>

      <div className='aside-footer flex-column-auto pb-5' id='kt_aside_footer'>
        <div className='aside-user'>
          <AsideUser />
        </div>
      </div>
    </div>
  )
}

export default AsideBase
