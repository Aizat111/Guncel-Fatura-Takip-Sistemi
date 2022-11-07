import {FC} from 'react'
import {KTSVG} from '../../../helpers'

type Props = {
  className: string
}

export const CardsWidget5: FC<Props> = ({className}) => {
  return (
    <div className={`card card-flush ${className}`}>
      {/* begin::Header */}
      <div className=' card-header pt-5'>
        {/* begin::Title */}
        <div className=' card-title d-flex flex-column'>
          {/* begin::Info */}
          <div className=' d-flex align-items-center'>
            {/* begin::Amount */}
            <span className=' fs-2hx fw-bolder text-dark me-2 lh-1'>1,836</span>
            {/* end::Amount */}
            {/* begin::Badge */}
            <span
              className=' badge badge-danger fs-6 lh-1 py-1 px-2 d-flex flex-center'
              style={{height: '22px'}}
            >
              <KTSVG
                path='/media/icons/duotune/arrows/arr068.svg'
                className='svg-icon-7 svg-icon-white ms-n1'
              />
              2.2%
            </span>
            {/* end::Badge */}
          </div>
          {/* end::Info */}
          {/* begin::Subtitle */}
          <span className=' text-gray-400 pt-1 fw-bold fs-6'>Orders This Month</span>
          {/* end::Subtitle */}
        </div>
        {/* end::Title */}
      </div>
      {/* end::Header */}
      {/* begin::Card body */}
      <div className=' card-body d-flex align-items-end pt-0'>
        {/* begin::Progress */}
        <div className=' d-flex align-items-center flex-column mt-3 w-100'>
          <div className=' d-flex justify-content-between w-100 mt-auto mb-2'>
            <span className=' fw-boldest fs-6 text-dark'>1,048 to Goal</span>
            <span className=' fw-bolder fs-6 text-gray-400'>62%</span>
          </div>
          <div className=' h-8px mx-3 w-100 bg-light-success rounded'>
            <div
              className=' bg-success rounded h-8px'
              role='progressbar'
              style={{width: '62%'}}
            ></div>
          </div>
        </div>
        {/* end::Progress */}
      </div>
      {/* end::Card body */}
    </div>
  )
}
