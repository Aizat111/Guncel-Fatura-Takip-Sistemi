import {FC, useEffect, useRef, useState} from 'react'
import {KTSVG} from '../../../helpers'
import ApexCharts from 'apexcharts'
import {getCSSVariableValue} from '../../../assets/ts/_utils'

type Props = {
  className: string
  chartHeight: number
}

export const ChartsWidget8: FC<Props> = ({className, chartHeight}) => {
  const [tab, setTab] = useState<string>('kt_chart_widget_8_tab1')
  const chartRef1 = useRef<HTMLDivElement | null>(null)
  const chartRef2 = useRef<HTMLDivElement | null>(null)
  const data1: number[][][] = [
    [[100, 250, 30]],
    [[225, 300, 35]],
    [[300, 350, 25]],
    [[350, 350, 20]],
    [[450, 400, 25]],
    [[550, 350, 35]],
  ]

  const data2: number[][][] = [
    [[125, 300, 40]],
    [[250, 350, 35]],
    [[350, 450, 30]],
    [[450, 250, 25]],
    [[500, 500, 30]],
    [[600, 250, 28]],
  ]

  const initChart1 = () => {
    if (!chartRef1.current) {
      return
    }

    const chart1 = new ApexCharts(chartRef1.current, chartOptions(chartHeight, data1))

    if (chart1) {
      chart1.render()
    }
  }

  const initChart2 = () => {
    if (!chartRef2.current) {
      return
    }

    const chart2 = new ApexCharts(chartRef2.current, chartOptions(chartHeight, data2))

    if (chart2) {
      chart2.render()
    }
  }

  useEffect(() => {
    initChart1()
    initChart2()
  })

  return (
    <div className={`card card-flush ${className}`}>
      {/* begin::Header */}
      <div className='card-header pt-5'>
        {/* begin::Title */}
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder text-dark'>Performance Overview</span>
          <span className='text-gray-400 mt-1 fw-bold fs-6'>Users from all channels</span>
        </h3>
        {/* end::Title */}
        {/* begin::Toolbar */}
        <div className='card-toolbar'>
          <div className='nav' id='kt_chart_widget_8_tabs'>
            <div className='nav-item'>
              <div
                onClick={() => {
                  setTab('kt_chart_widget_8_tab1')
                }}
                className={`nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bolder px-4 me-1 ${
                  tab === 'kt_chart_widget_8_tab1' ? 'active' : ''
                }`}
              >
                Month
              </div>
            </div>
            <div className='nav-item'>
              <div
                onClick={() => {
                  setTab('kt_chart_widget_8_tab2')
                }}
                className={`nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bolder px-4 me-1 ${
                  tab === 'kt_chart_widget_8_tab2' ? 'active' : ''
                }`}
              >
                Week
              </div>
            </div>
          </div>
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-6'>
        {/* begin::Tab content */}
        <div className='tab-content'>
          {/* begin::Tab pane */}
          {tab === 'kt_chart_widget_8_tab1' && (
            <div className={`tab-pane fade show active`}>
              <div>
                {/* begin::Statistics */}
                <div className='mb-5'>
                  {/* begin::Statistics */}
                  <div className='d-flex mb-2'>
                    <span className='fs-1 fw-bold text-gray-400 me-1 mt-n1'>$</span>
                    <span className='fs-3x fw-bolder text-gray-800 me-2 lh-1'>18,89</span>
                    <span className='badge badge-success fs-6 p-2 d-flex align-items-center align-self-center'>
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr067.svg'
                        className='svg-icon-7 svg-icon-white ms-n1'
                      />
                      4,8%
                    </span>
                  </div>
                  {/* end::Statistics */}
                  {/* begin::Description */}
                  <span className='fs-6 fw-bold text-gray-400'>Avarage cost per iteraction</span>
                  {/* end::Description */}
                </div>
                {/* end::Statistics */}
                {/* begin::Chart */}
                <div ref={chartRef1}></div>
                {/* end::Chart */}
                {/* begin::Items */}
                <div className='d-flex flex-wrap pt-5'>
                  {/* begin::Item */}
                  <div className='d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6'>
                    {/* begin::Item */}
                    <div className='d-flex align-items-center mb-3 mb-sm-6'>
                      {/* begin::Bullet */}
                      <span className='bullet bullet-dot bg-primary me-2 h-10px w-10px'></span>
                      {/* end::Bullet */}
                      {/* begin::Label */}
                      <span className='fw-bolder text-gray-600 fs-6'>Social Campaigns</span>
                      {/* end::Label */}
                    </div>
                    {/* ed::Item */}
                    {/* begin::Item */}
                    <div className='d-flex align-items-center'>
                      {/* begin::Bullet */}
                      <span className='bullet bullet-dot bg-danger me-2 h-10px w-10px'></span>
                      {/* end::Bullet */}
                      {/* begin::Label */}
                      <span className='fw-bolder text-gray-600 fs-6'>Google Ads</span>
                      {/* end::Label */}
                    </div>
                    {/* ed::Item */}
                  </div>
                  {/* ed::Item */}
                  {/* begin::Item */}
                  <div className='d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6'>
                    {/* begin::Item */}
                    <div className='d-flex align-items-center mb-3 mb-sm-6'>
                      {/* begin::Bullet */}
                      <span className='bullet bullet-dot bg-success me-2 h-10px w-10px'></span>
                      {/* end::Bullet */}
                      {/* begin::Label */}
                      <span className='fw-bolder text-gray-600 fs-6'>Email Newsletter</span>
                      {/* end::Label */}
                    </div>
                    {/* ed::Item */}
                    {/* begin::Item */}
                    <div className='d-flex align-items-center'>
                      {/* begin::Bullet */}
                      <span className='bullet bullet-dot bg-warning me-2 h-10px w-10px'></span>
                      {/* end::Bullet */}
                      {/* begin::Label */}
                      <span className='fw-bolder text-gray-600 fs-6'>Courses</span>
                      {/* end::Label */}
                    </div>
                    {/* ed::Item */}
                  </div>
                  {/* ed::Item */}
                  {/* begin::Item */}
                  <div className='d-flex flex-column pt-sm-3 pt-6'>
                    {/* begin::Item */}
                    <div className='d-flex align-items-center mb-3 mb-sm-6'>
                      {/* begin::Bullet */}
                      <span className='bullet bullet-dot bg-info me-2 h-10px w-10px'></span>
                      {/* end::Bullet */}
                      {/* begin::Label */}
                      <span className='fw-bolder text-gray-600 fs-6'>TV Campaign</span>
                      {/* end::Label */}
                    </div>
                    {/* ed::Item */}
                    {/* begin::Item */}
                    <div className='d-flex align-items-center'>
                      {/* begin::Bullet */}
                      <span className='bullet bullet-dot bg-success me-2 h-10px w-10px'></span>
                      {/* end::Bullet */}
                      {/* begin::Label */}
                      <span className='fw-bolder text-gray-600 fs-6'>Radio</span>
                      {/* end::Label */}
                    </div>
                    {/* ed::Item */}
                  </div>
                  {/* ed::Item */}
                </div>
                {/* ed::Items */}
              </div>
            </div>
          )}
          {/* end::Tab pane */}
          {/* begin::Tab pane */}
          {tab === 'kt_chart_widget_8_tab2' && (
            <div className={`tab-pane fade show active`}>
              <div>
                {/* begin::Statistics */}
                <div className='mb-5'>
                  {/* begin::Statistics */}
                  <div className='d-flex mb-2'>
                    <span className='fs-1 fw-bold text-gray-400 me-1 mt-n1'>$</span>
                    <span className='fs-3x fw-bolder text-gray-800 me-2 lh-1'>8,55</span>
                    <span className='badge badge-success fs-6 p-2 d-flex align-items-center align-self-center'>
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr067.svg'
                        className='svg-icon-7 svg-icon-white ms-n1'
                      />
                      2.2%
                    </span>
                  </div>
                  {/* end::Statistics */}
                  {/* begin::Description */}
                  <span className='fs-6 fw-bold text-gray-400'>Avarage cost per iteraction</span>
                  {/* end::Description */}
                </div>
                {/* end::Statistics */}
                {/* begin::Chart */}
                <div ref={chartRef2} className='ms-n5 min-h-auto'></div>
                {/* end::Chart */}
                {/* begin::Items */}
                <div className='d-flex flex-wrap pt-5'>
                  {/* begin::Item */}
                  <div className='d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6'>
                    {/* begin::Item */}
                    <div className='d-flex align-items-center mb-3 mb-sm-6'>
                      {/* begin::Bullet */}
                      <span className='bullet bullet-dot bg-primary me-2 h-10px w-10px'></span>
                      {/* end::Bullet */}
                      {/* begin::Label */}
                      <span className='fw-bolder text-gray-600 fs-6'>Social Campaigns</span>
                      {/* end::Label */}
                    </div>
                    {/* ed::Item */}
                    {/* begin::Item */}
                    <div className='d-flex align-items-center'>
                      {/* begin::Bullet */}
                      <span className='bullet bullet-dot bg-danger me-2 h-10px w-10px'></span>
                      {/* end::Bullet */}
                      {/* begin::Label */}
                      <span className='fw-bolder text-gray-600 fs-6'>Google Ads</span>
                      {/* end::Label */}
                    </div>
                    {/* ed::Item */}
                  </div>
                  {/* ed::Item */}
                  {/* begin::Item */}
                  <div className='d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6'>
                    {/* begin::Item */}
                    <div className='d-flex align-items-center mb-3 mb-sm-6'>
                      {/* begin::Bullet */}
                      <span className='bullet bullet-dot bg-success me-2 h-10px w-10px'></span>
                      {/* end::Bullet */}
                      {/* begin::Label */}
                      <span className='fw-bolder text-gray-600 fs-6'>Email Newsletter</span>
                      {/* end::Label */}
                    </div>
                    {/* ed::Item */}
                    {/* begin::Item */}
                    <div className='d-flex align-items-center'>
                      {/* begin::Bullet */}
                      <span className='bullet bullet-dot bg-warning me-2 h-10px w-10px'></span>
                      {/* end::Bullet */}
                      {/* begin::Label */}
                      <span className='fw-bolder text-gray-600 fs-6'>Courses</span>
                      {/* end::Label */}
                    </div>
                    {/* ed::Item */}
                  </div>
                  {/* ed::Item */}
                  {/* begin::Item */}
                  <div className='d-flex flex-column pt-sm-3 pt-6'>
                    {/* begin::Item */}
                    <div className='d-flex align-items-center mb-3 mb-sm-6'>
                      {/* begin::Bullet */}
                      <span className='bullet bullet-dot bg-info me-2 h-10px w-10px'></span>
                      {/* end::Bullet */}
                      {/* begin::Label */}
                      <span className='fw-bolder text-gray-600 fs-6'>TV Campaign</span>
                      {/* end::Label */}
                    </div>
                    {/* ed::Item */}
                    {/* begin::Item */}
                    <div className='d-flex align-items-center'>
                      {/* begin::Bullet */}
                      <span className='bullet bullet-dot bg-success me-2 h-10px w-10px'></span>
                      {/* end::Bullet */}
                      {/* begin::Label */}
                      <span className='fw-bolder text-gray-600 fs-6'>Radio</span>
                      {/* end::Label */}
                    </div>
                    {/* ed::Item */}
                  </div>
                  {/* ed::Item */}
                </div>
                {/* ed::Items */}
              </div>
            </div>
          )}
          {/* end::Tab pane */}
        </div>
        {/* end::Tab content */}
      </div>
      {/* end::Body */}
    </div>
  )
}

const chartOptions = (chartHeight: number, data: number[][][]) => {
  const borderColor = getCSSVariableValue('--bs-border-dashed-color')

  return {
    series: [
      {
        name: 'Social Campaigns',
        data: data[0],
      },
      {
        name: 'Email Newsletter',
        data: data[1],
      },
      {
        name: 'TV Campaign',
        data: data[2],
      },
      {
        name: 'Google Ads',
        data: data[3],
      },
      {
        name: 'Courses',
        data: data[4],
      },
      {
        name: 'Radio',
        data: data[5],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'bubble',
      height: chartHeight,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bubble: {},
    },
    stroke: {
      show: false,
      width: 0,
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: 'numeric',
      tickAmount: 7,
      min: 0,
      max: 700,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: true,
        height: 0,
      },
      labels: {
        show: true,
        trim: true,
        style: {
          colors: getCSSVariableValue('--bs-gray-500'),
          fontSize: '13px',
        },
      },
    },
    yaxis: {
      tickAmount: 7,
      min: 0,
      max: 700,
      labels: {
        style: {
          colors: getCSSVariableValue('--bs-gray-500'),
          fontSize: '13px',
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      x: {
        formatter: function (val: string) {
          return 'Clicks: ' + val
        },
      },
      y: {
        formatter: function (val: string) {
          return '$' + val + 'K'
        },
      },
      z: {
        title: 'Impression: ',
      },
    },
    colors: [
      getCSSVariableValue('--bs-primary'),
      getCSSVariableValue('--bs-success'),
      getCSSVariableValue('--bs-warning'),
      getCSSVariableValue('--bs-danger'),
      getCSSVariableValue('--bs-info'),
      '#43CED7',
    ],
    fill: {
      opacity: 1,
    },
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
