import {FC} from 'react'
import {toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
}

export const CardsWidget7: FC<Props> = ({className}) => {
  return (
    <div className={`card card-flush ${className}`}>
      {/* begin::Header */}
      <div className='card-header pt-5'>
        {/* begin::Title */}
        <div className='card-title d-flex flex-column'>
          {/* begin::Amount */}
          <span className='fs-2hx fw-bolder text-dark me-2 lh-1'>6.3k</span>
          {/* end::Amount */}
          {/* begin::Subtitle */}
          <span className='text-gray-400 pt-1 fw-bold fs-6'>New Customers This Month</span>
          {/* end::Subtitle */}
        </div>
        {/* end::Title */}
      </div>
      {/* end::Header */}
      {/* begin::Card body */}
      <div className='card-body d-flex flex-column justify-content-end pt-0'>
        {/* begin::Title */}
        <span className='fs-6 fw-boldest text-gray-800 d-block mb-2'>Today’s Heroes</span>
        {/* end::Title */}
        {/* begin::Users group */}
        <div className='symbol-group symbol-hover'>
          <div
            className='symbol symbol-35px symbol-circle'
            data-bs-toggle='tooltip'
            title=''
            data-bs-original-title='Alan Warden'
          >
            <span className='symbol-label bg-warning text-inverse-warning fw-bolder'>A</span>
          </div>
          <div
            className='symbol symbol-35px symbol-circle'
            data-bs-toggle='tooltip'
            title=''
            data-bs-original-title='Michael Eberon'
          >
            <img alt='Pic' src={toAbsoluteUrl('/media/avatars/300-11.jpg')} />
          </div>
          <div
            className='symbol symbol-35px symbol-circle'
            data-bs-toggle='tooltip'
            title=''
            data-bs-original-title='Susan Redwood'
          >
            <span className='symbol-label bg-primary text-inverse-primary fw-bolder'>S</span>
          </div>
          <div
            className='symbol symbol-35px symbol-circle'
            data-bs-toggle='tooltip'
            title=''
            data-bs-original-title='Melody Macy'
          >
            <img alt='Pic' src={toAbsoluteUrl('/media/avatars/300-2.jpg')} />
          </div>
          <div
            className='symbol symbol-35px symbol-circle'
            data-bs-toggle='tooltip'
            title=''
            data-bs-original-title='Perry Matthew'
          >
            <span className='symbol-label bg-danger text-inverse-danger fw-bolder'>P</span>
          </div>
          <div
            className='symbol symbol-35px symbol-circle'
            data-bs-toggle='tooltip'
            title=''
            data-bs-original-title='Barry Walter'
          >
            <img alt='Pic' src={toAbsoluteUrl('/media/avatars/300-12.jpg')} />
          </div>
          {/* eslint-disable-next-line */}
          <a
            href='#'
            className='symbol symbol-35px symbol-circle'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_view_users'
          >
            <span className='symbol-label bg-gray-900 text-gray-300 fs-8 fw-bolder'>+42</span>
          </a>
        </div>
        {/* end::Users group */}
      </div>
      {/* end::Card body */}
    </div>
  )
}
