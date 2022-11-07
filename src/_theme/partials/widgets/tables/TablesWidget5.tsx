/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'

type Props = {
  className: string
}

export const TablesWidget5: FC<Props> = ({className}) => {
  return (
    <div className={`card card-flush ${className}`}>
      {/* begin::Card header */}
      <div className='card-header pt-7'>
        {/* begin::Title */}
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder text-dark'>Stock Report</span>
          <span className='text-gray-400 mt-1 fw-bold fs-6'>Total 2,356 Items in the Stock</span>
        </h3>
        {/* end::Title */}
        {/* begin::Actions */}
        <div className='card-toolbar'>
          {/* begin::Filters */}
          <div className='d-flex flex-stack flex-wrap gap-4'>
            {/* begin::Destination */}
            <div className='d-flex align-items-center fw-bolder'>
              {/* begin::Label */}
              <div className='text-muted fs-7 me-2'>Category</div>
              {/* end::Label */}
              {/* begin::Select */}
              <select
                className='form-select form-select-transparent text-dark fs-7 lh-1 fw-bolder py-0 ps-3 w-auto select2-hidden-accessible'
                placeholder='Select an option'
              >
                <option value='Show All' defaultValue={'Show All'}>
                  Show All
                </option>
                <option value='a'>Category A</option>
                <option value='b'>Category B</option>
              </select>
              {/* end::Select */}
            </div>
            {/* end::Destination */}
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
                <option value='In Stock'>In Stock</option>
                <option value='Out of Stock'>Out of Stock</option>
                <option value='Low Stock'>Low Stock</option>
              </select>
              {/* end::Select */}
            </div>
            {/* end::Status */}
            {/* begin::Search */}
            <a href='#' className='btn btn-light btn-sm'>
              View Stock
            </a>
            {/* end::Search */}
          </div>
          {/* begin::Filters */}
        </div>
        {/* end::Actions */}
      </div>
      {/* end::Card header */}
      {/* begin::Card body */}
      <div className='card-body'>
        {/* begin::Table */}
        <div
          id='kt_table_widget_5_table_wrapper'
          className='dataTables_wrapper dt-bootstrap4 no-footer'
        >
          <div className='table-responsive'>
            <table
              className='table align-middle table-row-dashed fs-6 gy-3 dataTable no-footer'
              id='kt_table_widget_5_table'
            >
              {/* begin::Table head */}
              <thead>
                {/* begin::Table row */}
                <tr className='text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'>
                  <th
                    className='min-w-100px sorting'
                    tabIndex={0}
                    aria-controls='kt_table_widget_5_table'
                    rowSpan={1}
                    colSpan={1}
                    aria-label='Item: activate to sort column ascending'
                    style={{width: '196.453px'}}
                  >
                    Item
                  </th>
                  <th
                    className='text-end pe-3 min-w-100px sorting_disabled'
                    rowSpan={1}
                    colSpan={1}
                    aria-label='Product ID'
                    style={{width: '153.469px'}}
                  >
                    Product ID
                  </th>
                  <th
                    className='text-end pe-3 min-w-150px sorting'
                    tabIndex={0}
                    aria-controls='kt_table_widget_5_table'
                    rowSpan={1}
                    colSpan={1}
                    aria-label='Date Added: activate to sort column ascending'
                    style={{width: '225.836px'}}
                  >
                    Date Added
                  </th>
                  <th
                    className='text-end pe-3 min-w-100px sorting'
                    tabIndex={0}
                    aria-controls='kt_table_widget_5_table'
                    rowSpan={1}
                    colSpan={1}
                    aria-label='Price: activate to sort column ascending'
                    style={{width: '153.469px'}}
                  >
                    Price
                  </th>
                  <th
                    className='text-end pe-3 min-w-50px sorting'
                    tabIndex={0}
                    aria-controls='kt_table_widget_5_table'
                    rowSpan={1}
                    colSpan={1}
                    aria-label='Status: activate to sort column ascending'
                    style={{width: '155.656px'}}
                  >
                    Status
                  </th>
                  <th
                    className='text-end pe-0 min-w-25px sorting'
                    tabIndex={0}
                    aria-controls='kt_table_widget_5_table'
                    rowSpan={1}
                    colSpan={1}
                    aria-label='Qty: activate to sort column ascending'
                    style={{width: '86.6953px'}}
                  >
                    Qty
                  </th>
                </tr>
                {/* end::Table row */}
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody className='fw-bolder text-gray-600'>
                <tr className='odd'>
                  {/* begin::Item */}
                  <td>
                    <a href='#' className='text-dark text-hover-primary'>
                      Macbook Air M1
                    </a>
                  </td>
                  {/* end::Item */}
                  {/* begin::Product ID */}
                  <td className='text-end'>#XGY-356</td>
                  {/* end::Product ID */}
                  {/* begin::Date added */}
                  <td className='text-end' data-order='2022-04-15T00:00:00+03:00'>
                    Apr 15, 2022
                  </td>
                  {/* end::Date added */}
                  {/* begin::Price */}
                  <td className='text-end'>$1,230</td>
                  {/* end::Price */}
                  {/* begin::Status */}
                  <td className='text-end'>
                    <span className='badge py-3 px-4 fs-7 badge-light-primary'>In Stock</span>
                  </td>
                  {/* end::Status */}
                  {/* begin::Qty */}
                  <td className='text-end' data-order='58'>
                    <span className='text-dark fw-bolder'>58 PCS</span>
                  </td>
                  {/* end::Qty */}
                </tr>
                <tr className='even'>
                  {/* begin::Item */}
                  <td>
                    <a href='#' className='text-dark text-hover-primary'>
                      Surface Laptop 4
                    </a>
                  </td>
                  {/* end::Item */}
                  {/* begin::Product ID */}
                  <td className='text-end'>#YHD-047</td>
                  {/* end::Product ID */}
                  {/* begin::Date added */}
                  <td className='text-end' data-order='2022-12-20T00:00:00+02:00'>
                    Dec 20, 2022
                  </td>
                  {/* end::Date added */}
                  {/* begin::Price */}
                  <td className='text-end'>$1,060</td>
                  {/* end::Price */}
                  {/* begin::Status */}
                  <td className='text-end'>
                    <span className='badge py-3 px-4 fs-7 badge-light-danger'>Out of Stock</span>
                  </td>
                  {/* end::Status */}
                  {/* begin::Qty */}
                  <td className='text-end' data-order='0'>
                    <span className='text-dark fw-bolder'>0 PCS</span>
                  </td>
                  {/* end::Qty */}
                </tr>
                <tr className='odd'>
                  {/* begin::Item */}
                  <td>
                    <a href='#' className='text-dark text-hover-primary'>
                      Logitech MX 250
                    </a>
                  </td>
                  {/* end::Item */}
                  {/* begin::Product ID */}
                  <td className='text-end'>#SRR-678</td>
                  {/* end::Product ID */}
                  {/* begin::Date added */}
                  <td className='text-end' data-order='2022-07-25T00:00:00+03:00'>
                    Jul 25, 2022
                  </td>
                  {/* end::Date added */}
                  {/* begin::Price */}
                  <td className='text-end'>$64</td>
                  {/* end::Price */}
                  {/* begin::Status */}
                  <td className='text-end'>
                    <span className='badge py-3 px-4 fs-7 badge-light-primary'>In Stock</span>
                  </td>
                  {/* end::Status */}
                  {/* begin::Qty */}
                  <td className='text-end' data-order='290'>
                    <span className='text-dark fw-bolder'>290 PCS</span>
                  </td>
                  {/* end::Qty */}
                </tr>
                <tr className='even'>
                  {/* begin::Item */}
                  <td>
                    <a href='#' className='text-dark text-hover-primary'>
                      AudioEngine HD3
                    </a>
                  </td>
                  {/* end::Item */}
                  {/* begin::Product ID */}
                  <td className='text-end'>#PXF-578</td>
                  {/* end::Product ID */}
                  {/* begin::Date added */}
                  <td className='text-end' data-order='2022-02-21T00:00:00+02:00'>
                    Feb 21, 2022
                  </td>
                  {/* end::Date added */}
                  {/* begin::Price */}
                  <td className='text-end'>$1,060</td>
                  {/* end::Price */}
                  {/* begin::Status */}
                  <td className='text-end'>
                    <span className='badge py-3 px-4 fs-7 badge-light-danger'>Out of Stock</span>
                  </td>
                  {/* end::Status */}
                  {/* begin::Qty */}
                  <td className='text-end' data-order='46'>
                    <span className='text-dark fw-bolder'>46 PCS</span>
                  </td>
                  {/* end::Qty */}
                </tr>
                <tr className='odd'>
                  {/* begin::Item */}
                  <td>
                    <a href='#' className='text-dark text-hover-primary'>
                      HP Hyper LTR
                    </a>
                  </td>
                  {/* end::Item */}
                  {/* begin::Product ID */}
                  <td className='text-end'>#PXF-778</td>
                  {/* end::Product ID */}
                  {/* begin::Date added */}
                  <td className='text-end' data-order='2022-07-25T00:00:00+03:00'>
                    Jul 25, 2022
                  </td>
                  {/* end::Date added */}
                  {/* begin::Price */}
                  <td className='text-end'>$4500</td>
                  {/* end::Price */}
                  {/* begin::Status */}
                  <td className='text-end'>
                    <span className='badge py-3 px-4 fs-7 badge-light-primary'>In Stock</span>
                  </td>
                  {/* end::Status */}
                  {/* begin::Qty */}
                  <td className='text-end' data-order='78'>
                    <span className='text-dark fw-bolder'>78 PCS</span>
                  </td>
                  {/* end::Qty */}
                </tr>
                <tr className='even'>
                  {/* begin::Item */}
                  <td>
                    <a href='#' className='text-dark text-hover-primary'>
                      Dell 32 UltraSharp
                    </a>
                  </td>
                  {/* end::Item */}
                  {/* begin::Product ID */}
                  <td className='text-end'>#XGY-356</td>
                  {/* end::Product ID */}
                  {/* begin::Date added */}
                  <td className='text-end' data-order='2022-06-20T00:00:00+03:00'>
                    Jun 20, 2022
                  </td>
                  {/* end::Date added */}
                  {/* begin::Price */}
                  <td className='text-end'>$1,060</td>
                  {/* end::Price */}
                  {/* begin::Status */}
                  <td className='text-end'>
                    <span className='badge py-3 px-4 fs-7 badge-light-warning'>Low Stock</span>
                  </td>
                  {/* end::Status */}
                  {/* begin::Qty */}
                  <td className='text-end' data-order='8'>
                    <span className='text-dark fw-bolder'>8 PCS</span>
                  </td>
                  {/* end::Qty */}
                </tr>
                <tr className='odd'>
                  {/* begin::Item */}
                  <td>
                    <a href='#' className='text-dark text-hover-primary'>
                      Google Pixel 6 Pro
                    </a>
                  </td>
                  {/* end::Item */}
                  {/* begin::Product ID */}
                  <td className='text-end'>#XVR-425</td>
                  {/* end::Product ID */}
                  {/* begin::Date added */}
                  <td className='text-end' data-order='2022-10-25T00:00:00+03:00'>
                    Oct 25, 2022
                  </td>
                  {/* end::Date added */}
                  {/* begin::Price */}
                  <td className='text-end'>$1,060</td>
                  {/* end::Price */}
                  {/* begin::Status */}
                  <td className='text-end'>
                    <span className='badge py-3 px-4 fs-7 badge-light-primary'>In Stock</span>
                  </td>
                  {/* end::Status */}
                  {/* begin::Qty */}
                  <td className='text-end' data-order='124'>
                    <span className='text-dark fw-bolder'>124 PCS</span>
                  </td>
                  {/* end::Qty */}
                </tr>
              </tbody>
              {/* end::Table body */}
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
