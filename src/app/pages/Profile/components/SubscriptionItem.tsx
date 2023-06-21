import {FC, useState} from 'react'
import {Dropdown, Modal} from 'react-bootstrap'
import {ModalHeader} from '../../components/ModalHeader'
import Swal from 'sweetalert2'
import {Api} from '../../Services/api'
import {useDispatch} from 'react-redux'
import moment from 'moment'
import { setRefresh } from '../reducers/ProfileSlice'


type Props = {
  subscription: any
}


export const SubItem: FC<Props> = ({subscription}) => {
  const dispatch = useDispatch()
  const DeleteSubscription= (id: any) => {
     Swal.fire({
      title: 'Rolü silmek ister misiniz?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Sil',
      cancelButtonText: 'İptal',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Api().subscriptions.deleteSubscription(id)
        dispatch(setRefresh())
        Swal.fire('Silindi!', '', 'success')
      }
    })
  }

  return (
    <>
      <tr>
        <td className='fw-bolder'>{subscription?.subscription_no}</td>
        <td className='text-gray-500'>{subscription?.value}</td>
        <td className='text-gray-500'>{moment(subscription?.createdAt).format('DD.MM.YYYY H:mm')}</td>
        <td >
          <div className='btn btn-danger w-50 m-1' onClick={()=>{DeleteSubscription(subscription.id)}}>
          Sil
          </div>
   
        </td>
      </tr>
   
    </>
  )
}
