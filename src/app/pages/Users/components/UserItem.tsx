import {FC, useState} from 'react'
import {KTSVG} from '../../../../_theme/helpers'
import {Dropdown, Modal} from 'react-bootstrap'
import {ModalHeader} from '../../components/ModalHeader'
import { AddUser } from './AddUser'
import Swal from 'sweetalert2'
import { Api } from '../../Services/api'
import { useDispatch } from 'react-redux'
import { setRefresh } from '../reducers/UserSlice'

// import swal from 'sweetalert'

type Props = {
  user: any
}



export const UserItem: FC<Props> = ({user}) => {
 const dispatch = useDispatch()
  const deleteUser = (id: any) => {
    Swal.fire({
      title: 'Kullanıcıyı silmek ister misiniz?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Sil',
      cancelButtonText : 'İptal'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Api().users.deleteUser(id).then((res) => {
          if(res.success){
            Swal.fire(res.message, '', 'success')
            dispatch(setRefresh())
          }
        })
      
       
      }
    })}

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
        <td className='fw-bold'>
         {user?.firstname} {user?.lastname}
        </td>
        <td className='text-gray-500'>{user?.email}</td>
        <td className='text-gray-500'>{user?.phone_number}</td>
        <td className='text-gray-500'>{user?.tc}</td>
        <td className='text-gray-500'>{user?.address}</td>
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
              <Dropdown.Item
              onClick={()=>deleteUser(user.id)}
              >
                <span className='menu-link text-danger px-3'>Sil</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Body>
          <ModalHeader handleClose={handleClose} titleHeader={'Düzenle'} />
          <AddUser user={user} update={true} handleClose={handleClose}/>
        </Modal.Body>
      </Modal>
    </>
  )
}