import {FC} from 'react'

const Step4: FC = () => {
  return (
    <>
      {/* begin::Team */}
      <div data-kt-stepper-element='content'>
        {/* begin::Wrapper */}
        <div className='w-100'>
          {/* begin::Heading */}
          <div className='pb-12'>
            {/* begin::Title */}
            <h1 className='fw-bolder text-dark'>Build a Team</h1>
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
          <div className='mb-8'>
            {/* begin::Label */}
            <label className='fs-6 fw-bold mb-2'>Invite Teammates</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              type='text'
              className='form-control form-control-solid'
              placeholder='Add project memnbers by name or email..'
              name='invite_teammates'
            />
            {/* end::Input */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='mb-8'>
            {/* begin::Label */}
            <div className='fs-6 fw-bold mb-2'>Team Members</div>
            {/* end::Label */}

            {/* begin::Users */}
            <div className='mh-300px scroll-y me-n7 pe-7'>
              {/* begin::User */}

              {/* end::User */}
            </div>
            {/* end::Users */}
          </div>
          {/* end::Input group */}

          {/* begin::Notice */}
          <div className='d-flex flex-stack mb-15'>
            {/* begin::Label */}
            <div className='me-5 fw-bold'>
              <label className='fs-6'>Adding Users by Team Members</label>
              <div className='fs-7 text-muted'>
                If you need more info, please check budget planning
              </div>
            </div>
            {/* end::Label */}

            {/* begin::Switch */}
            <label className='form-check form-switch form-check-custom form-check-solid'>
              <input className='form-check-input' type='checkbox' value='' checked />
            </label>
            {/* end::Switch */}
          </div>
          {/* end::Notice */}
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Team */}
    </>
  )
}

export {Step4}
