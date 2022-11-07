import {FC, useEffect, useRef} from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown2} from '../..'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSSVariableValue} from '../../../assets/ts/_utils'

type Props = {
  className: string
  chartHeight: number
}

export const ChartsWidget9: FC<Props> = ({className, chartHeight}) => {
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
    <div className={`card card-flush ${className}`}>
      {/* begin::Header */}
      <div className='card-header pt-5'>
        {/* begin::Title */}
        <div className='card-title d-flex flex-column'>
          {/* begin::Info */}
          <div className='d-flex align-items-center'>
            {/* begin::Currency */}
            <span className='fs-4 fw-bold text-gray-400 me-1 align-self-start'>$</span>
            {/* end::Currency */}

            {/* begin::Amount */}
            <span className='fs-2hx fw-bolder text-dark me-2 lh-1'>47,07</span>
            {/* end::Amount */}

            {/* begin::Badge */}
            <span
              className='badge badge-success fs-6 lh-1 py-1 px-2 d-flex flex-center'
              style={{height: '22px'}}
            >
              <KTSVG
                path='/media/icons/duotune/arrows/arr067.svg'
                className='svg-icon-7 svg-icon-white ms-n1'
              />
              2.2%
            </span>
            {/* end::Badge */}
          </div>
          {/* end::Info */}

          {/* begin::Subtitle */}
          <span className='d-flex align-items-center text-gray-400 pt-1 fw-bold fs-6'>
            Avg order Value
            <span
              className='ms-1'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              title=''
              data-bs-original-title='Recent Stats'
            >
              <KTSVG
                path='/media/icons/duotune/general/gen044.svg'
                className='svg-icon-2 svg-icon-primary'
              />
            </span>
          </span>
          {/* end::Subtitle */}
        </div>
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
            <KTSVG path='/media/icons/duotune/general/gen023.svg' className='svg-icon-1' />
          </button>
          <Dropdown2 />
          {/* end::Menu */}
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body d-flex align-items-end pb-6 ps-4 pe-6'>
        {/* begin::Chart */}
        <div ref={chartRef} className='w-100 min-h-auto' style={{height: '250px'}}></div>
        {/* end::Chart */}
      </div>
      {/* end::Body */}
    </div>
  )
}

const chartOptions = (chartHeight: number): ApexOptions => {
  const labelColor = getCSSVariableValue('--bs-gray-400')
  const borderColor = getCSSVariableValue('--bs-border-dashed-color')
  const baseColor = getCSSVariableValue('--bs-gray-200')
  const secondaryColor = getCSSVariableValue('--bs-primary')

  return {
    series: [
      {
        name: 'Net Profit',
        data: [21, 21, 26, 26, 31, 31, 27],
      },
      {
        name: 'Revenue',
        data: [12, 16, 16, 21, 21, 18, 18],
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
      type: 'solid',
      opacity: 1,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: ['', '06 Sep', '13 Sep', '20 Sep', '27 Sep', '30 Sep', ''],
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
      crosshairs: {
        position: 'front',
        stroke: {
          color: labelColor,
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
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
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
          return '$' + val + ' thousands'
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
    markers: {
      colors: [baseColor, secondaryColor],
      strokeColors: [getCSSVariableValue('--bs-danger'), getCSSVariableValue('--bs-warning')],
      strokeWidth: 3,
    },
  }
}
