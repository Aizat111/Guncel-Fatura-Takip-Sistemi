/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useState} from 'react'
import {toAbsoluteUrl} from '../../../helpers'
import {Main} from '../../modals/create-app/Main'

type Props = {
  className: string
  title: string
  image: string
  primaryLinkText: string
  secondaryLinkText: string
}

export const EngageWidget1: FC<Props> = ({
  className,
  title,
  image,
  primaryLinkText,
  secondaryLinkText,
}) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className={`card ${className}`}>
        {/* begin::Body */}
        <div className='card-body d-flex flex-column flex-center'>
          <div className='mb-2'>
            {/* begin::Item */}
            <h1
              className='fw-bold text-gray-800 text-center lh-lg'
              dangerouslySetInnerHTML={{__html: title}}
            ></h1>
            {/* end::Item */}
            {/* begin::Image */}
            <div
              className='flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center card-rounded-bottom h-175px mh-175px my-5 my-lg-12'
              style={{
                backgroundImage: `url('${toAbsoluteUrl(image)}')`,
              }}
            ></div>
            {/* end::Image */}
          </div>
          {/* begin::Links */}
          <div className='text-center'>
            <a
              className='btn btn-sm btn-primary me-2'
              onClick={() => {
                setShow(!show)
              }}
            >
              {primaryLinkText}
            </a>
            <a className='btn btn-sm btn-light' href='#'>
              {secondaryLinkText}
            </a>
          </div>
          {/* end::Links */}
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
