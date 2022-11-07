import {FC, useEffect, useRef} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown2} from '../..'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSSVariableValue} from '../../../assets/ts/_utils'
import {Social} from '../../../helpers/data/social'

type Props = {
  clasName: string
  chartHeight: number
  chartColor: string
  data: Array<Social>
}

export const ChartsWidget2: FC<Props> = ({clasName, chartHeight, chartColor, data}) => {
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
    <div className={`card card-flush ${clasName}`}>
      {/* begin::Header */}
      <div className='card-header pt-5 mb-7'>
        {/* begin::Title */}
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder text-dark'>Notable Channels</span>
          <span className='text-gray-400 mt-1 fw-bold fs-6'>Social networks overview</span>
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
      {/* begin::Body */}
      <div className='card-body d-flex justify-content-between flex-column p-0'>
        {/* begin::Items */}
        <div className='mb-5 px-9'>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <div className='d-flex flex-stack'>
                  {/* begin::Section */}
                  <div className='d-flex align-items-center me-3'>
                    {/* begin::Icon */}
                    <img src={toAbsoluteUrl(item.image)} className='me-3 w-30px' alt='' />
                    {/* end::Icon */}
                    {/* begin::Section */}
                    <div className='flex-grow-1'>
                      {/* eslint-disable-next-line */}
                      <a href='#' className='text-gray-800 text-hover-primary fs-5 fw-bolder lh-0'>
                        {item.title}
                      </a>
                      <span className='text-gray-400 fw-bold d-block fs-6'>{item.text}</span>
                    </div>
                    {/* end::Section */}
                  </div>
                  {/* end::Section */}
                  {/* begin::Statistics */}
                  <div className='d-flex align-items-center w-100 mw-125px'>
                    {/* begin::Progress */}
                    <div className='progress h-6px w-100 me-2 bg-light-success'>
                      <div
                        className='progress-bar bg-success'
                        style={{width: `${item.progress.value}%`}}
                      ></div>
                    </div>
                    {/* end::Progress */}
                    {/* begin::Value */}
                    <span className='text-gray-400 fw-bold'>{item.progress.value}%</span>
                    {/* end::Value */}
                  </div>
                  {/* end::Statistics */}
                </div>
                <div className='separator separator-dashed my-4'></div>
              </div>
            )
          })}
        </div>
        {/* end::Items */}
        {/* begin::Chart */}
        <div
          ref={chartRef}
          className='charts-widget-2 card-rounded-bottom'
          style={{height: chartHeight}}
        ></div>
        {/* end::Chart */}
      </div>
      {/* end::Body */}
    </div>
  )
}

const chartOptions = (chartHeight: number, chartColor: string): ApexOptions => {
  const labelColor = getCSSVariableValue('--bs-gray-800')
  const strokeColor = getCSSVariableValue('--bs-border-dashed-color')
  const baseColor = getCSSVariableValue('--bs-' + chartColor)
  const lightColor = getCSSVariableValue('--bs-light-' + chartColor)

  return {
    series: [
      {
        name: 'Net Profit',
        data: [15, 15, 45, 45, 25, 25, 55, 55, 20, 20, 37],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: chartHeight,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
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
      show: true,
      width: 3,
      colors: [baseColor],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
        position: 'front',
        stroke: {
          color: strokeColor,
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
      min: 0,
      max: 60,
      labels: {
        show: false,
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
    colors: [lightColor],
    markers: {
      colors: [lightColor],
      strokeColors: [baseColor],
      strokeWidth: 3,
    },
  }
}
