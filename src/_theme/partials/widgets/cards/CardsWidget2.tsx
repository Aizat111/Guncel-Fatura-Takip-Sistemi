import {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
  image: string
  cardNumber: string
  color: string
  statistics: string
}

export const CardsWidget2: FC<Props> = ({className, image, cardNumber, color, statistics}) => {
  return (
    <div className={`card card-flush ${className}`}>
      {/* begin::Body */}
      <div className='card-body d-flex justify-content-between flex-column'>
        {/* begin::Icon */}
        <img src={toAbsoluteUrl(image)} className='w-35px' alt='' />
        {/* end::Icon */}
        {/* begin::Section */}
        <div className='d-flex flex-column my-7'>
          {/* begin::Number */}
          <span className='fw-bold fs-3x text-gray-800 lh-1'>{cardNumber}</span>
          {/* end::Number */}
          {/* begin::Follower */}
          <span className='fw-bold fs-6 text-gray-400'>Followers</span>
          {/* end::Follower */}
        </div>
        {/* end::Section */}
        {/* begin::Statistics */}
        <div className='m-0'>
          {/* begin::Badge */}
          <span className={`badge badge-${color} px-2`}>
            <KTSVG
              path={`/media/icons/duotune/arrows/${color === 'success' ? 'arr067' : 'arr068'}.svg`}
              className='svg-icon-7 svg-icon-white'
            />
            {statistics} %
          </span>
          {/* end::Badge */}
        </div>
        {/* end::Statistics */}
      </div>
      {/* end::Body */}
    </div>
  )
}
