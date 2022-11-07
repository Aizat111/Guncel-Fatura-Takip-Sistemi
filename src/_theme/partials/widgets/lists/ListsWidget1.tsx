import {FC} from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown2} from '../..'

type Props = {
  className: string
}

export const ListsWidget1: FC<Props> = ({className}) => {
  return (
    <div className={`card card-flush ${className}`}>
      {/* begin::Header */}
      <div className='card-header pt-5'>
        {/* begin::Title */}
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder text-dark'>Highlights</span>
          <span className='text-gray-400 mt-1 fw-bold fs-6'>Latest social statistics</span>
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
          {/* begin::Section */}
          <div className='text-gray-700 fw-bold fs-6 me-2'>Avg. Client Rating</div>
          {/* end::Section */}
          {/* begin::Statistics */}
          <div className='d-flex align-items-senter'>
            <KTSVG
              path='/media/icons/duotune/arrows/arr094.svg'
              className='svg-icon-2 svg-icon-success me-2'
            />
            {/* begin::Number */}
            <span className='text-gray-900 fw-boldest fs-6'>7.8</span>
            {/* end::Number */}
            <span className='text-gray-400 fw-bolder fs-6'>/10</span>
          </div>
          {/* end::Statistics */}
        </div>
        {/* end::Item */}
        {/* begin::Separator */}
        <div className='separator separator-dashed my-3'></div>
        {/* end::Separator */}
        {/* begin::Item */}
        <div className='d-flex flex-stack'>
          {/* begin::Section */}
          <div className='text-gray-700 fw-bold fs-6 me-2'>Instagram Followers</div>
          {/* end::Section */}
          {/* begin::Statistics */}
          <div className='d-flex align-items-senter'>
            <KTSVG
              path='/media/icons/duotune/arrows/arr093.svg'
              className='svg-icon-2 svg-icon-danger me-2'
            />
            {/* begin::Number */}
            <span className='text-gray-900 fw-boldest fs-6'>730k</span>
            {/* end::Number */}
          </div>
          {/* end::Statistics */}
        </div>
        {/* end::Item */}
        {/* begin::Separator */}
        <div className='separator separator-dashed my-3'></div>
        {/* end::Separator */}
        {/* begin::Item */}
        <div className='d-flex flex-stack'>
          {/* begin::Section */}
          <div className='text-gray-700 fw-bold fs-6 me-2'>Google Ads CPC</div>
          {/* end::Section */}
          {/* begin::Statistics */}
          <div className='d-flex align-items-senter'>
            <KTSVG
              path='/media/icons/duotune/arrows/arr094.svg'
              className='svg-icon-2 svg-icon-success me-2'
            />
            {/* begin::Number */}
            <span className='text-gray-900 fw-boldest fs-6'>$2.09</span>
            {/* end::Number */}
          </div>
          {/* end::Statistics */}
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}
