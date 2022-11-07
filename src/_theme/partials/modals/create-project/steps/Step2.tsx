import {FC} from 'react'
import {KTSVG} from '../../../../helpers'

const Step2: FC = () => {
  return (
    <>
      {/* begin::Settings */}
      <div data-kt-stepper-element='content'>
        {/* begin::Wrapper */}
        <div className='w-100'>
          {/* begin::Heading */}
          <div className='pb-12'>
            {/* begin::Title */}
            <h1 className='fw-bolder text-dark'>Project Settings</h1>
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
            <div className='dropzone' id='kt_modal_create_project_settings_logo'>
              {/* begin::Message */}
              <div className='dz-message needsclick'>
                {/* begin::Icon */}
                <KTSVG
                  className='svg-icon-3hx svg-icon-primary'
                  path='assets/icons/duotune/files/fil010.svg'
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
          <div className='fv-row mb-8'>
            {/* begin::Label */}
            <label className='required fs-6 fw-bold mb-2'>Customer</label>
            {/* end::Label */}

            {/* begin::Input */}
            <select
              className='form-select form-select-solid'
              data-control='select2'
              data-hide-search='true'
              data-placeholder='Select...'
              name='settings_customer'
            >
              <option></option>
              <option value='1'>Keenthemes</option>
              <option value='2'>CRM App</option>
            </select>
            {/* end::Input */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-8'>
            {/* begin::Label */}
            <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
              <span className='required'>Project Name</span>
              <i
                className='fas fa-exclamation-circle ms-2 fs-7'
                data-bs-toggle='tooltip'
                title='Specify project name'
              ></i>
            </label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              type='text'
              className='form-control form-control-solid'
              placeholder='Enter Project Name'
              value='StockPro Mobile App'
              name='settings_name'
            />
            {/* end::Input */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-8'>
            {/* begin::Label */}
            <label className='required fs-6 fw-bold mb-2'>Project Description</label>
            {/* end::Label */}

            {/* begin::Input */}
            <textarea
              className='form-control form-control-solid'
              rows={3}
              placeholder='Enter Project Description'
              name='settings_description'
            >
              Experience share market at your fingertips with TICK PRO stock investment mobile
              trading app
            </textarea>
            {/* end::Input */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-8'>
            {/* begin::Label */}
            <label className='required fs-6 fw-bold mb-2'>Release Date</label>
            {/* end::Label */}

            {/* begin::Wrapper */}
            <div className='position-relative d-flex align-items-center'>
              {/* begin::Icon */}
              <KTSVG
                className='svg-icon-2 position-absolute mx-4'
                path='icons/duotune/general/gen014.svg'
              />
              {/* end::Icon */}

              {/* begin::Input */}
              <input
                className='form-control form-control-solid ps-12'
                placeholder='Pick date range'
                name='settings_release_date'
              />
              {/* end::Input */}
            </div>
            {/* end::Wrapper */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-15'>
            {/* begin::Wrapper */}
            <div className='d-flex flex-stack'>
              {/* begin::Label */}
              <div className='me-5'>
                <label className='required fs-6 fw-bold'>Notifications</label>
                <div className='fs-7 fw-bold text-muted'>Allow Notifications by Phone or Email</div>
              </div>
              {/* end::Label */}

              {/* begin::Checkboxes */}
              <div className='d-flex'>
                {/* begin::Checkbox */}
                <label className='form-check form-check-custom form-check-solid me-10'>
                  {/* begin::Input */}
                  <input
                    className='form-check-input h-20px w-20px'
                    type='checkbox'
                    value='email'
                    name='settings_notifications[]'
                  />
                  {/* end::Input */}

                  {/* begin::Label */}
                  <span className='form-check-label fw-bold'>Email</span>
                  {/* end::Label */}
                </label>
                {/* end::Checkbox */}

                {/* begin::Checkbox */}
                <label className='form-check form-check-custom form-check-solid'>
                  {/* begin::Input */}
                  <input
                    className='form-check-input h-20px w-20px'
                    type='checkbox'
                    value='phone'
                    checked
                    name='settings_notifications[]'
                  />
                  {/* end::Input */}

                  {/* begin::Label */}
                  <span className='form-check-label fw-bold'>Phone</span>
                  {/* end::Label */}
                </label>
                {/* end::Checkbox */}
              </div>
              {/* end::Checkboxes */}
            </div>
            {/* begin::Wrapper */}
          </div>
          {/* end::Input group */}
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Settings */}
    </>
  )
}

export {Step2}
