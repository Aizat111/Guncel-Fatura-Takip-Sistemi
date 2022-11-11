import { FC } from "react"

export const Electric :FC=()=>{
return(
    <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
    <div className='card-header cursor-pointer'>
      <div className='card-title m-0'>
        <h3 className='fw-bolder m-0'>Fatura Detayı</h3>
      </div>
<div className="mt-2">
<span className='btn btn-secondary align-self-center fs-2 me-2'>
        Ödenecek Tutar: 75 ₺
      </span>
      <span className='btn btn-primary align-self-center fs-2'>
        Öde
      </span>
</div>
     
    </div>

    <div className='card-body p-9'>
      <div className='row mb-7'>
        <label className='col-lg-4 fw-bold text-muted'>Abone No</label>

        <div className='col-lg-8'>
          <span className='fw-bolder fs-6 text-dark'>1363900</span>
        </div>
      </div>

      <div className='row mb-7'>
        <label className='col-lg-4 fw-bold text-muted'>Dönem</label>

        <div className='col-lg-8 fv-row'>
          <span className='fw-bold fs-6'>202210</span>
        </div>
      </div>

      <div className='row mb-7'>
        <label className='col-lg-4 fw-bold text-muted'>
          Fatura Tarihi
          {/* <i
            className='fas fa-exclamation-circle ms-1 fs-7'
            data-bs-toggle='tooltip'
            title='Phone number must be active'
          ></i> */}
        </label>

        <div className='col-lg-8 d-flex align-items-center'>
          <span className='fw-bolder fs-6 me-2'>25.10.2022</span>

          {/* <span className='badge badge-success'>Doğrulandı</span> */}
        </div>
      </div>

      <div className='row mb-7'>
        <label className='col-lg-4 fw-bold text-muted'>Fatura No</label>

        <div className='col-lg-8'>
          <a href='#' className='fw-bold fs-6 text-dark text-hover-primary'>
           918883950
          </a>
        </div>
      </div>
      <div className='row mb-7'>
        <label className='col-lg-4 fw-bold text-muted'>Addresi</label>

        <div className='col-lg-8'>
          <a href='#' className='fw-bold fs-6 text-dark text-hover-primary'>
           Konya, Selçuk
          </a>
        </div>
      </div>
      <div className='row mb-7'>
        <label className='col-lg-4 fw-bold text-muted'>Abone Türü</label>

        <div className='col-lg-8'>
          <a href='#' className='fw-bold fs-6 text-dark text-hover-primary'>
          Mesken / Ev Apartman
          </a>
        </div>
      </div>
      <div className='row mb-7'>
        <label className='col-lg-4 fw-bold text-muted'>İlk Okuma Tarihi</label>

        <div className='col-lg-8'>
          <a href='#' className='fw-bold fs-6 text-dark text-hover-primary'>
           27.09.2022
          </a>
        </div>
      </div>
      <div className='row mb-7'>
        <label className='col-lg-4 fw-bold text-muted'>Son Okuma Tarihi</label>

        <div className='col-lg-8'>
          <a href='#' className='fw-bold fs-6 text-dark text-hover-primary'>
          25.10.2022
          </a>
        </div>
      </div>
      <div className='row mb-7'>
        <label className='col-lg-4 fw-bold text-muted'>Sayaç No</label>

        <div className='col-lg-8'>
          <a href='#' className='fw-bold fs-6 text-dark text-hover-primary'>
           10961231
          </a>
        </div>
      </div>
      <div className='row mb-7'>
        <label className='col-lg-4 fw-bold text-muted'>Okuyucu No</label>

        <div className='col-lg-8'>
          <a href='#' className='fw-bold fs-6 text-dark text-hover-primary'>
           64
          </a>
        </div>
      </div>
      <div className='row mb-7'>
        <label className='col-lg-4 fw-bold text-muted'>Okuma Kodu</label>

        <div className='col-lg-8'>
          <a href='#' className='fw-bold fs-6 text-dark text-hover-primary'>
           1
          </a>
        </div>
      </div>
      <div className='row mb-7'>
        <label className='col-lg-4 fw-bold text-muted'>İlk Endeks</label>

        <div className='col-lg-8'>
          <a href='#' className='fw-bold fs-6 text-dark text-hover-primary'>
           47
          </a>
        </div>
      </div>
      <div className='row mb-7'>
        <label className='col-lg-4 fw-bold text-muted'>Son Endeks</label>

        <div className='col-lg-8'>
          <a href='#' className='fw-bold fs-6 text-dark text-hover-primary'>
           52
          </a>
        </div>
      </div>
      <div className='row mb-7'>
        <label className='col-lg-4 fw-bold text-muted'>İlave/ İade</label>

        <div className='col-lg-8'>
          <a href='#' className='fw-bold fs-6 text-dark text-hover-primary'>
           0
          </a>
        </div>
      </div>
      <div className='row mb-7'>
        <label className='col-lg-4 fw-bold text-muted'>Sarfiyat</label>

        <div className='col-lg-8'>
          <a href='#' className='fw-bold fs-6 text-dark text-hover-primary'>
           5
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
)
}