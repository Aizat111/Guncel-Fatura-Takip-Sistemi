import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'
import {KTSVG} from '../../../helpers'

export function AsideMenuMain() {
  return (
    <>
      <AsideMenuItem
        to='/dashboards'
        title='Anasayfa'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/arrows/arr001.svg'
      >
        {/* <AsideMenuItem to='/dashboards/default' title='Default' hasBullet={true} />
        <AsideMenuItem to='/dashboards/marketing' title='Marketing' hasBullet={true} />
        <AsideMenuItem to='/dashboards/social' title='Social' hasBullet={true} />
        <AsideMenuItem to='/dashboards/eCommerce' title='eCommerce' hasBullet={true} /> */}
      </AsideMenuItem>
      <AsideMenuItemWithSub
        to='/invoice'
        title='Faturalar'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/arrows/arr001.svg'
      >
        <AsideMenuItem to='/invoice/water' title='Su' hasBullet={true}/>
          <AsideMenuItem to='/invoice/electric' title='Elektrik' hasBullet={true} />
          <AsideMenuItem to='/invoice/gas' title='Gaz' hasBullet={true} />
          {/* <AsideMenuItem to='/crafted/pages/profile/campaigns' title='Campaigns' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/documents' title='Documents' hasBullet={true} /> 
           <AsideMenuItem
            to='/crafted/pages/profile/connections'
            title='Connections'
            hasBullet={true}
          />  */}
        {/* </AsideMenuItemWithSub>

        {/* <AsideMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
          />
          <AsideMenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
        </AsideMenuItemWithSub> */}
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/old-invoice'
        title='Geçmiş Faturalar'
        icon='/media/icons/duotune/arrows/arr001.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/old-invoice/water' title='Su' hasBullet={true} />
        <AsideMenuItem to='/old-invoice/electric' title='Elektrik' hasBullet={true} />
        <AsideMenuItem to='/old-invoice/gas' title='Gaz' hasBullet={true} />
      </AsideMenuItemWithSub>
      {/* <AsideMenuItemWithSub
        to='/error'
        title='Errors'
        fontIcon='bi-sticky'
        icon='/media/icons/duotune/arrows/arr001.svg'
      >
        <AsideMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </AsideMenuItemWithSub> */}
        <AsideMenuItem to='/profile' title='Hesabım' icon='/media/icons/duotune/arrows/arr001.svg'
        fontIcon='bi-person'/>
      <AsideMenuItem to='/cards' title='Cüzdan' icon='/media/icons/duotune/arrows/arr001.svg'
        fontIcon='bi-person'/>
      {/* <AsideMenuItemWithSub
        to='/apps/chat'
        title='Chat'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/arrows/arr001.svg'
      >
        <AsideMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </AsideMenuItemWithSub> */}
      {/* <AsideMenuItem
        to='/builder'
        icon='/media/icons/duotune/arrows/arr001.svg'
        title='Layout Builder'
        fontIcon='bi-layers'
      /> */}
      {/* <AsideMenuItem
        to='/apps/user-management/'
        icon='/media/icons/duotune/arrows/arr001.svg'
        title='User Management'
        fontIcon='bi-layers'
      /> */}

      {/* <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator separator-dashed mx-n10'></div>
        </div>
      </div>
      <div className='menu-item'>
        <a className='menu-link' href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/utilities'}>
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotune/arrows/arr001.svg' className='svg-icon svg-icon-5' />
          </span>
          <span className='menu-title'>Components</span>
        </a>
      </div>
      <div className='menu-item'>
        <a
          className='menu-link'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/quick-start'}
        >
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotune/arrows/arr001.svg' className='svg-icon svg-icon-5' />
          </span>
          <span className='menu-title'>Documentation</span>
        </a>
      </div>
      <div className='menu-item'>
        <a className='menu-link' href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}>
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotune/arrows/arr001.svg' className='svg-icon svg-icon-5' />
          </span>
          <span className='menu-title'>Changelog</span>
        </a>
      </div> */}
    </>
  )
}
