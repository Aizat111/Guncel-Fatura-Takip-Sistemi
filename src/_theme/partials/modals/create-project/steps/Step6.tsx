import {FC} from 'react'
import {KTSVG} from '../../../../helpers'

const Step6: FC = () => {
  return (
    <>
      {/* begin::Files */}
      <div data-kt-stepper-element='content'>
        {/* begin::Wrapper */}
        <div className='w-100'>
          {/* begin::Heading */}
          <div className='pb-10 pb-lg-12'>
            {/* begin::Title */}
            <h1 className='fw-bolder text-dark'>Upload Files</h1>
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
            {/* begin::Dropzone */}
            <div className='dropzone' id='kt_modal_create_project_files_upload'>
              {/* begin::Message */}
              <div className='dz-message needsclick'>
                {/* begin::Icon */}
                <KTSVG
                  path='media/icons/duotune/files/fil010.svg'
                  className='svg-icon-3hx svg-icon-primary'
                />
                {/* end::Icon */}

                {/* begin::Info */}
                <div className='ms-4'>
                  <h3 className='dfs-3 fw-bolder text-gray-900 mb-1'>
                    Drop files here or click to upload.
                  </h3>
                  <span className='fw-bold fs-4 text-muted'>Upload up to 10 files</span>
                </div>
                {/* end::Info */}
              </div>
            </div>
            {/* end::Dropzone */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='mb-8'>
            {/* begin::Label */}
            <label className='fs-6 fw-bold mb-2'>Uploaded File</label>
            {/* End::Label */}

            {/* begin::Files */}
            <div className='mh-300px scroll-y me-n7 pe-7'>
              {/* begin::File */}

              {/* end::File */}
            </div>
            {/* end::Files */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-8'>
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
                  name='target_allow'
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
      {/* end::Files */}
    </>
  )
}

export {Step6}
