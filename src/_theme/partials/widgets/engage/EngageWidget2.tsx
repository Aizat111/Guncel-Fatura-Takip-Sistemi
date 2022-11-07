import {FC, useState} from 'react'
import {toAbsoluteUrl} from '../../../helpers'
import {Main} from '../../modals/create-app/Main'

type Props = {
  className: string
  text: string
  textClass: string
  buttonText: string
  buttonClass: string
}

export const EngageWidget2: FC<Props> = ({className, text, textClass, buttonText, buttonClass}) => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <>
      <div
        className={`card bgi-position-y-bottom bgi-position-x-end bgi-no-repeat bgi-size-cover min-h-250px ${className}`}
        style={{
          backgroundPosition: '100% 100%',
          backgroundSize: '500px auto',
          backgroundImage: `url(${toAbsoluteUrl('/media/misc/city.png')})`,
        }}
      >
        {/* begin::Body */}
        <div className='card-body d-flex flex-column justify-content-center ps-lg-15'>
          {/* begin::Title */}
          <h3
            className={`${textClass} fs-2qx fw-boldest mb-4 mb-lg-8`}
            dangerouslySetInnerHTML={{__html: text}}
          ></h3>
          {/* end::Title */}

          {/* begin::Action */}
          <div className='m-0'>
            {/* eslint-disable-next-line */}
            <a
              href='#'
              className={`btn ${buttonClass} fw-bold`}
              data-bs-target='#kt_modal_create_app'
              onClick={() => {
                setShow(!show)
              }}
            >
              {buttonText}
            </a>
          </div>
          {/* begin::Action */}
        </div>
        {/* end::Body */}
      </div>
      <Main
        show={show}
        handleClose={() => {
          setShow(false)
        }}
      />
    </>
  )
}
