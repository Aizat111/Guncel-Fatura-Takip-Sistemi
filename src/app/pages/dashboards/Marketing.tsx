import {FC} from 'react'
import {
  CardsWidget1,
  ChartsWidget8,
  EngageWidget1,
  ListsWidget1,
  ListsWidget2,
  ListsWidget3,
  TablesWidget1,
  TablesWidget6,
  TimelineWidget1,
} from '../../../_theme/partials/widgets'
import {socials} from '../../../_theme/helpers/data/social'
import {getItems} from '../../../_theme/helpers'

export const Marketing: FC = () => {
  return (
    <>
      <div className='row gy-5 g-xl-10'>
        {/* begin::Col */}
        <div className='col-xxl-6'>
          {/* begin::Row */}
          <div className='row gx-5 gx-xl-10'>
            {/* begin::Col */}
            <div className='col-sm-6 mb-5 mb-xl-10'>
              <ListsWidget1 className='h-lg-100' />
            </div>
            {/* end::Col */}

            {/* begin::Col */}
            <div className='col-sm-6 mb-5 mb-xl-10'>
              <ListsWidget2 className='h-lg-100' />
            </div>
            {/* end::Col */}
          </div>
          {/* end::Row */}
          <TablesWidget1 className='mb-xxl-10' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xxl-6 mb-5 mb-xl-10'>
          <ChartsWidget8 className='h-xl-100' chartHeight={425} />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}
      {/* begin::Row */}
      <div className='row gy-5 g-xl-10'>
        {/* begin::Col */}
        <div className='col-xl-12 col-xxl-4'>
          {/* begin::Row */}
          <div className='row gy-5 g-xl-10'>
            {/* begin::Col */}
            <div className='col-md-6 col-xxl-12'>
              <CardsWidget1
                className='h-sm-100'
                color='#22232B'
                chartHeight='105px'
                chartColor='primary'
              />
            </div>
            {/* end::Col */}

            {/* begin::Col */}
            <div className='col-md-6 col-xxl-12 mb-xxl-10'>
              <ListsWidget3 className='h-sm-100' title='Channels' data={getItems(socials, 4)} />
            </div>
            {/* end::Col */}
          </div>
          {/* end::Row */}
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-12 col-xxl-8 mb-5 mb-xl-10'>
          <TablesWidget6 className='h-xl-100' />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}
      {/* begin::Row */}
      <div className='row gy-5 g-xl-10'>
        {/* begin::Col */}
        <div className='col-xl-4'>
          <EngageWidget1
            className='h-xl-100'
            image='/media/svg/illustrations/easy/1.svg'
            title={`Have you tried <br>new <span className="fw-bolder">Mobile Application ?</span>`}
            primaryLinkText='Try now'
            secondaryLinkText='Learn more'
          />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-8'>
          <TimelineWidget1 className='h-xl-100' />
        </div>
        {/* end::Col */}
      </div>
    </>
  )
}
