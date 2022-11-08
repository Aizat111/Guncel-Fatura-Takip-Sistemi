import React from 'react'
import AsideMenu from './AsideMenu'
import AsideUser from './AsideUser'




const AsideBase: React.FC = () => {
  return (
    <div
      id='kt_aside'
      className='aside   '
      data-kt-drawer='true'
      data-kt-drawer-name='aside'
      data-kt-drawer-activate='{default: true, lg: false}'
      data-kt-drawer-overlay='true'
      data-kt-drawer-width="{default:'200px', '300px': '250px'}"
      data-kt-drawer-direction='start'
      data-kt-drawer-toggle='#kt_aside_mobile_toggle'
      data-kt-app-layout="dark-sidebar"
      style={{backgroundColor:'#40a1ae',color:'#fff',top:'20px',scrollbarWidth: 'auto',overflowY:'scroll'}}
    >
      <div  className='flex-column-auto pb-5 dark' id='kt_aside_footer'>
        <div  className=''>
          <AsideUser />
        </div>
      </div>
      <div className='aside-menu flex-column-fluid '  style={{color:'#fff'}}>
        <AsideMenu />
      </div>

    
    </div>
  )
}

export default AsideBase
