import React, {FC} from 'react'

const Lists: FC = () => {
  return (
    <>
      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        <div className='col-xl-4'>{/* <ListsWidget1 className='card-xl-stretch mb-xl-8' /> */}</div>
        <div className='col-xl-4'>{/* <ListsWidget2 className='card-xl-stretch mb-xl-8' /> */}</div>
        <div className='col-xl-4'>
          {/* <ListsWidget3 className='card-xl-stretch mb-5 mb-xl-8' /> */}
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        <div className='col-xl-4'>{/* <ListsWidget4 className='card-xl-stretch mb-xl-8' /> */}</div>
        <div className='col-xl-4'>{/* <ListsWidget5 className='card-xl-stretch mb-xl-8' /> */}</div>
        <div className='col-xl-4'>
          {/* <ListsWidget6 className='card-xl-stretch mb-5 mb-xl-8' /> */}
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        <div className='col-xl-6'>{/* <ListsWidget7 className='card-xl-stretch mb-xl-8' /> */}</div>
        <div className='col-xl-6'>
          {/* <ListsWidget8 className='card-xl-stretch mb-5 mb-xl-8' /> */}
        </div>
      </div>
      {/* end::Row */}
    </>
  )
}

export {Lists}
