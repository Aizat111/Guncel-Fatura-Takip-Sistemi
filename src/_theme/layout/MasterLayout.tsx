import React, {useEffect} from 'react'
import {PageDataProvider} from './core'
import {Outlet, useLocation} from 'react-router-dom'
import {MenuComponent} from '../assets/ts/components'
import HeaderBase from './components/header/HeaderBase'
import Footer from './components/Footer'
import AsideBase from './components/aside/AsideBase'
import {ScrollTop} from './components/Scrolltop'
import {ActivityDrawer, CreateApp, DrawerMessenger} from '../partials'
import {Content} from './components/Content'

const MasterLayout: React.FC = ({children}) => {
  const location = useLocation()
  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [location.key])

  return (
    <PageDataProvider>
      <div className='d-flex flex-column flex-root'>
        <div className='page d-flex flex-row flex-column-fluid'>
          <AsideBase />

          <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
            <HeaderBase />

            <div className='content d-flex flex-column flex-column-fluid' id='kt_content'>
              <Content>
                <Outlet />
              </Content>
            </div>

            <Footer />
          </div>
        </div>
      </div>
      {/* begin:: Drawers */}
      <ActivityDrawer />
      <DrawerMessenger />
      {/* end:: Drawers */}

      <CreateApp />
      <ScrollTop />
    </PageDataProvider>
  )
}

export {MasterLayout}
