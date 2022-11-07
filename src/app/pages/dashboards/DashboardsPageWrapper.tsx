import React from 'react'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_theme/layout/core'
import {Default} from './Default'
import {Marketing} from './Marketing'
import {Social} from './Social'
import {ECommerce} from './eCommerce'

const dashboardBreadCrumbs: Array<PageLink> = [
  {
    title: 'Dashboards',
    path: '/dashboards',
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

const DashboardsPageWrapper: React.FC = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='default'
          element={
            <>
              <PageTitle breadcrumbs={dashboardBreadCrumbs}>Default</PageTitle>
              <Default />
            </>
          }
        />
        <Route
          path='marketing'
          element={
            <>
              <PageTitle breadcrumbs={dashboardBreadCrumbs}>Marketing</PageTitle>
              <Marketing />
            </>
          }
        />
        <Route
          path='/social'
          element={
            <>
              <PageTitle breadcrumbs={dashboardBreadCrumbs}>Social</PageTitle>
              <Social />
            </>
          }
        />
        <Route
          path='ecommerce'
          element={
            <>
              <PageTitle breadcrumbs={dashboardBreadCrumbs}>ECommerce</PageTitle>
              <ECommerce />
            </>
          }
        />
        <Route index element={<Navigate to='/dashboards/default' />} />
      </Route>
    </Routes>
  )
}

export {DashboardsPageWrapper}
