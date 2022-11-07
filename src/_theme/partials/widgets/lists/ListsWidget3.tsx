import {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Social} from '../../../helpers/data/social'
import {Dropdown2} from '../..'

type Props = {
  className: string
  title?: string
  stat?: string
  data: Array<Social>
}

export const ListsWidget3: FC<Props> = ({className, title, stat, data}) => {
  return (
    <div className={`card card-flush ${className}`}>
      {/* begin::Header */}
      <div className='card-header pt-5'>
        {/* begin::Title */}
        <h3 className='card-title align-items-start flex-column'>
          {title && <span className='card-label fw-bolder text-dark fs-3'>{title}</span>}
          {stat && <span className='card-label fw-bolder text-dark fs-2hx'>{stat}</span>}
          <span className='text-gray-400 mt-1 fw-bold fs-6'>Users from all channels</span>
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
          {/* begin::Menu 2 */}
          <Dropdown2 />
          {/* end::Menu 2 */}
          {/* end::Menu */}
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body'>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <div className='d-flex flex-stack'>
                {/* begin::Section */}
                <div className='d-flex align-items-center me-3'>
                  {/* begin::Icon */}
                  <img src={toAbsoluteUrl(item.image)} className='me-3 w-30px' alt='' />
                  {/* end::Icon */}
                  {/* begin::Section */}
                  <div className='flex-grow-1'>
                    {/* eslint-disable-next-line */}
                    <a href='#' className='text-gray-800 text-hover-primary fs-5 fw-bolder lh-0'>
                      {item.title}
                    </a>
                    <span className='text-gray-400 fw-bold d-block fs-6'>{item.text}</span>
                  </div>
                  {/* end::Section */}
                </div>
                {/* end::Section */}
                {/* begin::Statistics */}
                <div className='d-flex align-items-center w-100 mw-125px'>
                  {/* begin::Progress */}
                  <div className='progress h-6px w-100 me-2 bg-light-success'>
                    <div
                      className='progress-bar bg-success'
                      style={{width: `${item.progress.value}%`}}
                    ></div>
                  </div>
                  {/* end::Progress */}
                  {/* begin::Value */}
                  <span className='text-gray-400 fw-bold'>{item.progress.value}%</span>
                  {/* end::Value */}
                </div>
                {/* end::Statistics */}
              </div>
              <div className='separator separator-dashed my-4'></div>
            </div>
          )
        })}
      </div>
      {/* end::Body */}
    </div>
  )
}
