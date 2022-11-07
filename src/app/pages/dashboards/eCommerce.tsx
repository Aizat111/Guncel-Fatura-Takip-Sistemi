import {FC} from 'react'
import {
  CardsWidget5,
  CardsWidget6,
  CardsWidget7,
  ChartsWidget3,
  ChartsWidget4,
  EngageWidget1,
  ListsWidget5,
  TablesWidget2,
  TablesWidget4,
  TablesWidget5,
} from '../../../_theme/partials/widgets'

export const ECommerce: FC = () => {
  return (
    <>
      <div className='row g-5 g-xl-10 mb-xl-10'>
        <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
          <CardsWidget5 className='h-md-50 mb-5 mb-xl-10' />

          <CardsWidget5 className='h-md-50 mb-5 mb-xl-10' />
        </div>

        <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
          <CardsWidget6 className='h-md-50 mb-5 mb-xl-10' chartHeight='80' />

          <CardsWidget7 className='h-md-50 mb-xl-10' />
        </div>

        {/* begin::Col */}
        <div className='col-lg-12 col-xl-12 col-xxl-6 mb-5 mb-xl-0'>
          <ChartsWidget3 className='h-md-100' chartHeight={300} />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row gy-5 g-xl-10'>
        {/* begin::Col */}
        <div className='col-xl-6 mb-xl-10'>
          <TablesWidget2 className='h-md-100' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-6 mb-5 mb-xl-10'>
          <ChartsWidget4 className='h-md-100' chartHeight={300} />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row gy-5 g-xl-10'>
        {/* begin::Col */}
        <div className='col-xl-4 mb-5 mb-xl-10'>
          <EngageWidget1
            className='h-xl-100'
            image='/media/svg/illustrations/easy/2.svg'
            title={`Have you tried <br>new <span className="fw-bolder">Mobile Application ?</span>`}
            primaryLinkText='Try now'
            secondaryLinkText='Learn more'
          />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-8 mb-5 mb-xl-10'>
          <TablesWidget4 className='h-md-100' />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row gy-5 g-xl-10'>
        {/* begin::Col */}
        <div className='col-xl-4 mb-5 mb-xl-0'>
          <ListsWidget5 className='h-md-100' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-8 mb-5 mb-xl-0'>
          <TablesWidget5 className='h-md-100' />
        </div>
        {/* end::Col */}
      </div>
    </>
  )
}
