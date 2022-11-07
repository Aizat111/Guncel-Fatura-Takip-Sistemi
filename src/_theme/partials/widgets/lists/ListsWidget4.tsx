/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {KTSVG} from '../../../helpers'

import {Dropdown2} from '../..'

type Props = {
  className: string
}

const slides = [
  [
    {
      number: '6.3k',
      desc: 'Likes',
      value: '65',
    },
    {
      number: '2.1k',
      desc: 'Comments',
      value: '45',
    },
    {
      number: '650',
      desc: 'Shares',
      value: '85',
    },
  ],
]

export const ListsWidget4: FC<Props> = ({className}) => {
  return (
    <div className={`card card-flush ${className}`}>
      {/* begin::Header */}
      <div className='card-header pt-5'>
        {/* begin::Title */}
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder text-dark'>Key Statistics</span>
          <span className='text-gray-400 mt-1 fw-bold fs-6'>Social activities overview</span>
        </h3>
        {/* end::Title */}

        {/* begin::Toolbar */}
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            className='btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-overflow='true'
          >
            <KTSVG path='/media/icons/duotune/general/gen023.svg' className='svg-icon-1' />
          </button>
          <Dropdown2 />
          {/* end::Menu */}
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body pt-9 pb-5'>
        {/* begin::Slider */}
        <div className='tns'>
          {/* begin::Slider wrapper */}
          <div>
            {slides.map((slide, i) => {
              return (
                <div className='mb-3' key={`key1-${i}`}>
                  {slide.map((item, j) => {
                    return (
                      <div key={`key2-${j}`}>
                        <div className='d-flex flex-stack'>
                          {/* begin::Section */}
                          <div className='m-0'>
                            <span className='text-gray-800 fw-bolder d-block fs-2hx lh-1'>
                              {item.number}
                            </span>

                            <span className='text-gray-400 fw-bold fs-6'>
                              Avarage <br /> {item.desc}
                            </span>
                          </div>
                          {/* end::Section */}

                          {/* begin::Statistics */}
                          <div className='d-flex flex-column align-items-end w-100 mw-250px overflow-hidden'>
                            {/* begin::Select */}
                            <div className='mb-2'>
                              <select className='form-select form-select-transparent p-0 w-150px me-n5'>
                                <option value='1' defaultChecked>
                                  Jul 22 - Aug 22
                                </option>
                                <option value='2'>Jul 24 - Aug 24</option>
                                <option value='3'>Jul 26 - Aug 29</option>
                              </select>
                            </div>
                            {/* end::Select */}

                            {/* begin::Progress */}
                            <div className='progress h-6px w-100 bg-light'>
                              <div
                                className='progress-bar bg-warning'
                                role='progressbar'
                                style={{width: `${item.value}%`}}
                              ></div>
                            </div>
                            {/* end::Progress */}
                          </div>
                          {/* end::Statistics */}
                        </div>
                        <div className='separator separator-dashed my-5'></div>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
          {/* end::Slider wrapper */}
        </div>
        {/* end::Slider wrapper */}
      </div>
      {/* end::Body */}
    </div>
  )
}
