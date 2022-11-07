import {FC} from 'react'
import {KTSVG} from '../../../../helpers'

const Step1: FC = () => {
  return (
    <>
      {/* begin::Type */}
      <div className='current' data-kt-stepper-element='content'>
        {/* begin::Wrapper */}
        <div className='w-100'>
          {/* begin::Heading */}
          <div className='pb-7 pb-lg-12'>
            {/* begin::Title */}
            <h1 className='fw-bolder text-dark'>Project Type</h1>
            {/* end::Title */}

            {/* begin::Description */}
            <div className='text-muted fw-bold fs-4'>
              If you need more info, please check out
              <a href='#' className='link-primary fw-bolder'>
                FAQ Page
              </a>
            </div>
            {/* end::Description */}
          </div>
          {/* end::Heading */}

          {/* begin::Input group */}
          <div className='fv-row mb-15' data-kt-buttons='true'>
            {/* begin::Option */}
            <label className='btn btn-outline btn-outline-dashed btn-outline-default d-flex text-start p-6 mb-6 active'>
              {/* begin::Input */}
              <input className='btn-check' type='radio' checked name='project_type' value='1' />
              {/* end::Input */}

              {/* begin::Label */}
              <span className='d-flex'>
                {/* begin::Icon */}
                <KTSVG
                  className='svg-icon-3hx'
                  path='/media/icons/duotune/communication/com006.svg'
                />
                {/* end::Icon */}

                {/* begin::Info */}
                <span className='ms-4'>
                  <span className='fs-3 fw-bolder text-gray-900 mb-2 d-block'>
                    Personal Project
                  </span>

                  <span className='fw-bold fs-4 text-muted'>
                    If you need more info, please check it out
                  </span>
                </span>
                {/* end::Info */}
              </span>
              {/* end::Label */}
            </label>
            {/* end::Option */}

            {/* begin::Option */}
            <label className='btn btn-outline btn-outline-dashed btn-outline-default d-flex text-start p-6'>
              {/* begin::Input */}
              <input className='btn-check' type='radio' name='project_type' value='2' />
              {/* end::Input */}

              {/* begin::Label */}
              <span className='d-flex'>
                {/* begin::Icon */}
                <KTSVG className='svg-icon-3hx' path='/media/icons/duotune/general/gen002.svg' />
                {/* end::Icon */}

                {/* begin::Info */}
                <span className='ms-4'>
                  <span className='fs-3 fw-bolder text-gray-900 mb-2 d-block'>Team Project</span>

                  <span className='fw-bold fs-4 text-muted'>
                    Create corporate account to manage users
                  </span>
                </span>
                {/* end::Info */}
              </span>
              {/* end::Label */}
            </label>
            {/* end::Option */}
          </div>
          {/* end::Input group */}
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Type */}
    </>
  )
}

export {Step1}
