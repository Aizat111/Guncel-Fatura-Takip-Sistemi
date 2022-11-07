import {FC, useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'

type Props = {
  className: string
  chartHeight: number
}

export const CardsWidget4: FC<Props> = ({className, chartHeight}) => {
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
      {/* begin::Header*/}
      <div className='card-header pt-5'>
        {/* begin::Title*/}
        <div className='card-title d-flex flex-column'>
          {/* begin::Amount*/}
          <span className='fs-2hx fw-bolder text-dark me-2 lh-1'>69,700</span>
          {/* end::Amount*/}

          {/* begin::Subtitle*/}
          <span className='text-gray-400 pt-1 fw-bold fs-6'>Expected Earnings This Month</span>
          {/* end::Subtitle*/}
        </div>
        {/* end::Title*/}
      </div>
      {/* end::Header*/}

      {/* begin::Card body*/}
      <div className='card-body d-flex align-items-end pt-0'>
        {/* begin::Wrapper*/}
        <div className='d-flex align-items-center flex-wrap'>
          {/* begin::Chart*/}
          <div className='d-flex me-7 me-xxl-10'>
            <div id='kt_card_widget_10_chart' className='min-h-auto'></div>
          </div>
          {/* end::Chart*/}

          {/* begin::Labels*/}
          <div className='d-flex flex-column content-justify-center flex-grow-1'>
            {/* begin::Label*/}
            <div className='d-flex fs-6 fw-bold align-items-center'>
              {/* begin::Bullet*/}
              <div className='bullet w-8px h-6px rounded-2 bg-success me-3'></div>
              {/* end::Bullet*/}

              {/* begin::Label*/}
              <div className='fs-6 fw-bold text-gray-400 flex-shrink-0'>Used Truck freight</div>
              {/* end::Label*/}

              {/* begin::Separator*/}
              <div className='separator separator-dashed min-w-10px flex-grow-1 mx-2'></div>
              {/* end::Separator*/}

              {/* begin::Stats*/}
              <div className='ms-auto fw-boldest text-gray-700 text-end'>45%</div>
              {/* end::Stats*/}
            </div>
            {/* end::Label*/}

            {/* begin::Label*/}
            <div className='d-flex fs-6 fw-bold align-items-center my-1'>
              {/* begin::Bullet*/}
              <div className='bullet w-8px h-6px rounded-2 bg-primary me-3'></div>
              {/* end::Bullet*/}

              {/* begin::Label*/}
              <div className='fs-6 fw-bold text-gray-400 flex-shrink-0'>Used Ship freight</div>
              {/* end::Label*/}

              {/* begin::Separator*/}
              <div className='separator separator-dashed min-w-10px flex-grow-1 mx-2'></div>
              {/* end::Separator*/}

              {/* begin::Stats*/}
              <div className='ms-auto fw-boldest text-gray-700 text-end'>21%</div>
              {/* end::Stats*/}
            </div>
            {/* end::Label*/}

            {/* begin::Label*/}
            <div className='d-flex fs-6 fw-bold align-items-center'>
              {/* begin::Bullet*/}
              <div className='bullet w-8px h-6px rounded-2 me-3'></div>
              {/* end::Bullet*/}

              {/* begin::Label*/}
              <div className='fs-6 fw-bold text-gray-400 flex-shrink-0'>Used Plane freight</div>
              {/* end::Label*/}

              {/* begin::Separator*/}
              <div className='separator separator-dashed min-w-10px flex-grow-1 mx-2'></div>
              {/* end::Separator*/}

              {/* begin::Stats*/}
              <div className='ms-auto fw-boldest text-gray-700 text-end'>34%</div>
              {/* end::Stats*/}
            </div>
            {/* end::Label*/}
          </div>
          {/* end::Labels*/}
        </div>
        {/* end::Wrapper*/}
      </div>
      {/* end::Card body*/}
    </div>
  )
}

const chartOptions = (chartHeight: number): ApexOptions => {
  return {
    series: [50],
    chart: {
      height: chartHeight,
      type: 'radialBar',
    },
  }
}
