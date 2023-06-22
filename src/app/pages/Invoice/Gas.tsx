import moment from 'moment'
import {FC, useEffect, useState} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {Api} from '../Services/api'
import Swal from 'sweetalert2'
import {setRefresh} from './reducers/BillSlice'
import {useAppSelector} from '../../../setup/hooks/redux'
import { RootState } from '../../../setup'
import { UserModel } from '../../modules/auth/models/UserModel'
export const Gas: FC = () => {
  const [bill, setBill] = useState<any>(null)
  const {refresh} = useAppSelector((state) => state.bills)
  const dispatch = useDispatch()
  const loginUser: UserModel = useSelector<RootState>(({auth}) => auth.user, shallowEqual) as UserModel
  useEffect(() => {
    Api()
      .bills.bills(`?product=GAZ&status=0&subscriberNo=${loginUser?.subscription[2]?.subscription_no}`)
      .then((res) => {
        if (res.length > 0) {
          setBill(res[0])
        } else {
          setBill(null)
        }
      })
  }, [refresh])

  const handleUpdate = () => {
    Api()
      .bills.payBill(bill.id)
      .then((res) => {
        Swal.fire({
          title: 'Başarılı!',
          text: 'Fatura Ödeme Talebiniz Alındı',
          icon: 'success',
          confirmButtonText: 'Tamam',
        })
        dispatch(setRefresh())
      })
  }
  return bill == null ? (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-header  border-bottom-0'>
        <div className='card-title'>
          <p className='text-center fs-5 w-100'>Mevcut Ödenememiş Faturanız Bulunmamaktadır!</p>
        </div>
      </div>
    </div>
  ) : (
    <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
      <div className='card-header cursor-pointer'>
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>Fatura Detayı</h3>
        </div>
        <div className='mt-2'>
          <span className='btn btn-secondary align-self-center fs-2 me-2'>
            Ödenecek Tutar: {bill?.billAmount} ₺
          </span>
          <span className='btn btn-primary align-self-center fs-2' onClick={handleUpdate}>
            Öde
          </span>
        </div>
      </div>

      <div className='card-body p-9'>
        <div className='row mb-7'>
          <label className='col-lg-4 fw-bold text-muted'>Abone No</label>

          <div className='col-lg-8'>
            <span className='fw-bolder fs-6 text-dark'>{bill?.subscriberNo}</span>
          </div>
        </div>

        <div className='row mb-7'>
          <label className='col-lg-4 fw-bold text-muted'>Dönem</label>

          <div className='col-lg-8 fv-row'>
            <span className='fw-bold fs-6'>{moment(bill?.billIssueDate).format('YYYYMM')}</span>
          </div>
        </div>

        <div className='row mb-7'>
          <label className='col-lg-4 fw-bold text-muted'>Adres</label>

          <div className='col-lg-8 fv-row'>
            <span className='fw-bold fs-6'>{bill.provisionCode}</span>
          </div>
        </div>

        <div className='row mb-7'>
          <label className='col-lg-4 fw-bold text-muted'>Fatura Tarihi</label>

          <div className='col-lg-8 d-flex align-items-center'>
            <span className='fw-bolder fs-6 me-2'>
              {moment(bill?.billIssueDate).format('DD.MM.YYYY')}
            </span>

            {/* <span className='badge badge-success'>Doğrulandı</span> */}
          </div>
        </div>

        <div className='row mb-7'>
          <label className='col-lg-4 fw-bold text-muted'>Fatura No</label>

          <div className='col-lg-8'>
            <span className='fw-bold fs-6 text-dark '>{bill?.billNo}</span>
          </div>
        </div>
        <div className='row mb-7'>
          <label className='col-lg-4 fw-bold text-muted'>Son Ödeme Tarihi</label>

          <div className='col-lg-8'>
            <span className='fw-bold fs-6 text-dark'>
              {moment(bill?.billDueDate).format('DD.MM.YYYY')}
            </span>
          </div>
        </div>
        <div className='row mb-7'>
          <label className='col-lg-4 fw-bold text-muted'>Abone Türü</label>

          <div className='col-lg-8'>
            <span className='fw-bold fs-6 text-dark '>
            {bill.channelCode}
            </span>
          </div>
        </div>
        <div className='row mb-7'>
          <label className='col-lg-4 fw-bold text-muted'>İlk Okuma Tarihi</label>

          <div className='col-lg-8'>
            <span className='fw-bold fs-6 text-dark'>
        {bill.agentCode}
            </span>
          </div>
        </div>
        <div className='row mb-7'>
          <label className='col-lg-4 fw-bold text-muted'>Son Okuma Tarihi</label>

          <div className='col-lg-8'>
          <span className='fw-bold fs-6 text-dark'>
        {bill.institution}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
