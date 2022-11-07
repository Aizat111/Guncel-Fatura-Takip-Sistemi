/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown2, Main} from '../..'
import {Nav, Tab} from 'react-bootstrap'

type Props = {
  className: string
}

export const TablesWidget1: FC<Props> = ({className}) => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <>
      <div className={`card card-flush ${className}`}>
        <Tab.Container defaultActiveKey='kt_stats_widget_1_tab_1'>
          {/* begin::Header */}
          <div className='card-header pt-5'>
            {/* begin::Title */}
            <h3 className='card-title align-items-start flex-column'>
              <span className='card-label fw-bolder text-dark'>Featured Campaigns</span>
              <span className='text-gray-400 pt-2 fw-bold fs-6'>75% activity growth</span>
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
              <Dropdown2 />
            </div>
            {/* end::Toolbar */}
          </div>
          {/* end::Header */}
          {/* begin::Body */}
          <div className='card-body'>
            {/* begin::Nav */}
            <Nav className='nav nav-pills nav-pills-custom mb-3'>
              {/* begin::Item */}
              <Nav.Item className='nav-item mb-3 me-3 me-lg-6 cursor-pointer'>
                {/* begin::Link */}
                <Nav.Link
                  className='nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4'
                  eventKey='kt_stats_widget_1_tab_1'
                >
                  {/* begin::Icon */}
                  <div className='nav-icon'>
                    <img
                      alt=''
                      src={toAbsoluteUrl('/media/svg/brand-logos/beats-electronics.svg')}
                      className=''
                    />
                  </div>
                  {/* end::Icon */}
                  {/* begin::Subtitle */}
                  <span className='nav-text text-gray-700 fw-bolder fs-6 lh-1'>Beats</span>
                  {/* end::Subtitle */}
                  {/* begin::Bullet */}
                  <span className='bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary'></span>
                  {/* end::Bullet */}
                </Nav.Link>
                {/* end::Link */}
              </Nav.Item>
              {/* end::Item */}
              {/* begin::Item */}
              <Nav.Item className='nav-item mb-3 me-3 me-lg-6 cursor-pointer'>
                {/* begin::Link */}
                {/* eslint-disable-next-line */}
                <Nav.Link
                  className='nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4'
                  eventKey='kt_stats_widget_1_tab_2'
                >
                  {/* begin::Icon */}
                  <div className='nav-icon'>
                    <img
                      alt='Logo'
                      src={toAbsoluteUrl('/media/svg/brand-logos/amazon.svg')}
                      className=''
                    />
                  </div>
                  {/* end::Icon */}
                  {/* begin::Subtitle */}
                  <span className='nav-text text-gray-700 fw-bolder fs-6 lh-1'>Amazon</span>
                  {/* end::Subtitle */}
                  {/* begin::Bullet */}
                  <span className='bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary'></span>
                  {/* end::Bullet */}
                </Nav.Link>
                {/* end::Link */}
              </Nav.Item>
              {/* end::Item */}
              {/* begin::Item */}
              <Nav.Item className='nav-item mb-3 me-3 me-lg-6 cursor-pointer'>
                {/* begin::Link */}
                {/* eslint-disable-next-line */}
                <Nav.Link
                  className='nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4'
                  eventKey='kt_stats_widget_1_tab_3'
                >
                  {/* begin::Icon */}
                  <div className='nav-icon'>
                    <img
                      alt=''
                      src={toAbsoluteUrl('/media/svg/brand-logos/bp-2.svg')}
                      className=''
                    />
                  </div>
                  {/* end::Icon */}
                  {/* begin::Subtitle */}
                  <span className='nav-text text-gray-600 fw-bolder fs-6 lh-1'>BP</span>
                  {/* end::Subtitle */}
                  {/* begin::Bullet */}
                  <span className='bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary'></span>
                  {/* end::Bullet */}
                </Nav.Link>
                {/* end::Link */}
              </Nav.Item>
              {/* end::Item */}
              {/* begin::Item */}
              <Nav.Item className='nav-item mb-3 me-3 me-lg-6 cursor-pointer'>
                {/* begin::Link */}
                {/* eslint-disable-next-line */}
                <Nav.Link
                  className='nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4'
                  eventKey='kt_stats_widget_1_tab_4'
                >
                  {/* begin::Icon */}
                  <div className='nav-icon'>
                    <img
                      alt=''
                      src={toAbsoluteUrl('/media/svg/brand-logos/slack-icon.svg')}
                      className='nav-icon'
                    />
                  </div>
                  {/* end::Icon */}
                  {/* begin::Subtitle */}
                  <span className='nav-text text-gray-600 fw-bolder fs-6 lh-1'>Slack</span>
                  {/* end::Subtitle */}
                  {/* begin::Bullet */}
                  <span className='bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary'></span>
                  {/* end::Bullet */}
                </Nav.Link>
                {/* end::Link */}
              </Nav.Item>
              {/* end::Item */}
              {/* begin::Item */}
              <div
                onClick={() => {
                  setShow(true)
                }}
                className='nav-item mb-3 cursor-pointer'
              >
                {/* begin::Link */}
                {/* eslint-disable-next-line */}
                <div className='nav-link d-flex flex-center overflow-hidden w-80px h-85px'>
                  {/* begin::Icon */}
                  <div className='nav-icon'>
                    <KTSVG
                      path='/media/icons/duotune/general/gen035.svg'
                      className='svg-icon-2hx svg-icon-gray-400'
                    />
                  </div>
                  {/* end::Icon */}
                  {/* begin::Bullet */}
                  <span className='bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary'></span>
                  {/* end::Bullet */}
                </div>
                {/* end::Link */}
              </div>
              {/* end::Item */}
            </Nav>
            {/* end::Nav */}
            {/* begin::Tab Content */}
            <Tab.Content className='tab-content'>
              {/* begin::Tap pane */}
              <Tab.Pane
                className='tab-pane fade cursor-pointer show'
                eventKey='kt_stats_widget_1_tab_1'
              >
                {/* begin::Table container */}
                <div className='table-responsive'>
                  {/* begin::Table */}
                  <table className='table align-middle gs-0 gy-4 my-0'>
                    {/* begin::Table head */}
                    <thead>
                      <tr className='fs-7 fw-bolder text-gray-500'>
                        <th className='p-0 min-w-150px d-block pt-3'>EMAIL TITLE</th>
                        <th className='text-end min-w-140px pt-3'>STATUS</th>
                        <th className='pe-0 text-end min-w-120px pt-3'>CONVERSION</th>
                      </tr>
                    </thead>
                    {/* end::Table head */}
                    {/* begin::Table body */}
                    <tbody>
                      <tr>
                        <td>
                          {/* eslint-disable-next-line */}
                          <a
                            href='#'
                            className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6'
                          >
                            Best Rated Headsets of 2022
                          </a>
                        </td>
                        <td className='text-end'>
                          <span className='badge badge-light-success fs-7 fw-bolder'>Sent</span>
                        </td>
                        <td className='text-end'>
                          <span className='text-gray-800 fw-bolder d-block fs-6'>18%(6.4k)</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/* eslint-disable-next-line */}
                          <a
                            href='#'
                            className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6'
                          >
                            New Model BS 2000 X
                          </a>
                        </td>
                        <td className='text-end'>
                          <span className='badge badge-light-primary fs-7 fw-bolder'>In Draft</span>
                        </td>
                        <td className='text-end'>
                          <span className='text-gray-800 fw-bolder d-block fs-6'>0.01%(1)</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/* eslint-disable-next-line */}
                          <a
                            href='#'
                            className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6'
                          >
                            2022 Spring Conference by Beats
                          </a>
                        </td>
                        <td className='text-end'>
                          <span className='badge badge-light-success fs-7 fw-bolder'>Sent</span>
                        </td>
                        <td className='text-end'>
                          <span className='text-gray-800 fw-bolder d-block fs-6'>37%(247)</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/* eslint-disable-next-line */}
                          <a
                            href='#'
                            className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6'
                          >
                            Best Headsets Giveaway
                          </a>
                        </td>
                        <td className='text-end'>
                          <span className='badge badge-light-warning fs-7 fw-bolder'>In Queue</span>
                        </td>
                        <td className='text-end'>
                          <span className='text-gray-800 fw-bolder d-block fs-6'>0%(0)</span>
                        </td>
                      </tr>
                    </tbody>
                    {/* end::Table body */}
                  </table>
                </div>
                {/* end::Table */}
              </Tab.Pane>
              {/* end::Tap pane */}
              {/* begin::Tap pane */}
              <Tab.Pane className='tab-pane fade show' eventKey='kt_stats_widget_1_tab_2'>
                {/* begin::Table container */}
                <div className='table-responsive'>
                  {/* begin::Table */}
                  <table className='table align-middle gs-0 gy-4 my-0'>
                    {/* begin::Table head */}
                    <thead>
                      <tr className='fs-7 fw-bolder text-gray-500'>
                        <th className='p-0 min-w-150px d-block pt-3'>EMAIL TITLE</th>
                        <th className='text-end min-w-140px pt-3'>STATUS</th>
                        <th className='pe-0 text-end min-w-120px pt-3'>CONVERSION</th>
                      </tr>
                    </thead>
                    {/* end::Table head */}
                    {/* begin::Table body */}
                    <tbody>
                      <tr>
                        <td>
                          <a
                            href='#'
                            className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6'
                          >
                            2022 Spring Conference by Beats
                          </a>
                        </td>
                        <td className='text-end'>
                          <span className='badge badge-light-success fs-7 fw-bolder'>Sent</span>
                        </td>
                        <td className='text-end'>
                          <span className='text-gray-800 fw-bolder d-block fs-6'>37%(247)</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href='#'
                            className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6'
                          >
                            Best Headsets Giveaway
                          </a>
                        </td>
                        <td className='text-end'>
                          <span className='badge badge-light-warning fs-7 fw-bolder'>In Queue</span>
                        </td>
                        <td className='text-end'>
                          <span className='text-gray-800 fw-bolder d-block fs-6'>0%(0)</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href='#'
                            className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6'
                          >
                            Best Rated Headsets of 2022
                          </a>
                        </td>
                        <td className='text-end'>
                          <span className='badge badge-light-success fs-7 fw-bolder'>Sent</span>
                        </td>
                        <td className='text-end'>
                          <span className='text-gray-800 fw-bolder d-block fs-6'>18%(6.4k)</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href='#'
                            className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6'
                          >
                            New Model BS 2000 X
                          </a>
                        </td>
                        <td className='text-end'>
                          <span className='badge badge-light-primary fs-7 fw-bolder'>In Draft</span>
                        </td>
                        <td className='text-end'>
                          <span className='text-gray-800 fw-bolder d-block fs-6'>0.01%(1)</span>
                        </td>
                      </tr>
                    </tbody>
                    {/* end::Table body */}
                  </table>
                </div>
                {/* end::Table */}
              </Tab.Pane>
              {/* end::Tap pane */}
              {/* begin::Tap pane */}
              <Tab.Pane className='tab-pane fade show' eventKey='kt_stats_widget_1_tab_3'>
                {/* begin::Table container */}
                <div className='table-responsive'>
                  {/* begin::Table */}
                  <table className='table align-middle gs-0 gy-4 my-0'>
                    {/* begin::Table head */}
                    <thead>
                      <tr className='fs-7 fw-bolder text-gray-500'>
                        <th className='p-0 min-w-150px d-block pt-3'>EMAIL TITLE</th>
                        <th className='text-end min-w-140px pt-3'>STATUS</th>
                        <th className='pe-0 text-end min-w-120px pt-3'>CONVERSION</th>
                      </tr>
                    </thead>
                    {/* end::Table head */}
                    {/* begin::Table body */}
                    <tbody>
                      <tr>
                        <td>
                          <a
                            href='#'
                            className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6'
                          >
                            New Model BS 2000 X
                          </a>
                        </td>
                        <td className='text-end'>
                          <span className='badge badge-light-primary fs-7 fw-bolder'>In Draft</span>
                        </td>
                        <td className='text-end'>
                          <span className='text-gray-800 fw-bolder d-block fs-6'>0.01%(1)</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href='#'
                            className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6'
                          >
                            Best Rated Headsets of 2022
                          </a>
                        </td>
                        <td className='text-end'>
                          <span className='badge badge-light-success fs-7 fw-bolder'>Sent</span>
                        </td>
                        <td className='text-end'>
                          <span className='text-gray-800 fw-bolder d-block fs-6'>18%(6.4k)</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href='#'
                            className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6'
                          >
                            2022 Spring Conference by Beats
                          </a>
                        </td>
                        <td className='text-end'>
                          <span className='badge badge-light-success fs-7 fw-bolder'>Sent</span>
                        </td>
                        <td className='text-end'>
                          <span className='text-gray-800 fw-bolder d-block fs-6'>37%(247)</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href='#'
                            className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6'
                          >
                            Best Headsets Giveaway
                          </a>
                        </td>
                        <td className='text-end'>
                          <span className='badge badge-light-warning fs-7 fw-bolder'>In Queue</span>
                        </td>
                        <td className='text-end'>
                          <span className='text-gray-800 fw-bolder d-block fs-6'>0%(0)</span>
                        </td>
                      </tr>
                    </tbody>
                    {/* end::Table body */}
                  </table>
                </div>
                {/* end::Table */}
              </Tab.Pane>
              {/* end::Tap pane */}
              {/* begin::Tap pane */}
              <Tab.Pane className='tab-pane fade show' eventKey='kt_stats_widget_1_tab_4'>
                {/* begin::Table container */}
                <div className='table-responsive'>
                  {/* begin::Table */}
                  <table className='table align-middle gs-0 gy-4 my-0'>
                    {/* begin::Table head */}
                    <thead>
                      <tr className='fs-7 fw-bolder text-gray-500'>
                        <th className='p-0 min-w-150px d-block pt-3'>EMAIL TITLE</th>
                        <th className='text-end min-w-140px pt-3'>STATUS</th>
                        <th className='pe-0 text-end min-w-120px pt-3'>CONVERSION</th>
                      </tr>
                    </thead>
                    {/* end::Table head */}
                    {/* begin::Table body */}
                    <tbody>
                      <tr>
                        <td>
                          <a
                            href='#'
                            className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6'
                          >
                            Best Headsets Giveaway
                          </a>
                        </td>
                        <td className='text-end'>
                          <span className='badge badge-light-warning fs-7 fw-bolder'>In Queue</span>
                        </td>
                        <td className='text-end'>
                          <span className='text-gray-800 fw-bolder d-block fs-6'>0%(0)</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href='#'
                            className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6'
                          >
                            Best Headsets Giveaway
                          </a>
                        </td>
                        <td className='text-end'>
                          <span className='badge badge-light-success fs-7 fw-bolder'>Sent</span>
                        </td>
                        <td className='text-end'>
                          <span className='text-gray-800 fw-bolder d-block fs-6'>37%(247)</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href='#'
                            className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6'
                          >
                            Best Rated Headsets of 2022
                          </a>
                        </td>
                        <td className='text-end'>
                          <span className='badge badge-light-success fs-7 fw-bolder'>Sent</span>
                        </td>
                        <td className='text-end'>
                          <span className='text-gray-800 fw-bolder d-block fs-6'>18%(6.4k)</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href='#'
                            className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6'
                          >
                            New Model BS 2000 X
                          </a>
                        </td>
                        <td className='text-end'>
                          <span className='badge badge-light-primary fs-7 fw-bolder'>In Draft</span>
                        </td>
                        <td className='text-end'>
                          <span className='text-gray-800 fw-bolder d-block fs-6'>0.01%(1)</span>
                        </td>
                      </tr>
                    </tbody>
                    {/* end::Table body */}
                  </table>
                </div>
                {/* end::Table */}
              </Tab.Pane>
              {/* end::Tap pane */}
            </Tab.Content>
            {/* end::Tab Content */}
          </div>
          {/* end: Card Body */}
        </Tab.Container>
      </div>
      <Main
        show={show}
        handleClose={() => {
          setShow(false)
        }}
      />
    </>
  )
}
