import {FC, useEffect, useState} from 'react'
import { Modal } from 'react-bootstrap'
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader'
import { shallowEqual, useSelector } from 'react-redux'
import { RootState } from '../../../../setup'
import { useAppSelector } from '../../../../setup/hooks/redux'
import { UserModel } from '../../../modules/auth/models/UserModel'
import { Api } from '../../Services/api'
import { AccountHeader } from '../AccountHeader'
import { SubItem } from './SubscriptionItem'



export const Subscriptions: FC = () => {
  const [subscriptions, setSubscriptions] = useState<any>([])
  const {refresh} = useAppSelector((state)=>state.profile)
  const loginUser: UserModel = useSelector<RootState>(({auth}) => auth.user, shallowEqual) as UserModel
  useEffect(() => {
    Api()
    .users.user(loginUser.id)
    .then((res) => {
      setSubscriptions(res.subscription)
    })
  }, [refresh])
  return (
    <>
      {/* <KTCard> */}
      <AccountHeader/>
      <div id='kt_project_targets_card_pane'>
        <div className='card card-flush  border-0 '>
     
          <div className='card-body pt-3'>
            <table className='table table-row-bordered table-row-dashed gy-4 align-middle fw-bolder' >
              <thead className='fs-7 text-gray-400 text-uppercase' style={{ position: 'sticky',top: '-15px',backgroundColor: '#fdfcfb'}}>
                <tr>
                  <th className=''>ÜYE NO</th>
                  <th className=''>TÜRÜ</th>
                  <th className=''>Oluşturulma TARİHİ</th>
                  <th></th>
                </tr>
              </thead>

              <tbody className=''>
                {
                  subscriptions?.map((sub: any) => {
                    return (
                      <SubItem subscription={sub} key={sub.subscription_no}/>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    
    </>
  )
}


