import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../helpers'

const Step7: FC = () => {
  return (
    <>
      {/* begin::Complete */}
      <div data-kt-stepper-element='content'>
        {/* begin::Wrapper */}
        <div className='w-100'>
          {/* begin::Heading */}
          <div className='pb-12 text-center'>
            {/* begin::Title */}
            <h1 className='fw-bolder text-dark'>Project Created!</h1>
            {/* end::Title */}

            {/* begin::Description */}
            <div className='text-muted fw-bold fs-4'>
              If you need more info, please check how to create project
            </div>
            {/* end::Description */}
          </div>
          {/* end::Heading */}

          {/* begin::Illustration */}
          <div className='text-center px-4'>
            <img
              src={toAbsoluteUrl('/media/illustrations/sketchy-1/9.png')}
              alt=''
              className='mww-100 mh-350px'
            />
          </div>
          {/* end::Illustration */}
        </div>
      </div>
      {/* end::Complete */}
    </>
  )
}

export {Step7}
