/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown2} from '../..'

type Props = {
  className: string
}

export const ListsWidget2: FC<Props> = ({className}) => {
  return (
    <div className={`card card-flush ${className}`}>
      {/* begin::Header */}
      <div className='card-header pt-5'>
        {/* begin::Title */}
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder text-dark'>External Links</span>
          <span className='text-gray-400 mt-1 fw-bold fs-6'>Most used resources</span>
        </h3>
        {/* end::Title */}
        {/* begin::Toolbar */}
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            className='btn btn-icon btn-color-gray-400 btn-active-color-primary mt-n2 me-n3'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-overflow='true'
          >
            <KTSVG path='/media/icons/duotune/general/gen023.svg' className='svg-icon-1' />
          </button>
          <Dropdown2 />
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-5'>
        {/* begin::Item */}
        <div className='d-flex flex-stack'>
          {/* begin::Title */}
          <a href='#' className='text-primary opacity-75-hover fs-6 fw-bold'>
            Google Analytics
          </a>
          {/* end::Title */}
          {/* begin::Action */}
          <button
            type='button'
            className='btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary me-n4'
          >
            <KTSVG path='/media/icons/duotune/arrows/arr095.svg' className='svg-icon-2' />
          </button>
          {/* end::Action */}
        </div>
        {/* end::Item */}
        {/* begin::Separator */}
        <div className='separator separator-dashed my-3'></div>
        {/* end::Separator */}
        {/* begin::Item */}
        <div className='d-flex flex-stack'>
          {/* begin::Title */}
          <a href='#' className='text-primary opacity-75-hover fs-6 fw-bold'>
            Facebook Ads
          </a>
          {/* end::Title */}
          {/* begin::Action */}
          <button
            type='button'
            className='btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary me-n4'
          >
            <KTSVG path='/media/icons/duotune/arrows/arr095.svg' className='svg-icon-2' />
          </button>
          {/* end::Action */}
        </div>
        {/* end::Item */}
        {/* begin::Separator */}
        <div className='separator separator-dashed my-3'></div>
        {/* end::Separator */}
        {/* begin::Item */}
        <div className='d-flex flex-stack'>
          {/* begin::Title */}
          <a href='#' className='text-primary opacity-75-hover fs-6 fw-bold'>
            Seranking
          </a>
          {/* end::Title */}
          {/* begin::Action */}
          <button
            type='button'
            className='btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary me-n4'
          >
            <KTSVG path='/media/icons/duotune/arrows/arr095.svg' className='svg-icon-2' />
          </button>
          {/* end::Action */}
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}
