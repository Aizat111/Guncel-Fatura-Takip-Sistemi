import { FC } from "react"
import { KTSVG } from "../../../_theme/helpers"

type Props ={
    titleHeader: string,
    handleClose: any
}

const ModalHeader: FC<Props> = ({handleClose,titleHeader}) => {


  return (
    <div className=''>
          {/* begin::Close */}
    <div className="d-flex justify-content-end">
    <div
        className='btn btn-icon btn-sm btn-active-icon-primary '
        data-kt-users-modal-action='close'
        onClick={handleClose}
        style={{cursor: 'pointer'}}
      >
        <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
      </div>
    </div>
    
      {/* end::Close */}
      {/* begin::Modal title */}
      <h2 className='fw-bolder text-center mb-10'>{titleHeader}</h2>
      {/* end::Modal title */}

    
    </div>
  )
}

export {ModalHeader}