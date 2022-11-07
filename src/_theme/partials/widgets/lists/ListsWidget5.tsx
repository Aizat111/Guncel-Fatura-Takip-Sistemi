/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown2} from '../../content/dropdown/Dropdown2'

type Props = {
  className: string
}

const products = [
  {
    image: '/media/stock/ecommerce/210.gif',
    title: 'Elephant 1802',
    customer: 'Jason Bourne',
    label: 'Delivered',
    labelColor: 'success',
  },
  {
    image: '/media/stock/ecommerce/209.gif',
    title: 'RiseUP',
    customer: 'Marie Durant',
    label: 'Shipping',
    labelColor: 'primary',
  },
  {
    image: '/media/stock/ecommerce/214.gif',
    title: 'Yellow Stone',
    customer: 'Dan Wilson',
    label: 'Confirmed',
    labelColor: 'danger',
  },
  {
    image: '/media/stock/ecommerce/211.gif',
    title: 'Elephant 1802',
    customer: 'Lebron Wayde',
    label: 'Delivered',
    labelColor: 'success',
  },
  {
    image: '/media/stock/ecommerce/215.gif',
    title: 'RiseUP',
    customer: 'Ana Simmons',
    label: 'Shipping',
    labelColor: 'primary',
  },
  {
    image: '/media/stock/ecommerce/192.gif',
    title: 'Yellow Stone',
    customer: 'Kevin Leonard',
    label: 'Confirmed',
    labelColor: 'danger',
  },
]

export const ListsWidget5: FC<Props> = ({className}) => {
  return (
    <div className={`card card-flush ${className}`}>
      {/* begin::Header */}
      <div className='card-header pt-7'>
        {/* begin::Title */}
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder text-dark'>Product Delivery</span>
          <span className='text-gray-400 mt-1 fw-bold fs-6'>1M Products Shipped so far</span>
        </h3>
        {/* end::Title */}

        {/* begin::Toolbar */}
        <div className='card-toolbar'>
          <a href='#' className='btn btn-sm btn-light'>
            Order Details
          </a>
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body'>
        {/* begin::Scroll */}
        <div className='hover-scroll-overlay-y pe-6 me-n6' style={{height: '415px'}}>
          {products.map((product, key) => {
            return (
              <div
                className={`rounded border-gray-300 border-1 border-gray-300 border-dashed px-7 py-3 ${
                  key === products.length ? '' : 'mb-6'
                }`}
                key={key}
              >
                {/* begin::Info */}
                <div className='d-flex flex-stack mb-3'>
                  {/* begin::Wrapper */}
                  <div className='me-3'>
                    {/* begin::Icon */}
                    <img src={toAbsoluteUrl(product.image)} className='w-50px ms-n1 me-1' alt='' />
                    {/* end::Icon */}

                    {/* begin::Title */}
                    <a href='#' className='text-gray-800 text-hover-primary fw-bolder'>
                      {product.title}
                    </a>
                    {/* end::Title */}
                  </div>
                  {/* end::Wrapper */}

                  {/* begin::Action */}
                  <div className='m-0'>
                    {/* begin::Menu */}
                    <button
                      className='btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end'
                      data-kt-menu-trigger='click'
                      data-kt-menu-placement='bottom-end'
                      data-kt-menu-overflow='true'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen023.svg'
                        className='svg-icon-1'
                      />
                    </button>
                    <Dropdown2 />
                    {/* end::Menu */}
                  </div>
                  {/* end::Action */}
                </div>
                {/* end::Info */}

                {/* begin::Customer */}
                <div className='d-flex flex-stack'>
                  {/* begin::Name */}
                  <span className='text-gray-400 fw-bolder'>
                    To:
                    <a href='#' className='text-gray-800 text-hover-primary fw-bolder'>
                      {product.customer}
                    </a>
                  </span>
                  {/* end::Name */}

                  {/* begin::Label */}
                  <span className={`badge badge-light-${product.labelColor}`}>{product.label}</span>
                  {/* end::Label */}
                </div>
                {/* end::Customer */}
              </div>
            )
          })}
        </div>
        {/* end::Scroll */}
      </div>
      {/* end::Body */}
    </div>
  )
}
