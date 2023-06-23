import {FC, useEffect, useState} from 'react'
import {ChartsWidgetCompare} from '../../components/Home/ChartWidgetCompare'
import {Banner} from '../../components/Home/Banner'
import {ChartsWidgetInvoice} from '../../components/Home/ChartWidgetInvoice'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from '../../../setup'
import { UserModel } from '../../modules/auth/models/UserModel'


export const Home: FC = () => {
  const loginUser: UserModel = useSelector<RootState>(
    ({auth}) => auth.user,
    shallowEqual
  ) as UserModel
  return (
    <>
      <div className='row g-5 g-xxl-10 mb-5'>
        {/* begin::Col */}
        <div className='col-xl-4 mb-xxl-10' style={{height: '400px'}}>
          <ChartsWidgetCompare className='h-xl-10' />

        </div>


        {/* begin::Col */}
        <div className='col-xl-8 col-xxl-8  mb-5 mb-xxl-10' style={{height: '400px'}}>
          <Banner className={'h-100'} />
        </div>
        {/* end::Col */}
      </div>

      <div className='row g-5 g-xxl-10'>

        <div className='col-xl-4 mb-xl-5 mb-xxl-10'>
          <ChartsWidgetInvoice subscribeNo={ loginUser.subscription[1].subscription_no} Title={'Su'} />
        </div>
        <div className='col-xl-4 mb-xl-5 mb-xxl-10'>
          <ChartsWidgetInvoice subscribeNo={loginUser.subscription[2].subscription_no} Title={'Gaz'} />
        </div>
        <div className='col-xl-4 mb-xl-5 mb-xxl-10'>
          <ChartsWidgetInvoice subscribeNo={loginUser.subscription[0].subscription_no} Title={'Elektrik'} />
        </div>


      </div>

    </>
  )
}
