import {FC, useEffect, useState} from 'react'
import {Modal} from 'react-bootstrap'
import {useAppSelector} from '../../../setup/hooks/redux'
import {Registration} from '../../modules/auth/components/Registration'
import {ModalHeader} from '../components/ModalHeader'
import {Api} from '../Services/api'
import {AddUser} from './components/AddUser'
import {UserItem} from './components/UserItem'

export const Users: FC = () => {
  const [users, setUsers] = useState<any>([])
  const [show, setShow] = useState(false)
  const {refresh} = useAppSelector((state) => state.users)
  const handleShow = () => {
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }
  useEffect(() => {
    console.log(refresh)
    Api()
      .users.users()
      .then((res) => {
        setUsers(res)
      })
  }, [refresh])
  return (
    <>
      {/* <KTCard> */}
      <div id='kt_project_targets_card_pane'>
        <div className='card card-flush  border-0 '>
          <div className='card-header align-items-center py-5 gap-2 gap-md-5'>
            <div className='card-title'>
              <div className='d-flex align-items-center position-relative my-1'></div>
            </div>

            <div className='card-toolbar flex-row-fluid justify-content-end gap-5'>
              <div className='btn btn-primary' onClick={handleShow}>
                Yeni Kullanıcı Ekle
              </div>
            </div>
          </div>
          <div className='card-body pt-3'>
            <table className='table table-row-bordered table-row-dashed gy-4 align-middle fw-bolder'>
              <thead
                className='fs-7 text-gray-400 text-uppercase'
                style={{position: 'sticky', top: '-15px', backgroundColor: '#fdfcfb'}}
              >
                <tr>
                  <th className=''>AD SOYAD</th>
                  <th className=''>E-POSTA</th>
                  <th className=''>TEL. NO</th>
                  <th className=''>TC NUMARASI</th>
                  <th className=''>ADRES</th>
                  <th></th>
                </tr>
              </thead>

              <tbody className=''>
                {users?.map((user: any) => {
                  return <UserItem user={user} key={user.id}/>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <ModalHeader handleClose={handleClose} titleHeader={'Yeni Kullanıcı'} />
          <AddUser
            user={{
              firstname: '',
              lastname: '',
              email: '',
              password: '',
              address: '',
              tc: '',
              phone_number: '',
            }}
            update={false}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </>
  )
}
