import {FC} from 'react'
import {KTSVG} from '../../../../helpers'

const Step5: FC = () => {
  return (
    <>
      {/* begin::Targets */}
      <div data-kt-stepper-element='content'>
        {/* begin::Wrapper */}
        <div className='w-100'>
          {/* begin::Heading */}
          <div className='pb-12'>
            {/* begin::Title */}
            <h1 className='fw-bolder text-dark'>Set First Target</h1>
            {/* end::Title */}

            {/* begin::Title */}
            <div className='text-muted fw-bold fs-4'>
              If you need more info, please check
              <a href='#' className='link-primary'>
                Project Guidelines
              </a>
            </div>
            {/* end::Title */}
          </div>
          {/* end::Heading */}

          {/* begin::Input group */}
          <div className='fv-row mb-8'>
            <label className='fs-6 fw-bold mb-2'>Target Title</label>
            <input
              type='text'
              className='form-control form-control-solid'
              placeholder='Enter Target Title'
              name='target_title'
            />
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='row g-9 mb-8'>
            {/* begin::Col */}
            <div className='col-md-6 fv-row'>
              <label className='required fs-6 fw-bold mb-2'>Assign</label>
              <select
                className='form-select form-select-solid'
                data-control='select2'
                data-hide-search='true'
                data-placeholder='Select a Team Member'
                name='target_assign'
              >
                <option></option>
                <option value='1'>Karina Clark</option>
                <option value='2' selected>
                  Robert Doe
                </option>
                <option value='3'>Niel Owen</option>
                <option value='4'>Olivia Wild</option>
                <option value='5'>Sean Bean</option>
              </select>
            </div>
            {/* end::Col */}

            {/* begin::Col */}
            <div className='col-md-6 fv-row'>
              <label className='required fs-6 fw-bold mb-2'>Due Date</label>
              <div className='position-relative d-flex align-items-center'>
                {/* begin::Icon */}
                <KTSVG
                  className='svg-icon-2 position-absolute mx-4'
                  path='media/icons/duotune/general/gen014.svg'
                />
                {/* end::Icon */}

                {/* begin::Datepicker */}
                <input
                  className='form-control form-control-solid ps-12'
                  placeholder='Pick date range'
                  name='target_due_date'
                />
                {/* end::Datepicker */}
              </div>
            </div>
            {/* end::Col */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-8'>
            <label className='fs-6 fw-bold mb-2'>Target Details</label>
            <textarea
              className='form-control form-control-solid'
              rows={2}
              name='target_details'
              placeholder='Type Target Details'
            >
              Experience share market at your fingertips with TICK PRO stock investment mobile
              trading app
            </textarea>
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-8'>
            <label className='required fs-6 fw-bold mb-2'>Tags</label>
            <input
              className='form-control form-control-solid'
              value='Important, Urgent'
              name='target_tags'
            />
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

          {/* begin::Input group */}
          <div className='fv-row mb-15'>
            {/* begin::Wrapper */}
            <div className='d-flex flex-stack'>
              {/* begin::Label */}
              <div className='me-5'>
                <label className='fs-6 fw-bold'>Notifications</label>
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
                    name='target_notifications[]'
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
                    name='target_notifications[]'
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
            {/* end::Wrapper */}
          </div>
          {/* end::Input group */}
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Targets */}
    </>
  )
}

export {Step5}
