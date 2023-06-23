import {FC, useEffect, useRef, useState} from 'react'
import Chart from 'react-apexcharts'

import ApexCharts, {ApexOptions} from 'apexcharts'
import { bottom } from '@popperjs/core'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from '../../../setup'
import { UserModel } from '../../modules/auth/models/UserModel'
import { Api } from '../../pages/Services/api'



type Props = {
  className: string

}

export const ChartsWidgetCompare: FC<Props> = ({className}) => {
  const [widgetLabels, setWidgetLabels] = useState<any>([])
  const [widgetData, setWidgetData] = useState<any>([])
  const [totalCount, setTotalCount] = useState(0)
  const chartRef = useRef<HTMLDivElement | null>(null)
  const [statistics, setStatistics] = useState<any>()
  const loginUser: UserModel = useSelector<RootState>(
    ({auth}) => auth.user,
    shallowEqual
  ) as UserModel
  useEffect(() => {
    let subscriberNo = ''
    loginUser?.subscription?.map((sub) => {
      subscriberNo += '&subscriberNo=' + sub?.subscription_no
    })
    Api()
      .bills.getBillStatistic('?status=0' + subscriberNo)
      .then((res) => {
        prdIssueStatus(res)
      })
  }, [])

  const prdIssueStatus = (data: any) => {
    let total = 0
    let label = []
    let structuredData = []
    for (let i = 0; i < data.length; i++) {
      total = total + data[i].total_amount
      label.push(data[i].product)
      structuredData.push(data[i].total_amount)
    }
    setWidgetData(structuredData)
    setWidgetLabels(label)
    setTotalCount(total)
  }
  const chart1 = {
    labels: widgetLabels,
    dataLabels: {
      enabled: true,
  
    },
    fill:{
      colors:['#4fc9da', '#e8c445', '#b8d935']
    },
    colors:['#4fc9da', '#e8c445', '#b8d935'],
    legend: {
      show: true,
      position:  bottom,
      harizontalAlign: 'center',
      fontSize: '15rem',
      floating: false,
      itemMargin: {
        horizontal: 5,
        vertical: 0,
      },
    },

    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val: any) {
          return val.toLocaleString() + 'TL'
        },
      },
    },
  }
  return (
    <div className='card h-xl-100 overflow-hidden' style={{overflow:'hidden'}}>
    <div className='card-body p-5 overflow-hidden'>
      <div className='w-100 d-flex justify-content-between'>
    
        <div>
     
            <div className='fs-2hx fw-bolder'>
             {totalCount}
              <span className='fs-2'> ₺</span>
            </div>
         
          {/* <div className='fs-2hx fw-bolder'>
                  {totalCount} <span className='fs-2'>adet</span>
                </div> */}
          <div className='fs-5 fw-bold text-gray-400 mb-7'>Bu Ayın Toplam Borcu</div>
        </div>
     
      
      </div>

      <div className='d-flex justify-content-center w-100 h-100'>
        <Chart
          options={chart1}
          series={widgetData}
          // [data[0].total_issues,data[1].total_issues,data[2].total_issues]}
          type='donut'
          height={'320px'}
        />
      </div>

    </div>
</div>
  )
}


