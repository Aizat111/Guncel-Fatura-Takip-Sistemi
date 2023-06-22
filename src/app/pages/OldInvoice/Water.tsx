import moment from 'moment'
import {FC, useEffect, useState} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import { RootState } from '../../../setup'
import {useAppSelector} from '../../../setup/hooks/redux'
import { UserModel } from '../../modules/auth/models/UserModel'
import {Api} from '../Services/api'

export const OldWater: FC = () => {
  const [bills, setBills] = useState<any>(null)
  const {refresh} = useAppSelector((state) => state.bills)
  const loginUser: UserModel = useSelector<RootState>(({auth}) => auth.user, shallowEqual) as UserModel
  useEffect(() => {
    Api()
      .bills.bills(`?product=SU&status=1&subscriberNo=${loginUser?.subscription[1]?.subscription_no}`)
      .then((res) => {
        if (res.length > 0) {
          setBills(res)
        } else {
          setBills(null)
        }
      })
  }, [refresh])
  return (
    <>
      <table className='table table-row-bordered  gy-4 align-middle fw-bolder'>
        <thead className='fs-7 text-dark text-uppercase'>
          <tr>
            <th className='min-w-100px'>Abone No</th>
            <th className='min-w-90px'>Fatura No</th>
            <th className='min-w-150px'>Fatura Dönemi</th>
            <th className='min-w-150px'>Ödenen Tutar</th>
          </tr>
        </thead>

        <tbody className='fs-6 scroll-y'>
          {bills != null ? (
            bills?.map((bill: any) => {
              return (
                <tr className='text-gray-600'>
                  <td>{bill.subscriberNo}</td>
                  <td>{bill.billNo}</td>
                  <td>{moment(bill.billIssueDate).format('YYYY-MM')}</td>
                  <td>{bill.billAmount}</td>
                </tr>
              )
            })
          ) : (
            <tr className='text-gray-600'>
              <td className='text-center' colSpan={4}>
                Kayıt bulunamadı
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}
