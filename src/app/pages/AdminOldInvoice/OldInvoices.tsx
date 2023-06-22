import moment from 'moment'
import {FC, useEffect, useState} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import { RootState } from '../../../setup'
import {useAppSelector} from '../../../setup/hooks/redux'
import { UserModel } from '../../modules/auth/models/UserModel'
import {Api} from '../Services/api'

export const OldInvoices: FC = () => {
  const [bills, setBills] = useState<any>(null)
  const {refresh} = useAppSelector((state) => state.bills)
  const [product, setProduct] = useState('')
  const [searchKey, setSearchKey] = useState('')
  const [searchKeyClick, setSearchKeyClick] = useState('')
  const loginUser: UserModel = useSelector<RootState>(({auth}) => auth.user, shallowEqual) as UserModel
  useEffect(() => {
    let tempProduct;
    if(product != ''){
        tempProduct = '&product='+product
    }
    else{
        tempProduct=''
    }
    let tempSubscriberNo;
    if(searchKeyClick != ''){
        tempSubscriberNo = '&subscriberNo='+searchKeyClick
    }
    else{
        tempSubscriberNo=''
    }
    Api()
      .bills.bills(`?status=1`+tempProduct+tempSubscriberNo)
      .then((res) => {
        if (res.length > 0) {
          setBills(res)
        } else {
          setBills(null)
        }
      })
  }, [refresh, product,searchKeyClick])
  return (
    <>
    <div className='card-toolbar row d-flex justify-content-between'>
    <div className='d-flex align-items-center position-relative me-2 col-3'>
        <input
          type='text'
          data-kt-filemanager-table-filter='search'
          className={`form-control form-control-solid  me-2 w-100`}
          placeholder='Abone No'
          onChange={(e) => {
            setSearchKey(e.target.value)
            e.target.value == '' && setSearchKeyClick('')
          }}
          // enterKeyHint={setSearchKeyClick(searchKey)}
          onKeyDown={(event)=>{
            if(event.key=='Enter')
            {
              setSearchKeyClick(searchKey)
            }
          }}
          
        />
        <button
          type='button'
          className='btn btn-primary '
          onClick={() => {
            setSearchKeyClick(searchKey)
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-search'
            viewBox='0 0 16 16'
          >
            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
          </svg>
        </button>
      </div>
    <div className='me-3  col-2'>
            <select
              name='status'
              data-control='select2'
              data-hide-search='true'
              className='form-select form-select-sm form-select-solid w-180px h-40px '
              onChange={(e) => setProduct(e.target.value)}
            >
            
              <option value='' selected>
                Tümü
              </option>
              <option value='GAZ' >
                Gaz
              </option>
              <option value='SU' >
                Su
              </option>
              <option value='ELEKTRİK' >
                Elektrik
              </option>
            
            </select>
          </div>
    </div>
      <table className='table table-row-bordered  gy-4 align-middle fw-bolder'>
        <thead className='fs-7 text-dark text-uppercase'>
          <tr>
            <th className='min-w-100px'>Abone No</th>
            <th className='min-w-90px'>Fatura No</th>
            <th className='min-w-90px'>Fatura Türü</th>
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
                  <td>{bill.product}</td>
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
