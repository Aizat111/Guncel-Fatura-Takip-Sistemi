/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../..'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'

type Props = {
  className: string
}

export const TablesWidget3: FC<Props> = ({className}) => {
  const [tabNumber, setTabNumber] = useState<number>(1)

  return (
    <div className={`card card-flush ${className}`} data-select2-id='select2-data-174-lp3l'>
      {/* begin::Card header */}
      <div className='card-header py-7'>
        {/* begin::Tabs */}
        <div className='card-title pt-3 mb-0 gap-4 gap-lg-10 gap-xl-15 nav nav-tabs border-bottom-0'>
          {/* begin::Tab item */}
          <div
            className={`fs-4 fw-bolder pb-3 cursor-pointer ${
              tabNumber === 1 ? 'border-bottom border-3 border-primary' : 'text-muted'
            }`}
            onClick={() => {
              setTabNumber(1)
            }}
          >
            All Campaigns (47)
          </div>
          {/* end::Tab item */}
          {/* begin::Tab item */}
          <div
            className={`fs-4 fw-bolder pb-3 cursor-pointer ${
              tabNumber === 2 ? 'border-bottom border-3 border-primary' : 'text-muted'
            }`}
            onClick={() => {
              setTabNumber(2)
            }}
          >
            Pending (8)
          </div>
          {/* end::Tab item */}
          {/* begin::Tab item */}
          <div
            className={`fs-4 fw-bolder pb-3 cursor-pointer ${
              tabNumber === 3 ? 'border-bottom border-3 border-primary' : 'text-muted'
            }`}
            onClick={() => {
              setTabNumber(3)
            }}
          >
            Completed (39)
          </div>
          {/* end::Tab item */}
        </div>
        {/* end::Tabs */}
        {/* begin::Create campaign button */}
        <div className='card-toolbar'>
          <OverlayTrigger
            key='top'
            placement='top'
            overlay={<Tooltip id='tooltip-top'>Coming soon</Tooltip>}
          >
            <button className='btn btn-danger'>Create Campaign</button>
          </OverlayTrigger>
        </div>
        {/* end::Create campaign button */}
      </div>
      {/* end::Card header */}
      {/* begin::Card body */}
      <div className='card-body pt-1' data-select2-id='select2-data-173-atm3'>
        {/* begin::Sort & Filter */}
        <div className='d-flex flex-stack flex-wrap gap-4' data-select2-id='select2-data-172-n2uq'>
          {/* begin::Sort */}
          <div
            className='d-flex align-items-center flex-wrap gap-3 gap-xl-9'
            data-select2-id='select2-data-171-7uek'
          >
            {/* begin::Type */}
            <div
              className='d-flex align-items-center fw-bolder'
              data-select2-id='select2-data-170-zon3'
            >
              {/* begin::Label */}
              <div className='text-muted fs-7'>Type</div>
              {/* end::Label */}
              {/* begin::Select */}
              <select className='form-select form-select-transparent text-dark fs-7 lh-1 fw-bolder py-0 ps-3 w-auto select2-hidden-accessible'>
                <option value='Show All' defaultChecked>
                  Show All
                </option>
                <option value='Newest' data-select2-id='select2-data-180-gole'>
                  Newest
                </option>
                <option value='oldest' data-select2-id='select2-data-181-tswh'>
                  Oldest
                </option>
              </select>
              {/* end::Select */}
            </div>
            {/* end::Type */}
            {/* begin::Status */}
            <div className='d-flex align-items-center fw-bolder'>
              {/* begin::Label */}
              <div className='text-muted fs-7 me-2'>Status</div>
              {/* end::Label */}
              {/* begin::Select */}
              <select className='form-select form-select-transparent text-dark fs-7 lh-1 fw-bolder py-0 ps-3 w-auto bg-transparent'>
                <option value='Show All' defaultChecked>
                  Show All
                </option>
                <option value='Live Now'>Live Now</option>
                <option value='Reviewing'>Reviewing</option>
                <option value='Paused'>Paused</option>
              </select>
              {/* end::Select */}
            </div>
            {/* begin::Status */}
            {/* begin::Budget */}
            <div className='d-flex align-items-center fw-bolder'>
              {/* begin::Label */}
              <div className='text-muted me-2'>Budget</div>
              {/* end::Label */}
              {/* begin::Select */}
              <select className='form-select form-select-transparent text-dark fs-7 lh-1 fw-bolder py-0 ps-3 w-auto bg-transparent'>
                <option value='Show All' defaultChecked>
                  Show All
                </option>
                <option value='<5000'>Less than $5,000</option>
                <option value='5000-10000'>$5,001 - $10,000</option>
                <option value='>10000'>More than $10,001</option>
              </select>
              {/* end::Select */}
            </div>
            {/* begin::Budget */}
          </div>
          {/* end::Sort */}
          {/* begin::Filter */}
          <div className='d-flex align-items-center gap-4'>
            {/* begin::Filter button */}
            <a
              href='#'
              className='text-hover-primary ps-4'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
            >
              <KTSVG
                path='/media/icons/duotune/general/gen031.svg'
                className='svg-icon-2 svg-icon-gray-400'
              />
            </a>
            {/* begin::Menu 1 */}
            <Dropdown1 />
            {/* end::Menu 1 */}
            {/* end::Filter button */}
          </div>
          {/* end::Filter */}
        </div>
        {/* end::Sort & Filter */}
        {/* begin::Seprator */}
        <div className='separator separator-dashed my-5'></div>
        {/* end::Seprator */}
        {/* begin::Table */}
        <div id='kt_widget_table_3_wrapper' className='dataTables_wrapper dt-bootstrap4 no-footer'>
          <div className='table-responsive'>
            <table
              id='kt_widget_table_3'
              className='table table-row-dashed align-middle fs-6 gy-4 my-0 dataTable no-footer'
              data-kt-table-widget-3='all'
            >
              <thead className='d-none'>
                <tr></tr>
              </thead>
              <tbody>
                {tabNumber === 1 && (
                  <>
                    <tr className='odd'>
                      {/* begin::Campaign */}
                      <td className='min-w-175px'>
                        <div className='position-relative px-7 py-2'>
                          <div className='position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-info'></div>
                          <a href='#' className='mb-1 text-dark text-hover-primary fw-bolder'>
                            Happy Christmas
                          </a>
                          <div className='fs-7 text-muted fw-bolder'>Created on 24 Dec 21</div>
                        </div>
                      </td>
                      {/* end::Campaign */}
                      {/* begin::Platforms */}
                      <td>
                        {/* begin::Icons */}
                        <div className='d-flex gap-2 mb-2'>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/facebook-4.svg')}
                              alt=''
                            />
                          </a>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/twitter-2.svg')}
                              alt=''
                            />
                          </a>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/instagram-2-1.svg')}
                              alt=''
                            />
                          </a>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/linkedin-2.svg')}
                              alt=''
                            />
                          </a>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/youtube-3.svg')}
                              alt=''
                            />
                          </a>
                        </div>
                        {/* end::Icons */}
                        <div className='fs-7 text-muted fw-bolder'>Labor 24 - 35 years</div>
                      </td>
                      {/* end::Platforms */}
                      {/* begin::Status */}
                      <td>
                        <span className='badge badge-light-success'>Live Now</span>
                      </td>
                      {/* end::Status */}
                      {/* begin::Team */}
                      <td className='min-w-125px'>
                        {/* begin::Team members */}
                        <div className='symbol-group symbol-hover mb-1'>
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-6.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-5.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <div className='symbol-label bg-light-warning'>
                              <span className='fs-7 text-warning'>C</span>
                            </div>
                          </div>
                          {/* end::Member */}
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-25.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-9.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                          {/* begin::More members */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <div className='symbol-label bg-dark'>
                              <span className='fs-9 text-white'>+3</span>
                            </div>
                          </div>
                          {/* end::More members */}
                        </div>
                        {/* end::Team members */}
                        <div className='fs-7 fw-bolder text-muted'>Team Members</div>
                      </td>
                      {/* end::Team */}
                      {/* begin::Date */}
                      <td className='min-w-150px'>
                        <div className='mb-2 fw-bolder'>24 Dec 21 - 06 Jan 22</div>
                        <div className='fs-7 fw-bolder text-muted'>Date range</div>
                      </td>
                      {/* end::Date */}
                      {/* begin::Progress */}
                      <td className='d-none'>Pending</td>
                      {/* end::Progress */}
                      {/* begin::Action */}
                      <td className='text-end'>
                        <button
                          type='button'
                          className='btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px'
                        >
                          <KTSVG path='/media/icons/duotune/arrows/arr001.svg' />
                        </button>
                      </td>
                      {/* end::Action */}
                    </tr>
                    <tr className='even'>
                      {/* begin::Campaign */}
                      <td className='min-w-175px'>
                        <div className='position-relative px-7 py-2'>
                          <div className='position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-warning'></div>
                          <a href='#' className='mb-1 text-dark text-hover-primary fw-bolder'>
                            Halloween
                          </a>
                          <div className='fs-7 text-muted fw-bolder'>Created on 24 Dec 21</div>
                        </div>
                      </td>
                      {/* end::Campaign */}
                      {/* begin::Platforms */}
                      <td>
                        {/* begin::Icons */}
                        <div className='d-flex gap-2 mb-2'>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/twitter-2.svg')}
                              alt=''
                            />
                          </a>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/instagram-2-1.svg')}
                              alt=''
                            />
                          </a>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/youtube-3.svg')}
                              alt=''
                            />
                          </a>
                        </div>
                        {/* end::Icons */}
                        <div className='fs-7 text-muted fw-bolder'>Labor 37 - 52 years</div>
                      </td>
                      {/* end::Platforms */}
                      {/* begin::Status */}
                      <td>
                        <span className='badge badge-light-primary'>Reviewing</span>
                      </td>
                      {/* end::Status */}
                      {/* begin::Team */}
                      <td className='min-w-125px'>
                        {/* begin::Team members */}
                        <div className='symbol-group symbol-hover mb-1'>
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-25.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-6.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                        </div>
                        {/* end::Team members */}
                        <div className='fs-7 fw-bolder text-muted'>Team Members</div>
                      </td>
                      {/* end::Team */}
                      {/* begin::Date */}
                      <td className='min-w-150px'>
                        <div className='mb-2 fw-bolder'>03 Feb 22 - 14 Feb 22</div>
                        <div className='fs-7 fw-bolder text-muted'>Date range</div>
                      </td>
                      {/* end::Date */}
                      {/* begin::Progress */}
                      <td className='d-none'>Completed</td>
                      {/* end::Progress */}
                      {/* begin::Action */}
                      <td className='text-end'>
                        <button
                          type='button'
                          className='btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px'
                        >
                          <KTSVG path='/media/icons/duotune/arrows/arr001.svg' />
                        </button>
                      </td>
                      {/* end::Action */}
                    </tr>
                    <tr className='odd'>
                      {/* begin::Campaign */}
                      <td className='min-w-175px'>
                        <div className='position-relative px-7 py-2'>
                          <div className='position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-success'></div>
                          <a href='#' className='mb-1 text-dark text-hover-primary fw-bolder'>
                            Cyber Monday
                          </a>
                          <div className='fs-7 text-muted fw-bolder'>Created on 24 Dec 21</div>
                        </div>
                      </td>
                      {/* end::Campaign */}
                      {/* begin::Platforms */}
                      <td>
                        {/* begin::Icons */}
                        <div className='d-flex gap-2 mb-2'>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/facebook-4.svg')}
                              alt=''
                            />
                          </a>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/instagram-2-1.svg')}
                              alt=''
                            />
                          </a>
                        </div>
                        {/* end::Icons */}
                        <div className='fs-7 text-muted fw-bolder'>Labor 24 - 38 years</div>
                      </td>
                      {/* end::Platforms */}
                      {/* begin::Status */}
                      <td>
                        <span className='badge badge-light-success'>Live Now</span>
                      </td>
                      {/* end::Status */}
                      {/* begin::Team */}
                      <td className='min-w-125px'>
                        {/* begin::Team members */}
                        <div className='symbol-group symbol-hover mb-1'>
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <div className='symbol-label bg-light-danger'>
                              <span className='fs-7 text-danger'>M</span>
                            </div>
                          </div>
                          {/* end::Member */}
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-6.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <div className='symbol-label bg-light-primary'>
                              <span className='fs-7 text-primary'>N</span>
                            </div>
                          </div>
                          {/* end::Member */}
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-13.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                        </div>
                        {/* end::Team members */}
                        <div className='fs-7 fw-bolder text-muted'>Team Members</div>
                      </td>
                      {/* end::Team */}
                      {/* begin::Date */}
                      <td className='min-w-150px'>
                        <div className='mb-2 fw-bolder'>19 Mar 22 - 04 Apr 22</div>
                        <div className='fs-7 fw-bolder text-muted'>Date range</div>
                      </td>
                      {/* end::Date */}
                      {/* begin::Progress */}
                      <td className='d-none'>Pending</td>
                      {/* end::Progress */}
                      {/* begin::Action */}
                      <td className='text-end'>
                        <button
                          type='button'
                          className='btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px'
                        >
                          <KTSVG path='/media/icons/duotune/arrows/arr001.svg' />
                        </button>
                      </td>
                      {/* end::Action */}
                    </tr>
                    <tr className='even'>
                      {/* begin::Campaign */}
                      <td className='min-w-175px'>
                        <div className='position-relative px-7 py-2'>
                          <div className='position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-danger'></div>
                          <a href='#' className='mb-1 text-dark text-hover-primary fw-bolder'>
                            Thanksgiving
                          </a>
                          <div className='fs-7 text-muted fw-bolder'>Created on 24 Dec 21</div>
                        </div>
                      </td>
                      {/* end::Campaign */}
                      {/* begin::Platforms */}
                      <td>
                        {/* begin::Icons */}
                        <div className='d-flex gap-2 mb-2'>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/twitter-2.svg')}
                              alt=''
                            />
                          </a>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/instagram-2-1.svg')}
                              alt=''
                            />
                          </a>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/linkedin-2.svg')}
                              alt=''
                            />
                          </a>
                        </div>
                        {/* end::Icons */}
                        <div className='fs-7 text-muted fw-bolder'>Labor 24 - 38 years</div>
                      </td>
                      {/* end::Platforms */}
                      {/* begin::Status */}
                      <td>
                        <span className='badge badge-light-warning'>Paused</span>
                      </td>
                      {/* end::Status */}
                      {/* begin::Team */}
                      <td className='min-w-125px'>
                        {/* begin::Team members */}
                        <div className='symbol-group symbol-hover mb-1'>
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-6.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-25.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-9.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <div className='symbol-label bg-light-primary'>
                              <span className='fs-7 text-primary'>N</span>
                            </div>
                          </div>
                          {/* end::Member */}
                          {/* begin::More members */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <div className='symbol-label bg-dark'>
                              <span className='fs-9 text-white'>+2</span>
                            </div>
                          </div>
                          {/* end::More members */}
                        </div>
                        {/* end::Team members */}
                        <div className='fs-7 fw-bolder text-muted'>Team Members</div>
                      </td>
                      {/* end::Team */}
                      {/* begin::Date */}
                      <td className='min-w-150px'>
                        <div className='mb-2 fw-bolder'>20 Jun 22 - 30 Jun 22</div>
                        <div className='fs-7 fw-bolder text-muted'>Date range</div>
                      </td>
                      {/* end::Date */}
                      {/* begin::Progress */}
                      <td className='d-none'>Pending</td>
                      {/* end::Progress */}
                      {/* begin::Action */}
                      <td className='text-end'>
                        <button
                          type='button'
                          className='btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px'
                        >
                          <KTSVG path='/media/icons/duotune/arrows/arr001.svg' />
                        </button>
                      </td>
                      {/* end::Action */}
                    </tr>
                  </>
                )}
                {tabNumber === 2 && (
                  <>
                    <tr className='odd'>
                      {/* begin::Campaign */}
                      <td className='min-w-175px'>
                        <div className='position-relative px-7 py-2'>
                          <div className='position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-info'></div>
                          <a href='#' className='mb-1 text-dark text-hover-primary fw-bolder'>
                            Happy Christmas
                          </a>
                          <div className='fs-7 text-muted fw-bolder'>Created on 24 Dec 21</div>
                        </div>
                      </td>
                      {/* end::Campaign */}
                      {/* begin::Platforms */}
                      <td>
                        {/* begin::Icons */}
                        <div className='d-flex gap-2 mb-2'>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/facebook-4.svg')}
                              alt=''
                            />
                          </a>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/twitter-2.svg')}
                              alt=''
                            />
                          </a>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/instagram-2-1.svg')}
                              alt=''
                            />
                          </a>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/linkedin-2.svg')}
                              alt=''
                            />
                          </a>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/youtube-3.svg')}
                              alt=''
                            />
                          </a>
                        </div>
                        {/* end::Icons */}
                        <div className='fs-7 text-muted fw-bolder'>Labor 24 - 35 years</div>
                      </td>
                      {/* end::Platforms */}
                      {/* begin::Status */}
                      <td>
                        <span className='badge badge-light-success'>Live Now</span>
                      </td>
                      {/* end::Status */}
                      {/* begin::Team */}
                      <td className='min-w-125px'>
                        {/* begin::Team members */}
                        <div className='symbol-group symbol-hover mb-1'>
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-6.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-5.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <div className='symbol-label bg-light-warning'>
                              <span className='fs-7 text-warning'>C</span>
                            </div>
                          </div>
                          {/* end::Member */}
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-25.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-9.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                          {/* begin::More members */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <div className='symbol-label bg-dark'>
                              <span className='fs-9 text-white'>+3</span>
                            </div>
                          </div>
                          {/* end::More members */}
                        </div>
                        {/* end::Team members */}
                        <div className='fs-7 fw-bolder text-muted'>Team Members</div>
                      </td>
                      {/* end::Team */}
                      {/* begin::Date */}
                      <td className='min-w-150px'>
                        <div className='mb-2 fw-bolder'>24 Dec 21 - 06 Jan 22</div>
                        <div className='fs-7 fw-bolder text-muted'>Date range</div>
                      </td>
                      {/* end::Date */}
                      {/* begin::Progress */}
                      <td className='d-none'>Pending</td>
                      {/* end::Progress */}
                      {/* begin::Action */}
                      <td className='text-end'>
                        <button
                          type='button'
                          className='btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px'
                        >
                          <KTSVG path='/media/icons/duotune/arrows/arr001.svg' />
                        </button>
                      </td>
                      {/* end::Action */}
                    </tr>
                    <tr className='even'>
                      {/* begin::Campaign */}
                      <td className='min-w-175px'>
                        <div className='position-relative px-7 py-2'>
                          <div className='position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-warning'></div>
                          <a href='#' className='mb-1 text-dark text-hover-primary fw-bolder'>
                            Halloween
                          </a>
                          <div className='fs-7 text-muted fw-bolder'>Created on 24 Dec 21</div>
                        </div>
                      </td>
                      {/* end::Campaign */}
                      {/* begin::Platforms */}
                      <td>
                        {/* begin::Icons */}
                        <div className='d-flex gap-2 mb-2'>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/twitter-2.svg')}
                              alt=''
                            />
                          </a>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/instagram-2-1.svg')}
                              alt=''
                            />
                          </a>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/youtube-3.svg')}
                              alt=''
                            />
                          </a>
                        </div>
                        {/* end::Icons */}
                        <div className='fs-7 text-muted fw-bolder'>Labor 37 - 52 years</div>
                      </td>
                      {/* end::Platforms */}
                      {/* begin::Status */}
                      <td>
                        <span className='badge badge-light-primary'>Reviewing</span>
                      </td>
                      {/* end::Status */}
                      {/* begin::Team */}
                      <td className='min-w-125px'>
                        {/* begin::Team members */}
                        <div className='symbol-group symbol-hover mb-1'>
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-25.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-6.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                        </div>
                        {/* end::Team members */}
                        <div className='fs-7 fw-bolder text-muted'>Team Members</div>
                      </td>
                      {/* end::Team */}
                      {/* begin::Date */}
                      <td className='min-w-150px'>
                        <div className='mb-2 fw-bolder'>03 Feb 22 - 14 Feb 22</div>
                        <div className='fs-7 fw-bolder text-muted'>Date range</div>
                      </td>
                      {/* end::Date */}
                      {/* begin::Progress */}
                      <td className='d-none'>Completed</td>
                      {/* end::Progress */}
                      {/* begin::Action */}
                      <td className='text-end'>
                        <button
                          type='button'
                          className='btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px'
                        >
                          <KTSVG path='/media/icons/duotune/arrows/arr001.svg' />
                        </button>
                      </td>
                      {/* end::Action */}
                    </tr>
                  </>
                )}
                {tabNumber === 3 && (
                  <>
                    <tr className='odd'>
                      {/* begin::Campaign */}
                      <td className='min-w-175px'>
                        <div className='position-relative px-7 py-2'>
                          <div className='position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-info'></div>
                          <a href='#' className='mb-1 text-dark text-hover-primary fw-bolder'>
                            Happy Christmas
                          </a>
                          <div className='fs-7 text-muted fw-bolder'>Created on 24 Dec 21</div>
                        </div>
                      </td>
                      {/* end::Campaign */}
                      {/* begin::Platforms */}
                      <td>
                        {/* begin::Icons */}
                        <div className='d-flex gap-2 mb-2'>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/facebook-4.svg')}
                              alt=''
                            />
                          </a>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/twitter-2.svg')}
                              alt=''
                            />
                          </a>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/instagram-2-1.svg')}
                              alt=''
                            />
                          </a>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/linkedin-2.svg')}
                              alt=''
                            />
                          </a>
                          <a href='#' className='symbol symbol-20px'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/youtube-3.svg')}
                              alt=''
                            />
                          </a>
                        </div>
                        {/* end::Icons */}
                        <div className='fs-7 text-muted fw-bolder'>Labor 24 - 35 years</div>
                      </td>
                      {/* end::Platforms */}
                      {/* begin::Status */}
                      <td>
                        <span className='badge badge-light-success'>Live Now</span>
                      </td>
                      {/* end::Status */}
                      {/* begin::Team */}
                      <td className='min-w-125px'>
                        {/* begin::Team members */}
                        <div className='symbol-group symbol-hover mb-1'>
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-6.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-5.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <div className='symbol-label bg-light-warning'>
                              <span className='fs-7 text-warning'>C</span>
                            </div>
                          </div>
                          {/* end::Member */}
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-25.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-9.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                          {/* begin::More members */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <div className='symbol-label bg-dark'>
                              <span className='fs-9 text-white'>+3</span>
                            </div>
                          </div>
                          {/* end::More members */}
                        </div>
                        {/* end::Team members */}
                        <div className='fs-7 fw-bolder text-muted'>Team Members</div>
                      </td>
                      {/* end::Team */}
                      {/* begin::Date */}
                      <td className='min-w-150px'>
                        <div className='mb-2 fw-bolder'>24 Dec 21 - 06 Jan 22</div>
                        <div className='fs-7 fw-bolder text-muted'>Date range</div>
                      </td>
                      {/* end::Date */}
                      {/* begin::Progress */}
                      <td className='d-none'>Pending</td>
                      {/* end::Progress */}
                      {/* begin::Action */}
                      <td className='text-end'>
                        <button
                          type='button'
                          className='btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px'
                        >
                          <KTSVG path='/media/icons/duotune/arrows/arr001.svg' />
                        </button>
                      </td>
                      {/* end::Action */}
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
        {/* end::Table */}
      </div>
      {/* end::Card body */}
    </div>
  )
}
