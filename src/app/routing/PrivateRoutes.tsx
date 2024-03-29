import {FC, lazy, Suspense} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {MasterLayout} from '../../_theme/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardsPageWrapper} from '../pages/dashboards/DashboardsPageWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_theme/assets/ts/_utils'
import {Home} from '../pages/Home'
import {Profile} from '../pages/Profile'
import {Water} from '../pages/Invoice/Water'
import {Electric} from '../pages/Invoice/Electric'
import {Gas} from '../pages/Invoice/Gas'
import {OldWater} from '../pages/OldInvoice/Water'
import {OldElectric} from '../pages/OldInvoice/Electric'
import {OldGas} from '../pages/OldInvoice/Gas'
import Cards from '../pages/Cards/Cards/Cards'
import {Homepage} from '../pages/Cards/Homepage'

import {Roles} from '../pages/Roles/Roles'
import {Users} from '../pages/Users/Users'
import {Subscriptions} from '../pages/Profile/components/Subscriptions'
import {UserDetail} from '../pages/Users/UserDetail'
import { Invoices } from '../pages/AdminInvoce/Invoices'
import { OldInvoices } from '../pages/AdminOldInvoice/OldInvoices'

const PrivateRoutes = () => {
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registration */}
        <Route path='auth/*' element={<Navigate to='/dashboards' />} />
        {/* Pages */}
        <Route path='dashboards/*' element={<Home />} />
        <Route
          path='builder'
          element={
            <SuspensedView>
              <BuilderPageWrapper />
            </SuspensedView>
          }
        />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route path='/profile/*' element={<Profile />} />
        <Route path='/profile/subscriptions' element={<Subscriptions />} />
        <Route path='/users/*' element={<Users />} />
        <Route path='/users/detail' element={<UserDetail />} />
        <Route path='/roles/*' element={<Roles />} />
        <Route path='/invoices/*' element={<Invoices />} />
        <Route path='/invoice/*' element={<Water />} />
        <Route path='/invoice/electric' element={<Electric />} />
        <Route path='/invoice/gas' element={<Gas />} />
        <Route path='/old-invoices/*' element={<OldInvoices />} />
        <Route path='/old-invoice/*' element={<OldWater />} />
        <Route path='/old-invoice/electric' element={<OldElectric />} />
        <Route path='/old-invoice/gas' element={<OldGas />} />
        <Route path='/cards/*' element={<Homepage />} />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        {/* <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        /> */}
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
