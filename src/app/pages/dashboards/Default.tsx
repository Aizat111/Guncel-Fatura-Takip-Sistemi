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

export const Default: FC = () => {
  return (
    <>
      <div className='row g-5 g-xxl-10'>
        {/* begin::Col */}
        <div className='col-xl-5 col-xxl-4 mb-xl-5 mb-xxl-10'>
          <CardsWidget6 className='h-xl-100' chartHeight='100' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-7 col-xxl-8  mb-5 mb-xxl-10'>
          <EngageWidget2
            className='h-xl-100 bg-gray-200 border-0'
            text='Good admin theme </br> is a tool of enthusiasm'
            textClass='text-gray-800'
            buttonClass='btn-danger'
            buttonText='Create App'
          />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}
      {/* begin::Row */}
      <div className='row g-5 g-xxl-10'>
        {/* begin::Col */}
        <div className='col-xl-4 mb-xl-5 mb-xxl-10'>
          <ChartsWidget9 className='h-xl-100' chartHeight={250} />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-8 mb-5 mb-xxl-10'>
          <ChartsWidget1
            className='h-xl-100'
            chartHeight={300}
            chartColor='rgba(150, 142, 126, 0.2)'
          />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}
      {/* begin::Row */}
      <div className='row g-5 g-xxl-10'>
        {/* begin::Col */}
        <div className='col-xl-4 mb-xl-5 mb-xxl-10'>
          <ListsWidget3 className='h-xl-100' stat='234,456' data={socials} />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-8 mb-5 mb-xxl-10'>
          <TablesWidget3 className='h-xl-100' />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}
      {/* begin::Row */}
      <div className='row g-5 g-xxl-10'>
        {/* begin::Col */}
        <div className='col-xl-4 mb-xl-5 mb-xxl-10'>
          <ListsWidget13 className='h-xl-100' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-8 mb-5 mb-xxl-10'>
          <TimelineWidget1 className='h-xl-100' />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}
      {/* begin::Row */}
      <div className='row g-5 g-xxl-10'>
        {/* begin::Col */}
        <div className='col-xl-4 mb-xxl-10'>
          <ChartsWidget5 className='h-xl-100' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-4 mb-xxl-10'>
          <ListsWidget14 className='h-xl-100' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-4 mb-xxl-10'>
          <ListsWidget15 className='h-xl-100' />
        </div>
        {/* end::Col */}
      </div>
    </>
  )
}
