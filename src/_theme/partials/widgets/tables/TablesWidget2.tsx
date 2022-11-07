/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Nav, Tab} from 'react-bootstrap'
import {Dropdown2} from '../..'

type Props = {
  className: string
}

export const TablesWidget2: FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      <Tab.Container defaultActiveKey='kt_stats_widget_2_tab_1'>
        {/* begin::Header */}
        <div className='card-header align-items-center border-0'>
          {/* begin::Title */}
          <h3 className='fw-bolder text-gray-900 m-0'>Recent Orders</h3>
          {/* end::Title */}
          {/* begin::Menu */}
          <button
            className='btn btn-icon btn-color-gray-400 btn-active-color-primary mt-n2 me-n2'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-overflow='true'
          >
            <KTSVG path='/media/icons/duotune/general/gen023.svg' className='svg-icon-1' />
          </button>
          <Dropdown2 />
          {/* end::Menu */}
        </div>
        {/* end::Header */}
        {/* begin::Body */}
        <div className='card-body pt-2'>
          {/* begin::Nav */}
          <Nav className='nav nav-pills nav-pills-custom mb-3'>
            {/* begin::Item */}
            <Nav.Item className='nav-item mb-3 me-3 me-lg-6'>
              {/* begin::Link */}
              <Nav.Link
                className='nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4 cursor-pointer'
                eventKey='kt_stats_widget_2_tab_1'
              >
                {/* begin::Icon */}
                <div className='nav-icon'>
                  <img alt='' src={toAbsoluteUrl('/media/svg/products-categories/t-shirt.svg')} />
                </div>
                {/* end::Icon */}
                {/* begin::Subtitle */}
                <span className='nav-text text-gray-700 fw-bolder fs-6 lh-1'>T-shirt</span>
                {/* end::Subtitle */}
                {/* begin::Bullet */}
                <span className='bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary'></span>
                {/* end::Bullet */}
              </Nav.Link>
              {/* end::Link */}
            </Nav.Item>
            {/* end::Item */}
            {/* begin::Item */}
            <Nav.Item className='nav-item mb-3 me-3 me-lg-6'>
              {/* begin::Link */}
              <Nav.Link
                className='nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4 cursor-pointer'
                data-bs-toggle='pill'
                eventKey='kt_stats_widget_2_tab_2'
              >
                {/* begin::Icon */}
                <div className='nav-icon'>
                  <img alt='' src={toAbsoluteUrl('/media/svg/products-categories/gaming.svg')} />
                </div>
                {/* end::Icon */}
                {/* begin::Subtitle */}
                <span className='nav-text text-gray-700 fw-bolder fs-6 lh-1'>Gaming</span>
                {/* end::Subtitle */}
                {/* begin::Bullet */}
                <span className='bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary'></span>
                {/* end::Bullet */}
              </Nav.Link>
              {/* end::Link */}
            </Nav.Item>
            {/* end::Item */}
            {/* begin::Item */}
            <Nav.Item className='nav-item mb-3 me-3 me-lg-6'>
              {/* begin::Link */}
              <Nav.Link
                className='nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4 cursor-pointer'
                data-bs-toggle='pill'
                eventKey='kt_stats_widget_2_tab_3'
              >
                {/* begin::Icon */}
                <div className='nav-icon'>
                  <img alt='' src={toAbsoluteUrl('/media/svg/products-categories/watch.svg')} />
                </div>
                {/* end::Icon */}
                {/* begin::Subtitle */}
                <span className='nav-text text-gray-600 fw-bolder fs-6 lh-1'>Watch</span>
                {/* end::Subtitle */}
                {/* begin::Bullet */}
                <span className='bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary'></span>
                {/* end::Bullet */}
              </Nav.Link>
              {/* end::Link */}
            </Nav.Item>
            {/* end::Item */}
            {/* begin::Item */}
            <Nav.Item className='nav-item mb-3 me-3 me-lg-6'>
              {/* begin::Link */}
              <Nav.Link
                className='nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4 cursor-pointer'
                eventKey='kt_stats_widget_2_tab_4'
              >
                {/* begin::Icon */}
                <div className='nav-icon'>
                  <img
                    alt=''
                    src={toAbsoluteUrl('/media/svg/products-categories/gloves.svg')}
                    className='nav-icon'
                  />
                </div>
                {/* end::Icon */}
                {/* begin::Subtitle */}
                <span className='nav-text text-gray-600 fw-bolder fs-6 lh-1'>Gloves</span>
                {/* end::Subtitle */}
                {/* begin::Bullet */}
                <span className='bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary'></span>
                {/* end::Bullet */}
              </Nav.Link>
              {/* end::Link */}
            </Nav.Item>
            {/* end::Item */}
            {/* begin::Item */}
            <Nav.Item className='nav-item mb-3'>
              {/* begin::Link */}
              <Nav.Link
                className='nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4 cursor-pointer'
                eventKey='kt_stats_widget_2_tab_5'
              >
                {/* begin::Icon */}
                <div className='nav-icon'>
                  <img
                    alt=''
                    src={toAbsoluteUrl('/media/svg/products-categories/shoes.svg')}
                    className='nav-icon'
                  />
                </div>
                {/* end::Icon */}
                {/* begin::Subtitle */}
                <span className='nav-text text-gray-600 fw-bolder fs-6 lh-1'>Shoes</span>
                {/* end::Subtitle */}
                {/* begin::Bullet */}
                <span className='bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary'></span>
                {/* end::Bullet */}
              </Nav.Link>
              {/* end::Link */}
            </Nav.Item>
            {/* end::Item */}
          </Nav>
          {/* end::Nav */}
          {/* begin::Tab Content */}
          <Tab.Content className='tab-content'>
            {/* begin::Tap pane */}
            <Tab.Pane className='tab-pane fade show' eventKey='kt_stats_widget_2_tab_1'>
              {/* begin::Table container */}
              <div className='table-responsive'>
                {/* begin::Table */}
                <table className='table table-row-dashed align-middle gs-0 gy-4 my-0'>
                  {/* begin::Table head */}
                  <thead>
                    <tr className='fs-7 fw-bolder text-gray-500 border-bottom-0'>
                      <th className='ps-0 w-50px'>ITEM</th>
                      <th className='min-w-140px'></th>
                      <th className='text-end min-w-140px'>QTY</th>
                      <th className='pe-0 text-end min-w-120px'>PRICE</th>
                      <th className='pe-0 text-end min-w-120px'>TOTAL PRICE</th>
                    </tr>
                  </thead>
                  {/* end::Table head */}
                  {/* begin::Table body */}
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={toAbsoluteUrl('/media/stock/ecommerce/210.gif')}
                          className='w-50px ms-n1'
                          alt=''
                        />
                      </td>
                      <td className='ps-0'>
                        <a
                          href='#'
                          className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0'
                        >
                          Elephant 1802
                        </a>
                        <span className='text-gray-400 fw-bold fs-7 d-block text-start ps-0'>
                          Item: #XDG-2347
                        </span>
                      </td>
                      <td>
                        <span className='text-gray-800 fw-bolder d-block fs-6 ps-0 text-end'>
                          x1
                        </span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$72.00</span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$126.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={toAbsoluteUrl('/media/stock/ecommerce/215.gif')}
                          className='w-50px ms-n1'
                          alt=''
                        />
                      </td>
                      <td className='ps-0'>
                        <a
                          href='#'
                          className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0'
                        >
                          Red Laga
                        </a>
                        <span className='text-gray-400 fw-bold fs-7 d-block text-start ps-0'>
                          Item: #XDG-1321
                        </span>
                      </td>
                      <td>
                        <span className='text-gray-800 fw-bolder d-block fs-6 ps-0 text-end'>
                          x2
                        </span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$45.00</span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$76.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={toAbsoluteUrl('/media/stock/ecommerce/209.gif')}
                          className='w-50px ms-n1'
                          alt=''
                        />
                      </td>
                      <td className='ps-0'>
                        <a
                          href='#'
                          className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0'
                        >
                          RiseUP
                        </a>
                        <span className='text-gray-400 fw-bold fs-7 d-block text-start ps-0'>
                          Item: #XDG-4312
                        </span>
                      </td>
                      <td>
                        <span className='text-gray-800 fw-bolder d-block fs-6 ps-0 text-end'>
                          x3
                        </span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$84.00</span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$168.00</span>
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
            <Tab.Pane className='tab-pane fade show' eventKey='kt_stats_widget_2_tab_2'>
              {/* begin::Table container */}
              <div className='table-responsive'>
                {/* begin::Table */}
                <table className='table table-row-dashed align-middle gs-0 gy-4 my-0'>
                  {/* begin::Table head */}
                  <thead>
                    <tr className='fs-7 fw-bolder text-gray-500 border-bottom-0'>
                      <th className='ps-0 w-50px'>ITEM</th>
                      <th className='min-w-140px'></th>
                      <th className='text-end min-w-140px'>QTY</th>
                      <th className='pe-0 text-end min-w-120px'>PRICE</th>
                      <th className='pe-0 text-end min-w-120px'>TOTAL PRICE</th>
                    </tr>
                  </thead>
                  {/* end::Table head */}
                  {/* begin::Table body */}
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={toAbsoluteUrl('/media/stock/ecommerce/197.gif')}
                          className='w-50px ms-n1'
                          alt=''
                        />
                      </td>
                      <td className='ps-0'>
                        <a
                          href='#'
                          className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0'
                        >
                          Elephant 1802
                        </a>
                        <span className='text-gray-400 fw-bold fs-7 d-block text-start ps-0'>
                          Item: #XDG-4312
                        </span>
                      </td>
                      <td>
                        <span className='text-gray-800 fw-bolder d-block fs-6 ps-0 text-end'>
                          x1
                        </span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$32.00</span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$312.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={toAbsoluteUrl('/media/stock/ecommerce/178.gif')}
                          className='w-50px ms-n1'
                          alt=''
                        />
                      </td>
                      <td className='ps-0'>
                        <a
                          href='#'
                          className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0'
                        >
                          Red Laga
                        </a>
                        <span className='text-gray-400 fw-bold fs-7 d-block text-start ps-0'>
                          Item: #XDG-3122
                        </span>
                      </td>
                      <td>
                        <span className='text-gray-800 fw-bolder d-block fs-6 ps-0 text-end'>
                          x2
                        </span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$53.00</span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$62.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={toAbsoluteUrl('/media/stock/ecommerce/22.gif')}
                          className='w-50px ms-n1'
                          alt=''
                        />
                      </td>
                      <td className='ps-0'>
                        <a
                          href='#'
                          className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0'
                        >
                          RiseUP
                        </a>
                        <span className='text-gray-400 fw-bold fs-7 d-block text-start ps-0'>
                          Item: #XDG-1142
                        </span>
                      </td>
                      <td>
                        <span className='text-gray-800 fw-bolder d-block fs-6 ps-0 text-end'>
                          x3
                        </span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$74.00</span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$139.00</span>
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
            <Tab.Pane className='tab-pane fade show' eventKey='kt_stats_widget_2_tab_3'>
              {/* begin::Table container */}
              <div className='table-responsive'>
                {/* begin::Table */}
                <table className='table table-row-dashed align-middle gs-0 gy-4 my-0'>
                  {/* begin::Table head */}
                  <thead>
                    <tr className='fs-7 fw-bolder text-gray-500 border-bottom-0'>
                      <th className='ps-0 w-50px'>ITEM</th>
                      <th className='min-w-140px'></th>
                      <th className='text-end min-w-140px'>QTY</th>
                      <th className='pe-0 text-end min-w-120px'>PRICE</th>
                      <th className='pe-0 text-end min-w-120px'>TOTAL PRICE</th>
                    </tr>
                  </thead>
                  {/* end::Table head */}
                  {/* begin::Table body */}
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={toAbsoluteUrl('/media/stock/ecommerce/1.gif')}
                          className='w-50px ms-n1'
                          alt=''
                        />
                      </td>
                      <td className='ps-0'>
                        <a
                          href='#'
                          className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0'
                        >
                          Elephant 1324
                        </a>
                        <span className='text-gray-400 fw-bold fs-7 d-block text-start ps-0'>
                          Item: #XDG-1523
                        </span>
                      </td>
                      <td>
                        <span className='text-gray-800 fw-bolder d-block fs-6 ps-0 text-end'>
                          x1
                        </span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$43.00</span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$231.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={toAbsoluteUrl('/media/stock/ecommerce/24.gif')}
                          className='w-50px ms-n1'
                          alt=''
                        />
                      </td>
                      <td className='ps-0'>
                        <a
                          href='#'
                          className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0'
                        >
                          Red Laga
                        </a>
                        <span className='text-gray-400 fw-bold fs-7 d-block text-start ps-0'>
                          Item: #XDG-5314
                        </span>
                      </td>
                      <td>
                        <span className='text-gray-800 fw-bolder d-block fs-6 ps-0 text-end'>
                          x2
                        </span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$71.00</span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$53.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={toAbsoluteUrl('/media/stock/ecommerce/71.gif')}
                          className='w-50px ms-n1'
                          alt=''
                        />
                      </td>
                      <td className='ps-0'>
                        <a
                          href='#'
                          className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0'
                        >
                          RiseUP
                        </a>
                        <span className='text-gray-400 fw-bold fs-7 d-block text-start ps-0'>
                          Item: #XDG-4222
                        </span>
                      </td>
                      <td>
                        <span className='text-gray-800 fw-bolder d-block fs-6 ps-0 text-end'>
                          x3
                        </span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$23.00</span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$213.00</span>
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
            <Tab.Pane className='tab-pane fade show' eventKey='kt_stats_widget_2_tab_4'>
              {/* begin::Table container */}
              <div className='table-responsive'>
                {/* begin::Table */}
                <table className='table table-row-dashed align-middle gs-0 gy-4 my-0'>
                  {/* begin::Table head */}
                  <thead>
                    <tr className='fs-7 fw-bolder text-gray-500 border-bottom-0'>
                      <th className='ps-0 w-50px'>ITEM</th>
                      <th className='min-w-140px'></th>
                      <th className='text-end min-w-140px'>QTY</th>
                      <th className='pe-0 text-end min-w-120px'>PRICE</th>
                      <th className='pe-0 text-end min-w-120px'>TOTAL PRICE</th>
                    </tr>
                  </thead>
                  {/* end::Table head */}
                  {/* begin::Table body */}
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={toAbsoluteUrl('/media/stock/ecommerce/41.gif')}
                          className='w-50px ms-n1'
                          alt=''
                        />
                      </td>
                      <td className='ps-0'>
                        <a
                          href='#'
                          className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0'
                        >
                          Elephant 2635
                        </a>
                        <span className='text-gray-400 fw-bold fs-7 d-block text-start ps-0'>
                          Item: #XDG-1523
                        </span>
                      </td>
                      <td>
                        <span className='text-gray-800 fw-bolder d-block fs-6 ps-0 text-end'>
                          x1
                        </span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$65.00</span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$163.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={toAbsoluteUrl('/media/stock/ecommerce/63.gif')}
                          className='w-50px ms-n1'
                          alt=''
                        />
                      </td>
                      <td className='ps-0'>
                        <a
                          href='#'
                          className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0'
                        >
                          Red Laga
                        </a>
                        <span className='text-gray-400 fw-bold fs-7 d-block text-start ps-0'>
                          Item: #XDG-2745
                        </span>
                      </td>
                      <td>
                        <span className='text-gray-800 fw-bolder d-block fs-6 ps-0 text-end'>
                          x2
                        </span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$64.00</span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$73.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={toAbsoluteUrl('/media/stock/ecommerce/59.gif')}
                          className='w-50px ms-n1'
                          alt=''
                        />
                      </td>
                      <td className='ps-0'>
                        <a
                          href='#'
                          className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0'
                        >
                          RiseUP
                        </a>
                        <span className='text-gray-400 fw-bold fs-7 d-block text-start ps-0'>
                          Item: #XDG-5173
                        </span>
                      </td>
                      <td>
                        <span className='text-gray-800 fw-bolder d-block fs-6 ps-0 text-end'>
                          x3
                        </span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$54.00</span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$173.00</span>
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
            <Tab.Pane className='tab-pane fade show' eventKey='kt_stats_widget_2_tab_5'>
              {/* begin::Table container */}
              <div className='table-responsive'>
                {/* begin::Table */}
                <table className='table table-row-dashed align-middle gs-0 gy-4 my-0'>
                  {/* begin::Table head */}
                  <thead>
                    <tr className='fs-7 fw-bolder text-gray-500 border-bottom-0'>
                      <th className='ps-0 w-50px'>ITEM</th>
                      <th className='min-w-140px'></th>
                      <th className='text-end min-w-140px'>QTY</th>
                      <th className='pe-0 text-end min-w-120px'>PRICE</th>
                      <th className='pe-0 text-end min-w-120px'>TOTAL PRICE</th>
                    </tr>
                  </thead>
                  {/* end::Table head */}
                  {/* begin::Table body */}
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={toAbsoluteUrl('/media/stock/ecommerce/10.gif')}
                          className='w-50px ms-n1'
                          alt=''
                        />
                      </td>
                      <td className='ps-0'>
                        <a
                          href='#'
                          className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0'
                        >
                          Nike
                        </a>
                        <span className='text-gray-400 fw-bold fs-7 d-block text-start ps-0'>
                          Item: #XDG-2163
                        </span>
                      </td>
                      <td>
                        <span className='text-gray-800 fw-bolder d-block fs-6 ps-0 text-end'>
                          x1
                        </span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$64.00</span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$287.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={toAbsoluteUrl('/media/stock/ecommerce/96.gif')}
                          className='w-50px ms-n1'
                          alt=''
                        />
                      </td>
                      <td className='ps-0'>
                        <a
                          href='#'
                          className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0'
                        >
                          Adidas
                        </a>
                        <span className='text-gray-400 fw-bold fs-7 d-block text-start ps-0'>
                          Item: #XDG-2162
                        </span>
                      </td>
                      <td>
                        <span className='text-gray-800 fw-bolder d-block fs-6 ps-0 text-end'>
                          x2
                        </span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$76.00</span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$51.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={toAbsoluteUrl('/media/stock/ecommerce/13.gif')}
                          className='w-50px ms-n1'
                          alt=''
                        />
                      </td>
                      <td className='ps-0'>
                        <a
                          href='#'
                          className='text-gray-800 fw-bolder text-hover-primary mb-1 fs-6 text-start pe-0'
                        >
                          Puma
                        </a>
                        <span className='text-gray-400 fw-bold fs-7 d-block text-start ps-0'>
                          Item: #XDG-1537
                        </span>
                      </td>
                      <td>
                        <span className='text-gray-800 fw-bolder d-block fs-6 ps-0 text-end'>
                          x3
                        </span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$27.00</span>
                      </td>
                      <td className='text-end pe-0'>
                        <span className='text-gray-800 fw-bolder d-block fs-6'>$167.00</span>
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
  )
}
