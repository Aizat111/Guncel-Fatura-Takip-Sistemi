/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown3} from '../../content/dropdown/Dropdown3'

type Props = {
  className: string
}

export const ListsWidget15: FC<Props> = ({className}) => {
  return (
    <div className={`card card-flush ${className}`}>
      {/* begin::Header */}
      <div className='card-header pt-5'>
        {/* begin::Title */}
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder text-dark'>PopuLar Products</span>
          <span className='text-gray-400 pt-2 fw-bold fs-6'>Latest bestsellers</span>
        </h3>
        {/* end::Title */}
        {/* begin::Toolbar */}
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            className='btn btn-icon btn-color-gray-400 btn-active-color-primary mt-n2 me-n2'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-overflow='true'
          >
            <KTSVG
              path='/media/icons/duotune/general/gen023.svg'
              className='svg-icon-1 svg-icon-gray-300 me-n1'
            />
          </button>
          <Dropdown3 />
          {/* end::Menu */}
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-7'>
        {/* begin::Item */}
        <div className='d-flex align-items-sm-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px symbol-2by3 me-4'>
            <div
              className='symbol-label'
              style={{backgroundImage: `url(${toAbsoluteUrl('/media/stock/900x600/20.jpg')})`}}
            ></div>
          </div>
          {/* end::Symbol */}
          {/* begin::Content */}
          <div className='d-flex flex-stack w-100'>
            {/* begin::Title */}
            <div className='my-lg-0 my-2 me-2'>
              <a href='#' className='text-gray-800 fw-bolder text-hover-primary fs-6'>
                BlueSky Apartments
              </a>
              <span className='text-gray-400 fw-bold d-block pt-1'>Most Successful Fellas</span>
            </div>
            {/* end::Title */}
            {/* begin::Menu */}
            <button
              className='btn btn-icon btn-sm w-30px h-30px btn-active-light-primary btn-active-color-primary btn-light'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
              data-kt-menu-overflow='true'
            >
              <KTSVG path='/media/icons/duotune/arrows/arr001.svg' className='svg-icon-5' />
            </button>
            <Dropdown3 />
            {/* end::Menu */}
          </div>
          {/* end::Content */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-sm-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px symbol-2by3 me-4'>
            <div
              className='symbol-label'
              style={{backgroundImage: `url(${toAbsoluteUrl('/media/stock/900x600/23.jpg')})`}}
            ></div>
          </div>
          {/* end::Symbol */}
          {/* begin::Content */}
          <div className='d-flex flex-stack w-100'>
            {/* begin::Title */}
            <div className='my-lg-0 my-2 me-2'>
              <a href='#' className='text-gray-800 fw-bolder text-hover-primary fs-6'>
                Yellow Lines
              </a>
              <span className='text-gray-400 fw-bold d-block pt-1'>Feminine all around</span>
            </div>
            {/* end::Title */}
            {/* begin::Menu */}
            <button
              className='btn btn-icon btn-sm w-30px h-30px btn-active-light-primary btn-active-color-primary btn-light'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
              data-kt-menu-overflow='true'
            >
              <KTSVG path='/media/icons/duotune/arrows/arr001.svg' className='svg-icon-5' />
            </button>
            <Dropdown3 />
            {/* end::Menu */}
          </div>
          {/* end::Content */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-sm-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px symbol-2by3 me-4'>
            <div
              className='symbol-label'
              style={{backgroundImage: `url(${toAbsoluteUrl('/media/stock/900x600/22.jpg')})`}}
            ></div>
          </div>
          {/* end::Symbol */}
          {/* begin::Content */}
          <div className='d-flex flex-stack w-100'>
            {/* begin::Title */}
            <div className='my-lg-0 my-2 me-2'>
              <a href='#' className='text-gray-800 fw-bolder text-hover-primary fs-6'>
                421 Avenue
              </a>
              <span className='text-gray-400 fw-bold d-block pt-1'>Visually stunning</span>
            </div>
            {/* end::Title */}
            {/* begin::Menu */}
            <button
              className='btn btn-icon btn-sm w-30px h-30px btn-active-light-primary btn-active-color-primary btn-light'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
              data-kt-menu-overflow='true'
            >
              <KTSVG path='/media/icons/duotune/arrows/arr001.svg' className='svg-icon-5' />
            </button>
            <Dropdown3 />
            {/* end::Menu */}
          </div>
          {/* end::Content */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-sm-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px symbol-2by3 me-4'>
            <div
              className='symbol-label'
              style={{backgroundImage: `url(${toAbsoluteUrl('/media/stock/900x600/19.jpg')})`}}
            ></div>
          </div>
          {/* end::Symbol */}
          {/* begin::Content */}
          <div className='d-flex flex-stack w-100'>
            {/* begin::Title */}
            <div className='my-lg-0 my-2 me-2'>
              <a href='#' className='text-gray-800 fw-bolder text-hover-primary fs-6'>
                Glassbricks
              </a>
              <span className='text-gray-400 fw-bold d-block pt-1'>
                The will to capture readers
              </span>
            </div>
            {/* end::Title */}
            {/* begin::Menu */}
            <button
              className='btn btn-icon btn-sm w-30px h-30px btn-active-light-primary btn-active-color-primary btn-light'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
              data-kt-menu-overflow='true'
            >
              <KTSVG path='/media/icons/duotune/arrows/arr001.svg' className='svg-icon-5' />
            </button>
            <Dropdown3 />
            {/* end::Menu */}
          </div>
          {/* end::Content */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-sm-center'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px symbol-2by3 me-4'>
            <div
              className='symbol-label'
              style={{backgroundImage: `url(${toAbsoluteUrl('/media/stock/900x600/3.jpg')})`}}
            ></div>
          </div>
          {/* end::Symbol */}
          {/* begin::Content */}
          <div className='d-flex flex-stack w-100'>
            {/* begin::Title */}
            <div className='my-lg-0 my-2 me-2'>
              <a href='#' className='text-gray-800 fw-bolder text-hover-primary fs-6'>
                RollerCoaster
              </a>
              <span className='text-gray-400 fw-bold d-block pt-1'>
                Food trends &amp; inspirations
              </span>
            </div>
            {/* end::Title */}
            {/* begin::Menu */}
            <button
              className='btn btn-icon btn-sm w-30px h-30px btn-active-light-primary btn-active-color-primary btn-light'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
              data-kt-menu-overflow='true'
            >
              <KTSVG path='/media/icons/duotune/arrows/arr001.svg' className='svg-icon-5' />
            </button>
            <Dropdown3 />
            {/* end::Menu */}
          </div>
          {/* end::Content */}
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}
