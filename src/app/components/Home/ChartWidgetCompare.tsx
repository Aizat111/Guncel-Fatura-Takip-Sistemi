import {FC, useEffect, useRef} from 'react'

import ApexCharts, {ApexOptions} from 'apexcharts'
import { KTSVG } from '../../../_theme/helpers'

import { getCSSVariableValue } from '../../../_theme/assets/ts/_utils'
import { Dropdown2 } from '../../../_theme/partials'


type Props = {
  className: string
}

export const ChartsWidgetCompare: FC<Props> = ({className}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(chartRef.current, chartOptions())
    if (chart) {
      chart.render()
    }

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, [chartRef])

  return (
    <div className={`card card-flush ${className}`}>
      {/* begin::Header */}
      <div className='card-header pt-5'>
        {/* begin::Title */}
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder text-dark'>Fatura Kullanımı</span>
          <span className='text-gray-400 pt-2 fw-bold fs-6'>Ay içinde ne kadar kullandınız</span>
        </h3>
        {/* end::Title */}
        {/* begin::Toolbar */}
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            className='btn btn-icon btn-color-gray-400 btn-active-color-primary mt-n2 me-n2'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-overflow='true'
          >
            <KTSVG
              path='/media/icons/duotune/general/gen023.svg'
              className='svg-icon-1 svg-icon-gray-300 me-n1'
            />
          </button>
          <Dropdown2 />
          {/* end::Menu */}
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-5 ps-6'>
        <div ref={chartRef} className='min-h-auto'></div>
      </div>
      {/* end::Body */}
    </div>
  )
}

const chartOptions = (): ApexOptions => {
  const borderColor = getCSSVariableValue('--bs-border-dashed-color')

  return {
    series: [
      {
        data: [150, 120, 600],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
        distributed: true,
        barHeight: '23',
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    colors: ['#3E97FF', '#F1416C', '#50CD89'],
    xaxis: {
      categories: ['Su', 'Elektrik', 'Gaz'],
      labels: {
        formatter: function (val) {
          return val + 'TL'
        },
        style: {
          colors: getCSSVariableValue('--bs-gray-400'),
          fontSize: '14px',
          fontWeight: '600',
        },
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: getCSSVariableValue('--bs-gray-800'),
          fontSize: '14px',
          fontWeight: '600',
        },
        offsetY: 2,
        align: 'left',
      },
    },
    grid: {
      borderColor: borderColor,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      strokeDashArray: 4,
    },
  }
}
