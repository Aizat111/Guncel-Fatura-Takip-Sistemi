import {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
}

export const ListsWidget13: FC<Props> = ({className}) => {
  return (
    <div className={`card card-flush ${className}`}>
      {/* begin::Header */}
      <div className='card-header pt-5'>
        {/* begin::Title */}
        <div className='card-title d-flex flex-column'>
          {/* begin::Info */}
          <div className='d-flex align-items-center'>
            {/* begin::Currency */}
            <span className='fs-4 fw-bold text-gray-400 me-1 align-self-start'>$</span>
            {/* end::Currency */}
            {/* begin::Amount */}
            <span className='fs-2hx fw-bolder text-dark me-2 lh-1'>2,404</span>
            {/* end::Amount */}
            {/* begin::Badge */}
            <span
              className='badge badge-success fs-6 lh-1 py-1 px-2 d-flex flex-center'
              style={{height: '22px'}}
            >
              <KTSVG
                path='/media/icons/duotune/arrows/arr067.svg'
                className='svg-icon-7 svg-icon-white ms-n1'
              />
              3.5%
            </span>
            {/* end::Badge */}
          </div>
          {/* end::Info */}
          {/* begin::Subtitle */}
          <span className='text-gray-400 pt-1 fw-bold fs-6'>Top 6 Countries by Order</span>
          {/* end::Subtitle */}
        </div>
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
            <KTSVG path='/media/icons/duotune/general/gen023.svg' className='svg-icon-1' />
          </button>
          <div
            className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3'
            data-kt-menu='true'
          >
            {/* begin::Heading */}
            <div className='menu-item px-3'>
              <div className='menu-content text-muted pb-2 px-3 fs-7 text-uppercase'>Payments</div>
            </div>
            {/* end::Heading */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              {/* eslint-disable-next-line */}
              <a href='#' className='menu-link px-3'>
                Create Invoice
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              {/* eslint-disable-next-line */}
              <a href='#' className='menu-link flex-stack px-3'>
                Create Payment
                <i
                  className='fas fa-exclamation-circle ms-2 fs-7'
                  data-bs-toggle='tooltip'
                  title=''
                  data-bs-original-title='Specify a target name for future usage and reference'
                  aria-label='Specify a target name for future usage and reference'
                ></i>
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              {/* eslint-disable-next-line */}
              <a href='#' className='menu-link px-3'>
                Generate Bill
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div
              className='menu-item px-3'
              data-kt-menu-trigger='hover'
              data-kt-menu-placement='right-end'
            >
              {/* eslint-disable-next-line */}
              <a href='#' className='menu-link px-3'>
                <span className='menu-title'>Subscription</span>
                <span className='menu-arrow'></span>
              </a>
              {/* begin::Menu sub */}
              <div className='menu-sub menu-sub-dropdown w-175px py-4'>
                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                  {/* eslint-disable-next-line */}
                  <a href='#' className='menu-link px-3'>
                    Plans
                  </a>
                </div>
                {/* end::Menu item */}
                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                  {/* eslint-disable-next-line */}
                  <a href='#' className='menu-link px-3'>
                    Billing
                  </a>
                </div>
                {/* end::Menu item */}
                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                  {/* eslint-disable-next-line */}
                  <a href='#' className='menu-link px-3'>
                    Statements
                  </a>
                </div>
                {/* end::Menu item */}
                {/* begin::Menu separator */}
                <div className='separator my-2'></div>
                {/* end::Menu separator */}
                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                  <div className='menu-content px-3'>
                    {/* begin::Switch */}
                    <label className='form-check form-switch form-check-custom form-check-solid'>
                      {/* begin::Input */}
                      <input
                        className='form-check-input w-30px h-20px'
                        type='checkbox'
                        value='1'
                        name='notifications'
                      />
                      {/* end::Input */}
                      {/* end::Label */}
                      <span className='form-check-label text-muted fs-6'>Recuring</span>
                      {/* end::Label */}
                    </label>
                    {/* end::Switch */}
                  </div>
                </div>
                {/* end::Menu item */}
              </div>
              {/* end::Menu sub */}
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className='menu-item px-3 my-1'>
              {/* eslint-disable-next-line */}
              <a href='#' className='menu-link px-3'>
                Settings
              </a>
            </div>
            {/* end::Menu item */}
          </div>
          {/* begin::Menu 3 */}

          {/* end::Menu 3 */}
          {/* end::Menu */}
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body'>
        {/* begin::Item */}
        <div className='d-flex flex-stack mb-8'>
          {/* begin::Section */}
          <div className='d-flex align-items-center me-5'>
            {/* begin::Flag */}
            <img
              src={toAbsoluteUrl('/media/flags/united-states.svg')}
              className='me-3'
              style={{width: '20px', borderRadius: '4px'}}
              alt=''
            />
            {/* end::Flag */}
            {/* eslint-disable-next-line */}
            <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
              USA
            </a>
          </div>
          {/* end::Section */}
          {/* begin::Wrapper */}
          <div className='text-gray-800 fw-bolder fs-6'>
            {/* begin::Number */}
            <span className='me-7'>1,067</span>
            {/* end::Number */}
            {/* begin::Statistics */}
            <span className='m-0'>
              <KTSVG
                path='/media/icons/duotune/arrows/arr067.svg'
                className='svg-icon-7 svg-icon-success'
              />
              % 5.7
            </span>
            {/* end::Statistics */}
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex flex-stack mb-8'>
          {/* begin::Section */}
          <div className='d-flex align-items-center me-5'>
            {/* begin::Flag */}
            <img
              src={toAbsoluteUrl('/media/flags/brazil.svg')}
              className='me-3'
              style={{width: '20px', borderRadius: '4px'}}
              alt=''
            />
            {/* end::Flag */}
            {/* eslint-disable-next-line */}
            <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
              Brasil
            </a>
          </div>
          {/* end::Section */}
          {/* begin::Wrapper */}
          <div className='text-gray-800 fw-bolder fs-6'>
            {/* begin::Number */}
            <span className='me-7'>684</span>
            {/* end::Number */}
            {/* begin::Statistics */}
            <span className='m-0'>
              <KTSVG
                path='/media/icons/duotune/arrows/arr068.svg'
                className='svg-icon-7 svg-icon-danger'
              />
              % 2.1
            </span>
            {/* end::Statistics */}
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex flex-stack mb-8'>
          {/* begin::Section */}
          <div className='d-flex align-items-center me-5'>
            {/* begin::Flag */}
            <img
              src={toAbsoluteUrl('/media/flags/turkey.svg')}
              className='me-3'
              style={{width: '20px', borderRadius: '4px'}}
              alt=''
            />
            {/* end::Flag */}
            {/* eslint-disable-next-line */}
            <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
              Turkey
            </a>
          </div>
          {/* end::Section */}
          {/* begin::Wrapper */}
          <div className='text-gray-800 fw-bolder fs-6'>
            {/* begin::Number */}
            <span className='me-7'>557</span>
            {/* end::Number */}
            {/* begin::Statistics */}
            <span className='m-0'>
              <KTSVG
                path='/media/icons/duotune/arrows/arr067.svg'
                className='svg-icon-7 svg-icon-success'
              />
              % 0.3
            </span>
            {/* end::Statistics */}
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex flex-stack mb-8'>
          {/* begin::Section */}
          <div className='d-flex align-items-center me-5'>
            {/* begin::Flag */}
            <img
              src={toAbsoluteUrl('/media/flags/france.svg')}
              className='me-3'
              style={{width: '20px', borderRadius: '4px'}}
              alt=''
            />
            {/* end::Flag */}
            {/* eslint-disable-next-line */}
            <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
              France
            </a>
          </div>
          {/* end::Section */}
          {/* begin::Wrapper */}
          <div className='text-gray-800 fw-bolder fs-6'>
            {/* begin::Number */}
            <span className='me-7'>308</span>
            {/* end::Number */}
            {/* begin::Statistics */}
            <span className='m-0'>
              <KTSVG
                path='/media/icons/duotune/arrows/arr067.svg'
                className='svg-icon-7 svg-icon-success'
              />
              % 1.9
            </span>
            {/* end::Statistics */}
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex flex-stack mb-8'>
          {/* begin::Section */}
          <div className='d-flex align-items-center me-5'>
            {/* begin::Flag */}
            <img
              src={toAbsoluteUrl('/media/flags/india.svg')}
              className='me-3'
              style={{width: '20px', borderRadius: '4px'}}
              alt=''
            />
            {/* end::Flag */}
            {/* eslint-disable-next-line */}
            <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
              India
            </a>
          </div>
          {/* end::Section */}
          {/* begin::Wrapper */}
          <div className='text-gray-800 fw-bolder fs-6'>
            {/* begin::Number */}
            <span className='me-7'>184</span>
            {/* end::Number */}
            {/* begin::Statistics */}
            <span className='m-0'>
              <KTSVG
                path='/media/icons/duotune/arrows/arr067.svg'
                className='svg-icon-7 svg-icon-danger'
              />
              % 2.3
            </span>
            {/* end::Statistics */}
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex flex-stack mb-8'>
          {/* begin::Section */}
          <div className='d-flex align-items-center me-5'>
            {/* begin::Flag */}
            <img
              src={toAbsoluteUrl('/media/flags/sweden.svg')}
              className='me-3'
              style={{width: '20px', borderRadius: '4px'}}
              alt=''
            />
            {/* end::Flag */}
            {/* eslint-disable-next-line */}
            <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
              Sweden
            </a>
          </div>
          {/* end::Section */}
          {/* begin::Wrapper */}
          <div className='text-gray-800 fw-bolder fs-6'>
            {/* begin::Number */}
            <span className='me-7'>62</span>
            {/* end::Number */}
            {/* begin::Statistics */}
            <span className='m-0'>
              <KTSVG
                path='/media/icons/duotune/arrows/arr067.svg'
                className='svg-icon-7 svg-icon-success'
              />
              % 4.8
            </span>
            {/* end::Statistics */}
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex flex-stack'>
          {/* begin::Section */}
          <div className='d-flex align-items-center me-5'>
            {/* begin::Flag */}
            <img
              src={toAbsoluteUrl('/media/flags/cuba.svg')}
              className='me-3'
              style={{width: '20px', borderRadius: '4px'}}
              alt=''
            />
            {/* end::Flag */}
            {/* eslint-disable-next-line */}
            <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
              Cuba
            </a>
          </div>
          {/* end::Section */}
          {/* begin::Wrapper */}
          <div className='text-gray-800 fw-bolder fs-6'>
            {/* begin::Number */}
            <span className='me-7'>45</span>
            {/* end::Number */}
            {/* begin::Statistics */}
            <span className='m-0'>
              <KTSVG
                path='/media/icons/duotune/arrows/arr068.svg'
                className='svg-icon-7 svg-icon-danger'
              />
              % 7.5
            </span>
            {/* end::Statistics */}
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}
