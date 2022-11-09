import {FC, useEffect, useRef} from 'react'
import Chart from 'react-apexcharts'

import ApexCharts, {ApexOptions} from 'apexcharts'
import { bottom } from '@popperjs/core'



type Props = {
  className: string

}

export const ChartsWidgetCompare: FC<Props> = ({className}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {

  }, [])
  const chart1 = {
    labels: ['Su','Elektrik','Gaz'],
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
              1000
              <span className='fs-2'> ₺</span>
            </div>
         
          {/* <div className='fs-2hx fw-bolder'>
                  {totalCount} <span className='fs-2'>adet</span>
                </div> */}
          <div className='fs-5 fw-bold text-gray-400 mb-7'>Bu Ayın Toplam Faturası</div>
        </div>
     
        <div
      
        >
          <span className='btn btn-icon btn-light btn-active-color-primary mt-n2 me-n3  d-inline-flex '>
           
          </span>
        </div>
      </div>

      <div className='d-flex justify-content-center w-100 h-100'>
        <Chart
          options={chart1}
          series={[200,300,500]}
          // [data[0].total_issues,data[1].total_issues,data[2].total_issues]}
          type='donut'
          height={'320px'}
        />
      </div>

    </div>
</div>
  )
}


