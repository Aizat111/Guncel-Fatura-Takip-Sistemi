/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef, useState} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import { getCSS, getCSSVariableValue } from '../../../_theme/assets/ts/_utils'
import { KTSVG } from '../../../_theme/helpers'
import { Dropdown1 } from '../../../_theme/partials'
import { DropdownDateFilter } from './Dropdowns/DropdownDateFilter'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from '../../../setup'
import { UserModel } from '../../modules/auth/models/UserModel'
import { Api } from '../../pages/Services/api'


type Props = {
  subscribeNo: string
  Title:string
}
let widgetData:any;
const ChartsWidgetInvoice: React.FC<Props> = ({subscribeNo,Title}) => {

  const chartRef = useRef<HTMLDivElement | null>(null)


  useEffect(() => {
    Api()
      .bills.getBillGraphic('?subscriberNo=' + subscribeNo)
      .then((res) => {
        prdIssueStatus(res)
       
      
            const chart = new ApexCharts(chartRef.current, getChartOptions(height))
            if (chart) {
              chart.render()
            }
        
            return () => {
              if (chart) {
                chart.destroy()
              }
            }
          
   
      
      })
      if (!chartRef.current) {
        return
      }
  
      const height = parseInt(getCSS(chartRef.current, 'height'))

  
     
  }, [])

  const prdIssueStatus = (data: any) => {

    let structuredData = []
    for (let i = 0; i < data.length; i++) {
      structuredData.push(data[i].total_amount)
    }
    widgetData = structuredData

  }

   
  return (
    <div className={`card`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        {/* begin::Title */}
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>{Title}</span>

          <span className='text-muted fw-bold fs-7'></span>
        </h3>
        
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body'>
        {/* begin::Chart */}
        <div ref={chartRef} id='kt_charts_widget_1_chart' style={{height: '350px'}} />
        {/* end::Chart */}
      </div>
      {/* end::Body */}
    </div>
  )
  }

export {ChartsWidgetInvoice}

function getChartOptions(height: number): ApexOptions {
  const labelColor = getCSSVariableValue('--bs-gray-500')
  const borderColor = getCSSVariableValue('--bs-gray-200')
  const baseColor = getCSSVariableValue('--bs-primary')
  const secondaryColor = getCSSVariableValue('--bs-gray-300')

  return {
    series: [
      {
        name: 'Net Profit',
        data: widgetData,
      },

    ],
    chart: {
      fontFamily: 'inherit',
      type: 'bar',
      height: height,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
        borderRadius: 5,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    fill: {
      opacity: 1,
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val) {
          return + val + ' ₺'
        },
      },
    },
    colors: [baseColor, secondaryColor],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  }
}
