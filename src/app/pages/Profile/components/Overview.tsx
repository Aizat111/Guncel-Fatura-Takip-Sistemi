/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'
import {KTSVG} from '../../../../_theme/helpers'

export function Overview() {
  return (
    <>
      <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Hesap Detayı</h3>
          </div>

          <Link to='/crafted/account/settings' className='btn btn-primary align-self-center'>
            Düzenle
          </Link>
        </div>

        <div className='card-body p-9'>
          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Ad Soyad</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>Sena Yılmaz</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Address</label>

            <div className='col-lg-8 fv-row'>
              <span className='fw-bold fs-6'>Konya Selçuk</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>
              Telefon Numarası
              <i
                className='fas fa-exclamation-circle ms-1 fs-7'
                data-bs-toggle='tooltip'
                title='Phone number must be active'
              ></i>
            </label>

            <div className='col-lg-8 d-flex align-items-center'>
              <span className='fw-bolder fs-6 me-2'>05524978967</span>

              <span className='badge badge-success'>Doğrulandı</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>TC Kimlik No</label>

            <div className='col-lg-8'>
              <a href='#' className='fw-bold fs-6 text-dark text-hover-primary'>
                99408348128
              </a>
            </div>
          </div>

          {/* <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>
              Country
              <i
                className='fas fa-exclamation-circle ms-1 fs-7'
                data-bs-toggle='tooltip'
                title='Country of origination'
              ></i>
            </label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>Germany</span>
            </div>
          </div> */}

          {/* <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Communication</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>Email, Phone</span>
            </div>
          </div> */}

          {/* <div className='row mb-10'>
            <label className='col-lg-4 fw-bold text-muted'>Allow Changes</label>

            <div className='col-lg-8'>
              <span className='fw-bold fs-6'>Yes</span>
            </div>
          </div> */}

          {/* <div className='notice d-flex bg-light-warning rounded border-warning border border-dashed p-6'>
            <KTSVG
              path='icons/duotune/general/gen044.svg'
              className='svg-icon-2tx svg-icon-warning me-4'
            />
            <div className='d-flex flex-stack flex-grow-1'>
              <div className='fw-bold'>
                <h4 className='text-gray-800 fw-bolder'>We need your attention!</h4>
                <div className='fs-6 text-gray-600'>
                  Your payment was declined. To start using tools, please
                  <Link className='fw-bolder' to='/crafted/account/settings'>
                    {' '}
                    Add Payment Method
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-6'>
          {/* <ChartsWidget1 className='card-xxl-stretch mb-5 mb-xl-10' /> */}
        </div>

        <div className='col-xl-6'>
          {/* <TablesWidget1 className='card-xxl-stretch mb-5 mb-xl-10' /> */}
        </div>
      </div>

      <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-6'>
          {/* <ListsWidget5 className='card-xxl-stretch mb-5 mb-xl-10' /> */}
        </div>

        <div className='col-xl-6'>
          {/* <TablesWidget5 className='card-xxl-stretch mb-5 mb-xl-10' /> */}
        </div>
      </div>
    </>
  )
}
