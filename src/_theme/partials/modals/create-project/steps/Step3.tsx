import {FC} from 'react'
import {KTSVG} from '../../../../helpers'

const Step3: FC = () => {
  return (
    <>
      {/* begin::Budget */}
      <div data-kt-stepper-element='content'>
        {/* begin::Wrapper */}
        <div className='w-100'>
          {/* begin::Heading */}
          <div className='pb-10 pb-lg-12'>
            {/* begin::Title */}
            <h1 className='fw-bolder text-dark'>Budget</h1>
            {/* end::Title */}

            {/* begin::Description */}
            <div className='text-muted fw-bold fs-4'>
              If you need more info, please check
              <a href='#' className='link-primary'>
                Project Guidelines
              </a>
            </div>
            {/* end::Description */}
          </div>
          {/* end::Heading */}

          {/* begin::Input group */}
          <div className='fv-row mb-8'>
            {/* begin::Label */}
            <label className='d-flex align-items-center fs-6 fw-bold mb-2'>
              <span className='required'>Setup Budget</span>

              <i className='fas fa-exclamation-circle ms-2 fs-7'></i>
            </label>
            {/* end::Label */}

            {/* begin::Dialer */}
            <div className='position-relative w-lg-250px' id='kt_modal_create_project_budget_setup'>
              {/* begin::Decrease control */}
              <button
                type='button'
                className='btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0'
                data-kt-dialer-control='decrease'
              >
                <KTSVG path='media/icons/duotune/general/gen042.svg' className='svg-icon-1' />
              </button>
              {/* end::Decrease control */}

              {/* begin::Input control */}
              <input
                type='text'
                className='form-control form-control-solid border-0 ps-12'
                data-kt-dialer-control='input'
                placeholder='Amount'
                name='budget_setup'
                readOnly
                value='$50'
              />
              {/* end::Input control */}

              {/* begin::Increase control */}
              <button
                type='button'
                className='btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0'
                data-kt-dialer-control='increase'
              >
                <KTSVG path='media/icons/duotune/general/gen041.svg' className='svg-icon-1' />
              </button>
              {/* end::Increase control */}
            </div>
            {/* end::Dialer */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-8'>
            {/* begin::Label */}
            <label className='fs-6 fw-bold mb-2'>Budget Usage</label>
            {/* end::Label */}

            {/* begin::Row */}
            <div
              className='row g-9'
              data-kt-buttons='true'
              data-kt-buttons-target="[data-kt-button='true']"
            >
              {/* begin::Col */}
              <div className='col-md-6 col-lg-12 col-xxl-6'>
                {/* begin::Option */}
                <label
                  className='btn btn-outline btn-outline-dashed btn-outline-default active d-flex text-start p-6'
                  data-kt-button='true'
                >
                  {/* begin::Radio */}
                  <span className='form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='budget_usage'
                      value='1'
                      checked
                    />
                  </span>
                  {/* end::Radio */}

                  {/* begin::Info */}
                  <span className='ms-5'>
                    <span className='fs-4 fw-bolder text-gray-800 mb-2 d-block'>Precise Usage</span>

                    <span className='fw-bold fs-7 text-gray-600'>
                      Withdraw money to your bank account per transaction under $50,000 budget
                    </span>
                  </span>
                  {/* end::Info */}
                </label>
                {/* end::Option */}
              </div>
              {/* end::Col */}

              {/* begin::Col */}
              <div className='col-md-6 col-lg-12 col-xxl-6'>
                {/* begin::Option */}
                <label
                  className='btn btn-outline btn-outline-dashed btn-outline-default d-flex text-start p-6'
                  data-kt-button='true'
                >
                  {/* begin::Radio */}
                  <span className='form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='budget_usage'
                      value='2'
                    />
                  </span>
                  {/* end::Radio */}

                  {/* begin::Info */}
                  <span className='ms-5'>
                    <span className='fs-4 fw-bolder text-gray-800 mb-2 d-block'>Extreme Usage</span>
                    <span className='fw-bold fs-7 text-gray-600'>
                      Withdraw money to your bank account per transaction under $50,000 budget
                    </span>
                  </span>
                  {/* end::Info */}
                </label>
                {/* end::Option */}
              </div>
              {/* end::Col */}
            </div>
            {/* end::Row */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-15'>
            {/* begin::Wrapper */}
            <div className='d-flex flex-stack'>
              {/* begin::Label */}
              <div className='me-5'>
                <label className='fs-6 fw-bold'>Allow Changes in Budget</label>
                <div className='fs-7 fw-bold text-muted'>
                  If you need more info, please check budget planning
                </div>
              </div>
              {/* end::Label */}

              {/* begin::Switch */}
              <label className='form-check form-switch form-check-custom form-check-solid'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value='1'
                  name='budget_allow'
                  checked
                />
                <span className='form-check-label fw-bold text-muted'>Allowed</span>
              </label>
              {/* end::Switch */}
            </div>
            {/* end::Wrapper */}
          </div>
          {/* end::Input group */}
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Budget */}
    </>
  )
}

export {Step3}
