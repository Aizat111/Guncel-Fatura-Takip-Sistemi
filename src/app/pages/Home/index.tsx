import {FC} from 'react'
import {
  CardsWidget6,
  ChartsWidget1,
  ChartsWidget5,
  ChartsWidget9,
  EngageWidget2,
  ListsWidget13,
  ListsWidget14,
  ListsWidget15,
  ListsWidget3,
  TablesWidget3,
  TimelineWidget1,
} from '../../../_theme/partials/widgets'
import {socials} from '../../../_theme/helpers/data/social'
import {ChartsWidgetCompare} from '../../components/Home/ChartWidgetCompare'
import {Banner} from '../../components/Home/Banner'
import {ChartsWidgetInvoice} from '../../components/Home/ChartWidgetInvoice'

export const Home: FC = () => {
  return (
    <>
      <div className='row g-5 g-xxl-10'>
        {/* begin::Col */}
        <div className='col-xl-4 mb-xxl-10'>
          <ChartsWidgetCompare className='h-xl-100' />

        </div>


        {/* begin::Col */}
        <div className='col-xl-7 col-xxl-8  mb-5 mb-xxl-10'>
          <Banner className={''} text={''} textClass={''} buttonText={''} buttonClass={''} />
        </div>
        {/* end::Col */}
      </div>

      <div className='row g-5 g-xxl-10'>

        <div className='col-xl-4 mb-xl-5 mb-xxl-10'>
          <ChartsWidgetInvoice className={''} Title={'Su'} />
        </div>
        <div className='col-xl-4 mb-xl-5 mb-xxl-10'>
          <ChartsWidgetInvoice className={''} Title={'Gaz'} />
        </div>
        <div className='col-xl-4 mb-xl-5 mb-xxl-10'>
          <ChartsWidgetInvoice className={''} Title={'Elektrik'} />
        </div>


      </div>

    </>
  )
}
