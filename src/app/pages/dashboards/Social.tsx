import {FC} from 'react'
import {
  CardsWidget1,
  CardsWidget2,
  ChartsWidget1,
  ChartsWidget2,
  EngageWidget1,
  ListsWidget4,
  TablesWidget3,
  TimelineWidget1,
} from '../../../_theme/partials/widgets'
import {socials} from '../../../_theme/helpers/data/social'

export const Social: FC = () => {
  return (
    <>
      <div className='row gy-5 g-xl-10'>
        {/* begin::Col */}
        <div className='col-xl-8 mb-xl-10'>
          <ChartsWidget1 className='h-lg-100' chartHeight={300} />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-4 mb-5 mb-xl-10'>
          <EngageWidget1
            className='h-xl-100'
            image='/media/svg/illustrations/easy/1.svg'
            title={`Have you tried <br>new <span className="fw-bolder">Mobile Application ?</span>`}
            primaryLinkText='Try now'
            secondaryLinkText='Learn more'
          />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row gy-5 g-xl-10'>
        {/* begin::Col */}
        <div className='col-sm-6 col-xl-2 mb-xl-10'>
          <CardsWidget2
            className='h-lg-100'
            image='/media/svg/brand-logos/instagram-2-1.svg'
            cardNumber='320k'
            color='success'
            statistics='2.1'
          />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-sm-6 col-xl-2 mb-xl-10'>
          <CardsWidget2
            className='h-lg-100'
            image='/media/svg/brand-logos/facebook-3.svg'
            cardNumber='1.5M'
            color='danger'
            statistics='0.47'
          />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-sm-6 col-xl-2 mb-xl-10'>
          <CardsWidget2
            className='h-lg-100'
            image='/media/svg/brand-logos/dribbble-icon-1.svg'
            cardNumber='84k'
            color='success'
            statistics='0.6'
          />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-sm-6 col-xl-2 mb-xl-10'>
          <CardsWidget2
            className='h-lg-100'
            image='/media/svg/brand-logos/twitter.svg'
            cardNumber='570k'
            color='success'
            statistics='3'
          />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-4 mb-xl-10'>
          <CardsWidget1
            className='h-sm-100'
            color='#7239EA'
            chartHeight='105px'
            chartColor='#8F5FF4'
          />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row gy-5 g-xl-10'>
        {/* begin::Col */}
        <div className='col-xl-8 mb-5 mb-xl-10'>
          <TimelineWidget1 className='h-lg-100' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-4 mb-5 mb-xl-10'>
          <ListsWidget4 className='h-lg-100' />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row gy-5 g-xl-10'>
        {/* begin::Col */}
        <div className='col-xl-8'>
          <TablesWidget3 className='h-lg-100' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-4'>
          <ChartsWidget2 clasName='h-lg-100' chartColor='primary' chartHeight={90} data={socials} />
        </div>
        {/* end::Col */}
      </div>
    </>
  )
}
