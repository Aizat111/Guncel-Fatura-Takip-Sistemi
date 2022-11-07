import {FC, useEffect, useRef} from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown2} from '../..'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSSVariableValue} from '../../../assets/ts/_utils'

type Props = {
  className: string
  chartHeight: number
}

export const ChartsWidget3: FC<Props> = ({className, chartHeight}) => {
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
          <span className='card-label fw-bolder text-dark'>Sales This Months</span>
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
          {/* begin::Menu 2 */}
          <Dropdown2 />
          {/* end::Menu 2 */}
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
            <span className='fs-2hx fw-bolder text-gray-800 me-2 lh-1'>14,094</span>
          </div>
          {/* end::Statistics */}
          {/* begin::Description */}
          <span className='fs-6 fw-bold text-gray-400'>Another $48,346 to Goal</span>
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
  const labelColor = getCSSVariableValue('--bs-gray-500')
  const borderColor = getCSSVariableValue('--bs-border-dashed-color')
  const baseColor = getCSSVariableValue('--bs-success')
  const lightColor = getCSSVariableValue('--bs-success')

  return {
    series: [
      {
        name: 'Sales',
        data: [18, 18, 20, 20, 18, 18, 22, 22, 20, 20, 18, 18, 20, 20, 18, 18, 20, 20, 22],
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
        'Apr 15',
        'Apr 16',
        'Apr 17',
        'Apr 18',
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
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      tickAmount: 4,
      max: 24,
      min: 10,
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
        formatter: function (val) {
          return '$' + Number(val / 10).toFixed(1) + 'K'
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
          return '$' + val + 'K'
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
