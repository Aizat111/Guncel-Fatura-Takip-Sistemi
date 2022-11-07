import React, {useState} from 'react'
import {KTSVG} from '../../../helpers'
import {Main} from '../../../partials'

const AsideToolbar: React.FC = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className='d-flex align-items-center flex-stack'>
        <div className='me-3 flex-row-fluid'>
          <select
            className='form-select form-select-white'
            data-control='select2'
            data-placeholder='Select Project'
            data-hide-search='true'
          >
            <option value='1' defaultChecked>
              Select Project
            </option>
            <option value='2'>Good CRM App</option>
            <option value='3'>Oppo Booking Site</option>
            <option value='4'>FinOptima SaaS</option>
            <option value='5'>Degree Mobile App</option>
          </select>
        </div>

        {/* eslint-disable-next-line */}
        <button
          className='btn btn-icon btn-custom border-0 fw-bolder flex-shrink-0 ms-3'
          onClick={() => {
            setShow(true)
          }}
        >
          <KTSVG path='/media/icons/duotune/arrows/arr087.svg' className='svg-icon-2qx' />
        </button>
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

export default AsideToolbar
