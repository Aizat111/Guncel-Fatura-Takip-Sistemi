import {FC, useEffect, useState} from 'react'
import { Modal } from 'react-bootstrap'
import { ModalHeader } from '../components/ModalHeader'
import { Api } from '../Services/api'
import AddRole from './components/AddRole'
import { RoleItem } from './components/RoleItem'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../../../setup/hooks/redux'


export const Roles: FC = () => {
  const {refresh} = useAppSelector((state) => state.roles)
  const [roles, setRoles] = useState<any>([])
  const [show, setShow] = useState(false)
  const handleShow = () =>{
    setShow(true)
  }
  const handleClose = () =>{
    setShow(false)
  }
  useEffect(() => {
    Api()
    .roles.roles()
    .then((res) => {
      setRoles(res)
    })
  }, [refresh])
  return (
    <>
      {/* <KTCard> */}
      <div id='kt_project_targets_card_pane'>
        <div className='card card-flush  border-0 '>
        <div className='card-header align-items-center py-5 gap-2 gap-md-5'>
          <div className='card-title'>
            <div className='d-flex align-items-center position-relative my-1'>
            </div>
          </div>

          <div className='card-toolbar flex-row-fluid justify-content-end gap-5'>
            <div className='btn btn-primary' onClick={handleShow}>
              Yeni Rol Ekle
            </div>
          </div>
        </div>
          <div className='card-body pt-3'>
            <table className='table table-row-bordered table-row-dashed gy-4 align-middle fw-bolder' >
              <thead className='fs-7 text-gray-400 text-uppercase' style={{ position: 'sticky',top: '-15px',backgroundColor: '#fdfcfb'}}>
                <tr>
                  <th className=''>ROL ADI</th>
                  <th className=''>ROL AÇIKLAMASI</th>
                  <th></th>
                </tr>
              </thead>

              <tbody className=''>
                {
                  roles?.map((role: any) => {
                    return (
                      <RoleItem role={role} key={role.id}/>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <ModalHeader handleClose={handleClose} titleHeader={'Yeni Rol'} />
          <AddRole
            role={{ title: "",
            value: "",
            description: ""}}
            update={false}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </>
  )
}


