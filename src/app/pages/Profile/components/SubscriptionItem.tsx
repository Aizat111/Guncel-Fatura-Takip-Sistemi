import {FC, useState} from 'react'
import {Dropdown, Modal} from 'react-bootstrap'
import {ModalHeader} from '../../components/ModalHeader'
import Swal from 'sweetalert2'
import {Api} from '../../Services/api'
import {useDispatch} from 'react-redux'
import moment from 'moment'


type Props = {
  subscription: any
}


export const SubItem: FC<Props> = ({subscription}) => {
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
        <td className='fw-bolder'>{subscription?.subscription_no}</td>
        <td className='text-gray-500'>{subscription?.value}</td>
        <td className='text-gray-500'>{moment(subscription?.createdAt).format('DD.MM.YYYY H:mm')}</td>
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
              <Dropdown.Item >
                <span className='menu-link text-danger px-3'>Sil</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
   
    </>
  )
}
