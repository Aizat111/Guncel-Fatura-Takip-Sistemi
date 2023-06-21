import {FC, useState} from 'react'
import {Dropdown, Modal} from 'react-bootstrap'
import {ModalHeader} from '../../components/ModalHeader'
import Swal from 'sweetalert2'
import AddRole from './AddRole'
import {Api} from '../../Services/api'
import {useDispatch} from 'react-redux'
import {setRefresh} from '../reducers/RoleSlice'

type Props = {
  role: any
}


export const RoleItem: FC<Props> = ({role}) => {
  const dispatch = useDispatch()
  const DeleteRole = (id: any) => {
     Swal.fire({
      title: 'Rolü silmek ister misiniz?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Sil',
      cancelButtonText: 'İptal',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Api().roles.deleteRole(id)
        dispatch(setRefresh())
        Swal.fire('Silindi!', '', 'success')
      }
    })
  }

  const [showModal, setShowmodal] = useState(false)
  const handleClose = () => {
    setShowmodal(false)
  }
  const handleShow = () => {
    setShowmodal(true)
  }

  return (
    <>
      <tr>
        <td className='fw-bolder'>{role?.value}</td>
        <td className='text-gray-500'>{role?.description}</td>
        <td className='text-end' data-kt-filemanager-table=''>
          <Dropdown>
            <Dropdown.Toggle
              className='btn btn-sm btn-light btn-active-light-primary me-2'
              id='dropdown-basic'
            ></Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={handleShow}>
                {' '}
                <span className='menu-link px-3'>Düzenle</span>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => DeleteRole(role.id)}>
                <span className='menu-link text-danger px-3'>Sil</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Body>
          <ModalHeader handleClose={handleClose} titleHeader={'Düzenle'} />
          <AddRole role={role} handleClose={handleClose} update={true} />
        </Modal.Body>
      </Modal>
    </>
  )
}
