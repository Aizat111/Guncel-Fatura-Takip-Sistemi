import React from 'react'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_theme/layout/core'
import {Overview} from './components/Overview'
import {AccountHeader} from './AccountHeader'
import { Subscriptions } from './components/Subscriptions'

const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Account',
    path: '/profile/overview',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const AccountPage: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <AccountHeader />
            <Overview/>
            <Outlet />
          </>
        }
      >
        <Route
          path='overview'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Hakkında</PageTitle>
              <Overview />
            </>
          }
        />
        <Route
          path='subscriptions'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Üyelikler</PageTitle>
              <Subscriptions />
            </>
          }
        />
        <Route index element={<Navigate to='./overview' />} />
      </Route>
    </Routes>
  )
}

export default AccountPage
