import {FC, useEffect, useRef} from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown2} from '../..'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSSVariableValue} from '../../../assets/ts/_utils'

type Props = {
  className: string
  chartHeight: number
}

export const ChartsWidget4: FC<Props> = ({className, chartHeight}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(chartRef.current, chartOptions(chartHeight))
    if (chart) {
      chart.render()
    }

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, [chartRef, chartHeight])

  return (
    <div className={`card card-flush overflow-hidden ${className}`}>
      {/* begin::Header */}
      <div className='card-header py-5'>
        {/* begin::Title */}
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder text-dark'>Discounted Product Sales</span>
          <span className='text-gray-400 mt-1 fw-bold fs-6'>Users from all channels</span>
        </h3>
        {/* end::Title */}
        {/* begin::Toolbar */}
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            className='btn btn-icon btn-color-gray-400 btn-active-color-primary mt-n2 me-n3'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-overflow='true'
          >
            <KTSVG path='/media/icons/duotune/general/gen023.svg' className='svg-icon-1' />
          </button>
          <Dropdown2 />
          {/* end::Menu */}
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}
      {/* begin::Card body */}
      <div className='card-body d-flex justify-content-between flex-column pb-1 px-0'>
        {/* begin::Statistics */}
        <div className='px-9 mb-5'>
          {/* begin::Statistics */}
          <div className='d-flex mb-2'>
            <span className='fs-4 fw-bold text-gray-400 me-1'>$</span>
            <span className='fs-2hx fw-bolder text-gray-800 me-2 lh-1'>3,706</span>
            <span className='badge badge-success fs-6 p-2 d-flex align-items-center align-self-center'>
              <KTSVG
                path='/media/icons/duotune/arrows/arr067.svg'
                className='svg-icon-7 svg-icon-white'
              />
              2.2%
            </span>
          </div>
          {/* end::Statistics */}
          {/* begin::Description */}
          <span className='fs-6 fw-bold text-gray-400'>Total Discounted Sales This Month</span>
          {/* end::Description */}
        </div>
        {/* end::Statistics */}
        {/* begin::Chart */}
        <div ref={chartRef} className='min-h-auto ps-4 pe-6' style={{height: '300px'}}></div>
        {/* end::Chart */}
      </div>
      {/* end::Card body */}
    </div>
  )
}

const chartOptions = (chartHeight: number): ApexOptions => {
  const labelColor: string = getCSSVariableValue('--bs-gray-500')
  const borderColor: string = getCSSVariableValue('--bs-border-dashed-color')
  const baseColor: string = getCSSVariableValue('--bs-primary')
  const lightColor: string = getCSSVariableValue('--bs-primary')

  return {
    series: [
      {
        name: 'Discounted',
        data: [
          34.5, 34.5, 35, 35, 35.5, 35.5, 35, 35, 34.5, 34.5, 34.5, 34.5, 35, 35, 34.5, 35.5, 35.5,
          35.5, 35,
        ],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: chartHeight,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.7,
        stops: [0, 90, 100],
      },
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: [baseColor],
    },
    xaxis: {
      categories: [
        '',
        'Apr 02',
        'Apr 03',
        'Apr 04',
        'Apr 05',
        'Apr 06',
        'Apr 07',
        'Apr 08',
        'Apr 09',
        'Apr 10',
        'Apr 11',
        'Apr 12',
        'Apr 13',
        'Apr 14',
        'Apr 17',
        'Apr 18',
        'Apr 19',
        'Apr 21',
        '',
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tickAmount: 6,
      labels: {
        rotate: 0,
        rotateAlways: true,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
      crosshairs: {
        position: 'front',
        stroke: {
          color: baseColor,
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: false,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      max: 36.3,
      min: 33,
      tickAmount: 6,
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
        formatter: function (val) {
          return '$' + Math.floor(10 * val)
        },
      },
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
          return '$' + Math.floor(10 * val)
        },
      },
    },
    colors: [lightColor],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    markers: {
      strokeColors: [baseColor],
      strokeWidth: 3,
    },
  }
}
