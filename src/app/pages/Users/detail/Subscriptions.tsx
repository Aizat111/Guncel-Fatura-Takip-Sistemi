import {FC, useEffect, useState} from 'react'
import { Modal } from 'react-bootstrap'
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../../../../setup/hooks/redux'
import { SubItem } from '../../Profile/components/SubscriptionItem'
import { Api } from '../../Services/api'




export const Subscriptions: FC = () => {
  const {refresh} = useAppSelector((state) => state.profile)
  const [subscriptions, setSubscriptions] = useState<any>([])
  const [show, setShow] = useState(false)
  const handleShow = () =>{
    setShow(true)
  }
  const handleClose = () =>{
    setShow(false)
  }
  useEffect(() => {
    Api()
    .subscriptions.subscriptions()
    .then((res) => {
      setSubscriptions(res)
    })
  }, [refresh])
  return (
    <>
      {/* <KTCard> */}
    
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


