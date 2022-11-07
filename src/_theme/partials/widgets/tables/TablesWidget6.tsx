/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../..'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'

type Props = {
  className: string
}

export const TablesWidget6: FC<Props> = ({className}) => {
  const [tabNumber, setTabNumber] = useState<number>(1)

  return (
    <div className='card card-flush h-xl-100'>
      {/* begin::Card header */}
      <div className='card-header py-7'>
        {/* begin::Tabs */}
        <div className='card-title pt-3 mb-0 gap-4 gap-lg-10 gap-xl-15 nav nav-tabs border-bottom-0'>
          {/* begin::Tab item */}
          <div
            onClick={() => {
              setTabNumber(1)
            }}
            className={`fs-4 fw-bolder pb-3 cursor-pointer ${
              tabNumber === 1 ? 'border-bottom border-3 border-primary' : 'text-muted'
            }`}
          >
            All Campaigns (47)
          </div>
          {/* end::Tab item */}
          {/* begin::Tab item */}
          <div
            onClick={() => {
              setTabNumber(2)
            }}
            className={`fs-4 fw-bolder pb-3 cursor-pointer ${
              tabNumber === 2 ? 'border-bottom border-3 border-primary' : 'text-muted'
            }`}
          >
            Pending (8)
          </div>
          {/* end::Tab item */}
          {/* begin::Tab item */}
          <div
            onClick={() => {
              setTabNumber(3)
            }}
            className={`fs-4 fw-bolder pb-3 cursor-pointer ${
              tabNumber === 3 ? 'border-bottom border-3 border-primary' : 'text-muted'
            }`}
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
            <button className='btn btn-primary'>Create Campaign</button>
          </OverlayTrigger>
        </div>
        {/* end::Create campaign button */}
      </div>
      {/* end::Card header */}
      {/* begin::Card body */}
      <div className='card-body pt-1'>
        {/* begin::Sort & Filter */}
        <div className='d-flex flex-stack flex-wrap gap-4'>
          {/* begin::Sort */}
          <div className='d-flex align-items-center flex-wrap gap-3 gap-xl-9'>
            {/* begin::Type */}
            <div className='d-flex align-items-center fw-bolder'>
              {/* begin::Label */}
              <div className='text-muted fs-7'>Type</div>
              {/* end::Label */}
              {/* begin::Select */}
              <select
                className='form-select form-select-transparent text-dark fs-7 lh-1 fw-bolder py-0 ps-3 w-auto select2-hidden-accessible'
                placeholder='Select an option'
              >
                <option value='Show All' defaultChecked>
                  Show All
                </option>
                <option value='Newest'>Newest</option>
                <option value='oldest'>Oldest</option>
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
              <select
                className='form-select form-select-transparent text-dark fs-7 lh-1 fw-bolder py-0 ps-3 w-auto select2-hidden-accessible'
                placeholder='Select an option'
              >
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
              <select
                className='form-select form-select-transparent text-dark fs-7 lh-1 fw-bolder py-0 ps-3 w-auto select2-hidden-accessible'
                placeholder='Select an option'
              >
                <option value='Show All' defaultValue={'Show All'}>
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
                className='svg-icon-2 svg-icon-gray-400'
                path='/media/icons/duotune/general/gen031.svg'
              />
            </a>
            <Dropdown1 />
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
              className='table table-row-dashed align-middle fs-6 gy-4 my-0 pb-3 dataTable no-footer'
              data-kt-table-widget-3='all'
            >
              <thead className='d-none'>
                <tr>
                  <th
                    className='sorting'
                    tabIndex={0}
                    aria-controls='kt_widget_table_3'
                    rowSpan={1}
                    colSpan={1}
                    aria-label='Campaign: activate to sort column ascending'
                    style={{width: '0px'}}
                  >
                    Campaign
                  </th>
                  <th
                    className='sorting'
                    tabIndex={0}
                    aria-controls='kt_widget_table_3'
                    rowSpan={1}
                    colSpan={1}
                    aria-label='Platforms: activate to sort column ascending'
                    style={{width: '0px'}}
                  >
                    Platforms
                  </th>
                  <th
                    className='sorting'
                    tabIndex={0}
                    aria-controls='kt_widget_table_3'
                    rowSpan={1}
                    colSpan={1}
                    aria-label='Status: activate to sort column ascending'
                    style={{width: '0px'}}
                  >
                    Status
                  </th>
                  <th
                    className='sorting'
                    tabIndex={0}
                    aria-controls='kt_widget_table_3'
                    rowSpan={1}
                    colSpan={1}
                    aria-label='Team: activate to sort column ascending'
                    style={{width: '0px'}}
                  >
                    Team
                  </th>
                  <th
                    className='sorting'
                    tabIndex={0}
                    aria-controls='kt_widget_table_3'
                    rowSpan={1}
                    colSpan={1}
                    aria-label='Date: activate to sort column ascending'
                    style={{width: '0px'}}
                  >
                    Date
                  </th>
                  <th
                    className='sorting'
                    tabIndex={0}
                    aria-controls='kt_widget_table_3'
                    rowSpan={1}
                    colSpan={1}
                    aria-label='Progress: activate to sort column ascending'
                    style={{width: '0px'}}
                  >
                    Progress
                  </th>
                  <th
                    className='sorting'
                    tabIndex={0}
                    aria-controls='kt_widget_table_3'
                    rowSpan={1}
                    colSpan={1}
                    aria-label='Action: activate to sort column ascending'
                    style={{width: '0px'}}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {tabNumber === 1 && (
                  <>
                    <tr className='odd'>
                      <td className='min-w-175px'>
                        <div className='position-relative ps-6 pe-3 py-2'>
                          <div className='position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-info'></div>
                          <a href='#' className='mb-1 text-dark text-hover-primary fw-bolder'>
                            Happy Christmas
                          </a>
                          <div className='fs-7 text-muted fw-bolder'>Created on 24 Dec 21</div>
                        </div>
                      </td>
                      <td>
                        {/* begin::Icons */}
                        <div className='d-flex gap-2 mb-2'>
                          <a href='#'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/facebook-4.svg')}
                              className='w-20px'
                              alt=''
                            />
                          </a>
                          <a href='#'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/twitter-2.svg')}
                              className='w-20px'
                              alt=''
                            />
                          </a>
                          <a href='#'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/linkedin-2.svg')}
                              className='w-20px'
                              alt=''
                            />
                          </a>
                          <a href='#'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/youtube-3.svg')}
                              className='w-20px'
                              alt=''
                            />
                          </a>
                        </div>
                        {/* end::Icons */}
                        <div className='fs-7 text-muted fw-bolder'>Labor 24 - 35 years</div>
                      </td>
                      <td>
                        <span className='badge badge-light-success'>Live Now</span>
                      </td>
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
                            <div className='symbol-label bg-light-danger'>
                              <span className='fs-7 text-danger'>E</span>
                            </div>
                          </div>
                          {/* end::Member */}
                          {/* begin::More members */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <div className='symbol-label bg-dark'>
                              <span className='fs-9 text-white'>+0</span>
                            </div>
                          </div>
                          {/* end::More members */}
                        </div>
                        {/* end::Team members */}
                        <div className='fs-7 fw-bolder text-muted'>Team Members</div>
                      </td>
                      <td className='min-w-150px'>
                        <div className='mb-2 fw-bolder'>24 Dec 21 - 06 Jan 22</div>
                        <div className='fs-7 fw-bolder text-muted'>Date range</div>
                      </td>
                      <td className='d-none'>Pending</td>
                      <td className='text-end'>
                        <button
                          type='button'
                          className='btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px'
                        >
                          <KTSVG path='/media/icons/duotune/arrows/arr001.svg' />
                        </button>
                      </td>
                    </tr>
                    <tr className='even'>
                      <td className='min-w-175px'>
                        <div className='position-relative ps-6 pe-3 py-2'>
                          <div className='position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-warning'></div>
                          <a href='#' className='mb-1 text-dark text-hover-primary fw-bolder'>
                            Halloween
                          </a>
                          <div className='fs-7 text-muted fw-bolder'>Created on 24 Dec 21</div>
                        </div>
                      </td>
                      <td>
                        {/* begin::Icons */}
                        <div className='d-flex gap-2 mb-2'>
                          <a href='#'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/twitter-2.svg')}
                              className='w-20px'
                              alt=''
                            />
                          </a>
                          <a href='#'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/instagram-2-1.svg')}
                              className='w-20px'
                              alt=''
                            />
                          </a>
                          <a href='#'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/youtube-3.svg')}
                              className='w-20px'
                              alt=''
                            />
                          </a>
                        </div>
                        {/* end::Icons */}
                        <div className='fs-7 text-muted fw-bolder'>Labor 37 - 52 years</div>
                      </td>
                      <td>
                        <span className='badge badge-light-primary'>Reviewing</span>
                      </td>
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
                      <td className='min-w-150px'>
                        <div className='mb-2 fw-bolder'>03 Feb 22 - 14 Feb 22</div>
                        <div className='fs-7 fw-bolder text-muted'>Date range</div>
                      </td>
                      <td className='d-none'>Completed</td>
                      <td className='text-end'>
                        <button
                          type='button'
                          className='btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px'
                        >
                          <KTSVG path='/media/icons/duotune/arrows/arr001.svg' />
                        </button>
                      </td>
                    </tr>
                    <tr className='odd'>
                      <td className='min-w-175px'>
                        <div className='position-relative ps-6 pe-3 py-2'>
                          <div className='position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-success'></div>
                          <a href='#' className='mb-1 text-dark text-hover-primary fw-bolder'>
                            Cyber Monday
                          </a>
                          <div className='fs-7 text-muted fw-bolder'>Created on 24 Dec 21</div>
                        </div>
                      </td>
                      <td>
                        {/* begin::Icons */}
                        <div className='d-flex gap-2 mb-2'>
                          <a href='#'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/facebook-4.svg')}
                              className='w-20px'
                              alt=''
                            />
                          </a>
                          <a href='#'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/instagram-2-1.svg')}
                              className='w-20px'
                              alt=''
                            />
                          </a>
                        </div>
                        {/* end::Icons */}
                        <div className='fs-7 text-muted fw-bolder'>Labor 24 - 38 years</div>
                      </td>
                      <td>
                        <span className='badge badge-light-success'>Live Now</span>
                      </td>
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
                      <td className='min-w-150px'>
                        <div className='mb-2 fw-bolder'>19 Mar 22 - 04 Apr 22</div>
                        <div className='fs-7 fw-bolder text-muted'>Date range</div>
                      </td>
                      <td className='d-none'>Pending</td>
                      <td className='text-end'>
                        <button
                          type='button'
                          className='btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px'
                        >
                          <KTSVG className='' path='/media/icons/duotune/arrows/arr001.svg' />
                        </button>
                      </td>
                    </tr>
                    <tr className='even'>
                      <td className='min-w-175px'>
                        <div className='position-relative ps-6 pe-3 py-2'>
                          <div className='position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-danger'></div>
                          <a href='#' className='mb-1 text-dark text-hover-primary fw-bolder'>
                            Thanksgiving
                          </a>
                          <div className='fs-7 text-muted fw-bolder'>Created on 24 Dec 21</div>
                        </div>
                      </td>
                      <td>
                        {/* begin::Icons */}
                        <div className='d-flex gap-2 mb-2'>
                          <a href='#'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/twitter-2.svg')}
                              className='w-20px'
                              alt=''
                            />
                          </a>
                          <a href='#'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/instagram-2-1.svg')}
                              className='w-20px'
                              alt=''
                            />
                          </a>
                          <a href='#'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/linkedin-2.svg')}
                              className='w-20px'
                              alt=''
                            />
                          </a>
                        </div>
                        {/* end::Icons */}
                        <div className='fs-7 text-muted fw-bolder'>Labor 24 - 38 years</div>
                      </td>
                      <td>
                        <span className='badge badge-light-warning'>Paused</span>
                      </td>
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
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-5.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                          {/* begin::More members */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <div className='symbol-label bg-dark'>
                              <span className='fs-9 text-white'>+0</span>
                            </div>
                          </div>
                          {/* end::More members */}
                        </div>
                        {/* end::Team members */}
                        <div className='fs-7 fw-bolder text-muted'>Team Members</div>
                      </td>
                      <td className='min-w-150px'>
                        <div className='mb-2 fw-bolder'>20 Jun 22 - 30 Jun 22</div>
                        <div className='fs-7 fw-bolder text-muted'>Date range</div>
                      </td>
                      <td className='d-none'>Pending</td>
                      <td className='text-end'>
                        <button
                          type='button'
                          className='btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px'
                        >
                          <KTSVG path='/media/icons/duotune/arrows/arr001.svg' />
                        </button>
                      </td>
                    </tr>
                    <tr className='odd'>
                      <td className='min-w-175px'>
                        <div className='position-relative ps-6 pe-3 py-2'>
                          <div className='position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-primary'></div>
                          <a href='#' className='mb-1 text-dark text-hover-primary fw-bolder'>
                            Happy Mother's Day
                          </a>
                          <div className='fs-7 text-muted fw-bolder'>Created on 24 Dec 21</div>
                        </div>
                      </td>
                      <td>
                        {/* begin::Icons */}
                        <div className='d-flex gap-2 mb-2'>
                          <a href='#'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/youtube-3.svg')}
                              className='w-20px'
                              alt=''
                            />
                          </a>
                        </div>
                        {/* end::Icons */}
                        <div className='fs-7 text-muted fw-bolder'>Labor 30 - 40 years</div>
                      </td>
                      <td>
                        <span className='badge badge-light-warning'>Paused</span>
                      </td>
                      <td className='min-w-125px'>
                        {/* begin::Team members */}
                        <div className='symbol-group symbol-hover mb-1'>
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-23.jpg')} alt='' />
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
                      <td className='min-w-150px'>
                        <div className='mb-2 fw-bolder'>01 Aug 22 - 01 Sep 22</div>
                        <div className='fs-7 fw-bolder text-muted'>Date range</div>
                      </td>
                      <td className='d-none'>Completed</td>
                      <td className='text-end'>
                        <button
                          type='button'
                          className='btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px'
                        >
                          <KTSVG path='/media/icons/duotune/arrows/arr001.svg' />
                        </button>
                      </td>
                    </tr>
                    <tr className='even'>
                      <td className='min-w-175px'>
                        <div className='position-relative ps-6 pe-3 py-2'>
                          <div className='position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-success'></div>
                          <a href='#' className='mb-1 text-dark text-hover-primary fw-bolder'>
                            Team Getaway
                          </a>
                          <div className='fs-7 text-muted fw-bolder'>Created on 24 Dec 21</div>
                        </div>
                      </td>
                      <td>
                        {/* begin::Icons */}
                        <div className='d-flex gap-2 mb-2'>
                          <a href='#'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/twitter-2.svg')}
                              className='w-20px'
                              alt=''
                            />
                          </a>
                          <a href='#'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/instagram-2-1.svg')}
                              className='w-20px'
                              alt=''
                            />
                          </a>
                          <a href='#'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/youtube-3.svg')}
                              className='w-20px'
                              alt=''
                            />
                          </a>
                        </div>
                        {/* end::Icons */}
                        <div className='fs-7 text-muted fw-bolder'>Labor 24 - 38 years</div>
                      </td>
                      <td>
                        <span className='badge badge-light-success'>Live Now</span>
                      </td>
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
                            <img src={toAbsoluteUrl('/media/avatars/300-13.jpg')} alt='' />
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
                            <div className='symbol-label bg-light-info'>
                              <span className='fs-7 text-info'>A</span>
                            </div>
                          </div>
                          {/* end::Member */}
                        </div>
                        {/* end::Team members */}
                        <div className='fs-7 fw-bolder text-muted'>Team Members</div>
                      </td>
                      <td className='min-w-150px'>
                        <div className='mb-2 fw-bolder'>24 Jul 22 - 26 Jul 22</div>
                        <div className='fs-7 fw-bolder text-muted'>Date range</div>
                      </td>
                      <td className='d-none'>Completed</td>
                      <td className='text-end'>
                        <button
                          type='button'
                          className='btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px'
                        >
                          <KTSVG path='/media/icons/duotune/arrows/arr001.svg' />
                        </button>
                      </td>
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
                    <tr className='odd'>
                      <td className='min-w-175px'>
                        <div className='position-relative ps-6 pe-3 py-2'>
                          <div className='position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-success'></div>
                          <a href='#' className='mb-1 text-dark text-hover-primary fw-bolder'>
                            Cyber Monday
                          </a>
                          <div className='fs-7 text-muted fw-bolder'>Created on 24 Dec 21</div>
                        </div>
                      </td>
                      <td>
                        {/* begin::Icons */}
                        <div className='d-flex gap-2 mb-2'>
                          <a href='#'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/facebook-4.svg')}
                              className='w-20px'
                              alt=''
                            />
                          </a>
                          <a href='#'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/instagram-2-1.svg')}
                              className='w-20px'
                              alt=''
                            />
                          </a>
                        </div>
                        {/* end::Icons */}
                        <div className='fs-7 text-muted fw-bolder'>Labor 24 - 38 years</div>
                      </td>
                      <td>
                        <span className='badge badge-light-success'>Live Now</span>
                      </td>
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
                      <td className='min-w-150px'>
                        <div className='mb-2 fw-bolder'>19 Mar 22 - 04 Apr 22</div>
                        <div className='fs-7 fw-bolder text-muted'>Date range</div>
                      </td>
                      <td className='d-none'>Pending</td>
                      <td className='text-end'>
                        <button
                          type='button'
                          className='btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px'
                        >
                          <KTSVG className='' path='/media/icons/duotune/arrows/arr001.svg' />
                        </button>
                      </td>
                    </tr>
                    <tr className='even'>
                      <td className='min-w-175px'>
                        <div className='position-relative ps-6 pe-3 py-2'>
                          <div className='position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-danger'></div>
                          <a href='#' className='mb-1 text-dark text-hover-primary fw-bolder'>
                            Thanksgiving
                          </a>
                          <div className='fs-7 text-muted fw-bolder'>Created on 24 Dec 21</div>
                        </div>
                      </td>
                      <td>
                        {/* begin::Icons */}
                        <div className='d-flex gap-2 mb-2'>
                          <a href='#'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/twitter-2.svg')}
                              className='w-20px'
                              alt=''
                            />
                          </a>
                          <a href='#'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/instagram-2-1.svg')}
                              className='w-20px'
                              alt=''
                            />
                          </a>
                          <a href='#'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/linkedin-2.svg')}
                              className='w-20px'
                              alt=''
                            />
                          </a>
                        </div>
                        {/* end::Icons */}
                        <div className='fs-7 text-muted fw-bolder'>Labor 24 - 38 years</div>
                      </td>
                      <td>
                        <span className='badge badge-light-warning'>Paused</span>
                      </td>
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
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-5.jpg')} alt='' />
                          </div>
                          {/* end::Member */}
                          {/* begin::More members */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <div className='symbol-label bg-dark'>
                              <span className='fs-9 text-white'>+0</span>
                            </div>
                          </div>
                          {/* end::More members */}
                        </div>
                        {/* end::Team members */}
                        <div className='fs-7 fw-bolder text-muted'>Team Members</div>
                      </td>
                      <td className='min-w-150px'>
                        <div className='mb-2 fw-bolder'>20 Jun 22 - 30 Jun 22</div>
                        <div className='fs-7 fw-bolder text-muted'>Date range</div>
                      </td>
                      <td className='d-none'>Pending</td>
                      <td className='text-end'>
                        <button
                          type='button'
                          className='btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px'
                        >
                          <KTSVG path='/media/icons/duotune/arrows/arr001.svg' />
                        </button>
                      </td>
                    </tr>
                    <tr className='odd'>
                      <td className='min-w-175px'>
                        <div className='position-relative ps-6 pe-3 py-2'>
                          <div className='position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-primary'></div>
                          <a href='#' className='mb-1 text-dark text-hover-primary fw-bolder'>
                            Happy Mother's Day
                          </a>
                          <div className='fs-7 text-muted fw-bolder'>Created on 24 Dec 21</div>
                        </div>
                      </td>
                      <td>
                        {/* begin::Icons */}
                        <div className='d-flex gap-2 mb-2'>
                          <a href='#'>
                            <img
                              src={toAbsoluteUrl('/media/svg/brand-logos/youtube-3.svg')}
                              className='w-20px'
                              alt=''
                            />
                          </a>
                        </div>
                        {/* end::Icons */}
                        <div className='fs-7 text-muted fw-bolder'>Labor 30 - 40 years</div>
                      </td>
                      <td>
                        <span className='badge badge-light-warning'>Paused</span>
                      </td>
                      <td className='min-w-125px'>
                        {/* begin::Team members */}
                        <div className='symbol-group symbol-hover mb-1'>
                          {/* begin::Member */}
                          <div className='symbol symbol-circle symbol-25px'>
                            <img src={toAbsoluteUrl('/media/avatars/300-23.jpg')} alt='' />
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
                      <td className='min-w-150px'>
                        <div className='mb-2 fw-bolder'>01 Aug 22 - 01 Sep 22</div>
                        <div className='fs-7 fw-bolder text-muted'>Date range</div>
                      </td>
                      <td className='d-none'>Completed</td>
                      <td className='text-end'>
                        <button
                          type='button'
                          className='btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px'
                        >
                          <KTSVG path='/media/icons/duotune/arrows/arr001.svg' />
                        </button>
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
          <div className='row'>
            <div className='col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'></div>
            <div className='col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'></div>
          </div>
        </div>
        {/* end::Table */}
      </div>
      {/* end::Card body */}
    </div>
  )
}
