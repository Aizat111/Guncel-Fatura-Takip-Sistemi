import {FC, useEffect, useRef} from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown2} from '../..'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSSVariableValue} from '../../../assets/ts/_utils'

type Props = {
  color: string
  className: string
  chartHeight: string
  chartColor: string
}

export const CardsWidget1: FC<Props> = ({className, color, chartColor, chartHeight}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(chartRef.current, chartOptions(chartHeight, chartColor))
    if (chart) {
      chart.render()
    }

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, [chartRef, chartHeight, chartColor])

  return (
    <div className={`card card-flush border-0 ${className}`} style={{backgroundColor: color}}>
      {/* begin::Header */}
      <div className='card-header pt-2'>
        {/* begin::Title */}
        <h3 className='card-title'>
          <span className='text-white fs-3 fw-bolder me-2'>Facebook Campaign</span>
          <span className='badge badge-success'>Active</span>
        </h3>
        {/* end::Title */}
        {/* begin::Toolbar */}
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            className='btn btn-icon bg-white bg-opacity-10 btn-color-white btn-active-success w-25px h-25px'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-overflow='true'
          >
            <KTSVG path='/media/icons/duotune/arrows/arr001.svg' className='svg-icon-5' />
          </button>
          <Dropdown2 />
          {/* end::Menu */}
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body d-flex justify-content-between flex-column pt-1 px-0 pb-0'>
        {/* begin::Wrapper */}
        <div className='d-flex flex-wrap px-9 mb-5'>
          {/* begin::Stat */}
          <div className='rounded min-w-125px py-3 px-4 my-1 me-6' style={{border: '1px'}}>
            {/* begin::Number */}
            <div className='d-flex align-items-center'>
              <div
                className='text-white fs-2 fw-bolder counted'
                data-kt-countup='true'
                data-kt-countup-value='4368'
                data-kt-countup-prefix='$'
              >
                $4,368
              </div>
            </div>
            {/* end::Number */}
            {/* begin::Label */}
            <div className='fw-bold fs-6 text-white opacity-50'>New Followers</div>
            {/* end::Label */}
          </div>
          {/* end::Stat */}
          {/* begin::Stat */}
          <div className='rounded min-w-125px py-3 px-4 my-1' style={{border: '1px'}}>
            {/* begin::Number */}
            <div className='d-flex align-items-center'>
              <div
                className='text-white fs-2 fw-bolder counted'
                data-kt-countup='true'
                data-kt-countup-value='120,000'
              >
                120,000
              </div>
            </div>
            {/* end::Number */}
            {/* begin::Label */}
            <div className='fw-bold fs-6 text-white opacity-50'>Followers Goal</div>
            {/* end::Label */}
          </div>
          {/* end::Stat */}
        </div>
        {/* end::Wrapper */}
        {/* begin::Chart */}
        <div ref={chartRef}></div>
        {/* end::Chart */}
      </div>
      {/* end::Body */}
    </div>
  )
}

const chartOptions = (chartHeight: string, chartColor: string): ApexOptions => {
  const labelColor = getCSSVariableValue('--bs-gray-500')
  const baseColor = /^#[0-9A-F]{6}$/i.test(chartColor)
    ? chartColor
    : getCSSVariableValue('--bs-' + chartColor)
  const secondaryColor = getCSSVariableValue('--bs-gray-300')

  return {
    series: [
      {
        name: 'Net Profit',
        data: [30, 75, 55, 45, 30, 60, 75, 50],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'bar',
      height: chartHeight,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '35%',
        borderRadius: 6,
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
      width: 4,
      colors: ['transparent'],
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
      crosshairs: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    fill: {
      type: 'solid',
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
      x: {
        formatter: function (val) {
          return 'Impression: ' + val
        },
      },
      y: {
        formatter: function (val) {
          return '$' + val + ' revenue'
        },
      },
    },
    colors: [baseColor, secondaryColor],
    grid: {
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 10,
        left: 25,
        right: 25,
      },
    },
  }
}
