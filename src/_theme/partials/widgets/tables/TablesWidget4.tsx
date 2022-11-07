import React, {FC, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

interface IProduct {
  name: string
  image: string
  desc: string
  cost: number
  qty: number
  total: number
  onHand: 'In Stock' | 'Low Stock'
}

interface IItem {
  orderId: string
  createdAt: string
  customer: string
  total: number
  profit: number
  color: string
  status: 'Pending' | 'Confirmed' | 'Rejected' | 'Shipped'
  products: Array<IProduct>
}

type TableContentProps = {
  item: IItem
}

const TableContent: FC<TableContentProps> = ({item}) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <tr>
        <td>
          {/* eslint-disable-next-line */}
          <a href='#' className='text-dark text-hover-primary'>
            #{item.orderId}
          </a>
        </td>
        <td className='text-end' data-order='2021-12-28T01:58:00+02:00'>
          {item.createdAt}
        </td>
        <td className='text-end'>
          {/* eslint-disable-next-line */}
          <a href='#' className='text-dark text-hover-primary'>
            {item.customer}
          </a>
        </td>
        <td className='text-end'>${item.total}</td>
        <td className='text-end'>
          <span className='text-dark fw-bolder'>${item.profit}</span>
        </td>
        <td className='text-end'>
          <span className={`badge py-3 px-4 fs-7 badge-light-${item.color}`}>{item.status}</span>
        </td>
        <td className='text-end'>
          <button
            onClick={() => {
              setOpen(!open)
            }}
            type='button'
            className='btn btn-sm btn-icon btn-light btn-active-light-primary toggle h-25px w-25px cursor-pointer'
          >
            {!open && (
              <KTSVG path='/media/icons/duotune/arrows/arr087.svg' className='svg-icon-3' />
            )}
            {open && <KTSVG path='/media/icons/duotune/arrows/arr089.svg' className='svg-icon-3' />}
          </button>
        </td>
      </tr>
      {open &&
        item.products.map((product, index) => {
          return (
            <tr key={'product' + index}>
              <td colSpan={2}>
                <div className='d-flex align-items-center gap-3'>
                  {/* eslint-disable-next-line */}
                  <a href='#' className='symbol symbol-50px bg-secondary bg-opacity-25 rounded'>
                    <img alt='img' src={toAbsoluteUrl(product.image)} />
                  </a>
                  <div className='d-flex flex-column text-muted'>
                    {/* eslint-disable-next-line */}
                    <a
                      href='#'
                      className='text-dark text-hover-primary fw-bolder'
                      data-kt-table-widget-4='template_name'
                    >
                      {product.name}
                    </a>
                    <div className='fs-7' data-kt-table-widget-4='template_description'>
                      {product.desc}
                    </div>
                  </div>
                </div>
              </td>
              <td className='text-end'>
                <div className='text-dark fs-7'>Cost</div>
                <div className='text-muted fs-7 fw-bolder' data-kt-table-widget-4='template_cost'>
                  {product.cost}
                </div>
              </td>
              <td className='text-end'>
                <div className='text-dark fs-7'>Qty</div>
                <div className='text-muted fs-7 fw-bolder' data-kt-table-widget-4='template_qty'>
                  {product.qty}
                </div>
              </td>
              <td className='text-end'>
                <div className='text-dark fs-7'>Total</div>
                <div className='text-muted fs-7 fw-bolder' data-kt-table-widget-4='template_total'>
                  {product.total}
                </div>
              </td>
              <td className='text-end'>
                <div className='text-dark fs-7 me-3'>On hand</div>
                <div className='text-muted fs-7 fw-bolder' data-kt-table-widget-4='template_stock'>
                  <div className='badge badge-light-success'>In Stock</div>
                </div>
              </td>
              <td></td>
            </tr>
          )
        })}
    </>
  )
}

type WidgetProps = {
  className: string
}

export const TablesWidget4: FC<WidgetProps> = ({className}) => {
  const items: Array<IItem> = [
    {
      orderId: 'XGT-346',
      createdAt: '14 hours ago',
      customer: 'Emma Smith',
      total: 630.0,
      profit: 86.7,
      status: 'Pending',
      color: 'warning',
      products: [
        {
          name: 'Dry-fit Sports T-shirt',
          image: '/media/stock/ecommerce/211.gif',
          desc: 'Comfortable sportswear.',
          cost: 89.0,
          qty: 1,
          total: 89.0,
          onHand: 'In Stock',
        },
        {
          name: 'Bose Earbuds',
          image: '/media/stock/ecommerce/60.gif',
          desc: 'Comfortable sportswear.',
          cost: 300.0,
          qty: 1,
          total: 300.0,
          onHand: 'Low Stock',
        },
        {
          name: 'Go Pro 8',
          image: '/media/stock/ecommerce/76.gif',
          desc: 'Latest version of Go Pro.',
          cost: 500.0,
          qty: 1,
          total: 500.0,
          onHand: 'In Stock',
        },
      ],
    },
    {
      orderId: 'SKP-567',
      createdAt: '7 days ago',
      customer: 'Mikaela Collins',
      total: 590.0,
      profit: 50.0,
      color: 'success',
      status: 'Shipped',
      products: [
        {
          name: 'Dry-fit Sports T-shirt',
          image: '/media/stock/ecommerce/211.gif',
          desc: 'Comfortable sportswear.',
          cost: 89.0,
          qty: 1,
          total: 89.0,
          onHand: 'In Stock',
        },
        {
          name: 'Bose Earbuds',
          image: '/media/stock/ecommerce/60.gif',
          desc: 'Comfortable sportswear.',
          cost: 300.0,
          qty: 1,
          total: 300.0,
          onHand: 'Low Stock',
        },
        {
          name: 'Go Pro 8',
          image: '/media/stock/ecommerce/76.gif',
          desc: 'Latest version of Go Pro.',
          cost: 500.0,
          qty: 1,
          total: 500.0,
          onHand: 'In Stock',
        },
      ],
    },
    {
      orderId: 'YHD-047',
      createdAt: '15 hours ago',
      customer: 'Emma Smith',
      total: 25.0,
      profit: 4.2,
      color: 'primary',
      status: 'Confirmed',
      products: [
        {
          name: 'Go Pro 8',
          image: '/media/stock/ecommerce/76.gif',
          desc: 'Latest version of Go Pro.',
          cost: 500.0,
          qty: 1,
          total: 500.0,
          onHand: 'In Stock',
        },
      ],
    },
    {
      orderId: 'PXF-534',
      createdAt: '2 days ago',
      customer: 'Max Smith',
      total: 660.0,
      profit: 52.26,
      color: 'success',
      status: 'Shipped',
      products: [
        {
          name: 'Go Pro 8',
          image: '/media/stock/ecommerce/76.gif',
          desc: 'Latest version of Go Pro.',
          cost: 500.0,
          qty: 1,
          total: 500.0,
          onHand: 'In Stock',
        },
      ],
    },
    {
      orderId: 'SRR-678',
      createdAt: '18 hours ago	',
      customer: 'Melody Macy	',
      total: 1630.0,
      profit: 12.0,
      color: 'warning',
      status: 'Pending',
      products: [
        {
          name: 'Dry-fit Sports T-shirt',
          image: '/media/stock/ecommerce/211.gif',
          desc: 'Comfortable sportswear.',
          cost: 89.0,
          qty: 1,
          total: 89.0,
          onHand: 'In Stock',
        },
        {
          name: 'Bose Earbuds',
          image: '/media/stock/ecommerce/60.gif',
          desc: 'Comfortable sportswear.',
          cost: 300.0,
          qty: 1,
          total: 300.0,
          onHand: 'Low Stock',
        },
        {
          name: 'Go Pro 8',
          image: '/media/stock/ecommerce/76.gif',
          desc: 'Latest version of Go Pro.',
          cost: 500.0,
          qty: 1,
          total: 500.0,
          onHand: 'In Stock',
        },
      ],
    },
    {
      orderId: 'XGD-249',
      createdAt: '3 days ago	',
      customer: 'Sean Bean',
      total: 290.0,
      profit: 29.0,
      color: 'success',
      status: 'Shipped',
      products: [
        {
          name: 'Dry-fit Sports T-shirt',
          image: '/media/stock/ecommerce/211.gif',
          desc: 'Comfortable sportswear.',
          cost: 89.0,
          qty: 1,
          total: 89.0,
          onHand: 'In Stock',
        },
        {
          name: 'Bose Earbuds',
          image: '/media/stock/ecommerce/60.gif',
          desc: 'Comfortable sportswear.',
          cost: 300.0,
          qty: 1,
          total: 300.0,
          onHand: 'Low Stock',
        },
        {
          name: 'Go Pro 8',
          image: '/media/stock/ecommerce/76.gif',
          desc: 'Latest version of Go Pro.',
          cost: 500.0,
          qty: 1,
          total: 500.0,
          onHand: 'In Stock',
        },
      ],
    },
    {
      orderId: 'SKP-035',
      createdAt: '4 days ago	',
      customer: 'Brian Cox',
      total: 590.0,
      profit: 50.0,
      color: 'danger',
      status: 'Rejected',
      products: [
        {
          name: 'Go Pro 8',
          image: '/media/stock/ecommerce/76.gif',
          desc: 'Latest version of Go Pro.',
          cost: 500.0,
          qty: 1,
          total: 500.0,
          onHand: 'In Stock',
        },
      ],
    },
  ]

  return (
    <div className={`card card-flush ${className}`}>
      {/* begin::Card header */}
      <div className='card-header pt-7'>
        {/* begin::Title */}
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder text-dark'>Product Orders</span>
          <span className='text-gray-400 mt-1 fw-bold fs-6'>Avg. 57 orders per day</span>
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
              <select className='form-select form-select-transparent text-dark fs-7 lh-1 fw-bolder py-0 ps-3 w-auto bg-transparent'>
                <option value='Show All' defaultChecked>
                  Show All
                </option>
                <option value='a'>Category A</option>
                <option value='b'>Category A</option>
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
              <select className='form-select form-select-transparent text-dark fs-7 lh-1 fw-bolder py-0 ps-3 w-auto bg-transparent'>
                <option value='Show All' defaultChecked>
                  Show All
                </option>
                <option value='Shipped'>Shipped</option>
                <option value='Confirmed'>Confirmed</option>
                <option value='Rejected'>Rejected</option>
                <option value='Pending'>Pending</option>
              </select>
              {/* end::Select */}
            </div>
            {/* end::Status */}
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
          id='kt_table_widget_4_table_wrapper'
          className='dataTables_wrapper dt-bootstrap4 no-footer'
        >
          <div className='table-responsive'>
            <table
              className='table align-middle table-row-dashed fs-6 gy-3 dataTable no-footer'
              id='kt_table_widget_4_table'
            >
              {/* begin::Table head */}
              <thead>
                {/* begin::Table row */}
                <tr className='text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'>
                  <th
                    className='min-w-100px sorting_disabled'
                    rowSpan={1}
                    colSpan={1}
                    style={{width: '100px'}}
                  >
                    Order ID
                  </th>
                  <th
                    className='text-end min-w-100px sorting_disabled'
                    rowSpan={1}
                    colSpan={1}
                    style={{width: '100px'}}
                  >
                    Created
                  </th>
                  <th
                    className='text-end min-w-150px sorting_disabled'
                    rowSpan={1}
                    colSpan={1}
                    style={{width: '150px'}}
                  >
                    Customer
                  </th>
                  <th
                    className='text-end min-w-100px sorting_disabled'
                    rowSpan={1}
                    colSpan={1}
                    style={{width: '100px'}}
                  >
                    Total
                  </th>
                  <th
                    className='text-end min-w-100px sorting_disabled'
                    rowSpan={1}
                    colSpan={1}
                    style={{width: '100px'}}
                  >
                    Profit
                  </th>
                  <th
                    className='text-end min-w-50px sorting_disabled'
                    rowSpan={1}
                    colSpan={1}
                    style={{width: '93.1562px'}}
                  >
                    Status
                  </th>
                  <th
                    className='text-end sorting_disabled'
                    rowSpan={1}
                    colSpan={1}
                    style={{width: '25px'}}
                  ></th>
                </tr>
                {/* end::Table row */}
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody className='fw-bolder text-gray-600'>
                {items.map((item, index) => {
                  return <TableContent key={'item' + index} item={item} />
                })}
              </tbody>
              {/* end::Table body */}
            </table>
          </div>
        </div>
        {/* end::Table */}
      </div>
      {/* end::Card body */}
    </div>
  )
}
