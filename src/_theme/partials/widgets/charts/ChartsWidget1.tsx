import {FC, useEffect, useRef} from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown2} from '../..'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSSVariableValue} from '../../../assets/ts/_utils'

type Props = {
  className: string
  chartHeight: number
  chartColor?: string
}

export const ChartsWidget1: FC<Props> = ({className, chartHeight, chartColor}) => {
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
    <div className={`card card-flush ${className}`}>
      {/* begin::Header */}
      <div className='card-header pt-5'>
        {/* begin::Title */}
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder text-dark'>Instagram Subscribers</span>
          <span className='text-gray-400 pt-2 fw-bold fs-6'>75% activity growth</span>
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
      <div className='card-body pt-0 px-0'>
        {/* begin::Chart */}
        <div
          ref={chartRef}
          className='min-h-auto ps-4 pe-6 mb-3'
          style={{height: `${chartHeight}px`}}
        ></div>
        {/* end::Chart */}

        {/* begin::Info */}
        <div className='d-flex align-items-center px-9'>
          {/* begin::Item */}
          <div className='d-flex align-items-center me-6'>
            {/* begin::Bullet */}
            <span className='rounded-1 bg-primary me-2 h-10px w-10px'></span>
            {/* end::Bullet */}

            {/* begin::Label */}
            <span className='fw-bold fs-6 text-gray-600'>Gained</span>
            {/* end::Label */}
          </div>
          {/* ed::Item */}

          {/* begin::Item */}
          <div className='d-flex align-items-center'>
            {/* begin::Label */}
            <span className='fw-bold fs-6 text-gray-600'>Lost</span>
            {/* end::Label */}
          </div>
          {/* ed::Item */}
        </div>
        {/* ed::Info */}
      </div>
      {/* end::Body */}
    </div>
  )
}

const chartOptions = (chartHeight: number, chartColor?: string): ApexOptions => {
  const negativeColor = chartColor ? chartColor : getCSSVariableValue('--bs-success')
  const labelColor = getCSSVariableValue('--bs-gray-500')
  const borderColor = getCSSVariableValue('--bs-border-dashed-color')

  const baseColor = getCSSVariableValue('--bs-primary')
  return {
    series: [
      {
        name: 'Net Profit',
        data: [20, 30, 20, 40, 60, 75, 65, 18, 10, 5, 15, 40, 60, 18, 35, 55, 20],
      },
      {
        name: 'Revenue',
        data: [-20, -15, -5, -20, -30, -15, -10, -8, -5, -5, -10, -25, -15, -5, -10, -5, -15],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'bar',
      stacked: true,
      height: chartHeight,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        //horizontal: false,
        columnWidth: '35%',
        barHeight: '70%',
        borderRadius:  6,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'Jan 5',
        'Jan 7',
        'Jan 9',
        'Jan 11',
        'Jan 13',
        'Jan 15',
        'Jan 17',
        'Jan 19',
        'Jan 20',
        'Jan 21',
        'Jan 23',
        'Jan 24',
        'Jan 25',
        'Jan 26',
        'Jan 24',
        'Jan 28',
        'Jan 29',
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tickAmount: 10,
      labels: {
        //rotate: -45,
        //rotateAlways: true,
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
      min: -50,
      max: 80,
      tickAmount: 6,
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
        formatter: function (val) {
          return Math.floor(val) + 'K'
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
          return '$' + val + ' thousands'
        },
      },
    },
    colors: [baseColor, negativeColor],
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
