import {FC, useEffect, useRef} from 'react'
import {KTSVG} from '../../../helpers'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSSVariableValue} from '../../../assets/ts/_utils'

type Props = {
  className: string
  chartHeight: string
}

export const CardsWidget6: FC<Props> = ({className, chartHeight}) => {
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
            <span className='fs-2hx fw-bolder text-dark me-2 lh-1'>2,420</span>
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
              2.6%
            </span>
            {/* end::Badge */}
          </div>
          {/* end::Info */}
          {/* begin::Subtitle */}
          <span className='text-gray-400 pt-1 fw-bold fs-6'>Average Daily Sales</span>
          {/* end::Subtitle */}
        </div>
        {/* end::Title */}
      </div>
      {/* end::Header */}
      {/* begin::Card body */}
      <div className='card-body d-flex align-items-end px-0 pb-0'>
        {/* begin::Chart */}
        <div ref={chartRef} className='w-100'></div>
        {/* end::Chart */}
      </div>
      {/* end::Card body */}
    </div>
  )
}

const chartOptions = (chartHeight: string): ApexOptions => {
  var labelColor = getCSSVariableValue('--bs-gray-500')
  var borderColor = getCSSVariableValue('--bs-border-dashed-color')
  var baseColor = getCSSVariableValue('--bs-primary')
  var secondaryColor = getCSSVariableValue('--bs-gray-300')

  return {
    series: [
      {
        name: 'Sales',
        data: [30, 60, 53, 45, 60, 75, 53],
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
        columnWidth: '55%',
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
      width: 9,
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
          return 'Impressions: ' + val
        },
      },
      y: {
        formatter: function (val) {
          return '$' + val + 'K'
        },
      },
    },
    colors: [baseColor, secondaryColor],
    grid: {
      padding: {
        left: 10,
        right: 10,
      },
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
