import {FC, useEffect, useRef, useState} from 'react'
import * as vis from 'vis-timeline/standalone'
import moment from 'moment'
import {toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
}

export const TimelineWidget1: FC<Props> = ({className}) => {
  const [loading, setLoading] = useState(false)
  const timelineRef1 = useRef<HTMLDivElement>(null)
  let timeline1: vis.Timeline | null = null

  // Set variables
  var now = Date.now()
  var rootImagePath = toAbsoluteUrl('/media/')

  // Build vis-timeline datasets
  var groups = [
    {
      id: 'research',
      content: 'Research',
      order: 1,
    },
    {
      id: 'qa',
      content: 'Phase 2.6 QA',
      order: 2,
    },
    {
      id: 'ui',
      content: 'UI Design',
      order: 3,
    },
    {
      id: 'dev',
      content: 'Development',
      order: 4,
    },
  ]

  var items = [
    {
      id: 1,
      group: 'research',
      start: now,
      end: moment(now).add(1.5, 'hours').format('YYYY-MM-DD HH:mm:ss'),
      content: 'Meeting',
      progress: '60%',
      color: 'primary',
      users: ['avatars/300-6.jpg', 'avatars/300-1.jpg'],
    },
    {
      id: 2,
      group: 'qa',
      start: moment(now).add(1, 'hours').format('YYYY-MM-DD HH:mm:ss'),
      end: moment(now).add(2, 'hours').format('YYYY-MM-DD HH:mm:ss'),
      content: 'Testing',
      progress: '47%',
      color: 'success',
      users: ['avatars/300-2.jpg'],
    },
    {
      id: 3,
      group: 'ui',
      start: moment(now).add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
      end: moment(now).add(2.5, 'hours').format('YYYY-MM-DD HH:mm:ss'),
      content: 'Landing page',
      progress: '55%',
      color: 'danger',
      users: ['avatars/300-5.jpg', 'avatars/300-20.jpg'],
    },
    {
      id: 4,
      group: 'dev',
      start: moment(now).add(1.5, 'hours').format('YYYY-MM-DD HH:mm:ss'),
      end: moment(now).add(3, 'hours').format('YYYY-MM-DD HH:mm:ss'),
      content: 'Products module',
      progress: '75%',
      color: 'info',
      users: ['avatars/300-23.jpg', 'avatars/300-12.jpg', 'avatars/300-9.jpg'],
    },
  ]

  // Set vis-timeline options
  var options = {
    zoomable: false,
    moveable: false,
    selectable: false,
    // More options https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
    margin: {
      item: {
        horizontal: 10,
        vertical: 35,
      },
    },

    // Remove current time line --- more info: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
    showCurrentTime: false,

    // Whitelist specified tags and attributes from template --- more info: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
    xss: {
      disabled: false,
      filterOptions: {
        whiteList: {
          div: ['class', 'style'],
          img: ['src', 'alt'],
          a: ['href', 'class'],
        },
      },
    },
    template: function (item: any) {
      // Build users group
      const users = item.users
      let userTemplate = ''
      users.forEach((user: any) => {
        userTemplate += `<div class="symbol symbol-circle symbol-25px"><img src="${
          rootImagePath + user
        }" alt="" /></div>`
      })

      return `<div class="rounded-pill bg-light-${item.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">
                    <div class="position-absolute rounded-pill d-block bg-${item.color} start-0 top-0 h-100 z-index-1" style="width: ${item.progress};"></div>
        
                    <div class="d-flex align-items-center position-relative z-index-2">
                        <div class="symbol-group symbol-hover flex-nowrap me-3">
                            ${userTemplate}
                        </div>
        
                        <a href="#" class="fw-bold text-white text-hover-dark">${item.content}</a>
                    </div>
        
                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">
                        ${item.progress}
                    </div>
                </div>        
                `
    },
  }

  useEffect(() => {
    setLoading(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timeline1 = new vis.Timeline(timelineRef1.current as HTMLElement, items, groups, options)
    timeline1.on('currentTimeTick', () => {
      // @ts-ignore
      timeline1.off('currentTimeTick')
    })
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className={`card card-flush ${className}`}>
      {/* begin::Card header */}
      <div className='card-header pt-5'>
        {/* begin::Card title */}
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder text-dark'>Team Schedule</span>
          <span className='text-gray-400 pt-2 fw-bold fs-6'>49 Acual Tasks</span>
        </h3>
        {/* end::Card title */}
      </div>
      {/* end::Card header */}
      {/* begin::Card body */}
      <div className='card-body'>
        {/* begin::Tab content */}
        <div className='tab-content'>
          {/* begin::Tab pane */}
          <div className='tab-pane blockui show active'>
            {/* begin::Timeline */}
            <div className={`${loading ? 'overlay overlay-block' : ''}`}>
              <div className={'table-responsive pb-10'}>
                <div
                  ref={timelineRef1}
                  className={`vis-timeline-custom h-350px min-w-700px -pe-none`}
                />
              </div>
              <div className={`overlay-layer card-rounded bg-white ${loading ? '' : 'd-none'}`}>
                <div className={`spinner-border text-primary`} role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              </div>
            </div>
            {/* end::Timeline */}
          </div>
          {/* end::Tab pane */}
        </div>
        {/* end::Tab content */}
      </div>
      {/* end::Card body */}
    </div>
  )
}
